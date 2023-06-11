"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset, }: { error: Error; reset: () => void; }): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="container-sm pt-6">
      <div className="row">
        <div className="w-full prose">
          <h2>{error.message || "Something went wrong!"}</h2>
          <p>
            This error occurred while rendering the page. We suggest you try
            again. If you continue to encounter this error, please open an issue
            on GitHub.
          </p>
          <button
            className="underline"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
