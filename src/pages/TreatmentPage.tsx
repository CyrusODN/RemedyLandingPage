import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import {
  ArrowLeft,
  Brain,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function TreatmentPage() {
  const treatmentData = {
    depresja: {
      title: "Depression Treatment",
      description:
        "A comprehensive approach to treating depression, combining pharmacotherapy with psychotherapy.",
      symptoms: [
        "Low mood",
        "Loss of interest",
        "Sleep disturbances",
        "Fatigue",
        "Concentration problems",
      ],
      treatments: [
        "Cognitive-behavioral therapy",
        "Pharmacotherapy",
        "Group therapy",
        "Psychoeducation",
        "Social support",
      ],
      duration: "6-12 months",
      success: "80% of patients report significant improvement",
    },
    ptsd: {
      title: "PTSD Treatment",
      description:
        "Specialized treatment for post-traumatic stress disorder using proven therapeutic methods.",
      symptoms: [
        "Recurrent trauma memories",
        "Nightmares",
        "Avoidance of trauma-related stimuli",
        "Excessive alertness",
        "Sleep and concentration problems",
      ],
      treatments: [
        "Trauma-focused cognitive-behavioral therapy",
        "EMDR (Eye Movement Desensitization and Reprocessing)",
        "Exposure therapy",
        "Supporting pharmacotherapy",
        "Relaxation and mindfulness techniques",
      ],
      duration: "3-6 months",
      success: "70% of patients report significant symptom reduction",
    },
    "zaburzenia-lekowe": {
      title: "Anxiety Disorder Treatment",
      description:
        "Specialized therapy for anxiety disorders using the latest methods.",
      symptoms: [
        "Excessive worrying",
        "Muscle tension",
        "Panic attacks",
        "Avoidance of situations",
        "Breathing difficulties",
      ],
      treatments: [
        "Exposure therapy",
        "Relaxation techniques",
        "Pharmacotherapy",
        "Mindfulness",
        "Breathing exercises",
      ],
      duration: "3-6 months",
      success: "75% of patients report symptom reduction",
    },
    schizofrenia: {
      title: "Schizophrenia Treatment",
      description:
        "An integrated approach to schizophrenia treatment using modern methods.",
      symptoms: [
        "Delusions",
        "Hallucinations",
        "Disorganized thinking",
        "Emotional blunting",
        "Social withdrawal",
      ],
      treatments: [
        "Antipsychotic medications",
        "Individual psychotherapy",
        "Family therapy",
        "Social skills training",
        "Psychiatric rehabilitation",
      ],
      duration: "Long-term treatment",
      success: "70% of patients achieve stabilization",
    },
    chad: {
      title: "Bipolar Disorder Treatment",
      description: "Specialized treatment for bipolar disorder.",
      symptoms: [
        "Mood swings",
        "Manic episodes",
        "Depressive episodes",
        "Sleep disturbances",
        "Impulsivity",
      ],
      treatments: [
        "Mood stabilizers",
        "Psychoeducation",
        "Cognitive therapy",
        "Mood monitoring",
        "Family support",
      ],
      duration: "Continuous treatment",
      success: "75% of patients achieve stabilization",
    },
    adhd: {
      title: "ADHD Treatment",
      description:
        "Comprehensive therapy for Attention-Deficit/Hyperactivity Disorder.",
      symptoms: [
        "Concentration problems",
        "Excessive activity",
        "Impulsivity",
        "Disorganization",
        "Difficulty in learning/work",
      ],
      treatments: [
        "Pharmacotherapy",
        "Behavioral therapy",
        "Attention training",
        "Educational support",
        "ADHD coaching",
      ],
      duration: "6-12 months",
      success: "80% of patients report improvement in functioning",
    },
    "zaburzenia-osobowosci": {
      title: "Personality Disorder Treatment",
      description: "Specialized therapy for personality disorders.",
      symptoms: [
        "Difficulties in relationships",
        "Emotional instability",
        "Identity issues",
        "Impulsivity",
        "Self-destructive behaviors",
      ],
      treatments: [
        "Long-term psychotherapy",
        "DBT (Dialectical Behavior Therapy)",
        "Schema therapy",
        "Skills training",
        "Group support",
      ],
      duration: "1-2 years",
      success: "70% of patients achieve significant improvement",
    },
    "zaburzenia-snu": {
      title: "Sleep Disorder Treatment",
      description:
        "A comprehensive approach to diagnosing and treating sleep disorders.",
      symptoms: [
        "Difficulty falling asleep",
        "Frequent waking at night",
        "Waking up too early",
        "Irregular sleep rhythm",
        "Daytime fatigue",
      ],
      treatments: [
        "Cognitive-behavioral therapy for insomnia (CBT-I)",
        "Sleep hygiene",
        "Relaxation techniques",
        "Pharmacotherapy (in justified cases)",
        "Sleep quality monitoring",
      ],
      duration: "2-4 months",
      success:
        "85% of patients report significant improvement in sleep quality",
    },
  };

  const { t } = useTranslation();
  const { condition } = useParams();
  const treatmentInfo = treatmentData[condition as keyof typeof treatmentData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!treatmentInfo) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("No information found for this condition")}
          </h1>
          <Link
            to="/"
            className="text-[#46B7C6] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("Back to homepage")}
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
              {t("Back to homepage")}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t(treatmentInfo.title)}
            </h1>
            <p className="text-xl text-gray-600">
              {t(treatmentInfo.description)}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-[#46B7C6]" />
                <h2 className="text-2xl font-semibold">{t("Symptoms")}</h2>
              </div>
              <ul className="space-y-3">
                {treatmentInfo.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full" />
                    <span className="text-gray-600">{t(symptom)}</span>
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
                  {t("Treatment Methods")}
                </h2>
              </div>
              <ul className="space-y-3">
                {treatmentInfo.treatments.map((method, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#46B7C6] rounded-full" />
                    <span className="text-gray-600">{t(method)}</span>
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
                    {t("Treatment Duration")}
                  </h3>
                </div>
                <p className="text-gray-600">{t(treatmentInfo.duration)}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-[#46B7C6]" />
                  <h3 className="text-xl font-semibold">
                    {t("Effectiveness")}
                  </h3>
                </div>
                <p className="text-gray-600">{t(treatmentInfo.success)}</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" className="mt-12">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t("Start Treatment")}
            </h3>
            <p className="mb-6">
              {t("Contact us to schedule your first consultation.")}
            </p>
            <Link
              to="/booking"
              className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                hover:shadow-lg transition-all duration-300 font-medium inline-block"
            >
              {t("Book Appointment")}
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
