import "styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Aeonik from "fonts/Aeonik";
import JetBrainsMono from "fonts/JetBrainsMono";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { RecoilRoot } from "recoil";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {getLayout(
            <>
              <style jsx global>{`
                html {
                  font-family: ${Aeonik.style.fontFamily};
                  font-size: 16px;
                  background: #111112;
                  color: #ffffff;
                  letter-spacing: -0.001em;
                  line-height: 125%;
                }
              `}</style>

              <main
                className={`${Aeonik.variable} ${JetBrainsMono.variable} subpixel-antialiased`}
              >
                <Component {...pageProps} />
              </main>
            </>
          )}
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
