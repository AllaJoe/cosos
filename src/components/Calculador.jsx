import { useState } from "react";

const GuitarFretboard = () => {
  const [scaleLength, setScaleLength] = useState(25.5);
  const [frets, setFrets] = useState(24);
  const [fretDistances, setFretDistances] = useState([]);

  const calculateFretDistances = () => {
    const distanceBetweenFrets = scaleLength / 17.817;
    const distances = [0];

    for (let i = 1; i <= frets; i++) {
      const previousDistance = distances[i - 1];
      const currentDistance = previousDistance + distanceBetweenFrets;
      distances.push(currentDistance);
    }

    setFretDistances(distances);
  };

  return (
    <div style={{backgroundColor:"orange"}}>
      <div>
        <label>Longitud de la escala (pulgadas):</label>
        <input
          type="number"
          value={scaleLength}
          onChange={(e) => setScaleLength(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Número de trastes:</label>
        <input
          type="number"
          value={frets}
          onChange={(e) => setFrets(parseInt(e.target.value))}
        />
      </div>
      <button onClick={calculateFretDistances}>Calcular distancias</button>
      <div>
        {fretDistances.map((distance, index) => (
          <div key={index}>Traste {index}: {distance.toFixed(4)} pulgadas</div>
        ))}
      </div>
    </div>
  );
};

export default GuitarFretboard;
