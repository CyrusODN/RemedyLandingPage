import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import { ArrowLeft, Brain, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { childServices } from "../data/services"; // Dane dla usług dziecięcych

// Dane usług z angielskimi frazami jako kluczami i18n
const i18nServiceData = {
  konsultacja: {
    title: "Psychiatric Consultation",
    description: "Professional consultation with an experienced psychiatrist.",
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
    description: "Regular therapeutic sessions tailored to the patient's needs.",
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
    description: "Therapy in small groups under the guidance of an experienced therapist.",
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
    price: "1500 PLN",
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
    description: "Qualification consultation for participation in clinical trials.",
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
  'terapia-dzieci-mlodziez': {
    title: 'servicePage.childYouthTherapy.title', 
    description: 'servicePage.childYouthTherapy.description', 
    process: [ 
      'Initial consultation',
      'Psychological diagnosis',
      'Therapy plan establishment',
      'Regular therapy sessions',
      'Cooperation with parents',
    ],
    benefits: [ 
      'Individual approach',
      'Experienced team of specialists',
      'Various forms of therapy',
      'Support for parents',
      'Regular progress assessment',
    ],
  },
};

export default function ServicePage() {
  const { t } = useTranslation();
  const { service } = useParams();
  const location = useLocation();
  const serviceInfo = i18nServiceData[service as keyof typeof i18nServiceData];
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

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

  if (service === 'terapia-dzieci-mlodziez') {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t(serviceInfo.title)}</h1>
              <p className="text-xl text-gray-600">{t(serviceInfo.description)}</p>
            </div>
          </ScrollAnimationWrapper>

          {Object.entries(childServices).map(([categoryKey, categoryData]) => (
            <ScrollAnimationWrapper key={categoryKey} animation="fade-up" className="mb-12">
              <div id={categoryKey} className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t(categoryData.title)}</h2> {/* Zastosowano t() */}
                <div className="space-y-4">
                  {categoryData.services.map((subService, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedService(
                          expandedService === `${categoryKey}-${index}` ? null : `${categoryKey}-${index}`
                        )}
                        className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">{t(subService.name)}</h3> {/* Zastosowano t() */}
                            <p className="text-gray-600 text-sm">{t(subService.description)}</p> {/* Zastosowano t() */}
                          </div>
                          {expandedService === `${categoryKey}-${index}` ? (
                            <ChevronUp className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedService === `${categoryKey}-${index}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-6 border-t border-gray-100">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-3">{t('servicePage.childService.detailsTitle')}</h4>
                                  <ul className="space-y-2">
                                    {subService.details.map((detail, idx) => (
                                      <li key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#46B7C6] rounded-full flex-shrink-0" />
                                        <span className="text-gray-600">{t(detail)}</span> {/* Zastosowano t() */}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">{t('Duration')}:</h4>
                                    <p className="text-gray-600">{t(subService.duration)}</p> {/* Zastosowano t() */}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">{t('Price')}:</h4>
                                    <p className="text-gray-600">{subService.price}</p> {/* Cena pozostaje bez tłumaczenia */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <ScrollAnimationWrapper animation="scale-up">
                <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                    <Brain className="h-6 w-6 text-[#46B7C6]" />
                    <h2 className="text-2xl font-semibold">{t("Process")}</h2>
                </div>
                <ul className="space-y-3">
                    {serviceInfo.process?.map((stepKey, index) => ( 
                    <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                        <span className="text-gray-600">{t(stepKey)}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scale-up">
                <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                    <h2 className="text-2xl font-semibold">{t("Benefits")}</h2>
                </div>
                <ul className="space-y-3">
                    {serviceInfo.benefits?.map((benefitKey, index) => ( 
                    <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                        <span className="text-gray-600">{t(benefitKey)}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </ScrollAnimationWrapper>
          </div>

          <ScrollAnimationWrapper animation="fade-up" className="mt-12">
            <div className="gradient-theme rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">{t("psychotherapyPage.startTherapy.title")}</h3>
              <p className="mb-6">
                {t("servicePage.childYouthTherapy.ctaDescription")}
              </p>
              <Link
                to="/booking"
                className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                  hover:shadow-lg transition-all duration-300 font-medium inline-block"
              >
                {t("Book an Appointment")}
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    );
  }

  // Standardowe renderowanie dla innych usług
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
                {serviceInfo.includes.map((itemKey, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{t(itemKey)}</span>
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
                {serviceInfo.process.map((stepKey, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{t(stepKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>
        
        {serviceInfo.benefits && serviceInfo.benefits.length > 0 && (
            <ScrollAnimationWrapper animation="fade-up" className="mb-12">
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                        <h2 className="text-2xl font-semibold">{t("Benefits")}</h2>
                    </div>
                    <ul className="space-y-3">
                        {serviceInfo.benefits.map((benefitKey, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                                <span className="text-gray-600">{t(benefitKey)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollAnimationWrapper>
        )}

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
                  <p className="text-gray-600">{serviceInfo.price}</p> 
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      {t("First visit")}: {serviceInfo.price.first}
                    </p>
                    <p className="text-gray-600">
                      {t("Follow-up visit")}: {serviceInfo.price.follow}
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
