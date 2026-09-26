"use client";

import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(user) {
    setFavorites((currentFavorites) => {
      const isAlreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === user.id
      );

      if (isAlreadyFavorite) {
        return currentFavorites.filter((favorite) => favorite.id !== user.id);
      }

      return [...currentFavorites, user];
    });
  }

  function isFavorite(userId) {
    return favorites.some((favorite) => favorite.id === userId);
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }

  return context;
}