import React from "react";
import { format } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import {
  ChevronLeft,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import type { BookingData } from "../types";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18";

interface BookingSummaryProps {
  bookingData: BookingData;
  onConfirm: () => void;
  onBack: () => void;
}

export default function BookingSummary( {
  bookingData,
  onConfirm,
  onBack,
}: BookingSummaryProps ) {

  console.log( "bookingData in the final steps", bookingData )
  const { t } = useTranslation();
  const { service, date, time, personalInfo, doctor } = bookingData;

  if ( !service || !date || !time || !personalInfo ) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div>
        <button
          onClick={onBack}
          className="flex items-center text-[#46B7C6] hover:text-[#3A8A9E] mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          {t( "Back" )}
        </button>

        <h2 className="text-2xl font-bold text-gray-900">
          {t( "Booking Summary" )}
        </h2>
        <p className="mt-2 text-gray-600">
          {t( "Verify your details before confirming your booking." )}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            {t( "Visit Details" )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t( "Date" )}</p>
                <p className="font-medium">
                  {format( date, "d MMMM yyyy", {
                    locale: i18n.language === "en" ? enUS : pl,
                  } )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t( "Time" )}</p>
                <p className="font-medium">{time.start}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">{t( "Service" )}</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900">{service.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-500">
                {t( "Duration" )}: {service.duration}
              </span>
              <span className="font-medium">{service.price} PLN</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">
            {t( "Personal Information" )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t( "Full Name" )}</p>
                <p className="font-medium">
                  {personalInfo.firstName} {personalInfo.lastName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t( "Email" )}</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t( "Phone" )}</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
            </div>

            {personalInfo.notes && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-theme rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {t( "Additional Notes" )}
                  </p>
                  <p className="font-medium">{personalInfo.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 border-2 border-gray-200 rounded-xl
            hover:border-gray-300 transition-colors font-medium"
        >
          {t( "Back" )}
        </button>
        <button
          onClick={onConfirm}
          className="gradient-theme text-white px-8 py-3 rounded-xl
            hover:shadow-lg transition-all duration-300 font-medium"
        >
          {t( "Confirm Reservation" )}
        </button>
      </div>
    </div>
  );
}
