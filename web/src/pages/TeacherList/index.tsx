import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';



const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([])

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    console.log({
      subject,
      week_day,
      time
    });

    await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(res => setTeachers([...teachers, res.data]))
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
          <Select
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            label="Dia da semana"
            name="week_day"
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
            value={time}
            onChange={e => setTime(e.target.value)}
            type="time"
            label="Hora"
            name="time" />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map(teacher => {
            return <TeacherItem key={teacher.id} data={teacher} />
          })
        }
      </main>
    </div>
  );
}

export default TeacherList;