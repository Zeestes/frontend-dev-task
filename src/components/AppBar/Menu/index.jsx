export default function Menu(props) {
  const { menuButtons } = props;
  return (
    <div className="Menu">
      {' '}
      {/* TODO:сделать адаптивную верстку*/}
      {menuButtons.map((button) => (
        <button>
          <text className="montserrat T3">{button.text}</text>
        </button>
      ))}
    </div>
  );
}
