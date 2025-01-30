import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

interface Step {
  id: number;
  title: string;
  description: string;
}

interface WizardProgressProps {
  steps: Step[];
  currentStep: number;
}

export default function WizardProgress({
  steps,
  currentStep,
}: WizardProgressProps) {
  const { t } = useTranslation(); // Using the translation hook

  return (
    <nav aria-label={t("Progress")}>
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.title} className="md:flex-1">
            <div
              className={`
              group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0
              ${
                step.id < currentStep
                  ? "border-[#46B7C6]"
                  : step.id === currentStep
                  ? "border-[#46B7C6]"
                  : "border-gray-200"
              }
            `}
            >
              <span className="text-sm font-medium text-[#46B7C6]">
                {step.id < currentStep ? (
                  <span className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    {t(step.title)}
                  </span>
                ) : (
                  <span>
                    {t("Step")} {step.id}. {t(step.title)}
                  </span>
                )}
              </span>
              <span className="text-sm text-gray-500">
                {t(step.description)}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
