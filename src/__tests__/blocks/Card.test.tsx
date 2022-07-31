import Card from "../../components/blocks/Card"
import { HarryPotterTheme } from "../../theme/theme"
import { fireEvent, render, screen } from "../../utils/test-util"

const characterTest = {
  name: 'Judelys Lagos',
  gender: 'female',
  house: '',
  dateOfBirth: '26-06-1995',
  wizard: true,
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Judelys Lagos',
  alive: true,
  image: ''
}


test('Gryffindor Card render properly', () => {
  characterTest.house = "Gryffindor"
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
      background-color: ${HarryPotterTheme.palette.gryffindor.primary};
  `)
})

test('Gryffindor Card flip properly', () => {
  characterTest.house = "Gryffindor"
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${HarryPotterTheme.palette.gryffindor.secondary};
    transform: rotateY(180deg)
  `)
})

test('Hufflepuff Card render properly', () => {
  characterTest.house = "Hufflepuff"
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
      background-color: ${HarryPotterTheme.palette.hufflepuff.primary};
  `)
})

test('Hufflepuff Card flip properly', () => {
  characterTest.house = "Hufflepuff"
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${HarryPotterTheme.palette.hufflepuff.secondary};
    transform: rotateY(180deg)
  `)
})

test('Ravenclaw Card render properly', () => {
  characterTest.house = "Ravenclaw"
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
      background-color: ${HarryPotterTheme.palette.ravenclaw.primary};
  `)
})

test('Ravenclaw Card flip properly', () => {
  characterTest.house = "Ravenclaw"
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${HarryPotterTheme.palette.ravenclaw.secondary};
    transform: rotateY(180deg)
  `)
})

test('Slytherin Card render properly', () => {
  characterTest.house = "Slytherin"
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
      background-color: ${HarryPotterTheme.palette.slytherin.primary};
  `)
})

test('Slytherin Card flip properly', () => {
  characterTest.house = "Slytherin"
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${HarryPotterTheme.palette.slytherin.secondary};
    transform: rotateY(180deg)
  `)
})

test('Default Card render properly', () => {
  characterTest.house = ""
  render(<Card {...characterTest} />)
  expect(screen.getByRole('article')).toHaveStyle(`
      background-color: ${HarryPotterTheme.palette.default.primary};
  `)
})

test('Default Card flip properly', () => {
  characterTest.house = ""
  render(<Card {...characterTest} />)
  fireEvent.click(screen.getByRole('article'))
  expect(screen.getByRole('article')).toHaveStyle(`
    background-color: ${HarryPotterTheme.palette.default.secondary};
    transform: rotateY(180deg)
  `)
})