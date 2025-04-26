"use client";
import { useStore } from "../store/useStore";

export const ShortedUrl = () => {
  const { copyRef, handleSuccess, handleError } = useStore();

  const handleCopy = () => {
    if (!copyRef.current) return;
    navigator.clipboard
      .writeText(copyRef.current.value)
      .then(() => handleSuccess())
      .catch(() => handleError());
  };

  return (
    <div className="flex flex-col mt-2 gap-4 w-full">
      <h2 className="text-2xl font-bold">URL Encurtada:</h2>
      <div className="flex w-full">
        <input
          type="text"
          ref={copyRef}
          value="https://short.ly/123456"
          readOnly
          className="flex-1 p-3 text-lg border-2 border-indigo-900 rounded-l-xl outline-none"
        />
        <button
          type="button"
          onClick={handleCopy}
          className="p-3 text-lg text-white bg-indigo-900 rounded-r-xl hover:bg-indigo-800 transition-colors duration-300 cursor-pointer"
        >
          Copiar
        </button>
      </div>
    </div>
  );
};
