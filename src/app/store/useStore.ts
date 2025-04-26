import React from "react";
import { create } from "zustand";

interface Store {
  shortenUrlRef: React.RefObject<HTMLInputElement | null>;
  copyRef: React.RefObject<HTMLInputElement | null>;

  successRef: React.RefObject<HTMLDivElement | null>;
  handleSuccess: () => void;

  errorRef: React.RefObject<HTMLDivElement | null>;
  handleError: () => void;
}

export const useStore = create<Store>((set) => ({
  shortenUrlRef: React.createRef(),
  copyRef: React.createRef(),
  successRef: React.createRef(),
  errorRef: React.createRef(),
  handleSuccess: () => {
    setTimeout(() => {
      const successRef = useStore.getState().successRef.current;
      if (!successRef) return;

      successRef.classList.remove("hidden");
      successRef.classList.add("flex");

      setTimeout(() => {
        successRef.classList.remove("flex");
        successRef.classList.add("hidden");
      }, 3000);
    });
  },
  handleError: () => {
    setTimeout(() => {
      const errorRef = useStore.getState().errorRef.current;
      if (!errorRef) return;

      errorRef.classList.remove("hidden");
      errorRef.classList.add("flex");

      setTimeout(() => {
        errorRef.classList.remove("flex");
        errorRef.classList.add("hidden");
      }, 3000);
    });
  },
}));
