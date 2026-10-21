import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "New prompt" };

export default function NewPromptPage() {
  return (
    <PagePlaceholder
      title="New prompt"
      description="A form to write a prompt, add tags and save it to a collection will go here."
    />
  );
}
