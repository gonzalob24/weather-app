import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
	return (
		<Box
			display={'flex'}
			justifyContent="space-between"
			px="10px"
			component="footer"
			sx={{ py: 3, bgcolor: (theme) => theme.palette.grey[900] }}
		>
			<Typography
				alignSelf="center"
				component="span"
				variant="inherit"
				textTransform={'uppercase'}
			>
				Gonzalo Betancourt ©{new Date().getFullYear()}
			</Typography>
			<Grid>
				<Button
					padding={2}
					href="#landing"
				>
					<FaArrowCircleUp
						size={30}
						color={'#d500f9'}
					/>
				</Button>
			</Grid>
		</Box>
	);
};

export default Footer;
