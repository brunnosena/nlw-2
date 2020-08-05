import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

interface ScheduleItems {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const history = useHistory()

  const [scheduleItems, setscheduleItems] = useState<ScheduleItems[]>([{
    week_day: 0,
    from: '',
    to: ''
  }])

  const addNewScheduleArea = () => {
    setscheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }]);
  }

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updatedScheduleItems = scheduleItems.map((schedule, index) => {
      if (index === position) {
        return { ...schedule, [field]: value }
      }
      return schedule;
    })
    setscheduleItems(updatedScheduleItems);
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();
    
    // console.table({
    //   name,
    //   avatar,
    //   whatsapp,
    //   bio,
    //   subject,
    //   cost,
    //   scheduleItems
    // })

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })
    .then(res => {
      alert('Cadastro realizado com sucesso !')
      console.log(res.data);
      history.push('/');
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              label="Nome Completo"
              name="name" />
            <Input
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
              label="Avatar"
              name="avatar" />
            <Input
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              label="WhatsApp"
              name="whatsapp" />
            <TextArea
              value={bio}
              onChange={e => setBio(e.target.value)}
              label="Bio"
              name="bio"
            />
          </fieldset>

          <fieldset>
            <legend>Seus dados</legend>
            <Select
              value={subject}
              onChange={e => setSubject(e.target.value)}
              label="Matéria"
              name="subject"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'História' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input
              value={cost}
              onChange={e => setCost(e.target.value)}
              label="Custo da sua hora por aula"
              name="cost" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
            <button onClick={addNewScheduleArea} type="button">+ Novo horário</button>
            </legend>

            {
              scheduleItems.map((item, index) => {
                return (
                  <div key={index} className="schedule-item">
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={item.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },
                      ]}
                    />
                    <Input 
                      name="from" 
                      label="Das" 
                      type="time" 
                      value={item.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                    <Input 
                      name="to" 
                      label="Até" 
                      type="time" 
                      value={item.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                  </div>
                )
              })

            }
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;