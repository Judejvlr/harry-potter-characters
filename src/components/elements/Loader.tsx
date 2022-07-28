import { useTranslation } from "react-i18next";
import styled from "styled-components";
import HarryPotterLogo from "../../assets/images/HarryPotterLogo.gif"

const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
  img{
    object-fit: cover;
    height: 100vh;
    width: 100vw;
  }
`

export default function Loader() {
  const { t } = useTranslation()
  return (
    <StyledLoader>
      <img src={HarryPotterLogo} alt={t('loading')} />
    </StyledLoader>
  )
}

