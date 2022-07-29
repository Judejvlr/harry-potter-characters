import { useState } from "react";
import styled, { css } from "styled-components";
import Character from "../../types/character";
import { Variant } from "../../types/styled";
import Avatar from "../elements/Avatar";
import Characteristic from "./Characteristic";
import H3 from "../elements/H3";

interface Flip {
  flip: boolean
}

interface CardProps extends Character { }

const StyledCard = styled.article<Variant & Flip>`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  position: relative;
  perspective: 1000px;
  height: 100%;
  border-radius: 5px;
  transform: ${props => props.flip ? 'rotateY(180deg)' : ''};
  &:hover{
    transform:  ${props => props.flip ? 'rotateY(160deg)' : 'rotateY(20deg)'};
    cursor: pointer;
  } 
  ${(props) => {
    switch (props.variant) {
      case "Gryffindor":
        return css`
          background-color: ${props.flip ? props.theme.palette.griffyndor.secondary : props.theme.palette.griffyndor.primary};
          `
      case "Hufflepuff":
        return css`
          background-color: ${props.flip ? props.theme.palette.hufflepuff.secondary : props.theme.palette.hufflepuff.primary};
          `
      case "Ravenclaw":
        return css`
          background-color: ${props.flip ? props.theme.palette.ravenclaw.secondary : props.theme.palette.ravenclaw.primary};
          `
      case "Slytherin":
        return css`
          background-color: ${props.flip ? props.theme.palette.slytherin.secondary : props.theme.palette.slytherin.primary};
          `
      default:
        return css`
          background-color: ${props.flip ? props.theme.palette.default.secondary : props.theme.palette.default.primary};
        `
    }
  }};
`
const CardAnverse = styled.div`
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const CardReverse = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      padding: 1rem;
`



export default function Card({ image, name, gender, house, dateOfBirth, wizard, hogwartsStudent, hogwartsStaff, actor, alive }: CardProps) {
  const [flip, setFlip] = useState(false)
  const characteristics: { [key: string]: any } = { gender, house, dateOfBirth, wizard, hogwartsStudent, hogwartsStaff, actor, alive }

  return (
    <StyledCard variant={house} flip={flip} onClick={() => setFlip(!flip)}>
      <CardAnverse>
        <Avatar image={image} alt={name} variant={house} />
        <H3 variant={house} inverted={flip}>{name}</H3>
      </CardAnverse>
      <CardReverse>
        <H3 variant={house} inverted={flip}>{name}</H3>
        {
          Object.keys(characteristics).map((key, index) => {
            return <Characteristic label={key} value={characteristics[key]} variant={house} invertedThemeValue={flip} key={index} />
          })
        }
      </CardReverse>
    </StyledCard>
  )
}