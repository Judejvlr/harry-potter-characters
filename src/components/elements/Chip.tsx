import styled, { css } from "styled-components"
import { Variant } from "../../types/styled"

interface ChipProps extends Variant {
  label: string
}

const StyledChip = styled.span<Variant>`
padding: 0.25rem;
border-radius: 5px;
 ${(props) => {
    switch (props.variant) {
      case "Gryffindor":
        return css`
        background-color: ${props.inverted ? props.theme.palette.gryffindor.secondary : props.theme.palette.gryffindor.primary};
        color: ${props.inverted ? props.theme.palette.gryffindor.primary : props.theme.palette.gryffindor.secondary};
        `
      case "Hufflepuff":
        return css`
        background-color: ${props.inverted ? props.theme.palette.hufflepuff.secondary : props.theme.palette.hufflepuff.primary};
        color: ${props.inverted ? props.theme.palette.hufflepuff.primary : props.theme.palette.hufflepuff.secondary};
        `
      case "Ravenclaw":
        return css`
        background-color: ${props.inverted ? props.theme.palette.ravenclaw.secondary : props.theme.palette.ravenclaw.primary};
        color: ${props.inverted ? props.theme.palette.ravenclaw.primary : props.theme.palette.ravenclaw.secondary};
        `
      case "Slytherin":
        return css`
        background-color: ${props.inverted ? props.theme.palette.slytherin.secondary : props.theme.palette.slytherin.primary};
        color: ${props.inverted ? props.theme.palette.slytherin.primary : props.theme.palette.slytherin.secondary};
        `
      default:
        return css`
        background-color: ${props.inverted ? props.theme.palette.default.secondary : props.theme.palette.default.primary};
        color: ${props.inverted ? props.theme.palette.default.primary : props.theme.palette.default.secondary};
        `
    }
  }}
  `

/**
 * It's a function that takes a variant, inverted, and label prop and returns a styled chip component
 * with the label
 * @param {ChipProps}  - ChipProps
 * @returns A StyledChip component with a label prop.
 */
export default function Chip({ variant, inverted, label }: ChipProps) {
  return (
    <StyledChip variant={variant} inverted={inverted}>
      {label}
    </StyledChip>
  )
}