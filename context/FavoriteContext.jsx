"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Mengambil data awal dari API saat komponen di-render
  useEffect(() => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then(setFavorites)
      .catch((error) => console.error("Gagal mengambil data favorit:", error));
  }, []);

  // Menambahkan ke favorit via POST API
  async function addFavorite(user) {
    const response = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const savedUser = await response.json();
      setFavorites((currentFavorites) => [...currentFavorites, savedUser]);
    } else {
      const error = await response.json();
      alert(error.error || "Gagal menambahkan ke favorit");
    }
  }

  // Menghapus dari favorit via DELETE API
  async function removeFavorite(userId) {
    const response = await fetch(`/api/favorites/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setFavorites((currentFavorites) =>
        currentFavorites.filter(
          (favorite) => String(favorite.id) !== String(userId)
        )
      );
    } else {
      alert("Gagal menghapus favorit");
    }
  }

  function isFavorite(userId) {
    return favorites.some(
      (favorite) => String(favorite.id) === String(userId)
    );
  }

  async function toggleFavorite(user) {
    if (isFavorite(user.id)) {
      await removeFavorite(user.id);
    } else {
      await addFavorite(user);
    }
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("useFavorite harus digunakan di dalam FavoriteProvider");
  }

  return context;
}

// Alias untuk komponen lama yang masih memakai nama plural.
export const useFavorites = useFavorite;