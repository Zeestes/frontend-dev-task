import { useImperativeHandle, forwardRef, useEffect } from 'react';
import $ from 'jquery';
import ContactForm from '../ContactForm';
import Logo from '../Logo';

const Popup = forwardRef((props, ref) => {
  function confirmFrom(name, phone) {
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    $('.contact-form').slideUp({
      complete: () => {
        $('.congrats-banner').slideDown();
      },
    });
  }

  const handleСlose = () => {
    $('.popup').fadeOut();
    $('.popup-blur').fadeOut();
    $('.congrats-banner').fadeOut();
    $('.congrats-banner').fadeOut();
  };

  const handleOpen = () => {
    $('.popup').fadeIn();
    $('.popup-blur').fadeIn();
    $('.contact-form').fadeIn();
    $('.congrats-banner').hide();
  };

  useImperativeHandle(ref, () => ({
    handleСlose,
    handleOpen,
  }));

  useEffect(() => {
    $('.popup').hide();
    $('.popup-blur').hide();
    $('.congrats-banner').hide();
    document.getElementById('popup').style.visibility = 'visible';
  });

  return (
    <div id="popup" style={{ visibility: 'hidden' }}>
      <div className="popup-blur"></div>
      <div className="popup">
        <div className="popup-content">
          <button
            onClick={handleСlose}
            style={{ maxWidth: '33px', height: '33px', alignSelf: 'flex-end' }}
          >
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
          <ContactForm confirm={confirmFrom}></ContactForm>
          <div
            className="congrats-banner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'stretch',
              height: '100%',
              padding: '40px',
            }}
          >
            <div style={{ flex: 1, marginRight: '40px' }}>
              <text
                className="raleway contact-form-lable"
                style={{
                  fontSize: '50px',
                }}
              >
                Спасибо за заявку
              </text>
            </div>
            <div style={{ flex: 1, marginRight: '40px' }}>
              <text
                className="raleway contact-form-lable"
                style={{
                  fontSize: '40px',
                }}
              >
                Я обязательно свяжусь с вами в ближайшее время.
              </text>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>
              <Logo></Logo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Popup;
