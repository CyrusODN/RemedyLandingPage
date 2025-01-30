import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Mail, Phone, User, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spline from "@splinetool/react-spline";
import customAxios from "../lib/customaxios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const demoRequestSchema = z.object({
  firstName: z.string().min(2, "Imię jest wymagane"),
  lastName: z.string().min(2, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(9, "Nieprawidłowy numer telefonu"),
  company: z.string().min(2, "Nazwa placówki jest wymagana"),
  role: z.string().min(2, "Stanowisko jest wymagane"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Wymagana jest zgoda na przetwarzanie danych",
  }),
});

type DemoRequest = z.infer<typeof demoRequestSchema>;

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Logo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 5563 1373"
    className="w-48 mx-auto"
  >
    <g transform="matrix(1,0,0,1,-5776,-4887)">
      <g transform="matrix(0.667511,0,0,0.164628,5776.11,4887.65)">
        <g transform="matrix(5.37388,0,0,21.7893,-1090.81,-17616.5)">
          <g transform="matrix(0.24,0,0,0.24,201.685,799.993)">
            <path
              d="M1176.72,647.641C1176.72,520.486 1071.36,433.997 962.572,433.997L508.093,433.997L508.093,501.548L962.572,501.548C1052.44,501.548 1108,568.887 1108,647.641C1108,726.396 1052.44,793.031 962.572,793.031L739.176,793.031L739.176,860.518L776.001,860.518L1049.64,1232.67L1128.38,1232.67L858.779,860.518L962.572,860.518C1071.36,860.518 1176.72,774.796 1176.72,647.641ZM2008.04,860.216L1940.37,860.216L1940.37,1232.67L2008.04,1232.67L2008.04,860.216ZM2680.33,434.531L2680.33,1232.67L2747.29,1232.67L2747.29,434.531L2680.33,434.531ZM1290.37,1165.14L1795.27,1165.14L1795.27,1232.67L1290.37,1232.67L1290.37,1165.14ZM2896.35,1165.14L3401.24,1165.14L3401.24,1232.67L2896.35,1232.67L2896.35,1165.14ZM4376.53,434.216L4294.35,434.216L4616.69,953.293L4618,1232.57L4690.89,1232.57L4689.89,952.251L4376.53,434.216ZM3863.28,434.531L3562.67,434.531L3562.67,501.428L3858.77,501.428C4082.51,501.428 4218.45,639.906 4218.45,833.951C4218.45,1028 4082.51,1165.05 3858.77,1165.05L3629.81,1165.05L3628.53,793.12L3562.67,793.12L3562.67,1232.57L3863.28,1232.57C4102.99,1232.57 4286.65,1073.66 4286.65,833.951C4286.65,594.239 4102.99,434.531 3863.28,434.531ZM4936.71,434.216L4688.72,837.117L4726.23,895.347L5013.63,434.216L4936.71,434.216ZM1940.37,793.12L2008.04,793.12L2008.04,541.222L2335.89,860.312L2355.88,860.312L2613.16,609.034L2613.16,513.295L2346.37,777.72L2008.04,434.531L1940.37,434.531L1940.37,793.12ZM1290.37,793.12L1763,793.12L1763,860.312L1290.37,860.312L1290.37,793.12ZM2896.35,793.12L3368.97,793.12L3368.97,860.312L2896.35,860.312L2896.35,793.12ZM1290.37,433.997L1795.27,433.997L1795.27,501.524L1290.37,501.524L1290.37,433.997ZM2896.35,433.997L3401.24,433.997L3401.24,501.524L2896.35,501.524L2896.35,433.997Z"
              style={{ fill: "rgb(13,13,13)", fillRule: "nonzero" }}
            />
          </g>
          <g transform="matrix(0.24,0,0,0.24,-147.422,-2001.1)">
            <path
              d="M2028.91,12464.3L2028.91,12360.6L1961.38,12360.6L1961.38,12464.3L1857.65,12464.3L1857.65,12531.9L1961.38,12531.9L1961.38,12635.6L2028.91,12635.6L2028.91,12531.9L2132.65,12531.9L2132.65,12464.3L2028.91,12464.3Z"
              style={{ fill: "url(#_Linear1)" }}
            />
          </g>
          <g transform="matrix(0.278775,0,0,0.278775,218.948,767.68)">
            <path
              d="M4667.74,489.542L4627.92,489.542L4311.62,1177.11L4377.26,1177.11L4651.92,573.995L4888.16,1119.76L4647.83,1119.76L4631.24,1177.12L4979.54,1177.12L4979.53,1177.11L4984.04,1177.11L4667.74,489.542ZM5133.98,1177.11L5076.22,1177.11L5076.22,489.542L5133.98,489.542L5133.98,1177.11Z"
              style={{ fill: "url(#_Linear2)", fillRule: "nonzero" }}
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(274.998,0,0,-275.002,1857.65,12498.1)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(61,151,197)", stopOpacity: 1 }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(79,215,199)", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient
        id="_Linear2"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(822.362,0,0,-687.589,4311.61,833.334)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(61,151,197)", stopOpacity: 1 }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(79,215,199)", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
  </svg>
);

