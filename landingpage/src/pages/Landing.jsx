import React from "react";
import Hero from "../component/Hero";
import Services from "../component/Services";
import Testimonials from "../component/Testimonials";
import Feedback from "../component/Feedback";
import ScrollToTop from "../component/ScrollToTop";
export default function Landing() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Feedback />
      <ScrollToTop />
    </>
  );
}
