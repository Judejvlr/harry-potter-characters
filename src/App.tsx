import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyles';
import { HarryPotterTheme } from './theme/theme';
import CharactersList from './views/charactersLists';
import './config/i18n';

function App() {
  return (
    <ThemeProvider theme={HarryPotterTheme}>
      <GlobalStyle />
      <CharactersList />
    </ThemeProvider>
  );
}

export default App;
