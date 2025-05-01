import { prisma, redis } from "@/lib/db";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: Params) {
  const { url } = await params;

  if (!url) {
    return new Response("URL não fornecida", { status: 400 });
  }

  const cachedUrl = await redis.get(url);
  if (cachedUrl) {
    const objUrl = {
      url: cachedUrl,
    };
    return new Response(JSON.stringify(objUrl), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await prisma.url.findUniqueOrThrow({
      where: { shortenedUrl: `http://localhost:3000/${url}` },
    });
    if (!data) {
      return new Response("URL não encontrada", { status: 404 });
    }

    await redis.set(url, data.url, "EX", 3600);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao buscar URL no banco de dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}
