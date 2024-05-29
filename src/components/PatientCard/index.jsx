import React from 'react';

const PatientCard = ({ nome, idade, ultimaConsulta }) => {
    return (
        <button className='mb-2'>
            <div className='bg-black h-px'></div>
            <div className='flex justify-between items-center mt-2'>
                <div>
                    <h3 className='font-bold'>{nome}</h3>
                    <p className='text-start'>{idade} anos</p>
                </div>
                <p>{ultimaConsulta}</p>
            </div>
        </button>
    );
};

export default PatientCard