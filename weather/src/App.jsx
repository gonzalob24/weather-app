import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				{/* <h1>All Components</h1> */}
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
