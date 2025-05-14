import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import type { Service } from "../types";
import customAxios from "../../../lib/customaxios";
import { useTranslation } from "react-i18next";

interface ServiceSelectionProps {
  selectedService: Service | null;
  onSelect: ( service: Service ) => void;
}

export default function ServiceSelection( {
  selectedService,
  onSelect,
  selectedClinic,
  setSelectedClinic,
  selectedDoctor,
  setSelectedDoctor
}: ServiceSelectionProps ) {
  const { t, i18n } = useTranslation();

  console.log( "i18n", i18n.language )


  const [ services, setServices ] = useState<Service[]>( [] );
  const [ clinics, setClinics ] = useState<Service[]>( [] );





  const handleClinicChange = ( e ) => {
    const selectedId = e.target.value;
    const clinic = clinics.find( clinic => clinic._id === selectedId );
    // console.log( "Selected clinic object:", clinic );
    setSelectedClinic( clinic );
    setSelectedDoctor( null )
  };



  const handleDoctorChange = ( e ) => {
    const selectedId = e.target.value;

    // Find the first clinic that contains a doctor with the matching ID
    const clinicWithSelectedDoctor = clinics.find( clinic =>
      clinic.doctors.some( doctor => doctor._id === selectedId )
    );

    if ( clinicWithSelectedDoctor ) {
      // Find the specific doctor in the found clinic

      console.log( "clinicWithSelectedDoctor", clinicWithSelectedDoctor )
      const doctor = clinicWithSelectedDoctor.doctors.find( doctor => doctor._id === selectedId );
      // console.log( "Selected doctor object:", doctor );
      setSelectedDoctor( doctor );
    } else {
      // console.log( "No doctor found with the id:", selectedId );
      setSelectedDoctor( null );  // Or handle as needed
    }
  };


  useEffect( () => {
    // ( async () => {
    //   try {
    //     const response = await customAxios.post(
    //       "/api/clinical-services/fetchservices"
    //     );
    //     setServices( response.data );
    //   } catch ( error ) { }
    // } )();
    ( async () => {
      try {
        const response = await customAxios.post( "/api/clinics/fetchclinics" );
        setClinics( response.data );
      } catch ( error ) { }
    } )();
  }, [] );

  const fetchClinicServices = async () => {
    try {

      let payload = {
        clinicId: selectedClinic._id,
        doctorId: selectedDoctor._id,

      }
      const response = await customAxios.post(
        `/api/clinics/clinical-services`, payload
      );

      console.log( "Response coming", response )
      setServices( response.data );
    } catch ( error ) {

      console.log( "error coming", error.message )
      // Toast.fire( "error", error?.message, "error" )
    }
  }

  useEffect( () => {
    // console.log( "selected doctor changes", selectedDoctor )

    if ( selectedDoctor == null ) return
    fetchClinicServices()
  }, [ selectedDoctor ] )


  console.log( "services we get after the clinical changes", services )
  // console.log( "services we get after the clinical changes", selectedService )
  // console.log( "clinics state", clinics )
  // console.log( "selectedClinic", selectedClinic )
  // console.log( "selectedDoctor", selectedDoctor )



  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {t( "Choose a service" )}
        </h2>
        <p className="mt-2 text-gray-600">
          {t(
            "Select the type of consultation or service you are interested in"
          )}
        </p>
      </div>

      <div className="flex  items-center gap-3">

        <form className="w-[300px]">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {/* {t( "Select an option" )} */}
            Clinic
          </label>
          <select

            onChange={handleClinicChange}
            id="countries"
            value={selectedClinic ? selectedClinic._id : ''}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>{t( "Select a clinic" )}</option>
            {clinics.map( ( clinic ) => {
              return <option value={clinic._id}>{clinic.name}</option>;
            } )}
          </select>
        </form>

        {selectedClinic && (
          <form className="w-[300px]">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {/* {t( "Select an option " )} */}
              Doctor
            </label>
            <select

              onChange={handleDoctorChange}
              id="countries"
              value={selectedDoctor ? selectedDoctor._id : ''}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>{t( "Select a doctor" )}</option>
              {selectedClinic?.doctors.map( ( clinic ) => {
                return <option value={clinic._id}>{clinic.name}</option>;
              } )}
            </select>
          </form>
        )}

      </div>



      {/* {selectedClinicId && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinics
            .find( ( clinic ) => clinic._id === selectedClinicId )
            ?.services.map( ( s ) => {
              let service = services.find( ( service ) => service._id === s );
              const Icon = service.icon;
              const isSelected = selectedService?._id === service._id;

              return (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    onSelect(
                      service,
                      clinics.find( ( c ) => c._id === selectedClinicId )
                    )
                  }
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300
                ${isSelected
                      ? "bg-[#46B7C6] text-white shadow-lg"
                      : "bg-white hover:shadow-md"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${isSelected ? "bg-white/20" : "gradient-theme"}`}
                    >
                      <Users
                        className={`h-6 w-6 ${isSelected ? "text-white" : "text-white"
                          }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {service?.name}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${isSelected ? "text-white/90" : "text-gray-600"
                          }`}
                      >
                        {service?.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm ${isSelected ? "text-white/90" : "text-gray-500"
                            }`}
                        >
                          {t( "Time:" )} {service?.duration} {t( "minutes" )}
                        </span>
                        <span className="font-medium">{service?.price} PLN</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            } )}
        </div>
      )} */}

      {selectedClinic && selectedDoctor && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map( ( item ) => {
            const Icon = item.icon; // Assuming `icon` is part of your service object
            const isSelected = selectedService?._id === item._id;

            return (
              <motion.button
                key={item._id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // onClick={() => onSelect( item )}

                onClick={() =>
                  onSelect(
                    item,
                    selectedClinic,
                    selectedDoctor
                  )
                }
                className={`w-full text-left p-6 rounded-xl transition-all duration-300
            ${isSelected ? "bg-[#46B7C6] text-white shadow-lg" : "bg-white hover:shadow-md"}`
                }
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                ${isSelected ? "bg-white/20" : "gradient-theme"}`
                    }
                  >


                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">

                      {i18n.language === "en" ? item.engName : item.name}


                      {/* {item.name} */}
                    </h3>
                    <p className={`text-sm mb-4 ${isSelected ? "text-white/90" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isSelected ? "text-white/90" : "text-gray-500"}`}>
                        {t( "Time:" )} {item.duration} {t( "minutes" )}
                      </span>
                      <span className="font-medium">
                        {item.price} PLN
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          } )}
        </div>
      )
      }

    </div >
  );
}
