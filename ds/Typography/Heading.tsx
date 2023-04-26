import classNames from "classnames";

export enum Size {
  xl = "xl",
  l = "l",
  m = "m",
  s = "s",
}

export enum As {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  div = "div",
}

type Props = {
  as?: As;
  children?: any;
  className?: string;
  size?: Size;
};

const Heading = (props: Props) => {
  const { as = As.h2, className, size = Size.m } = props;

  const styles = classNames(
    "font-medium",
    {
      // font-size
      "text-[1.5rem] tracking-[-0.005em] leading-[3.125rem]": size === Size.xl,
      "text-[1.35rem] tracking-[-0.004em] leading-[2rem]": size === Size.l,
      "text-[1.2rem] tracking-[-0.003em] leading-[2.75rem]": size === Size.m,
      "text-[1.10rem] tracking-[-0.002em] leading-[1.788rem]": size === Size.s,
    },
    className
  );

  switch (as) {
    case As.h1:
      return <h1 className={styles}>{props.children}</h1>;
    case As.h2:
      return <h2 className={styles}>{props.children}</h2>;
    case As.h3:
      return <h3 className={styles}>{props.children}</h3>;
    case As.h4:
      return <h4 className={styles}>{props.children}</h4>;
    case As.h5:
      return <h5 className={styles}>{props.children}</h5>;
    case As.h6:
      return <h6 className={styles}>{props.children}</h6>;
    case As.div:
      return <div className={styles}>{props.children}</div>;
    default:
      return <div className={styles}>{props.children}</div>;
  }
};

export default Heading;
