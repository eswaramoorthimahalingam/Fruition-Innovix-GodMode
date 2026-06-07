import { createFileRoute } from "@tanstack/react-router";
import { WhyUsPage } from "@/components/site/WhyUsPage";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Fruition Innovix" },
      {
        name: "description",
        content: "One team for technology, branding, marketing, ecommerce, and growth support.",
      },
    ],
  }),
});
