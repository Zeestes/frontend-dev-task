import CustomButton from '../../components/customButton';
import { useState } from 'react';

export default function AboutMePage() {
  const [viewPopup, setViewPopup] = useState(false);

  function handlePopupClick() {
    setViewPopup(prevState => !prevState);
  }
  
  return (
    <div className="page">
      <div className={`popup-call ${viewPopup ? "visible" : ""}`}>
        <div>
          <button onClick={handlePopupClick}>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.70711"
                y1="1.69853"
                x2="32.1127"
                y2="32.1041"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
              />
              <line
                x1="1.29289"
                y1="31.6984"
                x2="31.6985"
                y2="1.29282"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`popup-blur ${viewPopup ? "visible" : ""}`}></div>
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
            onClick={handlePopupClick}
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
        <div className="div2"></div>
        <div
          className="subtitle"
          style={{
            gridArea: "3 / 1 / 3 / 2",
            alignSelf: "end",
            width: "150px",
            marginBottom: "60px",
          }}
        >
          <text className="montserrat T1">10</text>
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
          <text className="montserrat T1">10</text>
          <text className="raleway T2 subtitleText">
            увеличение личной продуктивности
          </text>
        </div>
      </div>
    </div>
  );
}
