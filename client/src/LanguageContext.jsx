import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // sessionStorage.setItem('selectedLanguage', e.target.value);
  const storedLanguage = sessionStorage.getItem('selectedLanguage');
  const [selectedLanguage, setSelectedLanguage ] = useState( `${storedLanguage}` || "en");

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage  }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};