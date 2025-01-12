import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FaArrowCircleUp } from 'react-icons/fa';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Footer = () => {
	const [value, setValue] = React.useState(0);
	return (
		<BottomNavigation>
			<Typography
				alignSelf="center"
				component="span"
				variant="inherit"
				textTransform={'uppercase'}
			>
				Gonzalo Betancourt ©{new Date().getFullYear()}
			</Typography>
		</BottomNavigation>
	);
};

export default Footer;
