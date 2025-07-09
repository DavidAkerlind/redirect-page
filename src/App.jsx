import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [countdown, setCountdown] = useState(5);
	const redirectUrl = 'https://www.harpaviljongen.com/';

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					// window.location.href = redirectUrl; // Kommenterad för att kunna se designen
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [redirectUrl]);

	const handleManualRedirect = () => {
		// window.location.href = redirectUrl; // Kommenterad för att kunna se designen
		console.log('Skulle omdirigera till:', redirectUrl);
	};

	return (
		<div className="app">
			<div className="redirect-container">
				<h1 className="redirect-title">Välkommen!</h1>
				<p className="redirect-message">
					Du omdirigeras automatiskt till Harpaviljongen
				</p>
				<a
					href={redirectUrl}
					className="redirect-link"
					onClick={handleManualRedirect}>
					HARPAVILJONGEN.COM
				</a>
				<div className="countdown">
					{countdown > 0 ? (
						<>
							Omdirigering om{' '}
							<span className="loading-dots">
								{countdown} sekunder
							</span>
						</>
					) : (
						<span className="loading-dots">Omdirigerar...</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
