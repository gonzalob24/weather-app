import { Box, Container, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { useScrollTrigger, Slide } from '@mui/material';

const HideNavBarOnScroll = (props) => {
	const { children } = props;
	const hide = useScrollTrigger();

	return (
		<Slide
			appear={false}
			direction="down"
			in={!hide}
		>
			{children}
		</Slide>
	);
};

const NavBar = () => {
	const theme = useTheme();
	return (
		<HideNavBarOnScroll>
			<AppBar
				position="fixed"
				margin={0}
				elevation={0}
				style={{ backgroundColor: theme.palette.primary[500] }}
				id="weather-navbar"
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideNavBarOnScroll>
	);
};

export default NavBar;
