import useBreakpoints from "../../../hooks/useBreakpoints";
import MenuIcon from "./menuicon";

export default function Menu(props) {

  const { active } = useBreakpoints();

  const { menuButtons } = props;
  return (
    <div className="Menu">
      {(active === "xs" || active === "sm" || active === "md") &&
        
        <button
          style={{ justifySelf: "flex-end" }}
        >
          <MenuIcon></MenuIcon>
        </button>
      }
      {active === "lg" &&
        menuButtons.map((button) => (
          <button>
            <text className="montserrat T3">{button.text}</text>
          </button>
        ))}
    </div>
  );
}
