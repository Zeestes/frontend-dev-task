import AppBar from "../AppBar";
export default function RootLayout(props) {
  return (
    <div className="Layout">
      <div className="Layout-background"></div>
      <div
        style={{
          display: "flex",
          marginLeft: "300px",
          justifyContent: "space-between",
          marginRight: "300px",
          height: "100vh",
          right: "0",
          position: "absolute",
          left: "0",
        }}
      >
        <div
          style={{ width: "1px", backgroundColor: "white", opacity: 0.08 }}
        ></div>
        <div
          style={{ width: "1px", backgroundColor: "white", opacity: 0.08 }}
        ></div>
        <div
          style={{ width: "1px", backgroundColor: "white", opacity: 0.08 }}
        ></div>
        <div
          style={{ width: "1px", backgroundColor: "white", opacity: 0.08 }}
        ></div>
      </div>
      <header className="Layout-header">
        <AppBar></AppBar>
      </header>
      <main>
        <div className="center">
          <text className="raleway H1" style={{}}>
            СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА
          </text>
          <div className="subtitle">
            <text className="raleway T2 subtitleText" sx={{ width: "727px" }}>
              Когда ваше время и энергия лучше сфокусированы, стремление к новым
              возможностям становится реальностью, ваш успех зависит от ваших
              действий
            </text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                width: "380px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "71px",
                  backgroundColor: "white",
                  border: "1px solid transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <text className="raleway T1" style={{ color: "#07305D" }}>
                  Записаться на консультацию
                </text>
              </div>
              <div
                style={{
                  width: "71px",
                  height: "71px",
                  backgroundColor: "white",
                  border: "0.5px solid transparent",
                }}
              ></div>
            </button>
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                width: "380px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "71px",
                  backgroundColor: "transparent",
                  border: "0.5px solid white",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <text className="raleway T1">Записаться на консультацию</text>
              </div>
              <div
                style={{
                  width: "71px",
                  height: "71px",
                  backgroundColor: "transparent",
                  border: "0.5px solid white",
                }}
              ></div>
            </button>
          </div>
        </div>
        <div className="precent"></div>
        <div className="quantity"></div>
      </main>
      <div className="Layout-body">{props.children}</div>
    </div>
  );
}
