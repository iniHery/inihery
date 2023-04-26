import classNames from "classnames";
import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

export enum Size {
  m = "m",
  s = "s",
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  block?: boolean;
  size?: Size;
}

const TextField = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      className,
      error = false,
      block = false,
      size = Size.m,
      ...rest
    } = props;

    const styles = classNames(
      "h-[50px] text-ds-type-02 bg-ds-surface-02 border-[1.5px] border-ds-edge-02 rounded-[8px] transition-all outline-none",
      "placeholder:text-ds-type-04",
      "focus:outline-none focus:border-ds-brand-03",
      "hover:border-ds-edge-04",
      {
        "!border-ds-danger-04": error,
      },

      {
        "px-ds-2x h-[50px]": size === Size.m,
        "px-ds-2x h-[40px]": size === Size.s,
      },

      block ? "w-full" : "w-min",
      className
    );

    return <input type="text" className={styles} ref={ref} {...rest} />;
  }
);

export default TextField;
