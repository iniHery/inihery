import React from "react";
import ReactSelect from "react-select";
import cn from "classnames";

const classNames = {
  control: (state) => {
    return cn(
      "h-[50px] !border-[1.5px] !border-ds-edge-02 !bg-transparent !rounded-[8px] outline-none focus:outline-none",
      state.isFocused && "border-ds-brand-03"
    );
  },
  indicatorSeparator: () => `!bg-transparent`,
  menu: (provided) => ({
    ...provided,
    boxShadow: "none",
  }),
};

const Select = (props: any) => {
  const { options = [], placeholder = "" } = props;

  return (
    <ReactSelect
      placeholder={placeholder}
      options={options}
      classNames={classNames}
    />
  );
};

export default Select;
