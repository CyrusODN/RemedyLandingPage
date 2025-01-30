import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  Users,
  ClipboardCheck,
  Brain,
  Shield,
  TrendingUp,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import TrialList from "../components/trials/TrialList";
import { useTranslation } from "react-i18next";

const benefits = [
  {
    icon: Shield,
    title: "Safety",
    description:
      "All trials are conducted in accordance with the highest safety standards",
  },
  {
    icon: TrendingUp,
    title: "Innovative Therapies",
    description:
      "Access to the latest treatment methods before their official introduction",
  },
  {
    icon: HeartPulse,
    title: "Medical Care",
    description:
      "Regular consultations and monitoring of health status by a team of specialists",
  },
  {
    icon: Stethoscope,
    title: "Support",
    description:
      "Full support of the medical team throughout the entire duration of the trial",
  },
];

const process = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Qualification",
    description:
      "Preliminary assessment of the eligibility criteria for the trial",
  },
  {
    step: "02",
    icon: Brain,
    title: "Consultation",
    description: "Detailed conversation with the research team",
  },
  {
    step: "03",
    icon: Users,
    title: "Participation in the Study",
    description: "Regular visits with medication intake, monitoring progress",
  },
  {
    step: "04",
    icon: Microscope,
    title: "Completion",
    description: "Final evaluation and discussion of results",
  },
];

export default function ClinicalTrials() {
  const [showTrials, setShowTrials] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showTrials]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showTrials ? (
          <>
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-16">
                <Link
                  to="/"
                  className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors flex items-center gap-2 mb-8"
                >
                  <ArrowLeft className="h-5 w-5" />
                  {t("Back to the main page")}
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {t("Clinical Trials in Psychiatry")}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mb-8">
                  {t(
                    "Clinical trials are a key element in the development of new treatment methods in psychiatry. Thanks to them, we can offer patients innovative therapies and contribute to progress in medicine."
                  )}
                </p>

                <button
                  onClick={() => setShowTrials(true)}
                  className="gradient-theme text-white px-8 py-3 rounded-full
                    hover:shadow-lg transition-all duration-300 font-medium
                    inline-flex items-center gap-2 group"
                >
                  <span>{t("See available trials")}</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(benefit.title)}
                    </h3>
                    <p className="text-gray-600">{t(benefit.description)}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                  {t("Participation Process in the Trial")}
                </h2>
                <div className="relative">
                  {/* Progress line */}
                  <div className="hidden lg:block absolute left-0 top-[72px] w-full h-0.5 bg-gray-100">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#4A90B9] to-[#68BFB3] transform origin-left scale-x-100 transition-transform duration-1000" />
                  </div>

                  {/* Process steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {process.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex flex-col items-center">
                          {/* Step number */}
                          <div className="absolute -top-4 left-0 text-4xl font-bold text-gray-100">
                            {step.step}
                          </div>

                          {/* Icon */}
                          <div className="w-16 h-16 gradient-theme rounded-full flex items-center justify-center mb-6 relative z-10 bg-white">
                            <step.icon className="h-8 w-8 text-white" />
                          </div>

                          {/* Content */}
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {t(step.title)}
                            </h3>
                            <p className="text-gray-600">
                              {t(step.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </>
        ) : (
          <TrialList onBack={() => setShowTrials(false)} />
        )}
      </div>
    </div>
  );
}
