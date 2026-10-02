"use server";

import { revalidatePath } from "next/cache";

import { messages } from "@/lib/db";

export async function deleteMessageAction(formData) {
  const id = formData.get("id");
  const index = messages.findIndex((message) => String(message.id) === String(id));

  if (index !== -1) {
    messages.splice(index, 1);
  }

  revalidatePath("/messages");
}
