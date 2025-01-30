import { useState } from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Users, Pill, Brain } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import TreatmentPopout from "./TreatmentPopout";
import { useTranslation } from "react-i18next";

const treatments = [
  {
    icon: Stethoscope,
    title: "Standard Treatment",
    description:
      "Psychiatric consultations, psychotherapy, pharmacotherapy, and group therapy",
    content: {
      description:
        "We offer a comprehensive approach to treatment, combining different forms of therapy tailored to the individual needs of the patient.",
      details: [
        "Regular psychiatric consultations",
        "Individual psychotherapy",
        "Selection of appropriate pharmacotherapy",
        "Opportunity to participate in group therapy",
      ],
      process: [
        "Initial consultation and diagnosis",
        "Development of a treatment plan",
        "Regular therapeutic sessions",
        "Monitoring progress and adjusting therapy",
      ],
      benefits: [
        "Comprehensive medical care",
        "Individual approach",
        "Support from an experienced team",
        "Ability to combine different forms of therapy",
      ],
    },
  },
  {
    icon: Brain,
    title: "Innovative Approaches",
    description:
      "Available clinical trials and drug programs",
    content: {
      description:
        "Participation in clinical trials and research programs evaluating new therapeutic approaches.",
      details: [
        "Participation in studies on potential new therapies",
        "Participation in international studies",
        "Evaluation of potential treatment approaches",
        "Collaboration with leading centers",
      ],
      process: [
        "Eligibility assessment for the program",
        "Detailed initial tests",
        "Implementation of the therapeutic program",
        "Regular evaluation of results",
      ],
      benefits: [
        "Participation in research on potential new therapies",
        "Care from a specialized team",
        "Regular monitoring of progress",
        "Contributing to the development of psychiatry",
      ],
    },
  },
  {
    icon: Users,
    title: "Qualification Process",
    description: "Qualification criteria and recruitment process for programs",
    content: {
      description:
        "A transparent qualification process for the appropriate therapeutic programs, taking into account individual needs and medical history.",
      details: [
        "Detailed health assessment",
        "Analysis of medical history",
        "Specialist consultations",
        "Diagnostic tests",
      ],
      process: [
        "Initial qualifying interview",
        "Medical and psychological assessment",
        "Selection of the appropriate program",
        "Setting up a treatment plan",
      ],
      benefits: [
        "Matching therapy to needs",
        "Professional health assessment",
        "Clear qualification criteria",
        "Comprehensive diagnostics",
      ],
    },
  },
  {
    icon: Pill,
    title: "Progress Monitoring",
    description: "Regular evaluation of progress and adjusting therapy",
    content: {
      description:
        "Systematic evaluation of treatment effects and adjusting therapy to the current needs of the patient.",
      details: [
        "Regular health assessments",
        "Patient satisfaction surveys",
        "Modifications to the treatment plan",
        "Documentation of progress",
      ],
      process: [
        "Periodic control consultations",
        "Evaluation of therapy effects",
        "Analysis of treatment outcomes",
        "Updating therapeutic goals",
      ],
      benefits: [
        "Treatment optimization",
        "Quick response to changes",
        "Better therapy results",
        "Complete documentation of progress",
      ],
    },
  },
];

export default function Treatment() {
  const { t } = useTranslation();
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(
    null
  );

  return (
    <section id="treatment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Treatment Paths")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
          {treatments.map((treatment, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="scale-up"
              className="h-full"
            >
              <div
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md 
                hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
              >
                <div
                  className="w-16 h-16 gradient-theme rounded-full 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <treatment.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(treatment.title)}
                </h3>
                <p className="text-gray-600 mb-4">{t(treatment.description)}</p>
                <button
                  onClick={() => setSelectedTreatment(index)}
                  className="text-[#46B7C6] font-medium hover:underline flex items-center gap-1"
                >
                  {t("Learn more →")}
                </button>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-up" className="mt-16">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t("Start Your Path to Health")}
            </h3>
            <p className="mb-6">
              {t("Contact us to discuss the best treatment path for you.")}
            </p>
            <Link
              to="/booking"
              className="bg-white text-[#46B7C6] px-8 py-3 rounded-full font-medium 
                hover:shadow-lg transition-all duration-300 inline-block"
            >
              {t("Book a Consultation")}
            </Link>
          </div>
        </ScrollAnimationWrapper>

        {selectedTreatment !== null && (
          <TreatmentPopout
            isOpen={selectedTreatment !== null}
            onClose={() => setSelectedTreatment(null)}
            title={t(treatments[selectedTreatment].title)}
            content={treatments[selectedTreatment].content}
          />
        )}
      </div>
    </section>
  );
}
