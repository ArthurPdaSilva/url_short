export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return new Response("URL is required", { status: 400 });
  }

  const shortenedUrl = `https://short.ly/${Buffer.from(url).toString(
    "base64"
  )}`;

  return new Response(JSON.stringify({ shortenedUrl }), {
    headers: { "Content-Type": "application/json" },
  });
}
