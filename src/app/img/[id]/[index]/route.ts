import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

function mapIdToFolder(id: string): string | null {
  // As pastas em src/backend/data/img já usam exatamente o id,
  // então basta reutilizar o próprio id como nome da pasta.
  return id;
}

function getMimeType(ext: string): string {
  switch (ext.toLowerCase()) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; index: string }> }
) {
  try {
    const { id, index } = await params;

    const folder = mapIdToFolder(id);
    if (!folder) {
      return new NextResponse("Not found", { status: 404 });
    }

    // index can come as "1.png" – keep only the numeric part before the first dot
    const indexSegment = index.split(".")[0];
    const indexNumber = parseInt(indexSegment, 10);
    if (!Number.isFinite(indexNumber) || indexNumber < 1) {
      return new NextResponse("Not found", { status: 404 });
    }

    const baseDir = path.join(
      process.cwd(),
      "src",
      "backend",
      "data",
      "img",
      folder
    );

    const tryCandidates: string[] = [];

    // Primary convention: <index>.* with common extensions
    const exts = [".png", ".jpg", ".jpeg", ".webp"];
    for (const ext of exts) {
      tryCandidates.push(path.join(baseDir, `${indexNumber}${ext}`));
    }

    // Special case: main image for Onix is named "onix.png"
    if (id === "chevrolet-onix" && indexNumber === 1) {
      tryCandidates.unshift(path.join(baseDir, "onix.png"));
    }

    let foundPath: string | null = null;
    for (const candidate of tryCandidates) {
      if (fs.existsSync(candidate)) {
        foundPath = candidate;
        break;
      }
    }

    if (!foundPath) {
      return new NextResponse("Not found", { status: 404 });
    }

    const fileBuffer = await fs.promises.readFile(foundPath);
    const ext = path.extname(foundPath) || ".png";
    const mime = getMimeType(ext);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": mime,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving car image:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

