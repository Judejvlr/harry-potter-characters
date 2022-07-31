import { screen } from "@testing-library/react";
import P from "../../../components/elements/P";
import { HarryPotterTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";


test(('Gryffindor P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Gryffindor',
  }
  render(<P variant={testP.variant}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.gryffindor.secondary};`)
})

test(('Gryffindor Inverted P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Gryffindor',
    inverted: true
  }
  render(<P variant={testP.variant} inverted={testP.inverted}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.gryffindor.primary};`)
})

test(('Hufflepuff P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Hufflepuff',
  }
  render(<P variant={testP.variant}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.hufflepuff.secondary};`)
})

test(('Hufflepuff Inverted P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Hufflepuff',
    inverted: true
  }
  render(<P variant={testP.variant} inverted={testP.inverted}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.hufflepuff.primary};`)
})

test(('Ravenclaw P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Ravenclaw',
  }
  render(<P variant={testP.variant}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.ravenclaw.secondary};`)
})

test(('Ravenclaw Inverted P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Ravenclaw',
    inverted: true
  }
  render(<P variant={testP.variant} inverted={testP.inverted}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.ravenclaw.primary};`)
})

test(('Slytherin P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Slytherin',
  }
  render(<P variant={testP.variant}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.slytherin.secondary};`)
})

test(('Slytherin Inverted P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: 'Slytherin',
    inverted: true
  }
  render(<P variant={testP.variant} inverted={testP.inverted}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.slytherin.primary};`)
})

test(('Default P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: '',
  }
  render(<P variant={testP.variant}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.default.secondary};`)
})

test(('Default Inverted P render properly'), () => {
  const testP = {
    text: 'Test',
    variant: '',
    inverted: true
  }
  render(<P variant={testP.variant} inverted={testP.inverted}>{testP.text}</P>)
  expect(screen.getByText(testP.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.default.primary};`)
})