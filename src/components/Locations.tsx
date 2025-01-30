import { MapPin, Clock, Car, Bus, Accessibility } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";
import { useTranslation } from "react-i18next";

export default function Locations() {
  const { t } = useTranslation();
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Our Locations")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              {t("We invite you to our modern facilities in the Tri-City")}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <ScrollAnimationWrapper key={location.id} animation="scale-up">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Location Image */}
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={`Remedy ${location.city}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{location.city}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-5 w-5" />
                      <p>{location.address}</p>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6 space-y-6">
                  {/* Opening Hours */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#46B7C6]" />
                      {t("Opening hours")}
                    </h4>
                    <ul className="space-y-2">
                      {location.openingHours.map((hours, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-gray-600"
                        >
                          <span>{t(hours.days)}</span>
                          <span>{t(hours.hours)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4">
                    {location.hasParking && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Car className="h-5 w-5 text-[#46B7C6]" />
                        <span>{t("Parking")}</span>
                      </div>
                    )}
                    {location.publicTransport && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Bus className="h-5 w-5 text-[#46B7C6]" />
                        <span>{"Public transport"}</span>
                      </div>
                    )}
                    {location.accessibility && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Accessibility className="h-5 w-5 text-[#46B7C6]" />
                        <span>{t("Availability")}</span>
                      </div>
                    )}
                  </div>

                  {/* Specialists */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      {t("Available specialists:")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialists.map((specialist, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {t(specialist)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      title={`Mapa - ${location.city}`}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDMQCAH-rTkB2O_B4ekvPCySsiqmidb8wU&q=${location.coordinates.lat},${location.coordinates.lng}&zoom=15`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/booking"
                    className="w-full gradient-theme text-white px-6 py-3 rounded-xl
                      hover:shadow-lg transition-all duration-300 font-medium
                      flex items-center justify-center gap-2"
                  >
                    {"Make an appointment at this location"}
                  </Link>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
