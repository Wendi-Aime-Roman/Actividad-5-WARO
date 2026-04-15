import { useState } from "react";
import { AlumnoContext } from "../context/AlumnoContext";

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Wen Román",
    carrera: "Ingeniería en Sistemas de la Información",
    grupo: "4-1",
    semestre: "Octavo semestre"
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}