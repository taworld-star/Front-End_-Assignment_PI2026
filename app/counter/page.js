"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nilai Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "8px" }}>
        Kurang
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </div>
  );
}