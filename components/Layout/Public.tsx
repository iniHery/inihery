import Link from "next/link";
import classNames from "classnames";
import { Body } from "ds/Typography";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "components/SEO";

export enum PublicMenu {
  home = "home",
}

type Props = {
  active: PublicMenu;
  children: React.ReactNode;
};

const availableNav = [{ key: "home", label: "Home" }];

const PublicDashboardLayout = (props: Props) => {
  const { active } = props;
  const router = useRouter();

  const handleNavClick = (nav: string) => {
    router.push(`/${nav}`);
  };

  const [showMobileNav, setShowMobileNav] = useState(false);

  const controlTop = useAnimationControls();
  const controlBottom = useAnimationControls();

  return (
    <>
      <SEO />

      <div className="min-h-screen flex flex-col">
        {/* Mobile nav */}
        <div className="mb-ds-2x flex-none flex md:hidden justify-between items-center w-full p-ds-3x">
          <div className="flex items-center z-20">[LOGO]</div>
          <button
            type="button"
            className="h-[24px] w-[24px] z-20"
            onClick={() => {
              setShowMobileNav(!showMobileNav);
              controlTop.start(showMobileNav ? "closed" : "open");
              controlBottom.start(showMobileNav ? "closed" : "open");
            }}
          >
            <div className="grid grid-cols-1 gap-[4px] p-[4px]">
              <motion.div
                initial={{ y: 0, rotate: "0deg" }}
                variants={{
                  open: {
                    y: [0, 3, 3],
                    rotate: ["0deg", "0deg", "45deg"],
                  },
                  closed: {
                    y: [3, 3, 0],
                    rotate: ["45deg", "0deg", "0deg"],
                  },
                }}
                transition={{ type: "tween", times: [0, 0.5, 1] }}
                animate={controlTop}
                className="h-[2px] bg-ds-type-04"
              />
              <motion.div
                initial={{ y: 0, rotate: 0 }}
                variants={{
                  open: {
                    y: [0, -3, -3],
                    rotate: ["0deg", "0deg", "-45deg"],
                  },
                  closed: {
                    y: [-3, -3, 0],
                    rotate: ["-45deg", "0deg", "0deg"],
                  },
                }}
                transition={{ type: "tween", times: [0, 0.5, 1] }}
                animate={controlBottom}
                className="h-[2px] bg-ds-type-04"
              />
            </div>
          </button>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: showMobileNav ? "0px" : "100vw" }}
            transition={{ type: "tween" }}
            className="bg-ds-surface-01 fixed inset-0 z-10 flex items-start pt-[90px]"
          >
            <div className="p-[24px] grid grid-flow-row gap-4">
              {availableNav.map((nav) => (
                <button
                  key={nav.key}
                  type="button"
                  className={classNames(
                    "block group px-ds-2x py-[4px] rounded-full transition whitespace-nowrap w-min",
                    "hover:bg-body-200",
                    nav.key === active ? "bg-body-200" : "bg-transparent"
                  )}
                  onClick={() => {
                    handleNavClick(nav.key);
                    setShowMobileNav(false);
                    controlTop.start("closed");
                    controlBottom.start("closed");
                  }}
                >
                  <Body
                    className={classNames(
                      "!font-medium transition",
                      "group-hover:text-white",
                      nav.key === active ? "text-white" : "text-ds-type-04"
                    )}
                  >
                    {nav.label}
                  </Body>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        {/* End of Mobile nav */}

        {/* Desktop nav */}
        <div className="hidden md:grid grid-cols-3 w-full p-ds-3x lg:p-ds-6x mb-ds-2x">
          <div className="flex justify-start">
            <div className="flex items-center">[LOGO]</div>
          </div>
          <div className="flex justify-center">
            {availableNav.map((nav) => {
              return (
                <div key={nav.key} className="px-ds-2x py-[4px]">
                  <button
                    key={nav.key}
                    type="button"
                    className={classNames(
                      "group whitespace-nowrap pb-2 border-b-2 transition",
                      "hover:border-white",
                      nav.key === active ? "border-white" : "border-transparent"
                    )}
                    onClick={() => handleNavClick(nav.key)}
                  >
                    <Body
                      className={classNames(
                        "!font-medium transition",
                        "group-hover:text-white",
                        nav.key === active ? "text-white" : "text-ds-type-04"
                      )}
                    >
                      {nav.label}
                    </Body>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end" />
        </div>
        {/* End of Desktop nav */}

        {/* content */}
        <div className="flex w-full justify-center flex-1">
          <div className="mx-ds-4x w-full pb-ds-15x lg:max-w-[1300px]">
            {props.children}
          </div>
        </div>
        {/* end of content */}

        {/* Footer */}
        <div className="flex-none flex flex-col justify-center lg:flex-row items-center gap-[8px] pb-10">
          <div className="underline text-sm">
            <Link
              href="/risks-and-disclosures"
              target="_blank"
              rel="noreferrer"
            >
              Risks and Disclosures
            </Link>
          </div>
          <div className="underline text-sm">
            <Link href="/terms-of-use" target="_blank" rel="noreferrer">
              Terms of Use
            </Link>
          </div>
          <div className="underline text-sm">
            <Link href="/privacy-policy" target="_blank" rel="noreferrer">
              Privacy Policy
            </Link>
          </div>
          <div className="underline text-sm">
            <Link href="/direct-redemption" target="_blank" rel="noreferrer">
              AMKT Direct Redemption
            </Link>
          </div>
        </div>
        {/* End footer */}
      </div>
    </>
  );
};

export const withPublicDashboardLayout = (
  page: NextPageWithLayout,
  active: PublicMenu
) => {
  page.getLayout = function getLayout(currentPage: ReactElement) {
    return (
      <PublicDashboardLayout active={active}>
        {currentPage}
      </PublicDashboardLayout>
    );
  };

  return page;
};
