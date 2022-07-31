import { screen } from '@testing-library/react'
import Avatar from '../../../components/elements/Avatar'
import { HarryPotterTheme } from '../../../theme/theme'
import { render } from '../../../utils/test-util'

const avatar = {
  image: "",
  alt: "test image",
  variant: ""
}

test('Render Gryffindor avatar correctly', () => {
  avatar.variant = "Gryffindor"
  render(<Avatar {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveStyle(`border-color: ${HarryPotterTheme.palette.gryffindor.secondary}`)
})

test('Render Hufflepuff avatar correctly', () => {
  avatar.variant = "Hufflepuff"
  render(<Avatar {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveStyle(`border-color: ${HarryPotterTheme.palette.hufflepuff.secondary}`)
})

test('Render Ravenclaw avatar correctly', () => {
  avatar.variant = "Ravenclaw"
  render(<Avatar {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveStyle(`border-color: ${HarryPotterTheme.palette.ravenclaw.secondary}`)
})

test('Render Slytherin avatar correctly', () => {
  avatar.variant = "Slytherin"
  render(<Avatar {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveStyle(`border-color: ${HarryPotterTheme.palette.slytherin.secondary}`)
})

test('Render default avatar correctly', () => {
  avatar.variant = ''
  render(<Avatar {...avatar} />)
  expect(screen.getByAltText(avatar.alt)).toHaveStyle(`border-color: ${HarryPotterTheme.palette.default.secondary}`)
})

test('Render avatar image correctly', () => {
  avatar.image = "https://i.pinimg.com/474x/7e/79/1d/7e791da660ab1d2c7b2f5c4039d4d54c.jpg";
  render(<Avatar {...avatar} />)
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', avatar.image)
})