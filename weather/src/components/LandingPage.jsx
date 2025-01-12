import { Box, Container, Grid2, Typography } from '@mui/material';

const LandingPage = () => {
	return (
		<>
			<Container
				component={'section'}
				id="landing"
				sx={{
					minHeight: { xs: '90vh', lg: '95vh' },
					minWidth: { lg: '100vw' },
					display: 'flex',
					// position: 'absolute',
					// flexDirection: 'column',
					alignItems: 'center',
					backgroundImage: {
						sm: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(GM1.jpg)`,
					},
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'fixed',
					backgroundAttachment: 'fixed',
					// zIndex: 800,
					// opacity: 0.5,
					// backgroundPosition: 'right 5rem bottom',
				}}
			>
				<Container
					component="section"
					id="forecast"
					sx={{ display: 'flex' }}
					justifyContent="center"
				>
					<Box justifyContent={'center'}>
						<Typography
							gutterBottom
							variant="h2"
						>
							Weather
						</Typography>
					</Box>
				</Container>
			</Container>
		</>
	);
};

export default LandingPage;
