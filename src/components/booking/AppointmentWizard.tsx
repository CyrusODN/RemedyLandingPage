import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSelection from "./steps/ServiceSelection";
import DateTimeSelection from "./steps/DateTimeSelection";
import PersonalDetails from "./steps/PersonalDetails";
import BookingSummary from "./steps/BookingSummary";
import WizardProgress from "./WizardProgress";
import type { BookingData, Service } from "./types";
import customAxios from "../../lib/customaxios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook
import { toast } from "react-toastify";
import PaymentDialog from "./PaymentDialog";

import moment from "moment-timezone";

const defaultTimeZone = moment.tz.guess();
const offset = moment().tz( defaultTimeZone ).utcOffset();

const timeZone = {
  label: defaultTimeZone,
  value: defaultTimeZone,
  offset: offset,
};


const steps = [
  {
    id: 1,
    title: "Choose a service",
    description: "Select the type of consultation",
  },
  { id: 2, title: "Date and time", description: "Choose a convenient time" },
  {
    id: 3,
    title: "Personal details",
    description: "Fill in your personal information",
  },
  { id: 4, title: "Confirmation", description: "Check and confirm" },
];

export default function AppointmentWizard() {
  const { t } = useTranslation(); // Using the useTranslation hook
  const navigate = useNavigate();
  const [ currentStep, setCurrentStep ] = useState( 1 );
  const [ selectedClinic, setSelectedClinic ] = useState<Service | null>(
    null
  );

  const [ selectedDoctor, setSelectedDoctor ] = useState<Service | null>(
    null
  );
  const [ bookingData, setBookingData ] = useState<BookingData>( {
    service: null,
    date: null,
    time: null,
    personalInfo: null,
    clinic: null,
    doctor: null,


  } );
  const [ price, setPrice ] = useState( 0 );
  const [ openPay, setOpenPay ] = useState( false );

  const updateBookingData = ( data: Partial<BookingData> ) => {
    setBookingData( ( prev ) => ( { ...prev, ...data } ) );
  };

  const nextStep = () => {
    if ( currentStep < steps.length ) {
      setCurrentStep( ( prev ) => prev + 1 );
    }
  };

  const prevStep = () => {
    if ( currentStep > 1 ) {
      setCurrentStep( ( prev ) => prev - 1 );
    }
  };

  const createBooking = async ( stripeResponse?: any ) => {
    try {
      await customAxios.post( "/api/calendar/create-booking", {
        ...bookingData,
        stripeResponse,
        timeZone: timeZone
      } );
      toast.success( "Appointment booked successfully" );
      setBookingData( {
        service: null,
        date: null,
        time: null,
        personalInfo: null,
        clinic: null,
        doctor: null
      } );
      setCurrentStep( 1 );
      setOpenPay( false );
    } catch ( error ) {
      toast.error( "Failed to book appointment" );
    }
  };

  const handleBuy = async () => {
    if ( bookingData.service?.price > 0 ) {
      setPrice( bookingData.service.price );
      setOpenPay( true );
    } else {
      createBooking();
    }
  };


  console.log( "booking data in index file", bookingData )

  const renderStep = () => {
    switch ( currentStep ) {
      case 1:
        return (
          <ServiceSelection
            selectedClinic={selectedClinic}
            setSelectedClinic={setSelectedClinic}
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
            selectedService={bookingData.service}
            onSelect={( service, clinic, doctor ) => {
              setBookingData( ( pre ) => ( { ...pre, service, clinic, doctor } ) );
              nextStep();
            }}
          />
        );
      case 2:
        return (
          <DateTimeSelection
            selectedDate={bookingData.date}
            selectedTime={bookingData.time}
            onSelect={( date, time ) => {
              updateBookingData( { date, time } );
              nextStep();
            }}
            bookingData={bookingData}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <PersonalDetails
            personalInfo={bookingData.personalInfo}
            onSubmit={( personalInfo ) => {
              updateBookingData( { personalInfo } );
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <BookingSummary
            bookingData={bookingData}
            onConfirm={handleBuy}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <WizardProgress steps={steps} currentStep={currentStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {renderStep()}

            {price > 0 && openPay && (
              <PaymentDialog
                open={openPay}
                setOpen={setOpenPay}
                amount={price}
                handlePaymentDone={createBooking}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
