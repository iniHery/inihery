import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Cell = (props: Props) => {
  const { className, onClick } = props;

  return (
    <td
      onClick={() => {
        onClick && onClick();
      }}
      className={classNames(
        "text-left font-normal p-[16px] first:rounded-l-[16px] last:rounded-r-[16px]",
        {
          "cursor-pointer text-ds-type-02": !!onClick,
        },
        className
      )}
    >
      {props?.children}
    </td>
  );
};

export default Cell;
