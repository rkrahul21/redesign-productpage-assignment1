import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProofSection from './components/SocialProofSection';
import MainFooter from './components/MainFooter';

const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	const scrollToSection = (ref:any) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0; // Initialize lastScrollTop variable

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};


		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<div>
				<div className="">
					<HeroSection
						scrollToSection={scrollToSection}
						featuresRef={FqRef}
						contactRef={contactRef}
						aboutRef={aboutRef}
					/>
					{/* <div className='bg-white'>
						<ClaimLandingSection />
					</div> */}
					<div className='!bg-[#eff6ff] relative'>
						<FeaturesGrid />
					</div>
					<div ref={aboutRef} className='!bg-white relative'>
						<InfoSection />
					</div>
					<div ref={FqRef} className='relative bg-white'>
						<HomeFAQs />
					</div>
					<div ref={contactRef} className='bg-white relative'>
						<ContactForm />
					</div>
					<div className='bg-white relative'>
						<SocialProofSection />
					</div>
					{/* <div className='bg-white'>
						<MainFooter />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Home;