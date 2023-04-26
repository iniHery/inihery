import classNames from "classnames";

type Props = {
  className?: string;
};

const Shimmer = (props: Props) => {
  const { className } = props;

  return (
    <div
      className={classNames(
        "animate-pulse relative bg-ds-edge-01 w-full rounded-[4px] h-[14px] overflow-hidden",
        className
      )}
    />
  );
};

export default Shimmer;
