import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";

const citySelectItems = [
  { label: "New York", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];

const cities = [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
];

const HelloWorld = () => {
  const [value1, setValue1] = useState("Off");
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const options = ["Off", "On"];
  const paymentOptions = [
    { name: "Option 1", value: 1 },
    { name: "Option 2", value: 2 },
    { name: "Option 3", value: 3 },
  ];
  const justifyOptions = [
    { icon: "pi pi-align-left", value: "left" },
    { icon: "pi pi-align-right", value: "Right" },
    { icon: "pi pi-align-center", value: "Center" },
    { icon: "pi pi-align-justify", value: "Justify" },
  ];

  const justifyTemplate = (option) => {
    return <i className={option.icon}></i>;
  };

  return (
      <div class="card">
        <h5>Single Selection</h5>
        <SelectButton
          value={value1}
          options={options}
          onChange={(e) => setValue1(e.value)}
        />

        <h5>Multiple Selection</h5>
        <SelectButton
          value={value2}
          options={paymentOptions}
          onChange={(e) => setValue2(e.value)}
          optionLabel="name"
          multiple
        />

        <h5>Custom Content</h5>
        <SelectButton
          value={value3}
          options={justifyOptions}
          onChange={(e) => setValue3(e.value)}
          itemTemplate={justifyTemplate}
          optionLabel="value"
        />
      </div>
  );
};

export default HelloWorld;
