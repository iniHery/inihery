import classNames from "classnames";

export enum Size {
  s = "s",
  xs = "xs",
}

export enum As {
  div = "div",
  p = "p",
  span = "span",
}

type Props = {
  as?: As;
  children?: any;
  className?: string;
  size?: Size;
};

const Caption = (props: Props) => {
  const { as = As.span, className, size = Size.s } = props;

  const styles = classNames(
    {
      // font-size
      "text-[0.875rem] tracking-[-0.001em] leading-[125%]": size === Size.s,
      "text-[0.75rem] tracking-[-0.001em] leading-[125%]": size === Size.xs,
    },
    className
  );

  switch (as) {
    case "div":
      return <div className={styles}>{props.children}</div>;
    case "p":
      return <p className={styles}>{props.children}</p>;
    case "span":
      return <span className={styles}>{props.children}</span>;

    default:
      return <div className={styles}>{props.children}</div>;
  }
};

export default Caption;
