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
      <div className="Layout-body">{props.children}</div>
    </div>
  );
}
