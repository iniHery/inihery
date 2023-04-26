import classNames from "classnames";

type Props = {
  header?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Row = (props: Props) => {
  const { header = false, onClick, className } = props;
  return (
    <tr
      className={classNames(
        "bg-transparent",
        {
          "cursor-pointer": !!onClick,
          "border-b border-ds-edge-01": !header,
          "text-ds-type-04 border-b border-ds-edge-02 ": header,
        },
        className
      )}
      onClick={() => onClick && onClick()}
    >
      {props.children}
    </tr>
  );
};

export default Row;
