import AppBar from '../AppBar';
import useBreakpoints from '../../hooks/useBreakpoints';

export default function RootLayout(props) {

  const { active } = useBreakpoints();
  
  return (
    <>
      <div className="Layout-background">
        <div className={`Layout ${active === "xs" || active === "sm" || active === "md" ? "mobile" : ""}`}>
          <header className="Layout-header">
            <AppBar></AppBar>
          </header>

          {/* <div className="Layout-body">{props.children}</div> */}
          <div
            style={{
              width: "1px",
              backgroundColor: "white",
              opacity: 0.08,
              gridArea: "1 / 2 / 2 / 3",
            }}
          ></div>
          <div
            style={{
              width: "1px",
              backgroundColor: "white",
              opacity: 0.08,
              gridArea: "1 / 3 / 2 / 4",
            }}
          ></div>
          <div
            style={{
              width: "1px",
              backgroundColor: "white",
              opacity: 0.08,
              gridArea: "1 / 4 / 2 / 5",
            }}
          ></div>
          <div
            style={{
              width: "1px",
              backgroundColor: "white",
              opacity: 0.08,
              gridArea: "1 / 5 / 2 / 6",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
