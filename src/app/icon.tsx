import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3l1.4 4.3L18 9l-4.6 1.7L12 15l-1.4-4.3L6 9l4.6-1.7L12 3z"
            fill="#ffffff"
          />
          <path
            d="M6 14l0.9 2.5L9.5 17l-2.1 1-0.9 2.5L5.6 18l-2.1-1 2.6-0.5L6 14z"
            fill="#e0e7ff"
          />
          <path
            d="M18 11l0.9 2.5L20.5 14l-2.1 1-0.9 2.5L17.6 15l-2.1-1 2.6-0.5L18 11z"
            fill="#e0e7ff"
          />
        </svg>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}

