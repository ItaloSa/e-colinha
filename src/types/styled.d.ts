// styled.d.ts
import "styled-components";

import { theme } from "../styles/themes/default";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
