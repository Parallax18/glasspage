import SimpleColumnGrid from "@/components/templates/features/simple-column-grid";
import SimpleFooterWithLogo from "@/components/templates/footer/SimpleFooterWithLogo";
import CallToActionWithAnnotation from "@/components/templates/hero/cta-with-anotation";
import SplitScreenWithImage from "@/components/templates/hero/split-screen-with-image";
import ThreeTierPricingWithEmphasizedTier from "@/components/templates/pricing/three-tiers-with-emphasized-tier";
import WithLargeQuote from "@/components/templates/testimonials/with-large-quote";
import SimpleWorkGrid from "@/components/templates/work/simple-work-grid";
import { ComponentType } from "react";

export interface Template {
  id: string;
  name: string;
  Component: ComponentType;
}

export interface Section {
  name: string;
  templates: Template[];
}

export const sections = [
  {
    name: "Hero",
    templates: [
      {
        id: "hero-1",
        name: "Split screen with image",
        Component: SplitScreenWithImage,
      },
      {
        id: "hero-2",
        name: "CTA with annotation",
        Component: CallToActionWithAnnotation,
      },
      {
        id: "hero-3",
        name: "Another hero section",
        Component: SplitScreenWithImage,
      },
    ],
  },
  {
    name: "Features",
    templates: [
      {
        id: "features-1",
        name: "Simple column grid",
        Component: SimpleColumnGrid,
      },
      { id: "features-2", name: "Grid Layout", Component: SimpleColumnGrid },
      { id: "features-3", name: "Grid Layout", Component: SimpleColumnGrid },
      { id: "features-4", name: "Grid Layout", Component: SimpleColumnGrid },
    ],
  },
  {
    name: "Footer",
    templates: [
      {
        id: "footer-1",
        name: "Simple footer with logo",
        Component: SimpleFooterWithLogo,
      },
      {
        id: "footer-2",
        name: "Grid Layout",
        Component: SimpleFooterWithLogo,
      },
    ],
  },
  {
    name: "Testimonials",
    templates: [
      {
        id: "testimonial-1",
        name: "Single testimonial with large quote",
        Component: WithLargeQuote,
      },
      {
        id: "testimonial-2",
        name: "Grid Layout",
        Component: WithLargeQuote,
      },
      {
        id: "testimonial-3",
        name: "Grid Layout",
        Component: WithLargeQuote,
      },
    ],
  },
  {
    name: "Pricing",
    templates: [
      {
        id: "pricing-1",
        name: "Three tier pricing with emphasized center",
        Component: ThreeTierPricingWithEmphasizedTier,
      },
      {
        id: "pricing-2",
        name: "Something different",
        Component: ThreeTierPricingWithEmphasizedTier,
      },
    ],
  },
  {
    name: "Work/projects",
    templates: [
      {
        id: "work-1",
        name: "Simple work section grid",
        Component: SimpleWorkGrid,
      },
      {
        id: "work-2",
        name: "Something different for work",
        Component: SimpleWorkGrid,
      },
    ],
  },
];
