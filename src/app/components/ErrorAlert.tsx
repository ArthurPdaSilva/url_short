"use client";
import { useStore } from "../store/useStore";

export const ErrorAlert = () => {
  const { errorRef } = useStore();

  return (
    <div
      className="items-center p-4 mt-2 text-sm text-red-900 border border-red-300 rounded-lg bg-red-100 space-x-2 hidden w-full"
      role="alert"
      ref={errorRef}
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="font-">Falha!</span>&nbsp;Algo aconteceu durante a
      execução.
    </div>
  );
};
