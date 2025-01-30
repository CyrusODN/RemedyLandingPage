import React, { useEffect, useState } from "react";
import { format, set } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { ChevronLeft } from "lucide-react";
import "react-day-picker/dist/style.css";
import customAxios from "../../../lib/customaxios";
import { BookingData } from "../types";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18";
import { toast } from "react-toastify";

interface DateTimeSelectionProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelect: ( date: Date, time: string ) => void;
  onBack: () => void;
  bookingData: BookingData;
}

export default function DateTimeSelection( {
  selectedDate,
  selectedTime,
  onSelect,
  onBack,
  bookingData,
}: DateTimeSelectionProps ) {
  const { t } = useTranslation();
  const [ date, setDate ] = useState<Date | undefined>( selectedDate || undefined );
  const [ time, setTime ] = useState<string | null>( selectedTime );
  const [ timeSlots, setTimeSlots ] = useState<string[]>( [] );

  const handleDateSelect = async ( newDate: Date | undefined ) => {
    if ( newDate ) {
      // Normalize the date to midnight UTC
      const utcDate = new Date(
        Date.UTC( newDate.getFullYear(), newDate.getMonth(), newDate.getDate() )
      );

      setDate( utcDate );
      await fetchAvailableSlots( utcDate );
      setTime( null );
    }
  };

  const fetchAvailableSlots = async ( date: Date ) => {
    try {
      const utcDate = date.toISOString(); // Already normalized to UTC

      const response = await customAxios.post(
        "/api/calendar/getavailableslots",
        {
          date: utcDate,
          clinic_id: bookingData.clinic._id,
          service_id: bookingData.service._id,
          doctor_id: bookingData?.doctor?._id,

        }
      );

      setTimeSlots( response.data );
    } catch ( error ) {
      setTimeSlots( [] );
      console.error( "Error fetching available slots:", error );
      toast.error( error?.response?.data?.message );
    }
  };

  useEffect( () => {
    if ( !date ) {
      handleDateSelect( new Date() );
    }
  }, [] );

  const handleTimeSelect = ( newTime: string ) => {
    setTime( newTime );
    if ( date ) {
      onSelect( date, newTime );
    }
  };


  console.log( "bookingData coming", bookingData )

  let clinic = bookingData.clinic._id
  let doctorAvailability = bookingData?.doctor.availability.filter( ( item ) => item.clinic == bookingData.clinic._id ) // it is an array where the day name and clinic is present throguh id 
  console.log( "doctorAvailability", doctorAvailability )

  const availableDays = doctorAvailability.map( ( item ) => item.day.toLowerCase() );

  const allDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const disabledDays = allDays.filter( ( day ) => !availableDays.includes( day ) );



  console.log( "time slots after the date selecteion", timeSlots )

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
          {t( "Select Date and Time" )}
        </h2>
        <p className="mt-2 text-gray-600">
          {t( "Choose a convenient day and time for your visit" )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            locale={i18n.language === "pl" ? pl : enUS}
            modifiers={{
              disabled: [
                ( date ) =>
                  date < new Date() || // Disable past dates
                  disabledDays.includes( date.toLocaleDateString( "en-US", { weekday: "long" } ).toLowerCase() ),
              ],
            }}
            modifiersStyles={{
              selected: {

                backgroundColor: "#46B7C6",
                color: "white",

              },
            }}
            styles={{
              caption: { color: "#374151" },
              head_cell: { color: "#6B7280" },
            }}
            fromDate={new Date()}
          />
        </div>

        <div className="space-y-4">
          {date ? (
            <>
              <h3 className="font-medium text-gray-900">
                {t( "Available Times on" )}{" "}
                {format( date, "d MMMM yyyy", { locale: pl } )}:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map( ( slot ) => (
                  <button
                    key={slot}
                    onClick={() => handleTimeSelect( slot )}
                    className={`
                      py-3 px-4 rounded-lg text-center transition-all duration-300
                      ${time === slot
                        ? "bg-[#46B7C6] text-white"
                        : "bg-white hover:shadow-md text-gray-900"
                      }
                    `}
                  >
                    {slot?.start}
                  </button>
                ) )}

                {/* {timeSlots.length == 0 && (
                  <div className="text-gray-600">
                    {t( "No available slots for selected date" )}
                  </div>
                )} */}
              </div>
            </>
          ) : (
            <div className="bg-white p-6 rounded-xl text-center text-gray-500">
              {t( "Select a date to see available times" )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
