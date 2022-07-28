import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Variant } from "../../types/styled";
import Chip from "../elements/Chip";
import P from "../elements/P";

interface CharacteristicProps extends Variant {
  label: string,
  value: string | boolean | number | Array<string>,
  invertedThemeValue?: boolean,
  invertedThemeLabel?: boolean
}

export const StyledCharacteristic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0.25rem 0;
`

/**
 * It takes in a label, value, variant, invertedValue, and invertedLabel and returns a styled
 * characteristic
 * @param {CharacteristicProps}  - label - the label of the characteristic
 */
export default function Characteristic({ label, value, variant, invertedThemeValue, invertedThemeLabel }: CharacteristicProps) {
  const { t } = useTranslation()
  return (
    <StyledCharacteristic>
      <Chip label={t(`${label}`)} variant={variant} inverted={invertedThemeLabel} />
      <P variant={variant} inverted={invertedThemeValue}>{value === '' ? t('unknown') : t(`${value}`) ?? value}</P>
    </StyledCharacteristic>
  )
}