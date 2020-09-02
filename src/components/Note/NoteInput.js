import * as React from "react";
import "./NoteInput.css";
import { useState } from "react";
import { css } from "@emotion/core";

const NoteInput = (props) => {
  let colorList = [
    {
      id: 0,
      style: {
        backgroundColor: "white",
        color: "black",
      },
      placeHolderColor: "#c4c4c4",
      label: "Default",
      isSelected: true,
    },
    {
      id: 2,
      style: {
        backgroundColor: "#16213e",
        color: "yellow",
        textShadow: "0px 0px 1px #f5d24ee3",
      },
      placeHolderColor: "white",
      label: "Dark blue",
      isSelected: false,
    },
    {
      id: 3,
      style: {
        backgroundColor: "#a2de96",
        color: "black",
        textShadow: "1px 1px 1px black",
      },
      placeHolderColor: "black",
      label: "Green",
      isSelected: false,
    },
  ];
  const [selectedColor, setSelectedColor] = useState([colorList[0]]);
  const [color, setColor] = useState(colorList);
  const colorHandler = (event) => {
    let temp1 = color.map((color) => ({
      ...color,
      isSelected: parseInt(color.id) === parseInt(event.target.value),
    }));
    setColor(temp1);
    let temp = temp1.filter((color) => color.id === event.target.value);
    setSelectedColor(temp);
  };
  const getStyle = () => ({
    ...color.filter((col) => col.isSelected === true)[0],
  });
  const inputText = css`
  & > input::placeholder {
    color${getStyle().placeHolderColor}
  }
`;
  console.log("asasasas=> ", JSON.stringify(getStyle()));
  console.log("[selected color]", selectedColor);
  return (
    <React.Fragment>
      <div className={"note"}>
        <div className={"select-note-color"}>
          <button
            className={"color-picker"}
            style={{ backgroundColor: getStyle().style.backgroundColor }}
          >
            &nbsp;
          </button>
          <ul style={{ width: "100%" }}>
            {color.map((color) => (
              <li onClick={colorHandler} value={color.id}>
                {color.label}{" "}
                {color.isSelected && (
                  <React.Fragment>&nbsp;&#x2713;</React.Fragment>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={"note-container"} css={[inputText]}>
          <span className={"close"}>&#10060;</span>
          <input
            style={{ ...getStyle().style }}
            className={"input"}
            placeholder={"What's it about?..."}
            type={"text"}
          />
          <textarea
            style={{ ...getStyle().style }}
            css={css`
              &::placeholder {
                color: ${getStyle().placeHolderColor};
              }
            `}
            className={"input"}
            placeholder={"Task..."}
            autoFocus
            rows={10}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default NoteInput;
