import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Nunito Sans, sans-serif",
  primaryColor: "bright-green",
  colors: {
    "bright-green": [
      "#008000",
      "#008000",
      "#008000",
      "#008000",
      "#008000",
      "#008000",
      "#008000",
      "#1e5c1e",
      "#004700",
      "#004700",
    ],
  },
  components: {
    Text: {
      styles: (theme: { colors: { [x: string]: any[] } }) => ({
        root: {
          color: theme.colors["bright-green"][9],
        },
      }),
    },
  },
});
