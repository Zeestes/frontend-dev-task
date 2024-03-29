import CustomButton from '../../components/customButton';
import { useRef } from 'react';
import Popup from '../../components/Popup';
import Breakpoint from '../../theme/Breakpoint';
import { useEffect, useState } from 'react';

export default function AboutMePage() {
  const popupRef = useRef(null);
  const currentDate = new Date();
  const tech = currentDate
    .toLocaleDateString()
    .split('')
    .filter((char) => !isNaN(char))
    .reduce((acc, num) => acc + parseInt(num), 0);

  const [gbpRate, setgbpRate] = useState(0);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const gbp = data.Valute.GBP;
        const value = gbp.Value;
        setgbpRate(value.toFixed(0));
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="page">
      <Popup ref={popupRef} />
      <div className="wrapper">
        <div className="center">
          <div className="header">
            <text className="raleway H1">СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА</text>
          </div>
          <div className="subtitle subtitle-center">
            <Breakpoint at={['md', 'lg']}>
              <text className="raleway T2 subtitleText">
                Когда ваше время и энергия лучше сфокусированы, стремление к
                новым возможностям становится реальностью, ваш успех зависит от
                ваших действий
              </text>
            </Breakpoint>
            <Breakpoint at={['sm', 'xs']}>
              <text className="raleway T2 subtitleText">
                Ваш успех зависит от ваших действий
              </text>
            </Breakpoint>
          </div>
          <div className="butterWhite-container">
            <CustomButton
              className="butterWhite" //хах butter
              text="Записаться на консультацию"
              backgroundColor="white"
              textColor="#07305D"
              onClick={() => popupRef.current.handleOpen()}
            />
          </div>
          <div className="buttonOther-container">
            {' '}
            <CustomButton
              className="buttonOther"
              text="Бесплатная консультация"
              borderColor="white"
              backgroundColor="transparent"
              textColor="white"
            />
          </div>
        </div>
        <div className="mentor">
          <div className="mentor-img"></div>
        </div>
        <div className="subtitle subtitle-quality">
          <text className="montserrat T1">{`${tech}+`}</text>
          <Breakpoint at={['md', 'lg']}>
            <text className="raleway T2 subtitleText">
              техник для достижения целей
            </text>
          </Breakpoint>
          <Breakpoint at={['sm', 'xs']}>
            <text className="raleway T2 subtitleText">техник</text>
          </Breakpoint>
        </div>
        <div className="subtitle subtitle-percent">
          <text className="montserrat T1">{`${gbpRate}%`}</text>
          <Breakpoint at={['md', 'lg']}>
            <text className="raleway T2 subtitleText">
              увеличение личной продуктивности
            </text>
          </Breakpoint>
          <Breakpoint at={['sm', 'xs']}>
            <text className="raleway T2 subtitleText">продуктивности</text>
          </Breakpoint>
        </div>
      </div>
    </div>
  );
}
