import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <PagePlaceholder
      title="Collections"
      description="Folders of prompts grouped by project, such as Coding, Writing or Study."
    />
  );
}
