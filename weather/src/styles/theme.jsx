// look into creating themes with MUI
import { createTheme, responsiveFontSizes } from '@mui/material';
import { green, grey } from '@mui/material/colors';

const theme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'dark',
			primary: green,
			secondary: grey,
			error: {
				main: '#ff6358',
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 960,
				lg: 1280,
				xl: 1920,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `html {scroll-behavior: smooth}`,
			},
		},
	})
);

export default theme;
