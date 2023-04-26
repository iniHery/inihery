import classNames from "classnames";
import { ReactElement } from "react";

export enum LightVariant {
  positive = "positive",
  danger = "danger",
  warning = "warning",
}

export enum LightStatus {
  complete = "complete",
}

type Props = {
  variant?: LightVariant;
  status?: LightStatus;
};

const Light = (props: Props): ReactElement => {
  const { status = LightStatus.complete, variant = LightVariant.positive } =
    props;

  return (
    <div
      className={classNames(
        "h-[8px] w-[8px] rounded-full flex justify-center items-center",
        {
          "bg-ds-positive-04": variant === LightVariant.positive,
          "bg-ds-danger-04": variant === LightVariant.danger,
          "bg-ds-warning-04": variant === LightVariant.warning,
        }
      )}
    >
      <div
        className={classNames("h-[6px] w-[6px] rounded-full", {
          "bg-ds-positive-03": variant === LightVariant.positive,
          "bg-ds-danger-03": variant === LightVariant.danger,
          "bg-ds-warning-03": variant === LightVariant.warning,
        })}
      />
    </div>
  );
};

export default Light;
