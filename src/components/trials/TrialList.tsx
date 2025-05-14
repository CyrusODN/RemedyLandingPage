import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useTranslation } from "react-i18next"; // Added import
import TrialRegistrationModal from "./TrialRegistrationModal";
import TrialDetailsModal from "./TrialDetailsModal";
import type { Trial } from "../../types/trial";
import customAxios from "../../lib/customaxios";
import Language from "../Language";



interface TrialListProps {
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const translationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export default function TrialList( { onBack }: TrialListProps ) {
  const { t, i18n } = useTranslation(); // Added useTranslation hook
  const [ selectedTrial, setSelectedTrial ] = useState<Trial | null>( null );
  const [ showRegistration, setShowRegistration ] = useState( false );
  const [ open, setOpen ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const [ trails, setTrials ] = useState<Record<string, any>[]>( [] );
  const [ filteredTrails, setFilteredTrails ] = useState<Record<string, any>[]>(
    []
  );
  const [ locations, setLocations ] = useState( [] );
  const [ countries, setCountries ] = useState( [] );
  const [ selectedLocation, setSelectedLocation ] = useState<any>( null );
  const [ selectedCountry, setSelectedCountry ] = useState<any>( null );
  const [ selectedDate, setSelectedDate ] = useState( null );

  const [ mouseEnter, setMouseEnter ] = useState( false );



  // useEffect( () => {
  //   ( async () => {
  //     try {
  //       const response = await customAxios.post(
  //         "/api/clinical-trails/fetchactivetrails"
  //       );
  //       setTrials( response.data );
  //       setFilteredTrails( response.data );
  //       for ( const t of response.data ) {

  //         console.log( "t", t )

  //         if ( t?.trailData?.protocolSection?.contactsLocationsModule?.locations.length > 0 ) {

  //           console.log( "enter in if" )
  //           for ( const loc of t?.trailData?.protocolSection?.contactsLocationsModule?.locations ) {



  //             setCountries( ( prev ) =>
  //               !prev.includes( loc.country ) ? [ ...prev, loc.country ] : ( prev as any )
  //             );


  //             setLocations( ( prev ) =>
  //               !prev.includes( loc.city ) ? [ ...prev, loc.city ] : ( prev as any )
  //             );



  //           }
  //         }


  //       }
  //     } catch ( error ) { }
  //   } )();
  // }, [] );



  const fetchTrailList = async ( lang ) => {


    try {
      setLoading( true )
      const response = await customAxios.post(
        "/api/clinical-trails/fetchactivetrails", { language: lang }
      );

      setTrials( response.data );
      setFilteredTrails( response.data );

      const uniqueCountries = new Set();
      const uniqueCities = new Set();

      for ( const t of response.data ) {
        if ( t?.trailData?.protocolSection?.contactsLocationsModule?.locations.length > 0 ) {
          for ( const loc of t.trailData.protocolSection.contactsLocationsModule.locations ) {
            const normalizedCity = loc.city
              .normalize( "NFD" )
              .replace( /[\u0300-\u036f]/g, "" ); // Remove accents

            uniqueCountries.add( loc.country );
            uniqueCities.add( normalizedCity );
          }
        }
      }

      setCountries( Array.from( uniqueCountries ) ); // Convert Set to array
      setLocations( Array.from( uniqueCities ) ); // Convert Set to array
      setLoading( false )

    } catch ( error ) {
      setLoading( false )
      console.error( error );
    }


  }
  useEffect( () => {

    setFilteredTrails( [] )
    fetchTrailList( i18n.language )

  }, [ i18n.language ] );





  useEffect( () => {
    setFilteredTrails(
      trails.filter(
        ( t ) =>
          ( selectedLocation
            ? t?.trailData?.protocolSection?.contactsLocationsModule?.locations?.some(
              ( loc ) => loc.city.normalize( "NFD" )
                .replace( /[\u0300-\u036f]/g, "" ) === selectedLocation
            )
            : true ) &&
          ( selectedDate
            ? t?.trailData?.protocolSection?.statusModule?.startDateStruct
              ?.date === selectedDate
            : true )

          &&
          ( selectedCountry
            ? t?.trailData?.protocolSection?.contactsLocationsModule?.locations?.some(
              ( loc ) => loc.country === selectedCountry
            )
            : true )
      )
    );
  }, [ selectedDate, selectedLocation, trails, selectedCountry ] );




  useEffect( () => {
    const newLocations = new Set(); // Use Set to ensure uniqueness

    for ( const t of trails ) {
      if ( t?.trailData?.protocolSection?.contactsLocationsModule?.locations.length > 0 ) {
        for ( const loc of t.trailData.protocolSection.contactsLocationsModule.locations ) {
          if ( loc.country === selectedCountry ) {
            // Normalize city name
            const normalizedCity = loc.city

              .normalize( "NFD" )
              .replace( /[\u0300-\u036f]/g, "" ); // Remove accents

            newLocations.add( normalizedCity );
          }
        }
      }
    }

    setLocations( Array.from( newLocations ) ); // Convert Set to array
  }, [ selectedCountry, trails ] );



  console.log( "filtered trails", filteredTrails )





  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-12">
        <button
          onClick={onBack}
          className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          {t( "Back to trial information" )}
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t( "Available Clinical Trials" )}
        </h2>
        <p className="text-xl text-gray-600">
          {t(
            "Browse currently conducted trials and find the ones that best match your needs."
          )}
        </p>
      </motion.div>

      <div className="flex gap-2 flex-wrap mb-4">


        <select
          onChange={( e ) => setSelectedCountry( e.target.value )}
          id="country"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        >


          <option selected value="">
            Choose Country
          </option>
          {countries.map( ( country ) => (
            <option
              key={country}
              value={country}
              selected={country === selectedCountry}
            >
              {country}
            </option>
          ) )}
        </select>

        {selectedCountry && (

          <select
            onChange={( e ) => setSelectedLocation( e.target.value )}
            id="locations"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          >
            <option selected value="">
              Choose a location
            </option>
            {locations.map( ( location, index ) => (
              <option
                key={index}
                value={location}
                selected={location === selectedLocation}
              >
                {location}
              </option>
            ) )}
          </select>

        )}



        {/* <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          type="date"
          onChange={( e ) => setSelectedDate( e.target.value )}
          value={selectedDate}
        /> */}

        {/* <div className="relative">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full pr-10"
            type="date"
            onChange={( e ) => setSelectedDate( e.target.value )}
            value={selectedDate}
          />
          {selectedDate && (
            <button
              type="button"
              onClick={() => setSelectedDate( "" )} // Reset the date to default
              className="absolute top-2.5 right-2.5 text-gray-500 hover:text-red-500 focus:outline-none"
            >

              <X className="h-5 w-5" />
            </button>
          )}
        </div> */}

      </div>

      {loading && (
        <div className="flex flex-col justify-center items-center py-8">

          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div className="space-y-6">

        {filteredTrails.map( ( trial: any ) => (
          <motion.div
            key={trial._id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative"
          >
            <div className="p-6" onMouseEnter={( e ) => {
              setMouseEnter( true )

            }}

              onMouseLeave={( e ) => setMouseEnter( false )}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 bg-[#E5F6FD] text-[#0EA5E9]">
                    {
                      trial?.trailData?.protocolSection?.statusModule
                        ?.overallStatus
                    }
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="english"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={translationVariants}
                    >
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        {
                          trial?.trailData?.protocolSection?.descriptionModule
                            ?.briefSummary
                        }
                      </h2>
                      <p className="text-gray-600">
                        {
                          trial?.trailData?.protocolSection?.descriptionModule
                            ?.detailedDescription
                        }
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="text-sm text-gray-500 ml-4 flex-shrink-0">
                  ID: {trial.nctId}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {trial?.trailData?.derivedSection?.conditionBrowseModule?.ancestors?.map(
                  ( tag: any, index: number ) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag?.term}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {t( "Location" )}:{" "}




                    {/* {!selectedCountry && (
                      countries.includes( "Poland" ) ? (
                        <>{"Gdansk,Poland"}</>
                      ) : countries.includes( "United States" ) ? (
                        <>{"San Diego,United States"}</>
                      ) : null
                    )} */}


                    {!selectedCountry && (

                      <>{trial?.trailData?.protocolSection?.contactsLocationsModule?.locations[ 0 ].city},{trial?.trailData?.protocolSection?.contactsLocationsModule?.locations[ 0 ].country}</>

                    )}


                    {selectedLocation && (
                      <>
                        {selectedLocation},
                      </>
                    )}

                    {selectedCountry}
                  </span>
                  <span className="text-sm text-gray-500">
                    {t( "Start" )}:{" "}
                    {
                      trial?.trailData?.protocolSection?.statusModule
                        ?.startDateStruct?.date
                    }
                  </span>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedTrial( trial as Trial );
                      setOpen( true );
                    }}
                    className="px-4 py-2 border-2 border-[#46B7C6] text-[#46B7C6] rounded-lg
                      hover:bg-[#46B7C6] hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    {t( "Details" )} {/* Translated */}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTrial( trial as Trial );
                      setShowRegistration( true );
                    }}
                    className="gradient-theme text-white px-4 py-2 rounded-lg
                      hover:shadow-md transition-all duration-300 text-sm font-medium"
                  >
                    {t( "Sign up" )} {/* Translated */}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) )}
      </div>

      {/* Modals */}
      {
        selectedTrial && open && (
          <TrialDetailsModal
            trial={selectedTrial}
            onClose={() => setOpen( false )}
            onRegister={() => {
              setOpen( false );
              setShowRegistration( true );
            }}
          />
        )
      }

      {
        showRegistration && (
          <TrialRegistrationModal
            onClose={() => setShowRegistration( false )}
            trail={selectedTrial}
          />
        )
      }
    </motion.div >
  );
}
