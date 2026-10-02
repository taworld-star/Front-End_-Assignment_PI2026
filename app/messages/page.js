import { messages } from "@/lib/db";
import { Button } from "@/components/ui/button";

import { deleteMessageAction } from "./actions";

export const dynamic = "force-dynamic";

export default function MessagesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold text-primary">Inbox</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((message) => (
            <article
              key={message.id}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-semibold">{message.name}</h2>
                <time
                  dateTime={message.createdAt}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(message.createdAt).toLocaleString("id-ID")}
                </time>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {message.email}
              </p>
              <p className="mt-4 whitespace-pre-wrap text-sm">
                {message.message}
              </p>
              <form action={deleteMessageAction} className="mt-4">
                <input type="hidden" name="id" value={message.id} />
                <Button type="submit" variant="destructive">
                  Hapus
                </Button>
              </form>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
