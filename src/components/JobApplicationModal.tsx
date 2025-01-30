import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  FileText,
  Upload,
  Briefcase,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import customAxios from "../lib/customaxios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Invalid phone number"),
  position: z.string().min(1, "Select a position"),
  experience: z.string().min(1, "Describe your experience"),
  cv: z.any(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent for data processing is required",
  }),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const positions = [
  "Psychiatra",
  "Psychiatra Dzieci i Młodzieży",
  "Psychoterapeuta",
  "Psycholog Kliniczny",
  "Asystent Administracyjny",
];

export default function JobApplicationModal({
  isOpen,
  onClose,
}: JobApplicationModalProps) {
  const { t } = useTranslation(); // Initialize the t function
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });
  const [cvPreview, setCvPreview] = useState({
    name: "",
    base64: "",
  });

  // Handle CV upload and convert to base64
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCvPreview({
          name: file.name,
          base64: base64String,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ApplicationForm) => {
    try {
      console.log("Application data:", data);
      await customAxios.post("/api/requests/job-application", {
        ...data,
        cv: cvPreview,
      });
      reset();
      onClose();
      toast.success("Job application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit job application");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("Job Application Form")} {/* Translated title */}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("First Name")} {/* Translated label */}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          {...register("firstName")}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                            focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                        />
                      </div>
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
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          {...register("lastName")}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                            focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {t(errors.lastName.message as string)}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Email")} {/* Translated label */}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          {...register("email")}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                            focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                        />
                      </div>
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
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          {...register("phone")}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                            focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {t(errors.phone.message as string)}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Position")}
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        {...register("position")}
                        className="w-full appearance-none pl-10 pr-8 py-2 border border-gray-200 rounded-lg
                          focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent bg-white"
                        style={{
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="">{t("Select position")}</option>
                        {positions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.position && (
                      <p className="mt-1 text-sm text-red-600">
                        {t(errors.position.message as string)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Work Experience")}
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        {...register("experience")}
                        rows={4}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                          focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                        placeholder={t("Describe your work experience...")}
                      />
                    </div>
                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-600">
                        {t(errors.experience.message as string)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("CV")}
                    </label>
                    <div className="relative">
                      <input
                        onChange={handleCvChange}
                        type="file"
                        className="hidden"
                        id="cv-upload"
                        accept=".pdf,.doc,.docx"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="flex items-center gap-2 w-full px-4 py-2 border border-gray-200 
                          rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <Upload className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">
                          {cvPreview.name
                            ? cvPreview.name
                            : t("Select a CV file (PDF, DOC, DOCX)")}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#46B7C6]
                        focus:ring-[#46B7C6]"
                    />
                    <label className="text-sm text-gray-600">
                      {t(
                        "I agree to the processing of my personal data to schedule the appointment, in line with the privacy policy. I understand that I can withdraw my consent at any time."
                      )}
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-sm text-red-600">
                      {t(errors.consent.message as string)}
                    </p>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 gradient-theme text-white px-6 py-3 rounded-xl
                        hover:shadow-lg transition-all duration-300 font-medium"
                    >
                      {t("Submit Application")}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border-2 border-gray-200 rounded-xl
                        hover:border-gray-300 transition-colors font-medium"
                    >
                      {t("Cancel")}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
