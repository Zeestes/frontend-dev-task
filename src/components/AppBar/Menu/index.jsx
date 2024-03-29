import MenuIcon from './menuicon';
import Breakpoint from '../../../theme/Breakpoint';

export default function Menu(props) {
  const { menuButtons } = props;
  return (
    <div className="menu">
      <Breakpoint at={['xs', 'sm']}>
        <button className="menu-button">
          <MenuIcon></MenuIcon>
        </button>
      </Breakpoint>
      <Breakpoint at={['md', 'lg']}>
        {menuButtons.map((button) => (
          <button>
            <text className="montserrat T3">{button.text}</text>
          </button>
        ))}
      </Breakpoint>
    </div>
  );
}
