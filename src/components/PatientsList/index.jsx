import React, { useEffect, useState } from 'react';
import Plus from '../../assets/icons/plus-circle.svg';
import PatientCard from '../PatientCard';
import ModalNewPatient from '../ModalNewPatient';
import ModalShowPatient from '../ModalShowPatient';

const PatientsList = () => {
  const [isModalNewPatientOpen, setIsModalNewPatientOpen] = useState(false);
  const [isModalShowPatientOpen, setIsModalShowPatientOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3000/patients');
        if (!response.ok) {
          throw new Error('Erro ao buscar os patients');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Erro:', error);
        setPatients([
          { nome: 'João Silva', idade: 30, ultimaConsulta: '2023-05-20', historicoMedico: 'Asma desde a infância, uso regular de inalador (albuterol). Sem outras comorbidades. Pratica corrida de forma recreativa.' },
          { nome: 'Maria Santos', idade: 25, ultimaConsulta: '2023-05-15', historicoMedico: 'Colesterol alto, em tratamento com estatinas. Histórico familiar de doenças cardíacas. Participa de atividades físicas regulares.' },
          { nome: 'Pedro Almeida', idade: 28, ultimaConsulta: '2023-05-18', historicoMedico: 'Hipotireoidismo diagnosticado há 5 anos, controle regular com levotiroxina. Sem alergias conhecidas. Pratica yoga regularmente.' },
          { nome: 'Ana Costa', idade: 22, ultimaConsulta: '2023-05-10', historicoMedico: 'Atleta amador, lesão no joelho esquerdo (menisco) tratada com fisioterapia. Sem histórico de doenças crônicas. Alergia a penicilina.' },
          { nome: 'Luiz Fernandes', idade: 35, ultimaConsulta: '2023-05-05', historicoMedico: 'Hipertensão controlada com medicação (losartana). Histórico de enxaqueca. Dieta restrita em sódio.' },
          { nome: 'Fernanda Oliveira', idade: 27, ultimaConsulta: '2023-05-14', historicoMedico: 'Diabetes tipo 2, controlada com metformina. Histórico de infarto do miocárdio há 2 anos. Participa de programa de reabilitação cardíaca.' },
          { nome: 'Paulo Souza', idade: 33, ultimaConsulta: '2023-05-12', historicoMedico: 'Endometriose diagnosticada há 3 anos, em tratamento hormonal. Sem alergias conhecidas. Segue dieta anti-inflamatória.' },
          { nome: 'Clara Ribeiro', idade: 26, ultimaConsulta: '2023-05-09', historicoMedico: 'Miopia, usa óculos desde os 10 anos. Histórico de sinusite crônica. Sem outras condições médicas relevantes.' },
          { nome: 'Ricardo Lima', idade: 29, ultimaConsulta: '2023-05-17', historicoMedico: 'Depressão diagnosticada há 4 anos, em tratamento com sertralina e terapia cognitivo-comportamental. Sem histórico de outras doenças graves.' },
          { nome: 'Juliana Martins', idade: 24, ultimaConsulta: '2023-05-22', historicoMedico: 'Hipertrofia benigna da próstata, sob acompanhamento urológico. Ex-tabagista (parou há 5 anos). Realiza exames preventivos anuais.' },
        ]);
      }
    };

    fetchPatients();
  }, []);

  const openNewPatientModal = () => {
    setIsModalNewPatientOpen(true);
  };

  const closeNewPatientModal = () => {
    setIsModalNewPatientOpen(false);
  };

  const openShowPatientModal = (paciente) => { // Atualize a função para receber o paciente selecionado
    setSelectedPatient(paciente); // Define o paciente selecionado
    setIsModalShowPatientOpen(true);
  };

  const closeShowPatientModal = () => {
    setIsModalShowPatientOpen(false);
  };


  return (
    <div className='pt-32 px-8 lg:pt-24 m-auto' style={{ maxWidth: '80rem' }}>
      <div className='h-8 rounded-lg' style={{ backgroundColor: '#68C6D2' }}></div>
      <div className='flex justify-between items-center mt-2 md:mb-4'>
        <h1 className='text-3xl font-bold'>Pacientes</h1>
        <button className='flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-slate-300 duration-200 p-2 rounded' onClick={openNewPatientModal}>
          <p className='pr-2 hidden md:block'>Novo paciente</p>
          <img src={Plus} alt="Adicionar novo patient" />
        </button>
      </div>
      <p className='font-medium text-end lg:hidden' style={{ color: "#CCCCCC" }}>Última consulta</p>
      <div className='bg-black h-px' role="separator"></div>
      <div className='lg:flex justify-between items-center font-semibold hidden h-16'>
        <div className='flex w-1/2 items-center'>
          <h2 className='lg:w-2/3 lg:mr-4'>Nome</h2>
          <h2>Idade</h2>
        </div>
        <h2>Última consulta</h2>
      </div>

      <div className='flex flex-col'>
        {patients.map((paciente, index) => (
          <PatientCard
            key={index}
            nome={paciente.nome}
            idade={paciente.idade}
            ultimaConsulta={paciente.ultimaConsulta}
            onClick={() => openShowPatientModal(paciente)}
          />
        ))}
      </div>
      <ModalNewPatient isOpen={isModalNewPatientOpen} closeModal={closeNewPatientModal} />
      <ModalShowPatient isOpen={isModalShowPatientOpen} closeModal={closeShowPatientModal} selectedPatient={selectedPatient} />
    </div>
  );
};

export default PatientsList;
