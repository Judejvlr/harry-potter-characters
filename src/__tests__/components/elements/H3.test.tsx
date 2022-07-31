import { screen } from "@testing-library/react";
import H3 from "../../../components/elements/H3";
import { HarryPotterTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";


test(('Gryffindor H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Gryffindor',
  }
  render(<H3 variant={testH3.variant}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.gryffindor.secondary};`)
})

test(('Gryffindor Inverted H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Gryffindor',
    inverted: true
  }
  render(<H3 variant={testH3.variant} inverted={testH3.inverted}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.gryffindor.primary};`)
})

test(('Hufflepuff H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Hufflepuff',
  }
  render(<H3 variant={testH3.variant}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.hufflepuff.secondary};`)
})

test(('Hufflepuff Inverted H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Hufflepuff',
    inverted: true
  }
  render(<H3 variant={testH3.variant} inverted={testH3.inverted}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.hufflepuff.primary};`)
})

test(('Ravenclaw H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Ravenclaw',
  }
  render(<H3 variant={testH3.variant}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.ravenclaw.secondary};`)
})

test(('Ravenclaw Inverted H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Ravenclaw',
    inverted: true
  }
  render(<H3 variant={testH3.variant} inverted={testH3.inverted}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.ravenclaw.primary};`)
})

test(('Slytherin H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Slytherin',
  }
  render(<H3 variant={testH3.variant}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.slytherin.secondary};`)
})

test(('Slytherin Inverted H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: 'Slytherin',
    inverted: true
  }
  render(<H3 variant={testH3.variant} inverted={testH3.inverted}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.slytherin.primary};`)
})

test(('Default H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: '',
  }
  render(<H3 variant={testH3.variant}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.default.secondary};`)
})

test(('Default Inverted H3 render properly'), () => {
  const testH3 = {
    text: 'Test',
    variant: '',
    inverted: true
  }
  render(<H3 variant={testH3.variant} inverted={testH3.inverted}>{testH3.text}</H3>)
  expect(screen.getByText(testH3.text)).toHaveStyle(`color: ${HarryPotterTheme.palette.default.primary};`)
})