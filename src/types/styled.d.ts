import 'styled-components'

interface Colors {
  900: string
  800: string
  700: string
  600: string
  500: string
  400: string
  300: string
  200: string
  100: string
  50: string
}

interface GreyColors extends Colors {
  0: string
}

interface FontWeight {
  thin: number
  regular: number
  medium: number
  bold: number
}

interface FontSizes {
  xxl: string
  xl: string
  lg: string
  base: string
  sm: string
  xs: string
}

interface FontLineHeights extends FontSizes {}

interface SpacingLevels {
  lg: string
  base: string
  sm: string
  xs: string
}

interface Margin extends SpacingLevels {}
interface Padding extends SpacingLevels {}

export type AvailableSpacing = 'lg' | 'base' | 'sm' | 'xs'
export type AvailableColors = 'primary' | 'secondary' | 'accent' | 'grey'
export type AvailableFontWeights = 'thin' | 'regular' | 'medium' | 'bold'
export type AvailableFontSizes = 'xxl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs'
export type AvailableFontLineHeights =
  | 'xxl'
  | 'xl'
  | 'lg'
  | 'base'
  | 'sm'
  | 'xs'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: Colors
      secondary: Colors
      accent: Colors
      grey: GreyColors
    }
    typography: {
      fontSizes: FontSizes
      fontWeigths: FontWeight
      lineHeights: FontLineHeights
    }
    spacing: {
      margin: Margin
      padding: Padding
      levels: SpacingLevels
    }
  }
}
