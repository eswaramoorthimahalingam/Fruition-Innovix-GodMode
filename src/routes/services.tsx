import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/ServicesPage";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Fruition Innovix Services" },
      {
        name: "description",
        content:
          "Explore Fruition Innovix services: websites, mobile apps, custom software, ERP, CRM, branding, digital marketing, ecommerce, and consulting.",
      },
    ],
  }),
});
