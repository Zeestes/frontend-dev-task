import PhoneIcon from './Phoneicon';
import Breakpoint from '../../../theme/Breakpoint';

export default function Phone(props) {

  return (
    <div className="Phone">
      <PhoneIcon></PhoneIcon>
      <Breakpoint at={["md", "lg"]}>
        <text className="montserrat T2" style={{ marginLeft: "10px" }}>8-345-123-34-45</text>
      </Breakpoint>
    </div>
  );
}
