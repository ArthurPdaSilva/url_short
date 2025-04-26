type Params = {
  params: { code: string };
};

export async function GET(_: Request, { params }: Params) {
  const { code } = params;

  if (!code) {
    return new Response("URL não fornecida", { status: 400 });
  }

  const shortenedUrl = `https://short.ly/${btoa(code)}`;

  return new Response(JSON.stringify({ shortenedUrl }), {
    headers: { "Content-Type": "application/json" },
  });
}
