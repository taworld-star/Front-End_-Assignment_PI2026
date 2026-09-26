"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import UserCard from "@/components/UserCard";
import { buttonVariants } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoriteContext";
import { cn } from "@/lib/utils";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Heart className="size-4" fill="currentColor" />
            Saved users
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Favorite Users
          </h1>
          <p className="mt-4 text-muted-foreground">
            Your favorite users are collected here for quick access.
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <Heart className="size-10 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No favorites yet</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Go to the user directory and tap the heart icon to save a user.
            </p>
            <Link
              href="/users"
              className={cn(buttonVariants({ size: "sm" }), "mt-6 rounded-full")}
            >
              Browse users
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}