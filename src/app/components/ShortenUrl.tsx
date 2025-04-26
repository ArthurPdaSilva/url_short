"use client";
import { useStore } from "../store/useStore";

export const ShortenUrl = () => {
  const { shortenUrlRef, copyRef, handleSuccess, handleError } = useStore();

  const handleShortenUrl = async () => {
    if (!shortenUrlRef.current) return;
    const url = shortenUrlRef.current.value;

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      handleError();
      return;
    }

    const { shortenedUrl } = await response.json();
    if (!copyRef.current) return;
    copyRef.current.value = shortenedUrl;

    handleSuccess();
  };

  return (
    <div className="flex w-full">
      <input
        ref={shortenUrlRef}
        type="text"
        className="flex-1 p-3 text-lg border-2 border-indigo-900 rounded-l-xl outline-none"
        placeholder="Cole sua URL aqui"
      />
      <button
        type="button"
        onClick={handleShortenUrl}
        className="p-3 text-lg text-white bg-indigo-900 rounded-r-xl hover:bg-indigo-800 transition-colors duration-300 cursor-pointer"
      >
        Encurtar
      </button>
    </div>
  );
};
