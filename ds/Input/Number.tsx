import { NumericFormat, NumericFormatProps } from "react-number-format";
import Text, { InputProps as TextFieldProps } from "./Text";

export interface InputProps extends NumericFormatProps<TextFieldProps> {}

const Number = (props: InputProps) => {
  return <NumericFormat thousandSeparator customInput={Text} {...props} />;
};

export default Number;
