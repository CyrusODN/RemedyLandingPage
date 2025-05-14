import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Language from "./Language";

// Definicje typów dla elementów nawigacji
interface NavLinkItem {
  name: string; // Bezpośrednia angielska fraza (klucz i18n)
  path: string;
  type?: 'link';
}

interface NavCategory {
  category: string; // Bezpośrednia angielska fraza (klucz i18n)
  items: NavLinkItem[];
}

interface NavDropdownConfig {
  type: 'dropdown';
  title: string; // Bezpośrednia angielska fraza (klucz i18n)
  items: (NavLinkItem | NavCategory)[];
}

interface NavDirectLinkConfig {
  type: 'link';
  name: string; // Bezpośrednia angielska fraza (klucz i18n)
  path: string;
}

type NavigationItem = NavDropdownConfig | NavDirectLinkConfig;

// ZAKTUALIZOWANA STRUKTURA DANYCH NAWIGACJI
const navigationItems: NavigationItem[] = [
  {
    type: 'link',
    name: 'About Us',
    path: '/#about'
  },
  {
    type: 'dropdown',
    title: 'Offer',
    items: [
      {
        category: 'Psychiatric Consultations', // Klucz do i18n
        items: [
          { name: 'Psychiatric Consultation', path: '/services/konsultacja' },
          { name: 'Psychiatric Consultation for Children and Adolescents', path: '/services/konsultacja-dzieci' }
        ]
      },
      {
        category: 'Psychotherapy',
        items: [
          { name: 'Individual Psychotherapy', path: '/patient-info/psychotherapy' }
        ]
      },
      {
        category: 'Neurodevelopmental Diagnostics', // Klucz do i18n
        items: [
          { name: 'adhdDiagnosticsPage.title', path: '/patient-info/adhd-diagnostics' },
          { name: 'autismDiagnosticsPage.title', path: '/patient-info/autism-diagnostics' }
        ]
      },
      {
        category: 'Personality Diagnostics',
        items: [
          { name: 'mmpi2DiagnosticsPage.title', path: '/patient-info/mmpi2-diagnostics' }
        ]
      },
      {
        category: 'Psychological Diagnostics and Support', // Klucz do i18n
        items: [
          { name: 'cognitiveAssessmentPage.title', path: '/patient-info/cognitive-assessment' },
          { name: 'childServices.diagnostics.services.intelligenceTest.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.diagnostics.services.dyslexiaDiagnosis.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.diagnostics.services.emotionalDevelopmentAssessment.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.therapy.services.emotionalBehavioralTherapy.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.selectiveMutismSupport.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.oppositionalDefiantDisorder.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.anxietyLowSelfEsteemSupport.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.depressiveSymptomsWork.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.communication.services.aac.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.communication.services.socialDifficultiesTherapy.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.communication.services.autismSpectrumWork.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.psychoeducation.services.sleepHygieneEducation.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.psychoeducation.services.emotionalDevelopmentWorkshops.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.psychoeducation.services.adaptationDifficultiesSupport.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.drugResistant.services.treatmentResistantSupport.name', path: '/services/terapia-dzieci-mlodziez#drugResistant' },
          { name: 'childServices.drugResistant.services.nonPharmacologicalSupport.name', path: '/services/terapia-dzieci-mlodziez#drugResistant' }
        ]
      },
      // Usunięto: Group Therapy i Clinical Trials - Preliminary Qualification
    ]
  },
  {
    type: 'dropdown',
    title: 'Scope of Treatment',
    items: [ // Pozostaje płaską listą lub można dodać kategorie jak w "Offer"
      { name: 'Depression', path: '/treatment/depresja' },
      { name: 'Anxiety Disorders', path: '/treatment/zaburzenia-lekowe' },
      { name: 'Schizophrenia', path: '/treatment/schizofrenia' },
      { name: 'Bipolar Disorder (BPD)', path: '/treatment/chad' },
      { name: 'ADHD', path: '/treatment/adhd' },
      { name: 'PTSD', path: '/treatment/ptsd' },
      { name: 'Personality Disorders', path: '/treatment/zaburzenia-osobowosci' },
      { name: 'Sleep Disorders', path: '/treatment/zaburzenia-snu' },
      { name: 'treatmentPage.emotionalBehavioralDisorders.title', path: '/treatment/zaburzenia-emocjonalne-zachowania' }
    ]
  },
  {
    type: 'dropdown',
    title: 'Patient Information', // Klucz i18n
    items: [
      { name: 'psychiatricExamPrepPage.title', path: '/patient-info/psychiatric-exam-prep' },
      { name: 'firstVisitPage.title', path: '/patient-info/first-visit' },
      { name: 'parentInfoPage.title', path: '/patient-info/parent-info' },
      { name: 'faqPage.title', path: '/patient-info/faq' },
    ]
  },
  { type: 'link', name: 'Pricing', path: '/#pricing' },
  { type: 'link', name: 'Locations', path: '/#locations' },
  { type: 'link', name: 'Career', path: '/#join-us' },
  { type: 'link', name: 'Contact', path: '/#contact' }
];

