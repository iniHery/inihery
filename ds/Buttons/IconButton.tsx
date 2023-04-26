import classNames from "classnames";
import { forwardRef, ButtonHTMLAttributes } from "react";

export enum Size {
  m = "m",
  s = "s",
}

type Props = {
  size?: Size;
  className?: string;
  children?: any;
  disabled?: boolean;
  onClick?: () => void;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size = Size.m, className, ...rest } = props;

  const styles = classNames(
    "relative rounded-[8px] flex items-center justify-center overflow-hidden text-white border-[1.5px] transition-all outline-none focus:outline-none",
    "bg-ds-surface-02 hover:bg-ds-surface-03 active:bg-gradient-to-b active:from-[#1D1E20] active:to-[#27272A]", //background
    "border-ds-edge-01 hover:border-ds-edge-02 active:border-ds-edge-02", //border
    "disabled:cursor-not-allowed disabled:text-ds-type-05 disabled:bg-ds-surface-02 disabled:border-ds-edge-01",
    {
      "h-[50px] w-[50px] text-[28px]": size === Size.m,
      "h-[40px] w-[40px] text-[22px]": size === Size.s,
    },
    className
  );

  return (
    <button type="button" className={styles} {...rest}>
      {props.children}
    </button>
  );
});

export default IconButton;
