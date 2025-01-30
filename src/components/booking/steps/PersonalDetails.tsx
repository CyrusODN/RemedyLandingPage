import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { PersonalInfoSchema, type PersonalInfo } from "../types";
import { useTranslation } from "react-i18next";

interface PersonalDetailsProps {
  personalInfo: PersonalInfo | null;
  onSubmit: (data: PersonalInfo) => void;
  onBack: () => void;
}

export default function PersonalDetails({
  personalInfo,
  onSubmit,
  onBack,
}: PersonalDetailsProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo || undefined,
  });

  return (
    <div className="space-y-8">
      <div>
        <button
          onClick={onBack}
          className="flex items-center text-[#46B7C6] hover:text-[#3A8A9E] mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          {t("Back")}
        </button>

        <h2 className="text-2xl font-bold text-gray-900">
          {t("Personal Details")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("Fill in your contact details needed for the reservation")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("First Name")}
              </label>
              <input
                type="text"
                {...register("firstName")}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg
                  focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {t(errors.firstName.message as string)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Last Name")}
              </label>
              <input
                type="text"
                {...register("lastName")}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg
                  focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {t(errors.lastName.message as string)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Email")}
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg
                  focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {t(errors.email.message as string)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("Phone")}
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg
                  focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {t(errors.phone.message as string)}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("Additional Information (optional).")}
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg
                focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
              placeholder={t("E.g. special needs or important information")}
            />
          </div>

          <div className="mt-6">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#46B7C6]
                  focus:ring-[#46B7C6]"
              />
              <span className="text-sm text-gray-600">
                {t(
                  "I agree to the processing of my personal data to schedule the appointment, in line with the privacy policy. I understand that I can withdraw my consent at any time."
                )}
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-600">
                {t(errors.consent.message as string)}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="gradient-theme text-white px-8 py-3 rounded-xl
              hover:shadow-lg transition-all duration-300 font-medium"
          >
            {t("Next")}
          </button>
        </div>
      </form>
    </div>
  );
}
