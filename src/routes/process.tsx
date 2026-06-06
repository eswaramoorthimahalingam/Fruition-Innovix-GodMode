import { createFileRoute } from "@tanstack/react-router";
import { ProcessPage } from "@/components/site/ProcessPage";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Fruition Innovix Process" },
      {
        name: "description",
        content:
          "Understand Fruition Innovix's project process from discovery and strategy to build, launch, and growth.",
      },
    ],
  }),
});
