import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const MasPruev = ({ onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  const estilo = {
    fontFamily: 'Gilroy-ExtraBold',
    backgroundColor: 'pink',
    width: '25vw',
    height: '25vh',
    cursor: 'move',
  };

  return (
    <motion.div
      style={estilo}
      onClick={handleDivClick}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span onClick={handleDeleteClick}>❌</span>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <span>{text || 'Haz clic para escribir'}</span>
      )}
    </motion.div>
  );
};

MasPruev.propTypes = {
    onDelete: PropTypes.string
  }


export default MasPruev;
