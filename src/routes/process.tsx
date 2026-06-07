import { createFileRoute } from "@tanstack/react-router";
import { ProcessPage } from "@/components/site/ProcessPage";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Fruition Innovix Process" },
      {
        name: "description",
        content: "Discovery, strategy, build, launch, optimization, growth.",
      },
    ],
  }),
});
