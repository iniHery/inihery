import classNames from "classnames";

export enum Size {
  l = "l",
  m = "m",
  s = "s",
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

const Body = (props: Props) => {
  const { as = As.div, className, size = Size.l } = props;

  const styles = classNames(
    {
      // font-size
      "text-[1rem] tracking-[-0.001em] leading-[1.463em]": size === Size.l,
      "text-[0.8rem] tracking-[-0.001em]  leading-[1.35em]": size === Size.m,
      "text-[0.75rem] tracking-[-0.001em] leading-[1.181em]": size === Size.s,
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

export default Body;
