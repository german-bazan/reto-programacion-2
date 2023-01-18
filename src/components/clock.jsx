import React, {useEffect, useState} from 'react'

const Clock = () => {

  const personaInicial = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  };
  
  const [persona, setPersona] = useState(personaInicial);

  useEffect(() => {
    const timerID = setInterval(() => {
      tick()
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
      <div>
        <h2>
        Hora Actual:
        {persona.fecha.toLocaleTimeString()}
        </h2>
        <h3>{persona.nombre} {persona.apellidos}</h3>
        <h1>Edad: {persona.edad}</h1>
      </div>
    )

  function tick(){
    setPersona((prevState) => {
      let edad = prevState.edad +1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      }
    });
  }
}
export default Clock;