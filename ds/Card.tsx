import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Card = (props: Props) => {
  const { className } = props;
  const styles = classNames(
    "bg-ds-surface-02 rounded-[16px] p-[16px] flex-1 max-w-full transition sm:p-[32px]",
    className
  );

  return (
    <div
      className="p-[1.5px] bg-gradient-to-l from-[#24242B] to-[#45454A] rounded-[16px] overflow-hidden flex flex-1 max-w-full"
      style={{
        boxShadow:
          "0px 8px 24px rgba(0, 0, 0, 0.5), 0px 8px 8px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className={styles}>{props.children}</div>
    </div>
  );
};
export default Card;
