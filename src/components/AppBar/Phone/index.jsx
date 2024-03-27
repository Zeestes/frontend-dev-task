import PhoneIcon from './Phoneicon';

export default function Phone(props) {
  return (
    <div className="Phone">
      <PhoneIcon></PhoneIcon>
      <text className="montserrat T2">8-345-123-34-45</text>{' '}
      {/* TODO:сделать адаптивную верстку*/}
    </div>
  );
}
