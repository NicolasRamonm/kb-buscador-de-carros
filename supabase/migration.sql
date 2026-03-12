-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  full_name TEXT NOT NULL,
  image TEXT,
  price INTEGER NOT NULL,
  location TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  year INTEGER,
  mileage INTEGER,
  transmission TEXT,
  fuel TEXT,
  category TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  content TEXT NOT NULL,
  embedding VECTOR(1536),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vector index (lists=1 for small dataset, demonstrative)
CREATE INDEX IF NOT EXISTS cars_embedding_idx
  ON cars USING ivfflat (embedding vector_cosine_ops) WITH (lists = 1);

-- Vector similarity search function
CREATE OR REPLACE FUNCTION match_cars(
  query_embedding VECTOR(1536),
  match_count INT DEFAULT 10
)
RETURNS TABLE (
  id TEXT,
  brand TEXT,
  model TEXT,
  full_name TEXT,
  image TEXT,
  price INTEGER,
  location TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  year INTEGER,
  mileage INTEGER,
  transmission TEXT,
  fuel TEXT,
  category TEXT,
  tags TEXT[],
  content TEXT,
  similarity DOUBLE PRECISION
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id, c.brand, c.model, c.full_name, c.image, c.price,
    c.location, c.lat, c.lng, c.year, c.mileage,
    c.transmission, c.fuel, c.category, c.tags, c.content,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM cars c
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
