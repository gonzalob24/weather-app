import { Container } from '@mui/material';

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
			></Container>
		</>
	);
};

export default LandingPage;
