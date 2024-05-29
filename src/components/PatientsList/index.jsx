import React from 'react';
import Plus from '../../assets/icons/plus-circle.svg'
import PatientCard from '../PatientCard';


const PatientsList = () => {
  return (
    <div className='pt-32 px-8'>
      <div className='h-8 rounded-lg' style={{backgroundColor: '#68C6D2'}}></div>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-3xl font-bold'>Pacientes</h1>
        <img src={Plus} alt="" />
      </div>
      <p className='font-medium text-end' style={{color: "#CCCCCC"}}>Última consulta</p>
      <PatientCard/>
    </div>
  );
};

export default PatientsList;
