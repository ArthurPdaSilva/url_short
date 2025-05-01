import { redirect } from "next/navigation";

export default async function RedirectPage({ params }: Params) {
  const { url } = await params;

  if (url === "favicon.ico") {
    return null;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/redirect/${url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("URL inválida ou não encontrada");
  }

  const data = await res.json();

  if (!data?.url) {
    throw new Error("URL de destino não encontrada");
  }

  redirect(data.url);
}
