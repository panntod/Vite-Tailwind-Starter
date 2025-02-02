import { useState } from "react";

import cn from "@/lib/clsx";

export default function Playground() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen flex flex-col sm:flex-row justify-center items-center bg-gray-900 gap-6 px-4 sm:px-0">
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        className="px-6 py-3 text-xl font-bold bg-red-500 text-white rounded-lg disabled:bg-red-700 disabled:opacity-50 transition-all"
      >
        -
      </button>
      <span className={cn("text-4xl font-semibold text-white", count === 0 && "text-gray-500")}>{count}</span>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 text-xl font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
      >
        +
      </button>
    </main>
  );
}
