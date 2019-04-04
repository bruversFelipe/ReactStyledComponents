import React, { useState, useContext } from "react";
import Radio from "antd/lib/radio";
import ContextTheme from "../../ContextTheme";

const RadioGroup = Radio.Group;

const styleRadio = {
  display: "block",
  marginBottom: "10px"
};

const radios = [
  {
    value: "default",
    title: "Default"
  },
  {
    value: "green",
    title: "Green"
  },
  {
    value: "red",
    title: "Red"
  },
  {
    value: "orange",
    title: "Orange"
  }
];

const Options = () => {
  const [valueRadio, setValue] = useState("default");
  const context = useContext(ContextTheme);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
    context.saveTheme(value);
  };

  return (
    <RadioGroup onChange={onChange} value={valueRadio}>
      {radios.map(item => (
        <Radio style={styleRadio} key={item.value} value={item.value}>
          {item.title}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default Options;
