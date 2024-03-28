import CustomButton from "../customButton";

export default function ContactForm({confirm,id}) {


  const validateName = (name) => {
    if (!name) {
      document.getElementById("namealert").style.opacity = "1";
    }
    else {
      document.getElementById("namealert").style.opacity = "0";
    }
  }

  const validatePhone = (phone) => {
    if (!phone) {
      document.getElementById("phonealert").style.opacity = "1";
      document.getElementById("phonealert").innerHTML = "Введите номер телефона";
    }
    else {
      if (/^((\+7|7|8)\d{10})$/.test(phone)) {
        document.getElementById("phonealert").style.opacity = "1";
        document.getElementById("phonealert").innerHTML =
          "Некорректный номер телефона";
      } else {
        document.getElementById("phonealert").style.opacity = "0";
      }
    }
  }

  const validateAccept = (accept) => {
    if (!accept) {
      document.getElementById("acceptalert").style.opacity = "1";
    }
    else {
      document.getElementById("acceptalert").style.opacity = "0";
    }
  }

  const sibmit = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const accept = document.getElementById("accept").checked;

    validateName(name);
    validatePhone(phone);
    validateAccept(accept);
    
    if (!name || !phone || !accept) {
      return;
    }
    confirm(name, phone);
  }

  return (
    <div className="contact-form" id={id}>
      <text
        className="raleway contact-form-lable"
        style={{
          fontSize: "50px",
          marginTop: "40px",
          textAlign: "left",
          paddingRight: "40px",
        }}
      >
        Закажите обратный звонок
      </text>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="ИМЯ"
            id="name"
            onChange={(e) =>
              (document.getElementById("namealert").style.opacity = "0")
            }
            style={{ height: "37px" }}
          />
          <text
            className="alert-text"
            id="namealert"
            style={{ marginTop: "10px", opacity: "0" }}
          >
            поле имя обязательно
          </text>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="ТЕЛЕФОН"
            id="phone"
            onChange={(e) =>
              (document.getElementById("phonealert").style.opacity = "0")
            }
            style={{ height: "37px" }}
          />
          <text
            className="alert-text"
            id="phonealert"
            style={{ marginTop: "10px", opacity: "0" }}
          >
            поле телефон обязательно
          </text>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="accept"
          name="accept"
          value="yes"
          onChange={(e) =>
            (document.getElementById("acceptalert").style.opacity = "0")
          }
        ></input>
        <label for="accept">
          <text
            className="montserrat subtitleText"
            style={{
              fontSize: "16px",
              marginRight: "95px",
              textAlign: "left",
            }}
          >
            Согласен на сохранение и обработку персональных данных
          </text>
        </label>
        <text
          className="alert-text"
          id="acceptalert"
          style={{ marginTop: "10px", opacity: "0" }}
        >
          согласие обязательно
        </text>
      </div>
      <CustomButton
        className="buttonOther"
        text="Заказать обратный звонок"
        borderColor="white"
        backgroundColor="transparent"
        textColor="white"
        onClick={sibmit}
        style={{ alignSelf: "start", marginBottom: "120px" }}
      />
    </div>
  );
}
