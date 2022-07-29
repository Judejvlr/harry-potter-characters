import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
  const HarryPotterLogo = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3130654715599.59691a2be9d3e.gif'
  return (
    <StyledLoader>
      <img src={HarryPotterLogo} alt={t('loading')} />
    </StyledLoader>
  )
}

