import Spinner from "ds/Spinner";
import { Body, BodyAs, BodySize } from "ds/Typography";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, ButtonHTMLAttributes } from "react";

export enum Size {
  m = "m",
  s = "s",
  xs = "xs",
}

export enum Type {
  button = "button",
  submit = "submit",
}

export enum IconPosition {
  left = "left",
  right = "right",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: Type;
  size?: Size;
  icon?: any;
  iconPosition?: IconPosition;
  block?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    icon,
    iconPosition = IconPosition.left,
    type = Type.button,
    size = Size.m,
    className,
    block = false,
    disabled = false,
    loading = false,
    ...rest
  } = props;

  const styles = classNames(
    "relative flex items-center justify-center overflow-hidden rounded-[8px] text-white border-[1.5px] transition-all font-medium outline-none focus:outline-none",
    "bg-ds-surface-02 hover:bg-ds-surface-03 active:bg-ds-surface-04", //background
    "border-ds-edge-01 hover:border-ds-edge-02 active:border-ds-edge-02", //border
    "disabled:cursor-not-allowed disabled:text-ds-type-05 disabled:bg-ds-surface-02 disabled:border-ds-edge-01",
    {
      "px-ds-3x h-[50px]": size === Size.m,
      "px-ds-2x h-[40px]": size === Size.s,
      "px-[12px] h-[35px]": size === Size.xs,
    },

    block ? "w-full" : "w-fit",

    className
  );

  const textSize = {
    m: "l",
    s: "m",
    xs: "s",
  };

  return (
    <button
      disabled={disabled || loading}
      type={type}
      className={styles}
      {...rest}
    >
      {icon && iconPosition === IconPosition.left && (
        <div className="text-xl mr-[4px]">{icon}</div>
      )}
      <Body as={BodyAs.span} size={textSize[size] as BodySize}>
        {children}
      </Body>
      {icon && iconPosition === IconPosition.right && (
        <div className="text-xl ml-[4px]">{icon}</div>
      )}

      {/* spinner */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, type: "tween" }}
            className="inset-0 absolute bg-ds-surface-02/80 flex items-center justify-center text-ds-brand-04"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ delay: 0.1, type: "tween" }}
            >
              <Spinner />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* end of spinner */}
    </button>
  );
});

export default Button;
