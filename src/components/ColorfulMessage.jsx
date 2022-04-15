import React from "react";

// propsは引数のようなもの
const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  // props.プロパティ名だけでなく、children要素も指定できる
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
