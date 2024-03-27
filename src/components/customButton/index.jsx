export default function CustomButton({
  text,
  backgroundColor,
  borderColor,
  textColor,
  border,
  onClick,
  style,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "380px",
        justifyContent: "space-between",
        border: border
          ? border
          : `0.5px solid ${borderColor ? borderColor : "transparent"}`,
        
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <text
          className="raleway T1"
          style={{ color: textColor, width: "100%" }}
        >
          {text}
        </text>
        <div
          style={{
            width: "1px",
            height: "70px",
            backgroundColor: textColor,
            marginRight: "35px",
          }}
        ></div>
        <div style={{marginRight: "13px",marginTop:"35px",marginBottom:"13px"}}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 4.29346V20.952H4.37326M20.9618 21L1 1"
              stroke={textColor}
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
