import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const plans = [
  {
    name: "First-time Psychiatric Consultation",
    price: "320 PLN",
    features: [
      "Medical interview",
      "Mental state evaluation",
      "Treatment plan",
      "Duration: 40 minutes",
      "Pharmacological recommendations",
    ],
  },
  {
    name: "Follow-up Psychiatric Consultation",
    price: "280 PLN",
    features: [
      "Continuation of treatment",
      "Progress evaluation",
      "Therapy modification",
      "Duration: 20 minutes",
      "Pharmacological recommendations",
    ],
  },
  {
    name: "First-time Psychiatric Consultation for Children and Adolescents",
    price: "400 PLN",
    features: [
      "Interview with parents/guardians",
      "Mental state evaluation",
      "Treatment plan",
      "Duration: 50 minutes",
      "Pharmacological recommendations",
    ],
  },
  {
    name: "Follow-up Psychiatric Consultation for Children and Adolescents",
    price: "350 PLN",
    features: [
      "Continuation of treatment",
      "Progress evaluation",
      "Therapy modification",
      "Duration: 30 minutes",
      "Pharmacological recommendations",
    ],
  },
  {
    name: "Psychotherapy",
    price: "250 PLN",
    features: [
      "Therapeutic session",
      "Problem analysis",
      "Therapeutic techniques",
      "Duration: 60 minutes",
      "Home exercises",
    ],
  },
  {
    name: "Group Therapy",
    price: "120 PLN",
    features: [
      "Group session",
      "Therapeutic materials",
      "Group exercises",
      "Duration: 60 minutes",
      "Group support",
    ],
  },
  {
    name: "Personality Diagnostics",
    price: "400 PLN",
    features: [
      "Diagnostic interview",
      "Psychological tests",
      "Psychiatric evaluation",
      "Duration: 2-3 hours",
      "Diagnostic report",
    ],
  },
];

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Pricing")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              {t(
                "We offer a transparent pricing system tailored to individual needs."
              )}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-up">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(plan.name)}
                  </h3>
                  <div className="text-2xl font-bold text-[#46B7C6] mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-[#46B7C6] mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 border-t border-gray-100">
                  <Link
                    to="/booking"
                    className="w-full gradient-theme text-white px-6 py-3 rounded-full
                      hover:shadow-lg transition-all duration-300 font-medium inline-block text-center"
                  >
                    {t("Book an Appointment")}
                  </Link>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-up" className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t("Additional Information")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t("Payment Methods")}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t("We accept cash, card, and bank transfers.")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t("Insurance")}
                </h4>
                <p className="text-gray-600">
                  {t(
                    "We cooperate with most insurance companies. Details available at the reception."
                  )}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
