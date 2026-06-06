import { createFileRoute } from "@tanstack/react-router";
import { WhyUsPage } from "@/components/site/WhyUsPage";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Fruition Innovix" },
      {
        name: "description",
        content:
          "See why businesses choose Fruition Innovix for complete technology, branding, marketing, ecommerce, and business growth support.",
      },
    ],
  }),
});
