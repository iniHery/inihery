import Tippy, { TippyProps } from "@tippyjs/react";
import { useSpring, motion } from "framer-motion";

interface TooltipProps extends TippyProps {
  content: React.ReactNode | string;
}

const Tooltip = (props: TooltipProps) => {
  const { content, children, ...otherProps } = props;
  const initial = { opacity: 0, y: -10 };
  const opacity = useSpring(initial.opacity, { bounce: 0 });
  const y = useSpring(initial.y, { bounce: 0 });

  return (
    <Tippy
      allowHTML
      animation={true}
      hideOnClick={false}
      content={content}
      onMount={() => {
        opacity.set(1);
        y.set(0);
      }}
      onHide={() => {
        opacity.set(0);
        y.set(initial.y);
      }}
      render={(attrs) => (
        <motion.div
          style={{ opacity, y }}
          className="bg-white px-ds-2x py-ds-1x text-ds-surface-01 rounded-[8px] max-w-[240px] z-10"
          {...attrs}
        >
          {content}
          <div data-popper-arrow>
            <div className="w-[16px] h-[16px] bg-white !rotate-45 rounded-br-[4px]" />
          </div>
        </motion.div>
      )}
      {...otherProps}
    >
      <div className="w-fit">{children}</div>
    </Tippy>
  );
};

export default Tooltip;
