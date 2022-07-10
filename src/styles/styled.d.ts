import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      toggle: string;
      headerBg: string;
      subtitle: string;
      cardBg: string;
      cardBgHover: string;
    };
  }
}