const Logo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 5418 1667"
    className="h-12 md:h-14 transition-transform duration-300 hover:scale-105"
    style={{ maxWidth: "180px" }}
  >
    <g transform="matrix(1,0,0,1,-5636,0)">
      <g transform="matrix(0.65,0,0,0.2,5636.46,0)">
        <g transform="matrix(6.41026,0,0,20.8333,-1292.85,-16666.5)">
          <g transform="matrix(0.24,0,0,0.24,201.685,799.993)">
            <path
              d="M1176.72,647.641C1176.72,520.486 1071.36,433.997 962.572,433.997L508.093,433.997L508.093,501.548L962.572,501.548C1052.44,501.548 1108,568.887 1108,647.641C1108,726.396 1052.44,793.031 962.572,793.031L739.176,793.031L739.176,860.518L776.001,860.518L1049.64,1232.67L1128.38,1232.67L858.779,860.518L962.572,860.518C1071.36,860.518 1176.72,774.796 1176.72,647.641ZM2008.04,860.216L1940.37,860.216L1940.37,1232.67L2008.04,1232.67L2008.04,860.216ZM2680.33,434.531L2680.33,1232.67L2747.29,1232.67L2747.29,434.531L2680.33,434.531ZM1290.37,1165.14L1795.27,1165.14L1795.27,1232.67L1290.37,1232.67L1290.37,1165.14ZM2896.35,1165.14L3401.24,1165.14L3401.24,1232.67L2896.35,1232.67L2896.35,1165.14ZM4376.53,434.216L4294.35,434.216L4616.69,953.293L4618,1232.57L4690.89,1232.57L4689.89,952.251L4376.53,434.216ZM3863.28,434.531L3562.67,434.531L3562.67,501.428L3858.77,501.428C4082.51,501.428 4218.45,639.906 4218.45,833.951C4218.45,1028 4082.51,1165.05 3858.77,1165.05L3629.81,1165.05L3628.53,793.12L3562.67,793.12L3562.67,1232.57L3863.28,1232.57C4102.99,1232.57 4286.65,1073.66 4286.65,833.951C4286.65,594.239 4102.99,434.531 3863.28,434.531ZM4936.71,434.216L4688.72,837.117L4726.23,895.347L5013.63,434.216L4936.71,434.216ZM1940.37,793.12L2008.04,793.12L2008.04,541.222L2335.89,860.312L2355.88,860.312L2613.16,609.034L2613.16,513.295L2346.37,777.72L2008.04,434.531L1940.37,434.531L1940.37,793.12ZM1290.37,793.12L1763,793.12L1763,860.312L1290.37,860.312L1290.37,793.12ZM2896.35,793.12L3368.97,793.12L3368.97,860.312L2896.35,860.312L2896.35,793.12ZM1290.37,433.997L1795.27,433.997L1795.27,501.524L1290.37,501.524L1290.37,433.997ZM2896.35,433.997L3401.24,433.997L3401.24,501.524L2896.35,501.524L2896.35,433.997Z"
              style={{ fill: "rgb(13,13,13)", fillRule: "nonzero" }}
            />
          </g>
          <g transform="matrix(0.24,0,0,0.24,-147.422,-2001.1)">
            <path
              d="M2028.91,12464.3L2028.91,12360.6L1961.38,12360.6L1961.38,12464.3L1857.65,12464.3L1857.65,12531.9L1961.38,12531.9L1961.38,12635.6L2028.91,12635.6L2028.91,12531.9L2132.65,12531.9L2132.65,12464.3L2028.91,12464.3Z"
              style={{ fill: "rgb(70,183,198)" }}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavDropdown = ({
  title,
  items,
  isActive,
  onMouseEnter,
  onMouseLeave,
  setIsOpen,
}: {
  title: string;
  items: NavDropdownItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  setIsOpen?: (isOpen: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="text-gray-700 hover:text-[#46B7C6] transition-colors py-1.5 text-sm md:text-base font-medium flex items-center gap-1 whitespace-nowrap">
        {t(title)}
        <ChevronDown className="h-4 w-4" />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-1 ${title === 'Offer' ? 'w-96' : 'w-80'} bg-white rounded-lg shadow-lg py-1 z-50 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar`}
          >
            {items.map((item, index) => {
              if ('category' in item) {
                return (
                  <div key={`category-${index}`} className="pt-2 pb-1">
                    <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t(item.category)}
                    </h3>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={`subitem-${index}-${subIndex}`}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:text-[#46B7C6] hover:bg-gray-50 transition-colors text-sm rounded-md"
                        onClick={() => setIsOpen && setIsOpen(false)}
                      >
                        {t(subItem.name)}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={`item-${index}`}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:text-[#46B7C6] hover:bg-gray-50 transition-colors text-sm"
                  onClick={() => setIsOpen && setIsOpen(false)}
                >
                  {t(item.name)}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<any>();
  const location = useLocation();

  const handleDropdownEnter = (dropdownTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownTitle);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <HashLink smooth to="/#hero" scroll={(el) => scrollWithOffset(el)}>
              <Logo />
            </HashLink>
          </div>

          {/* Desktop Navigation - Center and Right */}
          {/* Container for main links and right-side buttons to enable justify-between */}
          <div className="hidden lg:flex flex-grow items-center justify-end"> {/* Changed to justify-end */}
            {/* Main Navigation Links - will be pushed towards center/left by the right group */}
            <div className="flex items-center space-x-3 xl:space-x-4"> {/* Adjusted spacing */}
              {navigationItems.map((navItem, index) => {
                if (navItem.type === 'link') {
                  return (
                    <HashLink
                      key={index}
                      smooth
                      to={navItem.path}
                      scroll={(el) => scrollWithOffset(el)}
                      className="text-gray-700 hover:text-[#46B7C6] transition-colors text-sm md:text-base font-medium whitespace-nowrap"
                    >
                      {t(navItem.name)}
                    </HashLink>
                  );
                }
                if (navItem.type === 'dropdown') {
                  return (
                    <NavDropdown
                      key={index}
                      title={navItem.title}
                      items={navItem.items}
                      isActive={activeDropdown === navItem.title}
                      onMouseEnter={() => handleDropdownEnter(navItem.title)}
                      onMouseLeave={handleDropdownLeave}
                      setIsOpen={setIsOpen}
                    />
                  );
                }
                return null;
              })}
            </div>

            {/* Language and Portal Buttons - pushed to the right */}
            <div className="flex items-center space-x-3 xl:space-x-4 ml-6"> {/* Added ml-6 for spacing */}
              <Language />
              <Link
                to="/platform"
                className="gradient-theme text-white px-4 py-2 rounded-full
                           hover:shadow-lg transition-all duration-300 font-medium text-sm whitespace-nowrap"
              >
                {t("Patient Portal")}
              </Link>
              <Link
                to="https://remedyai.com.pl/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#46B7C6] border-2 border-[#46B7C6] px-4 py-2 rounded-full
                           hover:shadow-lg transition-all duration-300 font-medium text-sm whitespace-nowrap"
              >
                {t("Professional Portal")}
              </Link>
            </div>
          </div>


          {/* Mobile Menu Button & Language Toggle */}
          <div className="flex gap-4 items-center lg:hidden">
            <Language />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md text-gray-700 hover:text-[#46B7C6] transition-colors p-1"
              aria-label={t("Toggle menu")}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
              {navigationItems.map((navItem, index) => {
                if (navItem.type === 'link') {
                  return (
                    <HashLink
                      key={`mobile-link-${index}`}
                      smooth
                      to={navItem.path}
                      scroll={(el) => scrollWithOffset(el)}
                      className="block px-3 py-2 text-gray-700 hover:text-[#46B7C6] hover:bg-gray-50 transition-colors rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(navItem.name)}
                    </HashLink>
                  );
                }
                if (navItem.type === 'dropdown') {
                  return (
                    <div key={`mobile-dropdown-${index}`} className="py-1">
                      <div className="px-3 py-2 text-gray-800 font-semibold">{t(navItem.title)}:</div>
                      {navItem.items.map((itemOrCategory, itemIndex) => {
                        if ('category' in itemOrCategory) {
                          return (
                            <div key={`mobile-cat-${index}-${itemIndex}`} className="pl-3">
                              <div className="px-3 py-1 text-sm text-gray-500 font-medium">{t(itemOrCategory.category)}</div>
                              {itemOrCategory.items.map((subItem, subItemIndex) => (
                                <Link
                                  key={`mobile-subitem-${index}-${itemIndex}-${subItemIndex}`}
                                  to={subItem.path}
                                  className="block py-2 text-gray-600 hover:text-[#46B7C6] hover:bg-gray-50 transition-colors pl-6 rounded-md"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {t(subItem.name)}
                                </Link>
                              ))}
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={`mobile-item-${index}-${itemIndex}`}
                            to={itemOrCategory.path}
                            className="block py-2 text-gray-600 hover:text-[#46B7C6] hover:bg-gray-50 transition-colors pl-6 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {t(itemOrCategory.name)}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }
                return null;
              })}
              <div className="pt-2 space-y-2 px-3">
                <Link
                  to="/platform"
                  className="block text-center py-2 text-white gradient-theme rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  {t("Patient Portal")}
                </Link>
                <Link
                  to="https://remedyai.com.pl/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 text-[#46B7C6] border-2 border-[#46B7C6] rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  {t("Professional Portal")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
