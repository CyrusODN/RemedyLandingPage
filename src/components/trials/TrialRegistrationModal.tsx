import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import customAxios from "../../lib/customaxios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const registrationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Invalid phone number"),
  birthDate: z.string(),
  medicalHistory: z.string(),
  currentMedications: z.string(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the processing of your data",
  }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

interface TrialRegistrationModalProps {
  onClose: () => void;
  trail: any;
}

export default function TrialRegistrationModal({
  onClose,
  trail,
}: TrialRegistrationModalProps) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>();
  const onSubmit = async (data: RegistrationForm) => {
    try {
      console.log("Application data:", data);
      await customAxios.post("/api/clinical-trails/apply", {
        ...data,
        trailId: trail._id,
        nctId: trail.nctId,
      });
      onClose();
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to send application");
    }
  };

  return (
    <AnimatePresence>
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
                {t("Registration form")}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("First name")}
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
                      {t("Last name")}
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Date of birth")}
                  </label>
                  <input
                    type="date"
                    {...register("birthDate")}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg
                      focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Detailed medical history.")}
                  </label>
                  <textarea
                    {...register("medicalHistory")}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg
                      focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                    placeholder={t("Describe your medical history...")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Medications you are currently taking.")}
                  </label>
                  <textarea
                    {...register("currentMedications")}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg
                      focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                    placeholder={t("List the medications you are taking...")}
                  />
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
                      "I consent to the processing of my personal data for recruitment to the clinical study according to the privacy policy."
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
                    {t("Submit application")}
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
    </AnimatePresence>
  );
}
