import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyles';
import { HarryPotterTheme } from './theme/theme';
import CharactersList from './views/charactersLists';
import './config/i18n';
import Main from './views/main';

function App(props: { basePath: string; host: string }) {
  console.log(`BasePath is AAA ${props.basePath}`);
  console.log(`Host is ${props.host}`);
  let basePath = '';
  if (props.basePath !== '' && props.host !== '') {
    basePath = `${props.host}`;
  }
  return (
    <div className="Micro-App">
      <ThemeProvider theme={HarryPotterTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/harrypotter" element={<CharactersList />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
