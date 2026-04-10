import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const publicDir = join(process.cwd(), "public", "images", "icons");

  const { mkdir } = await import("fs/promises");
  await mkdir(publicDir, { recursive: true });

  for (const [key, dataUrl] of Object.entries(data)) {
    const base64 = (dataUrl as string).replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64, "base64");
    await writeFile(join(publicDir, `${key}.png`), buffer);
  }

  return NextResponse.json(
    { saved: Object.keys(data).length },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
