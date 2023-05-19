import { useState } from 'react';
import MasPruev from './MasPruev';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Generador = () => {
  const [divs, setDivs] = useState([{ id: 'div-0', onDelete: () => handleDelete('div-0') }]);

  const handleButtonClick = () => {
    const newDivs = [...divs];
    const newIndex = newDivs.length;
    const newId = `div-${newIndex}`;
    newDivs.push({ id: newId, onDelete: () => handleDelete(newId) });
    setDivs(newDivs);
  };

  const handleDelete = (id) => {
    const newDivs = divs.filter((div) => div.id !== id);
    setDivs(newDivs);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newDivs = Array.from(divs);
    const [movedDiv] = newDivs.splice(source.index, 1);
    newDivs.splice(destination.index, 0, movedDiv);

    // Actualizar los índices en el estado divs para que coincidan con los índices en la interfaz de usuario
    const updatedDivs = newDivs.map((div, index) => ({
      ...div,
      id: `div-${index}`,
      onDelete: () => handleDelete(`div-${index}`)
    }));

    setDivs(updatedDivs);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="divs">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ minHeight: '100px' }}
            >
              {divs.map((div, index) => (
                <Draggable key={div.id} draggableId={div.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        marginBottom: '10px',
                        ...provided.draggableProps.style
                      }}
                    >
                      <MasPruev onDelete={div.onDelete} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleButtonClick}>Generar más</button>
    </div>
  );
};

export default Generador;
