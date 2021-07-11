import { ChakraProvider } from '@chakra-ui/react';
import {SidebarDrawerProvider} from './context/SidebarDrawerContext'
import { theme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {

  return (  
    <ChakraProvider resetCSS={true} theme={theme}>
      <SidebarDrawerProvider>
      <Router>
        <Routes />
      </Router>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
