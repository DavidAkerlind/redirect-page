import { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from '../src/assets/images/background2.jpg';
import logo from '../src/assets/logo/hare-logo-white.svg';

function App() {
	const [countdown, setCountdown] = useState(5);
	const [imageLoaded, setImageLoaded] = useState(false);
	const redirectUrl = 'https://www.harpaviljongen.com/';

	useEffect(() => {
		// Preload bakgrundsbild för snabbare laddning
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = backgroundImage;
	}, []);

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
		<div
			className={`app ${imageLoaded ? 'image-loaded' : ''}`}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}>
			<div className="app-overlay"></div>

			<section className="redirect-container">
				<figure className="redirect-logo-container">
					<img
						className="redirect-logo"
						src={logo}
						alt="white logo"
					/>
				</figure>
				<h1 className="redirect-title">Välkommen!</h1>
				<p className="redirect-message">
					Du omdirigeras automatiskt till Harpaviljongen
				</p>
				<p className="redirect-message redirect-message--small">
					Om du inte omdirigeras automatiskt <br />
					klicka på länken nedan
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
			</section>
		</div>
	);
}

export default App;
