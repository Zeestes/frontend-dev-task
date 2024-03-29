import Logo from '../Logo';
import Phone from './Phone/index';
import Menu from './Menu/index';

const menuButtons = [
  {
    text: 'Обо мне',
    link: '',
  },
  {
    text: 'Наставничество',
    link: '',
  },
  {
    text: 'Мероприятия',
    link: '',
  },
  {
    text: 'Кейсы',
    link: '',
  },
  {
    text: 'Отзывы',
    link: '',
  },
  {
    text: 'Контакты',
    link: '',
  },
];

export default function AppBar(props) {
  return (
    <div className="AppBar">
      <button>
        <Logo></Logo>
      </button>
      <Menu menuButtons={menuButtons} />
      <Phone />
    </div>
  );
}
