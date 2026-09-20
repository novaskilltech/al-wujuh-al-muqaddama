import React, { createContext, useContext, useState, useEffect } from "react";

interface SpecialistModeContextType {
  isSpecialist: boolean;
  toggleSpecialist: () => void;
}

const SpecialistModeContext = createContext<SpecialistModeContextType>({
  isSpecialist: false,
  toggleSpecialist: () => {}
});

export const SpecialistModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSpecialist, setIsSpecialist] = useState<boolean>(() => {
    return localStorage.getItem("awjouh_specialist_mode") === "true";
  });

  const toggleSpecialist = () => {
    setIsSpecialist(prev => {
      const next = !prev;
      localStorage.setItem("awjouh_specialist_mode", String(next));
      return next;
    });
  };

  return (
    <SpecialistModeContext.Provider value={{ isSpecialist, toggleSpecialist }}>
      {children}
    </SpecialistModeContext.Provider>
  );
};

export const useSpecialistMode = () => useContext(SpecialistModeContext);
