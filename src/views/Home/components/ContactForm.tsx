import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FormState {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formState, setFormState] = useState<FormState>({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={'Success'}
                    type={'success'}
                >
                    Successfully submitted
                </Notification>,
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err: unknown) {
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={err instanceof Error ? err.message : 'Error'}
                    type={'danger'}
                >
                    {(err as any)?.response?.data?.message || 'Something went wrong'}
                </Notification>,
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Let&apos;s get in touch!
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="space-y-6">
                            {/* Contact Details */}
                            <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <BiPhone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Phone</p>
                                    <a href="tel:+919811396858" className="text-gray-900 hover:text-blue-600 transition-colors text-lg font-medium">
                                        +91 9811396858
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <CgMail className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Email</p>
                                    <a href="mailto:hello@gogetwell.ai" className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium">
                                        hello@gogetwell.ai
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <Link 
                                    to="https://x.com/gogetwellai" 
                                    target='_blank' 
                                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    <BsTwitter className="w-6 h-6 text-blue-600" />
                                </Link>
                                <Link 
                                    to="https://www.linkedin.com/company/gogetwellai/" 
                                    target='_blank' 
                                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    <BsLinkedin className="w-6 h-6 text-blue-600" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'fullname' || formState.fullname ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <BiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'email' || formState.email ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <CgMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={4}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                <span>Send Message</span>
                                <BiSend className="w-5 h-5" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;