import CustomButton from '../../components/customButton';
import { useRef } from "react";
import Popup from '../../components/Popup';


export default function AboutMePage() {
  
  const popupRef = useRef(null);
  const currentDate = new Date();
  const tech = currentDate
  .toLocaleDateString()
  .split("")
  .filter((char) => !isNaN(char))
  .reduce((acc, num) => acc + parseInt(num), 0);

  let gbpRate = 0

  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(data => {
        gbpRate = Math.round(data.Valute.GBP.Value);
        // make use of gbpRate as needed
    })
    .catch(error => console.error(error));

  return (
    <div className="page">
      <Popup ref={popupRef} />
      <div className="wrapper">
        <div className="center" style={{ gridArea: "2 / 1 / 2 / 3" }}>
          <div
            className="header"
            style={{ maxWidth: "747px", gridArea: "1 / 1 / 2 / 3" }}
          >
            <text className="raleway H1">СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА</text>
          </div>
          <div
            className="subtitle"
            style={{
              height: "48px",
              maxWidth: "675px",
              gridArea: "2 / 1 / 3 / 3",
            }}
          >
            <text className="raleway T2 subtitleText">
              Когда ваше время и энергия лучше сфокусированы, стремление к новым
              возможностям становится реальностью, ваш успех зависит от ваших
              действий
            </text>
          </div>
          <CustomButton
            className="butterWhite" //хах butter
            text="Записаться на консультацию"
            backgroundColor="white"
            textColor="#07305D"
            onClick={() => popupRef.current.handleOpen()}
            style={{ gridArea: "3 / 1 / 4 / 2", alignSelf: "end" }}
          />
          <CustomButton
            className="buttonOther"
            text="Бесплатная консультация"
            borderColor="white"
            backgroundColor="transparent"
            textColor="white"
            style={{ gridArea: "3 / 2 / 4 / 3", alignSelf: "end" }}
          />
        </div>
        <div className="mentor">
          {/* <div className="mentor-img"></div> */}
        </div>
        <div
          className="subtitle"
          style={{
            gridArea: "3 / 1 / 3 / 2",
            alignSelf: "end",
            width: "150px",
            marginBottom: "60px",
          }}
        >
          <text className="montserrat T1">{tech}</text>
          <text className="raleway T2 subtitleText">
            техник для достижения целей
          </text>
        </div>
        <div
          className="subtitle"
          style={{
            gridArea: "3 / 2 / 3 / 3",
            alignSelf: "end",
            width: "200px",
            marginBottom: "60px",
          }}
        >
          <text className="montserrat T1">{`${gbpRate}%`}</text>
          <text className="raleway T2 subtitleText">
            увеличение личной продуктивности
          </text>
        </div>
      </div>
    </div>
  );
}
