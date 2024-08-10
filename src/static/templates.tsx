import SimpleColumnGrid from "@/components/templates/features/simple-column-grid";
import SimpleFooterWithLogo from "@/components/templates/footer/SimpleFooterWithLogo";
import CallToActionWithAnnotation from "@/components/templates/hero/cta-with-anotation";
import SplitScreenWithImage from "@/components/templates/hero/split-screen-with-image";
import ThreeTierPricingWithEmphasizedTier from "@/components/templates/pricing/three-tiers-with-emphasized-tier";
import WithLargeQuote from "@/components/templates/testimonials/with-large-quote";
import SimpleWorkGrid from "@/components/templates/work/simple-work-grid";
import { ComponentType } from "react";
import { StyleProps } from "@chakra-ui/react";

export interface Template {
  id: string;
  name: string;
  category: string;
  styles: Partial<StyleProps>;
  Component: ComponentType;
}

export const templates: Template[] = [
  {
    id: "hero-1",
    name: "Split screen with image",
    category: "Hero",
    styles: {
      display: "flex",
      backgroundColor: "gray.100",
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "0 auto",
    },
    Component: SplitScreenWithImage,
  },
  {
    id: "hero-2",
    name: "CTA with annotation",
    category: "Hero",
    styles: {
      display: "block",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "30px",
      margin: "0 auto",
    },
    Component: CallToActionWithAnnotation,
  },
  {
    id: "hero-3",
    name: "Another hero section",
    category: "Hero",
    styles: {
      display: "flex",
      backgroundColor: "blue.50",
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "0 auto",
    },
    Component: SplitScreenWithImage,
  },
  {
    id: "features-1",
    name: "Simple column grid",
    category: "Features",
    styles: {
      display: "grid",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleColumnGrid,
  },
  {
    id: "features-2",
    name: "Grid Layout",
    category: "Features",
    styles: {
      display: "grid",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleColumnGrid,
  },
  {
    id: "features-3",
    name: "Grid Layout",
    category: "Features",
    styles: {
      display: "grid",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleColumnGrid,
  },
  {
    id: "features-4",
    name: "Grid Layout",
    category: "Features",
    styles: {
      display: "grid",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleColumnGrid,
  },
  {
    id: "footer-1",
    name: "Simple footer with logo",
    category: "Footer",
    styles: {
      display: "block",
      backgroundColor: "gray.800",
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "0 auto",
    },
    Component: SimpleFooterWithLogo,
  },
  {
    id: "footer-2",
    name: "Grid Layout",
    category: "Footer",
    styles: {
      display: "block",
      backgroundColor: "gray.800",
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "0 auto",
    },
    Component: SimpleFooterWithLogo,
  },
  {
    id: "testimonial-1",
    name: "Single testimonial with large quote",
    category: "Testimonials",
    styles: {
      display: "block",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: WithLargeQuote,
  },
  {
    id: "testimonial-2",
    name: "Grid Layout",
    category: "Testimonials",
    styles: {
      display: "block",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: WithLargeQuote,
  },
  {
    id: "testimonial-3",
    name: "Grid Layout",
    category: "Testimonials",
    styles: {
      display: "block",
      backgroundColor: "gray.50",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: WithLargeQuote,
  },
  {
    id: "pricing-1",
    name: "Three tier pricing with emphasized center",
    category: "Pricing",
    styles: {
      display: "flex",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: ThreeTierPricingWithEmphasizedTier,
  },
  {
    id: "pricing-2",
    name: "Something different",
    category: "Pricing",
    styles: {
      display: "flex",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: ThreeTierPricingWithEmphasizedTier,
  },
  {
    id: "work-1",
    name: "Simple work section grid",
    category: "Work/projects",
    styles: {
      display: "grid",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleWorkGrid,
  },
  {
    id: "work-2",
    name: "Something different for work",
    category: "Work/projects",
    styles: {
      display: "grid",
      backgroundColor: "white",
      width: "100%",
      height: "auto",
      padding: "40px",
      margin: "0 auto",
    },
    Component: SimpleWorkGrid,
  },
];
