import React from 'react';
import trash from '../../assets/icons/trash.svg';
import edit from '../../assets/icons/edit.svg';

const ModalShowPatient = ({ isOpen, closeModal, selectedPatient }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className='fixed inset-0 bg-black opacity-80 z-10' onClick={closeModal}></div>
          <div id='modal-new-patient' className='fixed z-20 bg-white md:p-16 p-8 rounded-lg shadow-lg w-4/5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ maxWidth: '45rem' }}>
            <div className='flex mb-6 justify-between'>
              <h2 className='text-3xl font-bold'>{selectedPatient.nome}</h2>
              <div className='flex justify-end'>
                <button type="button" className='hover:shadow-xl duration-200'>
                  <img src={trash} alt="Excluir paciente" />
                </button>
                <button type='button'>
                  <img src={edit} alt="Editar paciente" className='ml-4 hover:shadow-xl duration-200' />
                </button>
              </div>
            </div>
            <div className='mb-6'>
              <label className='block text-gray-500'>Idade</label>
              <p className='w-full font-semibold'>{selectedPatient.idade} anos</p>
            </div>
            <div className='mb-6'>
              <label className='block text-gray-500'>Histórico Médico</label>
              <p className='w-full font-semibold'>{selectedPatient.historicoMedico}</p>
            </div>
            <div className='mb-6'>
              <label className='block text-gray-500'>Última Consulta</label>
              <p className='w-full font-semibold'>{selectedPatient.ultimaConsulta}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalShowPatient;
