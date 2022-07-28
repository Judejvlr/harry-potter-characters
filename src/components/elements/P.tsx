import styled, { css } from "styled-components"
import { Variant } from "../../types/styled"

export const P = styled.p<Variant>`
  margin: 0;
   ${(props) => {
    switch (props.variant) {
      case "Gryffindor":
        return css`
          color: ${props.inverted ? props.theme.palette.griffyndor.primary : props.theme.palette.griffyndor.secondary};
          `
      case "Hufflepuff":
        return css`
          color: ${props.inverted ? props.theme.palette.hufflepuff.primary : props.theme.palette.hufflepuff.secondary};
          `
      case "Ravenclaw":
        return css`
          color: ${props.inverted ? props.theme.palette.ravenclaw.primary : props.theme.palette.ravenclaw.secondary};
          `
      case "Slytherin":
        return css`
          color: ${props.inverted ? props.theme.palette.slytherin.primary : props.theme.palette.slytherin.secondary};
          `
      default:
        return css`
          color: ${props.inverted ? props.theme.palette.default.primary : props.theme.palette.default.secondary};
        `
    }
  }};
`

export default P