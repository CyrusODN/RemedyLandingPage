import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import {
  ArrowLeft,
  Brain,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"; // Usunięto FileText i Coins, bo nie są tu używane

// Zmodyfikowane dane zaburzeń z kluczami do tłumaczeń
const i18nTreatmentData = {
  depresja: {
    titleKey: "Depression Treatment", // Istnieje
    descriptionKey: "A comprehensive approach to treating depression, combining pharmacotherapy with psychotherapy.", // Istnieje
    symptomsKeys: [
      "Low mood", // Istnieje
      "Loss of interest", // Istnieje
      "Sleep disturbances", // Istnieje
      "Fatigue", // Istnieje
      "Concentration problems", // Istnieje
    ],
    treatmentsKeys: [
      "Cognitive-behavioral therapy", // Istnieje
      "Pharmacotherapy", // Istnieje
      "Group therapy", // Istnieje
      "Psychoeducation", // Istnieje
      "Social support", // Istnieje
    ],
    durationKey: "6-12 months", // Istnieje
    successKey: "80% of patients report significant improvement", // Istnieje
  },
  ptsd: {
    titleKey: "PTSD Treatment", // Istnieje
    descriptionKey: "Specialized treatment for post-traumatic stress disorder using proven therapeutic methods.", // Istnieje
    symptomsKeys: [
      "Recurrent trauma memories", // Istnieje
      "Nightmares", // Istnieje
      "Avoidance of trauma-related stimuli", // Istnieje
      "Excessive alertness", // Istnieje
      "Sleep and concentration problems", // Istnieje
    ],
    treatmentsKeys: [
      "Trauma-focused cognitive-behavioral therapy", // Istnieje
      "EMDR (Eye Movement Desensitization and Reprocessing)", // Istnieje
      "Exposure therapy", // Istnieje
      "Supporting pharmacotherapy", // Istnieje
      "Relaxation and mindfulness techniques", // Istnieje
    ],
    durationKey: "3-6 months", // Istnieje
    successKey: "70% of patients report significant symptom reduction", // Istnieje
  },
  "zaburzenia-lekowe": {
    titleKey: "Anxiety Disorder Treatment", // Istnieje
    descriptionKey: "Specialized therapy for anxiety disorders using the latest methods.", // Istnieje
    symptomsKeys: [
      "Excessive worrying", // Istnieje
      "Muscle tension", // Istnieje
      "Panic attacks", // Istnieje
      "Avoidance of situations", // Istnieje
      "Breathing difficulties", // Istnieje
    ],
    treatmentsKeys: [
      "Exposure therapy", // Istnieje (powtórzone z PTSD, ale może mieć inny kontekst)
      "Relaxation techniques", // Istnieje
      "Pharmacotherapy", // Istnieje
      "Mindfulness", // Istnieje
      "Breathing exercises", // Istnieje
    ],
    durationKey: "3-6 months", // Istnieje (ten sam co PTSD, ale dotyczy innego schorzenia)
    successKey: "75% of patients report symptom reduction", // Istnieje
  },
  schizofrenia: {
    titleKey: "Schizophrenia Treatment", // Istnieje
    descriptionKey: "An integrated approach to schizophrenia treatment using modern methods.", // Istnieje
    symptomsKeys: [
      "Delusions", // Istnieje
      "Hallucinations", // Istnieje
      "Disorganized thinking", // Istnieje
      "Emotional blunting", // Istnieje
      "Social withdrawal", // Istnieje
    ],
    treatmentsKeys: [
      "Antipsychotic medications", // Istnieje
      "Individual psychotherapy", // Istnieje
      "Family therapy", // Istnieje
      "Social skills training", // Istnieje
      "Psychiatric rehabilitation", // Istnieje
    ],
    durationKey: "Long-term treatment", // Istnieje
    successKey: "70% of patients achieve stabilization", // Istnieje
  },
  chad: {
    titleKey: "Bipolar Disorder Treatment", // Istnieje
    descriptionKey: "Specialized treatment for bipolar disorder.", // Istnieje
    symptomsKeys: [
      "Mood swings", // Istnieje
      "Manic episodes", // Istnieje
      "Depressive episodes", // Istnieje
      "Sleep disturbances", // Istnieje (powtórzone, ale ok)
      "Impulsivity", // Istnieje
    ],
    treatmentsKeys: [
      "Mood stabilizers", // Istnieje
      "Psychoeducation", // Istnieje
      "Cognitive therapy", // Istnieje
      "Mood monitoring", // Istnieje
      "Family support", // Istnieje
    ],
    durationKey: "Continuous treatment", // Istnieje
    successKey: "75% of patients achieve stabilization", // Istnieje (ten sam co zab. lękowe, ale ok)
  },
  adhd: {
    titleKey: "ADHD Treatment", // Istnieje
    descriptionKey: "Comprehensive therapy for Attention-Deficit/Hyperactivity Disorder.", // Istnieje
    symptomsKeys: [
      "Concentration problems", // Istnieje (powtórzone, ale ok)
      "Excessive activity", // Istnieje
      "Impulsivity", // Istnieje (powtórzone, ale ok)
      "Disorganization", // Istnieje
      "Difficulty in learning/work", // Istnieje
    ],
    treatmentsKeys: [
      "Pharmacotherapy", // Istnieje (powtórzone, ale ok)
      "Behavioral therapy", // Istnieje
      "Attention training", // Istnieje
      "Educational support", // Istnieje
      "ADHD coaching", // Istnieje
    ],
    durationKey: "6-12 months", // Istnieje (ten sam co depresja, ale ok)
    // Zmieniono klucz, aby był unikalny, jeśli treść jest inna
    successKey: "ADHD: 80% of patients report improvement in functioning",
  },
  "zaburzenia-osobowosci": {
    titleKey: "Personality Disorder Treatment", // Istnieje
    descriptionKey: "Specialized therapy for personality disorders.", // Istnieje
    symptomsKeys: [
      "Difficulties in relationships", // Istnieje
      "Emotional instability", // Istnieje
      "Identity issues", // Istnieje
      "Impulsivity", // Istnieje (powtórzone, ale ok)
      "Self-destructive behaviors", // Istnieje
    ],
    treatmentsKeys: [
      "Long-term psychotherapy", // Istnieje
      "DBT (Dialectical Behavior Therapy)", // Istnieje
      "Schema therapy", // Istnieje
      "Skills training", // Istnieje
      "Group support", // Istnieje (powtórzone, ale ok)
    ],
    durationKey: "1-2 years", // Istnieje
    successKey: "Personality Disorder: 70% of patients achieve significant improvement",
  },
  "zaburzenia-snu": {
    titleKey: "Sleep Disorder Treatment", // Istnieje
    descriptionKey: "A comprehensive approach to diagnosing and treating sleep disorders.", // Istnieje
    symptomsKeys: [
      "Difficulty falling asleep", // Istnieje
      "Frequent waking at night", // Istnieje
      "Waking up too early", // Istnieje
      "Irregular sleep rhythm", // Istnieje
      "Daytime fatigue", // Istnieje
    ],
    treatmentsKeys: [
      "Cognitive-behavioral therapy for insomnia (CBT-I)", // Istnieje
      "Sleep hygiene", // Istnieje
      "Relaxation techniques", // Istnieje (powtórzone, ale ok)
      "Pharmacotherapy (in justified cases)", // Istnieje
      "Sleep quality monitoring", // Istnieje
    ],
    durationKey: "2-4 months", // Istnieje
    successKey: "85% of patients report significant improvement in sleep quality", // Istnieje
  },
  // NOWA SEKCJA - dodana z drugiego przykładu TreatmentPage
  'zaburzenia-emocjonalne-zachowania': {
    titleKey: 'treatmentPage.emotionalBehavioralDisorders.title', // Nowy klucz
    descriptionKey: 'treatmentPage.emotionalBehavioralDisorders.description', // Nowy klucz
    symptomsKeys: [
      'Difficulties in emotion regulation',
      'Problems in social relationships',
      'Oppositional defiant behaviors',
      'Selective mutism',
      'Anxiety and low self-esteem',
      'Depressive symptoms', // Może istnieć jako ogólny symptom
      'Adaptation difficulties'
    ],
    treatmentsKeys: [
      'Cognitive-behavioral therapy', // Istnieje
      'Play therapy',
      'Social skills training', // Istnieje
      'Psychological support', // Istnieje
      'Systemic family therapy',
      'Alternative and Augmentative Communication (AAC)', // Istnieje z childServices
      'Emotional development workshops' // Istnieje z childServices
    ],
    durationKey: 'treatmentPage.emotionalBehavioralDisorders.duration', // Nowy klucz
    successKey: 'treatmentPage.emotionalBehavioralDisorders.success' // Nowy klucz
  }
};

export default function TreatmentPage() {
  const { t } = useTranslation();
  const { condition } = useParams();
  const treatmentInfo = i18nTreatmentData[condition as keyof typeof i18nTreatmentData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!treatmentInfo) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("No information found for this condition")} {/* Istnieje */}
          </h1>
          <Link
            to="/"
            className="text-[#46B7C6] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("Back to homepage")} {/* Istnieje */}
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
              to="/" // Można by zrobić link do /#scope-of-treatment lub podobnego
              className="text-[#46B7C6] hover:underline flex items-center gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to homepage")} {/* Istnieje */}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t(treatmentInfo.titleKey)}
            </h1>
            <p className="text-xl text-gray-600">
              {t(treatmentInfo.descriptionKey)}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-[#46B7C6]" />
                <h2 className="text-2xl font-semibold">{t("Symptoms")}</h2> {/* Istnieje */}
              </div>
              <ul className="space-y-3">
                {treatmentInfo.symptomsKeys.map((symptomKey, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{t(symptomKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-[#46B7C6]" />
                <h2 className="text-2xl font-semibold">
                  {t("Treatment Methods")} {/* Istnieje */}
                </h2>
              </div>
              <ul className="space-y-3">
                {treatmentInfo.treatmentsKeys.map((methodKey, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{t(methodKey)}</span>
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
                  <h3 className="text-xl font-semibold">
                    {t("Treatment Duration")} {/* Istnieje */}
                  </h3>
                </div>
                <p className="text-gray-600">{t(treatmentInfo.durationKey)}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                  <h3 className="text-xl font-semibold">
                    {t("Effectiveness")} {/* Istnieje */}
                  </h3>
                </div>
                <p className="text-gray-600">{t(treatmentInfo.successKey)}</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" className="mt-12">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t("Start Treatment")} {/* Istnieje */}
            </h3>
            <p className="mb-6">
              {t("Contact us to schedule your first consultation.")} {/* Istnieje */}
            </p>
            <Link
              to="/booking"
              className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                hover:shadow-lg transition-all duration-300 font-medium inline-block"
            >
              {t("Book Appointment")} {/* Istnieje */}
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
