"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFavorites } from "@/context/FavoriteContext";

export default function UserCard({ user }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(user.id);
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card className="group border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">
            {initials}
          </div>
          <CardTitle className="flex flex-1 items-center justify-between gap-3">
            <span>{user.name}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={
                favorite
                  ? `Remove ${user.name} from favorites`
                  : `Add ${user.name} to favorites`
              }
              aria-pressed={favorite}
              onClick={() => toggleFavorite(user)}
              className={favorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-red-500"}
            >
              <Heart
                className="size-5"
                fill={favorite ? "currentColor" : "none"}
              />
            </Button>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {user.company.name}
        </p>
        <Button className="mt-4 w-full rounded-full">View Profile</Button>
      </CardContent>
    </Card>
  );
}