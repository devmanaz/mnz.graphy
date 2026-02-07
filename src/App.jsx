import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera, Film, ChevronDown, Mail, Instagram, Phone, Filter, Maximize2 } from 'lucide-react';
import './App.css';

const portfolioItems = [
    // Portraits
    { id: 1, category: 'Portraits', title: 'Classical dance', img: 'https://i.postimg.cc/PtkWjD9q/DSC09068-jpg.jpg' },
    { id: 2, category: 'Portraits', title: 'Vogue', img: 'https://i.postimg.cc/BJMjhwHJ/IMG-1280-JPG.jpg' },
    { id: 3, category: 'Portraits', title: 'Vogue', img: 'https://i.postimg.cc/qBTmmRH0/Chat-GPT-Image-Feb-7-2026-02-27-46-AM.png' },
    { id: 4, category: 'Portraits', title: 'Classical dance', img: 'https://i.postimg.cc/D7HPjZq2/Chat-GPT-Image-Feb-7-2026-02-30-07-AM.png' },
    { id: 5, category: 'Portraits', title: 'Traditional', img: 'https://i.postimg.cc/qBrT84mQ/Chat-GPT-Image-Feb-7-2026-02-41-53-AM.png' },
    { id: 16, category: 'Portraits', title: 'Golden Light', img: 'https://i.pinimg.com/736x/5e/31/d5/5e31d56da0834a7f45f79be43e3df15e.jpg' },
    { id: 17, category: 'Portraits', title: 'City Shadows', img: 'https://i.pinimg.com/736x/f1/39/00/f1390054fd4164d4024b325ae7fc1b82.jpg' },
    { id: 18, category: 'Portraits', title: 'Ethereal', img: 'https://i.pinimg.com/736x/50/39/3b/50393b50e10cac06c62d19811e5b8d1f.jpg' },
    // Events
    { id: 6, category: 'Events', title: 'NJ', img: 'https://i.postimg.cc/HpCwgMRs/P1151646-JPG.jpg' },
    { id: 7, category: 'Events', title: 'Wedding', img: 'https://i.postimg.cc/JMHyTn08/51881df1-2c91-442f-8b35-647f66c53ca4-JPG.jpg' },
    { id: 8, category: 'Events', title: 'B day', img: 'https://i.postimg.cc/s3d2TCv7/Chat-GPT-Image-Feb-7-2026-02-20-41-AM.png' },
    { id: 9, category: 'Events', title: 'Golden Hour Vows', img: 'https://i.pinimg.com/1200x/2c/cd/12/2ccd123708291302dd7b6d14c9425a37.jpg' },
    { id: 10, category: 'Events', title: 'Eternal Rhythm', img: 'https://i.pinimg.com/1200x/28/e9/af/28e9af9556a8c9d7c4af5899baa702fa.jpg' },
    { id: 19, category: 'Events', title: 'Celebration', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
    { id: 20, category: 'Events', title: 'Night Gala', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
    { id: 21, category: 'Events', title: 'Festival Lights', img: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&w=800&q=80' },
    // Couples
    { id: 11, category: 'Couples', title: 'Timeless Love', img: 'https://i.pinimg.com/736x/2b/83/19/2b8319af8cc0fcf852d00aa4c60b9c09.jpg' },
    { id: 12, category: 'Couples', title: 'Together', img: 'https://i.pinimg.com/1200x/a4/50/48/a45048f5bc1e9f31585dc976cf60dbf7.jpg' },
    { id: 13, category: 'Couples', title: 'Endless Journey', img: 'https://i.pinimg.com/736x/41/9f/b3/419fb3a91e02b5893cf52d0fb2b4a83a.jpg' },
    { id: 14, category: 'Couples', title: 'Romantic Getaway', img: 'https://i.pinimg.com/1200x/8e/14/37/8e14379611ea4293800e3db0041c7f70.jpg' },
    { id: 15, category: 'Couples', title: 'Pure Joy', img: 'https://i.pinimg.com/736x/78/80/e0/7880e0b343c588350b89324bc39619ef.jpg' },
    { id: 22, category: 'Couples', title: 'Sunset Silhouette', img: 'https://i.pinimg.com/736x/e8/00/f9/e800f96580afa9c699edd44c2b71a889.jpg' },
    { id: 23, category: 'Couples', title: 'Holding Hands', img: 'https://i.pinimg.com/736x/32/80/e6/3280e6442bf0c6f4515cc9632ee5e4fc.jpg' },
    { id: 24, category: 'Couples', title: 'Laughter', img: 'https://i.pinimg.com/1200x/ec/20/99/ec2099a27e220a84e1d067dd9b6093d8.jpg' },
    // Wedding
    { id: 25, category: 'Wedding', title: 'Sacred Vows', img: 'https://i.pinimg.com/1200x/18/d8/95/18d895817e7539091807661266e76166.jpg' },
    { id: 26, category: 'Wedding', title: 'Eternal Bond', img: 'https://i.pinimg.com/1200x/64/00/f5/6400f5767bdf881f8087dff75836484e.jpg' },
    { id: 27, category: 'Wedding', title: 'Floral Walkway', img: 'https://i.pinimg.com/1200x/58/01/f9/5801f92e9f64bf870e60802f37a6b7e2.jpg' },
    { id: 28, category: 'Wedding', title: 'Golden Hour Couple', img: 'https://i.pinimg.com/1200x/a1/3b/b1/a13bb1b585d85200259929255e28a504.jpg' },
    { id: 29, category: 'Wedding', title: 'The Celebration', img: 'https://i.pinimg.com/1200x/66/83/88/66838855a499388a9143926e33fd776e.jpg' },
    { id: 30, category: 'Wedding', title: 'Royal Portraits', img: 'https://i.pinimg.com/1200x/28/7f/f6/287ff61820688bf5186b896939a3f78e.jpg' },
    { id: 31, category: 'Wedding', title: 'Bride Gaze', img: 'https://i.pinimg.com/736x/8a/80/f1/8a80f135863c3214c7fd69ba6bb2381f.jpg' },
    { id: 32, category: 'Wedding', title: 'Mandap Vows', img: 'https://i.pinimg.com/736x/f0/30/f1/f030f131a90ee9247d69b360b6bbf20d.jpg' },
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
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo serif">mnz.graphy</div>

                <div className="nav-links desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
                    ))}
                    <a href="#contact" className="btn-nav">Get in touch</a>
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
                        <a
                            href="#contact"
                            className="mobile-link btn-nav-mobile"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get in touch
                        </a>
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
                <div className="hero-overlay"></div>
                <div className="hero-image-bg" style={{
                    backgroundImage: 'url(https://i.postimg.cc/qpsM66b2/Chat-GPT-Image-Feb-7-2026-12-32-51-AM.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    opacity: 1
                }}></div>
            </div>

            <div className="hero-content cinematic">
                <div className="hero-title-wrapper">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-title-massive"
                    >
                        Mnz<br />Graphy
                    </motion.h1>
                </div>

                <div className="hero-sidebar">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-description"
                    >
                        HEY THERE! <br />
                        <span className="italic">Turning moments into memories.</span>
                    </motion.p>
                </div>
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
                            <span className="category">{item.type}</span>
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
        { title: 'Cinematic Videography & Reels', icon: <Film />, desc: 'Motion stories, short films, and engaging content with a cinematic touch.' },
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
                            <button className="service-link">Book Now</button>
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

const Portfolio = () => {
    const categories = ['All', 'Portraits', 'Events', 'Couples', 'Wedding'];

    const scrollToCategory = (id) => {
        if (id === 'All') {
            const element = document.getElementById('portfolio');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }
        const element = document.getElementById(`cat-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
                <div className="section-header">
                    <h2 className="serif">Photography</h2>
                </div>

                {/* Sub-Navbar for Photography Categories */}
                <div className="portfolio-nav">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            className="portfolio-nav-btn"
                            whileHover={{ scale: 1.1, color: "var(--accent-gold)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToCategory(cat)}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {categories.slice(1).map((category, catIdx) => {
                    const categoryItems = portfolioItems.filter(item => item.category === category);
                    // Triple the items for long trails of scrolling
                    const marqueeItems = [...categoryItems, ...categoryItems, ...categoryItems];

                    return (
                        <div key={category} id={`cat-${category}`} className="portfolio-marquee-section">
                            <h3 className="marquee-label">{category}</h3>
                            <div className="marquee-container">
                                <motion.div
                                    className="marquee-track"
                                    animate={{
                                        x: catIdx % 2 === 0 ? [0, -1000] : [-1000, 0]
                                    }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {marqueeItems.map((item, idx) => (
                                        <div key={`${item.id}-${idx}`} className="marquee-item">
                                            <img src={item.img} alt={item.title} />
                                            <div className="marquee-info">
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
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
                        © 2024 mnz.graphy. All rights reserved.
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
