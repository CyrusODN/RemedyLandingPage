import { useTranslation } from "react-i18next";
import { Building2, TestTube2, Brain } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const services = [
  {
    icon: Building2,
    title: "Psychiatric Center",
    features: [
      "Comprehensive psychiatric care",
      "Child and adolescent psychiatry",
      "Experienced team of specialists",
      "Holistic approach to the patient",
    ],
  },
  {
    icon: TestTube2,
    title: "Innovative Treatment in Clinical Research",
    features: [
      "Research partnerships",
      "Access to breakthrough therapies",
      "Participation in international studies",
      "Personalized therapeutic approach",
    ],
  },
  {
    icon: Brain,
    title: "Remedy AI",
    features: [
      "AI system for doctors",
      "Support for research centers",
      "Management of medical facilities",
      "Clinical data analysis",
    ],
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="scale-up"
              className="h-full"
            >
              <div
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md 
                hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
              >
                <div
                  className="w-16 h-16 gradient-theme rounded-full 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t(service.title)}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#46B7C6] rounded-full mr-3" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
