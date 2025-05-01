import { prisma } from "@/lib/db";
import { nanoid } from "nanoid";

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return new Response("URL não fornecida", { status: 400 });
  }

  const shortenedUrl = `http://localhost:3000/${nanoid(6)}`;

  try {
    await prisma.url.create({
      data: {
        url,
        shortenedUrl,
      },
    });
  } catch (error) {
    console.error("Erro ao salvar no servidor", error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }

  return new Response(JSON.stringify({ shortenedUrl }), {
    headers: { "Content-Type": "application/json" },
  });
}
