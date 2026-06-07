import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/IndustriesPage";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries Fruition Innovix Serves" },
      {
        name: "description",
        content: "Retail, ecommerce, manufacturing, healthcare, education, real estate, startups.",
      },
    ],
  }),
});
