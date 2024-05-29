import React, { useEffect, useState } from 'react';

const ModalNewPatient = ({ isOpen, closeModal }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [ultimaConsulta, setUltimaConsulta] = useState('');
  const [historicoMedico, setHistoricoMedico] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!idade || idade < 1 || idade > 130) newErrors.idade = 'Idade deve ser um número entre 1 e 130';
    if (!historicoMedico.trim()) newErrors.historicoMedico = 'Histórico médico é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (!isOpen) {
      setNome('');
      setIdade('');
      setUltimaConsulta('');
      setHistoricoMedico('');
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // lógica para salvar novo paciente
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div className='fixed inset-0 bg-black opacity-50 z-10' onClick={closeModal}></div>
          <div id='modal-new-patient' className='fixed z-20 bg-white p-8 rounded shadow-lg w-4/5 h-fit left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h2 className='text-3xl font-bold mb-4'>Novo Paciente</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>Nome</label>
                <input className='w-full px-3 py-2 border rounded' type="text" placeholder="Nome" value={nome} onChange={(e) => handleChange(e, setNome)} />
                {errors.nome && <p className='text-red-500 text-xs italic'>{errors.nome}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>Idade</label>
                <input className='w-full px-3 py-2 border rounded' type="number" placeholder="Idade" value={idade} onChange={(e) => handleChange(e, setIdade)} />
                {errors.idade && <p className='text-red-500 text-xs italic'>{errors.idade}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>Última Consulta</label>
                <input className='w-full px-3 py-2 border rounded' type="date" value={ultimaConsulta} onChange={(e) => handleChange(e, setUltimaConsulta)} />
                {errors.ultimaConsulta && <p className='text-red-500 text-xs italic'>{errors.ultimaConsulta}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>Histórico Médico</label>
                <textarea className='w-full px-3 py-2 border rounded' placeholder="Histórico Médico" value={historicoMedico} onChange={(e) => handleChange(e, setHistoricoMedico)}></textarea>
                {errors.historicoMedico && <p className='text-red-500 text-xs italic'>{errors.historicoMedico}</p>}
              </div>
              <div className='flex justify-end'>
                <button type="button" onClick={closeModal} className='mr-4 bg-white text-black px-4 py-2 font-semibold rounded border-solid border-2' style={{ borderColor: '#68C6D2' }}>
                  Cancelar
                </button>
                <button type="submit" className='bg-white text-black px-4 py-2 font-semibold rounded' style={{ backgroundColor: '#68C6D2' }}>
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default ModalNewPatient;
