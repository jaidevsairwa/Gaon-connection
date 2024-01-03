import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("selectedLanguage"); // Change sessionStorage to localStorage
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    } else {
      setSelectedLanguage("hi");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage); // Change sessionStorage to localStorage
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
