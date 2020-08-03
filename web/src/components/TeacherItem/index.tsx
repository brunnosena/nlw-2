import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/15018891?s=460&u=1d13403b8b5dc6fcaf256dd5c8f15635793676c5&v=4" alt="Avatar Proffy" />
        <div>
          <strong>Brunno Sena</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat beatae delectus quasi fugit optio cupiditate cumque, facere nobis ex totam, eaque doloribus adipisci. Optio debitis porro possimus necessitatibus illum?
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Entrar em contato" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;