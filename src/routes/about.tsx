import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Fruition Innovix" },
      {
        name: "description",
        content: "Fruition Innovix: technology, branding, marketing, ecommerce, and consulting.",
      },
    ],
  }),
});
