import { render, screen } from '@testing-library/react'
import Loader from '../../../components/elements/Loader'
import i18n from '../../../config/i18n'

test('Render avatar correctly', () => {
  render(<Loader />)
  const image = screen.getByAltText(`${i18n.t('loading')}`)
  expect(image).toHaveAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3130654715599.59691a2be9d3e.gif')
})