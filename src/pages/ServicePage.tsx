import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import { ArrowLeft, Brain, Clock, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicePage() {
  const serviceData = {
    konsultacja: {
      title: "Psychiatric Consultation",
      description:
        "Professional consultation with an experienced psychiatrist.",
      duration: {
        first: "40 minutes",
        follow: "20 minutes",
      },
      price: {
        first: "320 PLN",
        follow: "280 PLN",
      },
      includes: [
        "Medical interview",
        "Psychiatric assessment",
        "Diagnosis",
        "Treatment plan",
        "Pharmacological recommendations",
        "Medical leave (if justified)",
      ],
      process: [
        "Initial interview",
        "Psychiatric examination",
        "Diagnosis discussion",
        "Establishing therapy plan",
        "Providing recommendations",
      ],
      benefits: [
        "Quick diagnosis",
        "Individual approach",
        "Comprehensive assessment",
        "Experienced specialist",
        "Discreet help",
      ],
    },
    "konsultacja-dzieci": {
      title: "Psychiatric Consultation for Children and Adolescents",
      description: "Specialist consultation for patients up to 18 years old.",
      duration: {
        first: "60 minutes",
        follow: "30 minutes",
      },
      price: {
        first: "450 PLN",
        follow: "350 PLN",
      },
      includes: [
        "Interview with parents/guardians",
        "Psychiatric assessment",
        "Diagnosis",
        "Treatment plan",
        "Pharmacological recommendations",
        "Guidelines for parents/guardians",
      ],
      process: [
        "Interview with parents/guardians",
        "Conversation with the child",
        "Development assessment",
        "Establishing therapy plan",
        "Discussing recommendations",
      ],
      benefits: [
        "Specialist approach",
        "Friendly atmosphere",
        "Comprehensive diagnosis",
        "Support for the family",
        "Individual therapy plan",
      ],
    },
    psychoterapia: {
      title: "Psychotherapy",
      description:
        "Regular therapeutic sessions tailored to the patient's needs.",
      duration: "60 minutes",
      price: "250 PLN",
      includes: [
        "Therapeutic session",
        "Problem analysis",
        "Therapeutic techniques",
        "Homework exercises",
        "Progress monitoring",
      ],
      process: [
        "Identifying the problem",
        "Setting therapy goals",
        "Regular sessions",
        "Work between sessions",
        "Progress evaluation",
      ],
      benefits: [
        "Better self-understanding",
        "Personal growth",
        "New coping strategies",
        "Emotional support",
        "Lasting change",
      ],
    },
    "terapia-grupowa": {
      title: "Group Therapy",
      description:
        "Therapy in small groups under the guidance of an experienced therapist.",
      duration: "60 minutes",
      price: "120 PLN",
      includes: [
        "Group session",
        "Therapeutic materials",
        "Group exercises",
        "Experience sharing",
        "Group support",
      ],
      process: [
        "Group introduction",
        "Establishing rules",
        "Therapeutic work",
        "Group feedback",
        "Skill development",
      ],
      benefits: [
        "Group support",
        "Experience sharing",
        "Lower therapy cost",
        "Social skill development",
        "Universal solutions",
      ],
    },
    diagnostyka: {
      title: "Personality Diagnostics",
      description: "Comprehensive psychological and psychiatric diagnostics.",
      duration: "2-3 hours",
      price: "750 PLN",
      includes: [
        "Diagnostic interview",
        "Psychological tests",
        "Psychiatric assessment",
        "Diagnostic report",
        "Therapeutic recommendations",
      ],
      process: [
        "Initial interview",
        "Diagnostic tests",
        "Results analysis",
        "Consultation of results",
        "Further steps plan",
      ],
      benefits: [
        "Accurate diagnosis",
        "Objective assessment",
        "Detailed report",
        "Clear recommendations",
        "Basis for therapy",
      ],
    },
    "kwalifikacja-do-badan": {
      title: "Clinical Trials - Preliminary Qualification",
      description:
        "Qualification consultation for participation in clinical trials.",
      duration: "60 minutes",
      price: "500 PLN",
      includes: [
        "Medical interview",
        "Assessment of medical history",
        "Analysis of participation possibilities in trials",
        "Referral to appropriate trial",
        "Support during qualification process",
      ],
      process: [
        "Analysis of medical documentation",
        "Detailed interview",
        "Inclusion criteria assessment",
        "Discussion of available trials",
        "Next steps",
      ],
      benefits: [
        "Access to innovative therapies",
        "Professional evaluation",
        "Individual approach",
        "Support in the process",
        "Opportunity to participate in trials",
      ],
    },
  };

  const { t } = useTranslation();
  const { service } = useParams();
  const serviceInfo = serviceData[service as keyof typeof serviceData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!serviceInfo) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("Service not found")}
          </h1>
          <Link
            to="/"
            className="text-[#46B7C6] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("Back to home page")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="mb-12">
            <Link
              to="/"
              className="text-[#46B7C6] hover:underline flex items-center gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to home page")}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t(serviceInfo.title)}
            </h1>
            <p className="text-xl text-gray-600">
              {t(serviceInfo.description)}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                <h2 className="text-2xl font-semibold">
                  {t("Included in service")}
                </h2>
              </div>
              <ul className="space-y-3">
                {serviceInfo.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full" />
                    <span className="text-gray-600">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-[#46B7C6]" />
                <h2 className="text-2xl font-semibold">{t("Process")}</h2>
              </div>
              <ul className="space-y-3">
                {serviceInfo.process.map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full" />
                    <span className="text-gray-600">{t(step)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-[#46B7C6]" />
                  <h3 className="text-xl font-semibold">{t("Duration")}</h3>
                </div>
                {typeof serviceInfo.duration === "string" ? (
                  <p className="text-gray-600">{t(serviceInfo.duration)}</p>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      {t("First visit")}: {t(serviceInfo.duration.first)}
                    </p>
                    <p className="text-gray-600">
                      {t("Follow-up visit")}: {t(serviceInfo.duration.follow)}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                  <h3 className="text-xl font-semibold">{t("Price")}</h3>
                </div>
                {typeof serviceInfo.price === "string" ? (
                  <p className="text-gray-600">{t(serviceInfo.price)}</p>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      {t("First visit")}: {t(serviceInfo.price.first)}
                    </p>
                    <p className="text-gray-600">
                      {t("Follow-up visit")}: {t(serviceInfo.price.follow)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" className="mt-12">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  {t("Start treatment")}
                </h3>
                <p className="mb-6">
                  {t("Contact us to schedule your first consultation.")}
                </p>
                <Link
                  to="/booking"
                  className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                    hover:shadow-lg transition-all duration-300 font-medium inline-block"
                >
                  {t("Book an appointment")}
                </Link>
              </div>

              {service === "kwalifikacja-do-badan" && (
                <div className="md:border-l md:border-white/20 md:pl-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t("Learn more")}
                  </h3>
                  <p className="mb-6">{t("Review current clinical trials.")}</p>
                  <Link
                    to="/clinical-trials"
                    className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                      hover:shadow-lg transition-all duration-300 font-medium inline-block"
                  >
                    {t("Check possibilities")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
