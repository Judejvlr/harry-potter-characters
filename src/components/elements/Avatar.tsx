import styled, { css } from 'styled-components'
import HPLogo from '../../assets/images/HPLogo.jpeg'
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
  &_Griffyndor{
    border-color:  ${props => props.theme.palette.griffyndor.secondary};
  }
  ${(props) => {
    switch (props.variant) {
      // case "Gryffindor":
      //   return css`
      //     border-color:  ${props.theme.palette.griffyndor.secondary};
      //     `
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
  return (
    <StyledAvatar src={image ? image : HPLogo} alt={alt} variant={variant} />
  )
}