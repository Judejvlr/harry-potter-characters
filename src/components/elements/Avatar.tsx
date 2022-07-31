import styled, { css } from 'styled-components'
import { Variant } from '../../types/styled'


interface AvatarProps extends Variant {
  image: string,
  alt: string
}


const StyledAvatar = styled.img<Variant>`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  border: 0.25rem solid;
  ${(props) => {
    switch (props.variant) {
      case "Gryffindor":
        return css`
          border-color:  ${props.theme.palette.gryffindor.secondary};
          `
      case "Hufflepuff":
        return css`
          border-color:  ${props.theme.palette.hufflepuff.secondary};
          `
      case "Ravenclaw":
        return css`
          border-color:  ${props.theme.palette.ravenclaw.secondary};
          `
      case "Slytherin":
        return css`
          border-color:  ${props.theme.palette.slytherin.secondary};
          `
      default:
        return css`
          border-color:  ${props.theme.palette.default.secondary};
          `
    }
  }}
`

export default function Avatar({ image, alt, variant }: AvatarProps) {
  const HPLogo = 'https://logodix.com/logo/1188650.jpg';

  return (
    <StyledAvatar src={image ? image : HPLogo} alt={alt} variant={variant} />
  )
}