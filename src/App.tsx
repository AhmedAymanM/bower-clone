import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-svh bg-white-accent p-4 text-lg text-black-accent">
      <h1 className="font-bold">Vite + React</h1>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}
