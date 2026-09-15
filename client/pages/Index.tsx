import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <div className="flex items-center gap-6">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="https://vitejs.dev/logo.svg"
            className="h-24 p-4 transition-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="https://react.dev/favicon.ico"
            className="h-24 p-4 transition-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold">Vite + React</h1>

      <div className="p-8 rounded-lg border border-border">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-secondary hover:border-primary transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>client/pages/Index.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
