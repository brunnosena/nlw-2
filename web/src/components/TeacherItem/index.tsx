import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  data: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={data.avatar} alt={data.name} />
        <div>
          <strong>{data.name}</strong>
          <span>{data.subject}</span>
        </div>
      </header>

      <p>{data.bio}</p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ {data.cost}</strong>
        </p>
        <a 
          target="_blank" 
          href={`https://wa.me/${data.whatsapp}?text=sua%20mensagem`}>
          <img src={whatsAppIcon} alt="Entrar em contato" />
              Entrar em contato
            </a>
      </footer>
    </article>
  );
}

export default TeacherItem;