const LoadingSpinner = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B7C6]"></div>
  </div>
);

export default function DemoRequestModal({
  isOpen,
  onClose,
}: DemoRequestModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoRequest>({
    resolver: zodResolver(demoRequestSchema),
  });

  const onSubmit = async (data: DemoRequest) => {
    try {
      console.log("Application data:", data);
      await customAxios.post("/api/requests/demo", {
        ...data,
      });
      reset();
      onClose();
      toast.success("Demo request submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit demo request");
    }
  };
  const { t } = useTranslation();
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
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Logo and Animation Section for Desktop */}
                <div className="hidden lg:flex lg:flex-col bg-white rounded-l-2xl">
                  {/* Logo */}
                  <div className="p-8 bg-white">
                    <Logo />
                  </div>

                  {/* Spline Animation */}
                  <div className="flex-1 bg-gradient-to-br from-[#46B7C6]/5 to-[#3A8A9E]/5">
                    <Suspense fallback={<LoadingSpinner />}>
                      <Spline
                        scene="https://prod.spline.design/YiUlKTUodeiP5DzV/scene.splinecode"
                        className="w-full h-full"
                      />
                    </Suspense>
                  </div>
                </div>

                {/* Form Section */}
                <div className="lg:order-2">
                  {/* Mobile Logo and Animation */}
                  <div className="lg:hidden bg-white">
                    <div className="p-4 bg-white">
                      <Logo />
                    </div>
                    <div className="h-48 bg-gradient-to-br from-[#46B7C6]/5 to-[#3A8A9E]/5 relative overflow-hidden">
                      <Suspense fallback={<LoadingSpinner />}>
                        <Spline
                          scene="https://prod.spline.design/YiUlKTUodeiP5DzV/scene.splinecode"
                          className="w-full h-full scale-150 origin-center"
                        />
                      </Suspense>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {t("Request a Demo")}
                    </h2>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t("First Name")}
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
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {"Last Name"}
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
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t("Email")}
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
                              {errors.email.message}
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
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t("company")}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building2 className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            {...register("company")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                              focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                          />
                        </div>
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.company.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t("role")}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FileText className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            {...register("role")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                              focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                          />
                        </div>
                        {errors.role && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.role.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {"message"}
                        </label>
                        <textarea
                          {...register("message")}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg
                            focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent"
                          placeholder={t(
                            "Additional information or questions..."
                          )}
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
                            "I agree to the processing of my personal data to schedule the appointment, in line with the privacy policy. I understand that I can withdraw my consent at any time."
                          )}
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-sm text-red-600">
                          {errors.consent.message}
                        </p>
                      )}

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="flex-1 gradient-theme text-white px-6 py-3 rounded-xl
                            hover:shadow-lg transition-all duration-300 font-medium"
                        >
                          {t("Submit a request")}
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
