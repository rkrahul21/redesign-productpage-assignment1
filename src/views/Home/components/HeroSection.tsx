import React, { useState } from 'react';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    featuresRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <>
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className='min-h-[90vh] flex flex-col items-center bg-gradient-to-b from-blue-600 via-blue-700 to-purple-800 mt-16'>
                <div className='w-full py-4 flex flex-col items-center justify-center'>
                    <div className=" flex flex-col items-center py-4">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 capitalize text-white text-center px-4">
                            <span className="text-amber-300">AI front office </span>
                            for healthcare agents
                        </h1>
                        <p style={{ lineHeight: '1.2' }} className="text-base sm:text-lg my-4 font-light text-white text-center px-4">
                            Create <span className="text-amber-300 font-bold">AI Store</span>  in 2 min <br />
                            <br />
                            Scale with{' '}
                            <span className="font-bold text-amber-300">
                                Digital Marketing
                            </span>{' '}
                        </p>
                    </div>

                    {/* video content */}
                    <div className=" w-full px-8 md:px-4 lg:px-0 lg:w-[60%] mt-8 lg:mt-0 lg:mb-0 mb-6">
                        <div className="relative  overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
                            <iframe
                                allowFullScreen
                                src={`https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=xQl8i2sO_Ls&controls=0&showinfo=0&rel=0`}
                                title="Product Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                            <button
                                className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                                onClick={toggleMute}
                            >
                                {isMuted ? (
                                    <IoVolumeMuteOutline size={24} />
                                ) : (
                                    <IoVolumeHighOutline size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* get started button */}
                <div>
                    <HcfSignupPopup popupButtonStatus buttonChildren={<Button block variant='solid' className='rounded-[5px] max-w-[200px]'>Get Started</Button>} />
                </div>

                <div id="boxes" className="text-white w-full px-4 py-6 relative">
                    <div className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-12 lg:gap-14 w-full items-center justify-start md:justify-center md:flex-row pl-4 md:pl-0">
                        <div className="flex-shrink-0 flex flex-col text-center rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                2100<span className="text-amber-300 ml-1">+</span>
                            </h1>
                            <p className="text-base sm:text-lg capitalize">qualified doctors</p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col text-center rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                1000<span className="text-amber-300 ml-1">+</span>
                            </h1>
                            <p className="text-base sm:text-lg capitalize">hospitals</p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col text-center rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-lg">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                800<span className="text-amber-300 ml-1">+</span>
                            </h1>
                            <p className="text-base sm:text-lg capitalize">Treatment Plans</p>
                        </div>
                    </div>
                    {/* Scroll Indicator Dots */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        <div className="w-2 h-2 rounded-full bg-amber-300/50"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-300/50"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-300/50"></div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HeroSection;





