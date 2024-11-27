import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: mode("gray.800", "#d9d9d9"),
      bg: mode("#f6f6f6", "#202144"),
    },
  }),
};

const components = {
  Drawer: {
    baseStyle: () => ({
      dialog: {
        bg: mode("white", "#202144"),
      },
    }),
  },
};

// 우리가 만든 컴포넌트가 아니라 차크라가 제공하는 컴포넌트임

const theme = extendTheme({
  styles,
  components,
  config,
});

export default theme;
