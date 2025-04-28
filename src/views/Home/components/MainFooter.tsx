import { FaTwitter, FaLinkedinIn, FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface LinkItem {
    text: string
    path: string
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-600 to-purple-600 border-t border-gray-200 min-h-[40vh] md:min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 md:space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">gogetwell.ai</h2>
                        <p className="text-gray-100 text-sm md:text-base">
                            Empowering healthcare with AI-driven solutions for better patient care and medical services.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4 md:space-y-6"
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="flex flex-wrap gap-4 md:flex-col md:space-y-2 md:space-y-3">
                            {links.map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="text-gray-200 hover:text-white transition-colors text-sm md:text-base whitespace-nowrap"
                                    >
                                        {item.text}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links and Play Store */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="flex flex-col md:block">
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Connect With Us</h3>
                            <div className="flex flex-row items-center gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://play.google.com/store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-gray-900 p-2 md:p-3 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                                >
                                    <FaGooglePlay className="w-5 h-5 md:w-6 md:h-6" />
                                    <span className="text-xs md:text-sm font-medium">Get it on Play Store</span>
                                </motion.a>
                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://x.com/gogetwellai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-3 md:p-4 rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <FaTwitter className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://www.linkedin.com/company/gogetwellai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 p-3 md:p-4 rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-center"
                >
                    <p className="text-gray-200 text-sm md:text-base">
                        © {new Date().getFullYear()} gogetwell.ai. All rights reserved.
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm mt-2 md:mt-3">
                        Designed and developed with ❤️ for better healthcare
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default MainFooter
