import { screen } from "@testing-library/react";
import Chip from "../../../components/elements/Chip";
import { HarryPotterTheme } from "../../../theme/theme";
import { render } from "../../../utils/test-util";

test(('Gryffindor Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Gryffindor',
    inverted: false
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.gryffindor.primary};
  color: ${HarryPotterTheme.palette.gryffindor.secondary};`)
})

test(('Gryffindor Inverted Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Gryffindor',
    inverted: true
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.gryffindor.secondary};
  color: ${HarryPotterTheme.palette.gryffindor.primary};`)
})

test(('Hufflepuff Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Hufflepuff',
    inverted: false
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.hufflepuff.primary};
  color: ${HarryPotterTheme.palette.hufflepuff.secondary};`)
})

test(('Hufflepuff Inverted Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Hufflepuff',
    inverted: true
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.hufflepuff.secondary};
  color: ${HarryPotterTheme.palette.hufflepuff.primary};`)
})

test(('Ravenclaw Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Ravenclaw',
    inverted: false
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.ravenclaw.primary};
  color: ${HarryPotterTheme.palette.ravenclaw.secondary};`)
})

test(('Ravenclaw Inverted Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Ravenclaw',
    inverted: true
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.ravenclaw.secondary};
  color: ${HarryPotterTheme.palette.ravenclaw.primary};`)
})

test(('Slytherin Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Slytherin',
    inverted: false
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.slytherin.primary};
  color: ${HarryPotterTheme.palette.slytherin.secondary};`)
})

test(('Slytherin Inverted Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: 'Slytherin',
    inverted: true
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.slytherin.secondary};
  color: ${HarryPotterTheme.palette.slytherin.primary};`)
})

test(('Default Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: '',
    inverted: false
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.default.primary};
  color: ${HarryPotterTheme.palette.default.secondary};`)
})

test(('Default Inverted Chip render properly'), () => {
  const testChip = {
    label: 'Test',
    variant: '',
    inverted: true
  }
  render(<Chip {...testChip} />)
  expect(screen.getByText(testChip.label)).toHaveStyle(`background-color: ${HarryPotterTheme.palette.default.secondary};
  color: ${HarryPotterTheme.palette.default.primary};`)
})