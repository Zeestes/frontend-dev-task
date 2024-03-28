import PhoneIcon from './Phoneicon';
import useBreakpoints from '../../../hooks/useBreakpoints';

export default function Phone(props) {
  const { active } = useBreakpoints();

  return (
    <div className="Phone">
      <PhoneIcon></PhoneIcon>
      {active === "lg" && (
        <text className="montserrat T2">8-345-123-34-45</text>
      )}
    </div>
  );
}
