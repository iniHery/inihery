import { Check } from "ds/Icons";
import { Body, BodySize } from "ds/Typography";
import classNames from "classnames";
import React, { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { checked, onChange, disabled, label, ...rest } = props;

    return (
      <label className="flex items-center">
        <div className="relative">
          <input
            readOnly={!onChange}
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={onChange}
            className="hidden"
            {...rest}
          />
          <div
            className={classNames(
              "border-[1.5px] flex items-center justify-center rounded-[4px] w-[16px] h-[16px] transition-all",
              checked
                ? "bg-ds-brand-03 border-ds-brand-03"
                : "bg-transparency border-ds-edge-02",

              {
                "!bg-ds-surface-06 border-ds-surface-06": disabled,
              }
            )}
          >
            {checked && <Check />}
          </div>
        </div>
        {label && (
          <Body
            size={BodySize.m}
            className={classNames(
              "ml-ds-1x",
              disabled ? "text-ds-type-05" : "text-ds-type-01"
            )}
          >
            {label}
          </Body>
        )}
      </label>
    );
  }
);

export default Checkbox;
