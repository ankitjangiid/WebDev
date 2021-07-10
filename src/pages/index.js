import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import darkTheme from "theme/darkTheme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : theme}>
      <Layout dark={dark} setDark={setDark}>
        <SEO title="WebDev" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
