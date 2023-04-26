import useOnClickOutside from "hooks/useOnClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import NoSSR from "react-no-ssr";

type Props = {
  children?: any;
  visible?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClose?: () => void;
};

const Modal: React.FC<Props> = (props) => {
  const { visible, size = "md", onClose, className = "" } = props;
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    onClose && onClose();
  });

  const onRequestCloseFromKeyboard = (e) => {
    if (e.key !== "Escape") return null;

    onClose && onClose();
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", onRequestCloseFromKeyboard);
    } else {
      document.removeEventListener("keydown", onRequestCloseFromKeyboard);
    }

    return () => {
      document.removeEventListener("keydown", onRequestCloseFromKeyboard);
    };
  }, [visible]);

  const modalStyles = classNames(
    `bg-ds-surface-02 p-[24px] rounded-[16px] border border-ds-edge-01 overflow-x-hidden`,
    {
      "w-[120px]": size === "sm",
      "w-[320px]": size === "md",
      "w-[500px]": size === "lg",
      "w-[90vw]": size === "xl",
    },
    className
  );

  return (
    <NoSSR>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ background: "rgba(0,0,0,0)" }}
            animate={{ background: "rgba(0,0,0,.4)" }}
            exit={{ background: "rgba(0,0,0,0)" }}
            transition={{ type: "tween", ease: "easeOut" }}
            className="fixed inset-0 flex justify-center h-screen w-screen items-stretch overflow-y-auto z-[9999]"
          >
            <div>
              <div className="h-[120px] w-full" />
              <motion.div
                ref={ref}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "tween", ease: "easeOut" }}
                className={modalStyles}
              >
                <div>{props.children}</div>
              </motion.div>
              <div className="h-[120px] w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NoSSR>
  );
};

export default Modal;
