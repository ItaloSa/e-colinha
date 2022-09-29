// styled.d.ts
import "styled-components";

import { theme } from "../theme";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
