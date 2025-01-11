import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import AppRouter from './components/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
);
