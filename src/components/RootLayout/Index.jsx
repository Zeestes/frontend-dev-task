import "./index.css"

import AppBar from "./AppBar";

export default RootLayout = props => {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <AppBar>

        </AppBar>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}
