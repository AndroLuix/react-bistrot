import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaSearch } from 'react-icons/fa';

Modal.setAppElement('#root'); // Imposta l'elemento principale dell'app per motivi di accessibilità

const ModalMeal = ({ strArea, strInstructions, ingredients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>

      <FaSearch
        className="icon"
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: 'pointer' }}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Dettagli del pasto"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '90%',
            overflow: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <div className="modal-header">
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
          >
            &times;
          </button>
        </div>
        <div className="info-container" style={{ padding: '10px' }}>
          <h4>Provenienza: {strArea}</h4>
          <h4>Istruzioni:</h4>
          <h5>{strInstructions}</h5>
          <h4>Ingredienti:</h4>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>

        </div>
      </Modal>
    </div>
  );
};

export default ModalMeal;
