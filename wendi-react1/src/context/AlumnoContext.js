import { createContext, useContext } from "react";

export const AlumnoContext = createContext();

export function useAlumnoContext() {
  const context = useContext(AlumnoContext);
  
  if (!context) {
    throw new Error(
      "useAlumnoContext debe usarse dentro de un AlumnoProvider"
    );
  }
  
  return context;
}
