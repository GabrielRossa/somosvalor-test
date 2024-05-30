import React from 'react';

const PatientCard = ({ nome, idade, ultimaConsulta, onClick={onClick}}) => {
    return (
        <div className='mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' aria-labelledby={`patient-${nome}-name`} aria-describedby={`patient-${nome}-age patient-${nome}-last-visit`}>
            <div className='bg-black h-px' role="separator"></div>
            <button className='flex justify-between w-full items-center mt-2 lg:h-12 hover:bg-slate-300 rounded duration-100' onClick={onClick}>
                <div className='lg:flex lg:w-1/2'>
                    <h3 id={`patient-${nome}-name`} className='font-bold lg:w-2/3 text-start lg:mr-4'>{nome}</h3>
                    <p id={`patient-${nome}-age`} className='text-start'>{idade} anos</p>
                </div>
                <p id={`patient-${nome}-last-visit`}>{ultimaConsulta}</p>
            </button>
        </div>
    );
};

export default PatientCard;
