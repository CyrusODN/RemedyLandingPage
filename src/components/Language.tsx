import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Languages: any = [
  {
    flagname: "English (UK)",
    // icon: "/flags/icon-flag-pl.png",

    icon: "/flags/icon-flag-en.webp",

    value: "en",
  },
  {
    flagname: "Polish (PL)",
    // icon: "/flags/icon-flag-en.webp",

    icon: "/flags/icon-flag-pl.png",

    value: "pl",
  },
];

const Language = () => {
  const [ currentLang, setCurrentLang ] = useState( Languages[ 1 ] );
  const { i18n } = useTranslation();
  const [ open, setOpen ] = useState( false );
  const menuRef = useRef<HTMLDivElement>( null );

  useEffect( () => {
    const savedLanguage = localStorage.getItem( "language" );

    console.log( "Saved language: ", savedLanguage )

    console.log( "current lang", currentLang )


    console.log( "i18n", i18n.language )



    if ( savedLanguage ) {
      setCurrentLang(
        Languages.find( ( _lang: any ) => _lang.value === savedLanguage )
      );
      i18n.changeLanguage( savedLanguage );
    } else {
      setCurrentLang( Languages[ 1 ] );
      localStorage.setItem( "language", Languages[ 1 ].value );
      i18n.changeLanguage( Languages[ 1 ].value );
    }
  }, [] );

  const setLanguage = ( lan: any ) => {
    localStorage.setItem( "language", lan );
    setCurrentLang( Languages.find( ( _lang: any ) => _lang.value === lan ) );
    i18n.changeLanguage( lan );
    setOpen( false );
  };

  // Close menu when clicking outside
  useEffect( () => {
    const handleClickOutside = ( event: MouseEvent ) => {
      if ( menuRef.current && !menuRef.current.contains( event.target as Node ) ) {
        setOpen( false );
      }
    };

    document.addEventListener( "mousedown", handleClickOutside );
    return () => {
      document.removeEventListener( "mousedown", handleClickOutside );
    };
  }, [] );


  return (
    <div className="relative w-8 h-6" ref={menuRef}>
      <div className="hover:cursor-pointer w-8 h-6 flex justify-center items-center overflow-hidden shadow-lg border-2 border-[#46B7C6] rounded-md mb-4 lg:m-0">
        <img
          onClick={() => setOpen( ( prev ) => !prev )}
          src={currentLang.icon}
          alt=""
          className="w-6"
        />
      </div>
      {open && (
        <div
          className="absolute top-6 right-0 bg-white shadow-md rounded-md p-2"
          id="language-menu"
        >
          {Languages.map( ( option: any ) => (
            <div
              key={option.value}
              onClick={() => setLanguage( option.value )}
              className="text-nowrap p-1 hover:cursor-pointer"
            >
              {option.flagname}
            </div>
          ) )}
        </div>
      )}
    </div>
  );
};

export default Language;
