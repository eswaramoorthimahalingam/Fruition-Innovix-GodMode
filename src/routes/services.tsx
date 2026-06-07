import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/ServicesPage";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Fruition Innovix Services" },
      {
        name: "description",
        content: "Websites, apps, software, ERP, CRM, branding, marketing, ecommerce, consulting.",
      },
    ],
  }),
});
