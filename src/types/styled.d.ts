import 'styled-components';


interface IPalette {
  primary: string
  secondary: string
}

interface Variant {
  variant: string,
  inverted?: boolean
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      griffyndor: IPalette,
      slytherin: IPalette,
      ravenclaw: IPalette,
      hufflepuff: IPalette,
      default: IPalette,
      common: {
        background: string,
        text: string
      }
    }


  }
}