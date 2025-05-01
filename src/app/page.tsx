import { ErrorAlert, ShortedUrl, ShortenUrl, SuccessAlert } from "./components";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-indigo-900 text-white font-sans">
      <div className="flex flex-col items-center max-w-2/2  gap-4 p-4 bg-white text-indigo-900 rounded-lg shadow-lg times-n font-[family-name:var(--font-poppins)]">
        <h1 className="text-4xl mb-6 font-bold">Encurtador de URL</h1>
        <ShortenUrl />
        <ShortedUrl />
        <SuccessAlert />
        <ErrorAlert />
      </div>
    </main>
  );
}
