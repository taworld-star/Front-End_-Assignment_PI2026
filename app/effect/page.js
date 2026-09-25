"use client";

import { useEffect } from "react";

export default function EffectPage() {
  useEffect(() => {
    console.log("Komponen berhasil dirender ke layar!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Latihan useEffect</h1>
      <p>Buka Developer Tools (F12) → Console untuk melihat log.</p>
    </div>
  );
}