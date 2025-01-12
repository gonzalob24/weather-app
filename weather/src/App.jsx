import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar />
			<LandingPage />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
