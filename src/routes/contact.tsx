import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Fruition Innovix" },
      {
        name: "description",
        content:
          "Contact Fruition Innovix for technology, branding, marketing, ecommerce, consulting.",
      },
    ],
  }),
});
