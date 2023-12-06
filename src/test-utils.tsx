import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import AppProvider from "./providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };

    // import { ThemeProvider } from "my-ui-lib";
    // import { TranslationProvider } from "my-i18n-lib";
    // import defaultStrings from "i18n/en-x-default";
    
    // const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    //   return (
    //     <ThemeProvider theme="light">
    //       <TranslationProvider messages={defaultStrings}>
    //         {children}
    //       </TranslationProvider>
    //     </ThemeProvider>
    //   );
    // };