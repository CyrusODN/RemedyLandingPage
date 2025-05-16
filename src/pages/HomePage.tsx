import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Research from "../components/Research";
import Treatment from "../components/Treatment";
import Pricing from "../components/Pricing";
import JoinUs from "../components/JoinUs";
import Contact from "../components/Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import Locations from "../components/Locations";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();
  
  useEffect(() => {

    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // change title for translation
  useEffect(() => {
    document.title = t("Remedy Psychiatric Center");
  }, [t]);
 
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Research />
      <Treatment />
      {/* <Pricing /> */}
      <Locations />
      <JoinUs />
      <Contact />
      <PrivacyPolicy />
      <TermsConditions />
    </div>
  );
}
