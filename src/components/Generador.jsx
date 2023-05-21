
import { useState } from "react";
import { motion } from "framer-motion";

function DivGenerator() {
  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    const newId = divs.length + 1;
    const newDiv = { id: newId, text: "", isEditing: false };
    setDivs([...divs, newDiv]);
  };

  const handleDivClick = (id) => {
    const updatedDivs = divs.filter(div => div.id !== id);
    setDivs(updatedDivs);
  };

  const handleSpanClick = (id) => {
    const updatedDivs = divs.map(div => {
      if (div.id === id) {
        return { ...div, isEditing: true };
      }
      return { ...div, isEditing: false };
    });
    setDivs(updatedDivs);
  };

  const handleInputChange = (event, id) => {
    const updatedDivs = divs.map(div => {
      if (div.id === id) {
        return { ...div, text: event.target.value };
      }
      return div;
    });
    setDivs(updatedDivs);
  };

  const handleInputBlur = (id) => {
    const updatedDivs = divs.map(div => {
      if (div.id === id) {
        return { ...div, text: div.text.trim(), isEditing: false };
      }
      return div;
    });
    setDivs(updatedDivs);
  };

  const estilo = {
    fontFamily: 'Gilroy-ExtraBold',
    backgroundColor: 'none',
    width: '100%',
    height: '30px',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <div>
      <button onClick={addDiv}>Agregar div</button>
      <div style={{ position: "relative" }}>
        {divs.map(div => (
          <motion.div
            style={{
              position: "absolute",
              backgroundColor: "orange",
              width: "300px",
              height: "100px",
              boxSizing: 'border-box',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '20px',
              zIndex: div.id
            }}
            key={div.id}
            drag
          >
            <span
              style={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer' }}
              onClick={() => handleDivClick(div.id)}
            >
              ✖
            </span>
            {div.isEditing ? (
              <input
                type="text"
                value={div.text}
                onChange={event => handleInputChange(event, div.id)}
                onBlur={() => handleInputBlur(div.id)}
                autoFocus
              />
            ) : (
              <span style={estilo} onClick={() => handleSpanClick(div.id)}>
                {div.text || 'Haz clic para escribir'}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}



export default DivGenerator;
