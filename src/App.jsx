import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera, Film, ChevronDown, Mail, Instagram, Phone, Filter, Maximize2 } from 'lucide-react';
import './App.css';

const portfolioItems = [
    { id: 1, category: 'Portraits', title: 'Soul Echoes', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'Street', title: 'Neon Pulse', img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'Events', title: 'Golden Hour Vows', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'Polaroids', title: 'Vintage Haze', img: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'Creative', title: 'Lost in Motion', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'Portraits', title: 'Serene Gaze', img: 'https://images.unsplash.com/photo-1531746020798-e49527219efd?auto=format&fit=crop&w=800&q=80' },
    { id: 7, category: 'Street', title: 'Rainy Nocturne', img: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'Events', title: 'Eternal Rhythm', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
];

const videoItems = [
    { id: 1, category: 'Event Films', title: 'Midnight Gala', desc: 'A cinematic journey through a night of elegance.', thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'Reels', title: 'Urban Pulse', desc: 'Fast-paced edits capturing the city heart.', thumb: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'Short Films', title: 'The Silent Script', desc: 'A narrative told through visual depth.', thumb: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'Brand Videos', title: 'Luxe Aesthetics', desc: 'Minimalist brand storytelling for high-end fashion.', thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
];

// Components will be imported or defined here
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Films', href: '#films' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo serif">mnz.graphy</div>

                <div className="nav-links desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
                    ))}
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-video-container">
                {/* Placeholder for video - in production use a real assets/hero.mp4 */}
                <div className="hero-overlay"></div>
                <div className="hero-placeholder-bg"></div>
            </div>

            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-title"
                >
                    mnz.graphy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-tagline"
                >
                    Capturing moments. <span className="gold-text italic">Crafting stories.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-ctas"
                >
                    <a href="#portfolio" className="btn-primary">View Portfolio</a>
                    <a href="#contact" className="btn-secondary">Book a Shoot</a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-indicator"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Portraits', 'Events', 'Creative'];

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2 className="serif">Photography</h2>
                    <div className="filter-tabs">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="portfolio-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="portfolio-item"
                            >
                                <img src={item.img} alt={item.title} />
                                <div className="portfolio-hover">
                                    <div className="portfolio-info">
                                        <span className="category gold-text">{item.category}</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="portfolio-icon">
                                        <Maximize2 size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

const Films = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="films" className="films">
            <div className="container">
                <div className="section-header">
                    <h2 className="serif">Cinematic Films</h2>
                    <p className="section-subtitle">Stories told in motion.</p>
                </div>

                <div className="films-grid">
                    {videoItems.map((video) => (
                        <motion.div
                            key={video.id}
                            whileHover={{ y: -10 }}
                            className="video-card"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="video-thumb">
                                <img src={video.thumb} alt={video.title} />
                                <div className="play-overlay">
                                    <Film size={40} />
                                </div>
                            </div>
                            <div className="video-info">
                                <span className="category gold-text">{video.category}</span>
                                <h3>{video.title}</h3>
                                <p>{video.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="video-modal"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedVideo(null)}>
                                <X size={30} />
                            </button>
                            <div className="video-player-placeholder">
                                <Film size={60} className="gold-text" />
                                <p>Cinematic Video Player for {selectedVideo.title}</p>
                                <span className="serif italic">Loading story...</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const FeaturedWork = () => {
    const featured = [
        { title: 'The Ethereal Bride', type: 'Photography', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80' },
        { title: 'Neon Nights', type: 'Film', img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80' },
        { title: 'Soul Portraits', type: 'Photography', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' },
    ];

    return (
        <section className="featured">
            <div className="section-header">
                <h2 className="serif">Featured Highlights</h2>
            </div>
            <div className="featured-scroller">
                {featured.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="featured-card"
                        whileHover={{ scale: 0.98 }}
                    >
                        <img src={item.img} alt={item.title} />
                        <div className="featured-content">
                            <span className="gold-text">{item.type}</span>
                            <h3>{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-grid">
                <div className="about-visuals">
                    <div className="visual-stack">
                        <div className="visual-box photo-box">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="About Photography" />
                            <div className="visual-label"><Camera size={16} /> Photography</div>
                        </div>
                        <div className="visual-box video-box">
                            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" alt="About Videography" />
                            <div className="visual-label"><Film size={16} /> Videography</div>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="serif">About <span className="gold-text">mnz.graphy</span></h2>
                    <p className="about-p">
                        mnz.graphy is a visual storytelling brand specializing in both photography and cinematic videography.
                        We capture emotions through still frames and bring stories to life through motion.
                    </p>
                    <ul className="about-list">
                        <li><span className="gold-text">•</span> Photography: portraits, weddings, events & creative</li>
                        <li><span className="gold-text">•</span> Videography: reels, short films, event films, brand videos</li>
                        <li><span className="gold-text">•</span> Emotion-driven, cinematic storytelling</li>
                    </ul>
                    <a href="#portfolio" className="btn-primary">Explore Our Work</a>
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const services = [
        { title: 'Portrait Photography', icon: <Camera />, desc: 'Capturing the essence of your story in every frame.' },
        { title: 'Wedding Photography', icon: <Camera />, desc: 'Preserving your special day with timeless elegance and emotion.' },
        { title: 'Event Photography', icon: <Camera />, desc: 'Documenting life’s most precious moments as stay unfold.' },
        { title: 'Cinematic Videography', icon: <Film />, desc: 'Motion stories with a cinematic, high-end touch.' },
        { title: 'Reels & Short Films', icon: <Film />, desc: 'Engaging short-form content for brands and creatives.' },
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="serif">Services</h2>
                    <p className="section-subtitle">Premium visual storytelling for every occasion.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <div className="service-icon gold-text">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <button className="service-link gold-text">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const testimonials = [
        { name: 'Elena R.', role: 'Model', quote: 'mnz.graphy turned my vision into a cinematic masterpiece. The attention to detail is unmatched.', rating: 5 },
        { name: 'Marcus T.', role: 'Brand Director', quote: 'The videography for our campaign was stunning. Truly understood our brand ethos.', rating: 5 },
        { name: 'Sarah & James', role: 'Couple', quote: 'Our wedding film feels like a movie. We couldn’t have asked for anything better.', rating: 5 },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="serif">What Clients Say</h2>
                </div>
                <div className="testimonials-carousel">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="quote-icon gold-text">“</div>
                            <p className="quote">{t.quote}</p>
                            <div className="stars gold-text">{'★'.repeat(t.rating)}</div>
                            <div className="client-info">
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-grid">
                <div className="contact-info">
                    <h2 className="serif">Let’s turn moments into <span className="gold-text italic">stories.</span></h2>
                    <p>Ready to capture something extraordinary? Reach out and let’s start crafting.</p>
                    <div className="social-links">
                        <a href="#"><Instagram /></a>
                        <a href="#"><Phone /></a>
                        <a href="#"><Mail /></a>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <select required>
                            <option value="" disabled selected>Service Type</option>
                            <option value="photography">Photography</option>
                            <option value="videography">Videography</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell us about your project" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Book Your Shoot</button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo serif">mnz.graphy</div>
                    <p className="footer-tagline">Capturing moments. Crafting stories.</p>
                    <div className="copyright">
                        © 2026 mnz.graphy. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

function App() {
    return (
        <div className="app">
            <div className="grain-overlay"></div>
            <Navbar />
            <Hero />
            <Portfolio />
            <Films />
            <FeaturedWork />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
