/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Star, 
  Scissors, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'haircut',
    title: 'Haircut & Styling',
    hindi: 'हेयरकट और स्टाइलिंग',
    description: 'Precision cuts for men, women, and children by expert stylists.',
    time: '45-60 min',
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    id: 'kerasmooth',
    title: 'Kera Smooth & Therapy',
    hindi: 'केरा स्मूथ और थेरेपी',
    description: 'Professional keratin treatments for smooth, shiny, and frizz-free hair.',
    time: '2-3 hours',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'facial',
    title: 'Premium Facials',
    hindi: 'प्रीमियम फेशियल',
    description: 'Rejuvenating skin treatments tailored to your skin type.',
    time: '60-90 min',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'bridal',
    title: 'Bridal & Makeup',
    hindi: 'ब्राइडल और मेकअप',
    description: 'Complete bridal transformation and professional makeup for special occasions.',
    time: '3-4 hours',
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: 'wigs',
    title: 'Hair Wig Studio',
    hindi: 'हेयर विग स्टूडियो',
    description: 'Premium quality hair wigs and patches with professional fitting.',
    time: '1-2 hours',
    icon: <User className="w-6 h-6" />,
  },
  {
    id: 'grooming',
    title: 'Men\'s Grooming',
    hindi: 'मेंस ग्रूमिंग',
    description: 'Beard styling, shaves, and grooming services for the modern man.',
    time: '30-45 min',
    icon: <User className="w-6 h-6" />,
  },
  {
    id: 'nailart',
    title: 'Nail Art & Extensions',
    hindi: 'नेल आर्ट और एक्सटेंशन',
    description: 'Creative nail designs and professional extensions for a polished look.',
    time: '60-90 min',
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const REVIEWS = [
  {
    name: 'Rajeshwar Singh',
    text: 'Nice services and good people. Would like to recommend all age of people for wonderful services. Thanks n regards, Sunita & Rajeshwar Singh',
    rating: 5,
  },
  {
    name: 'Ashutosh Kumar',
    text: 'Such a warm and welcoming experience at keratin care unisex salon . From the moment I walked in, the staff made me feel comfortable and pampered. Special shoutout to Staff for being so attentive and skilled.',
    rating: 5,
  },
  {
    name: 'Puja Shah',
    text: 'Really nice result after hair smoothing treatment.. recommended for everyone',
    rating: 5,
  },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
];

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
      {/* Outer Circle */}
      <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-500 ${scrolled ? 'border-primary' : 'border-white'}`}></div>
      {/* Inner Circle with M and Scissors */}
      <div className="relative flex items-center justify-center">
        <span className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-500 ${scrolled ? 'text-secondary' : 'text-white'}`}>M</span>
        <Scissors className={`absolute w-4 h-4 md:w-5 md:h-5 -right-1 -bottom-1 transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary'}`} />
      </div>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl md:text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 ${scrolled ? 'text-secondary' : 'text-white'}`}>
        Keratin Care
      </span>
      <span className={`text-[8px] uppercase tracking-[0.3em] font-bold ${scrolled ? 'text-primary' : 'text-primary'}`}>
        Unisex Salon
      </span>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-primary/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo scrolled={scrolled} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {['Services', 'About', 'Reviews', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-primary relative group ${scrolled ? 'text-secondary' : 'text-white'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button onClick={scrollToBooking} className="btn-luxury !py-2.5 !px-6 !text-[10px]">
              Reserve Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-secondary' : 'text-white'} /> : <Menu className={scrolled ? 'text-secondary' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-secondary z-40 flex flex-col justify-center items-center space-y-12 md:hidden"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            {['Services', 'About', 'Reviews', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif text-white hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                scrollToBooking();
              }} 
              className="btn-luxury text-lg px-12"
            >
              Book Ritual
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://res.cloudinary.com/dn6sk8mqh/video/upload/v1774636873/stock_salon_ulpab0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-paper"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="section-subtitle !text-white/80 mb-6 block">Est. 2010 • Ranchi</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8">
              Keratin Care <br />
              <span className="gold-text-gradient italic">Unisex Salon</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
              Premium beauty and wellness services in the heart of Ranchi. 
              Expert hair artistry, skin rituals, and professional keratin treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={scrollToBooking} className="btn-luxury group">
                <span>Begin Your Journey</span>
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="tel:06512332663" className="text-white text-sm font-bold uppercase tracking-[0.2em] flex items-center hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 mr-3" />
                Call Concierge
                <span className="ml-2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-8"></span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Years of Legacy', value: '10+' },
              { label: 'Happy Clients', value: '10K+' },
              { label: 'Expert Stylists', value: '15' },
              { label: 'Service Rating', value: '4.8★' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-6xl font-serif text-secondary mb-2 group-hover:gold-text-gradient transition-all duration-500">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-paper/50 -skew-x-12 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="section-subtitle">The Menu</span>
              <h2 className="section-title">Curated Experiences</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Each service is a bespoke ritual, meticulously crafted to rejuvenate your spirit and enhance your natural allure.
              </p>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
              View Full Menu
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative mb-8 overflow-hidden rounded-2xl aspect-[4/5]">
                  <img 
                    src={GALLERY[index % GALLERY.length]} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="luxury-glass p-4 rounded-xl flex items-center justify-between">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">{service.time}</span>
                      <div className="text-primary">{service.icon}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-serif mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">{service.hindi}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  Book Ritual <ChevronRight className="w-3 h-3 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-form" className="py-32 bg-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto luxury-glass rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-12 lg:p-20 bg-white/5 flex flex-col justify-center">
              <span className="section-subtitle !text-primary/80">Reservations</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Secure Your Moment</h2>
              <p className="text-white/60 mb-12 leading-relaxed">
                Our concierge is ready to assist you in planning your perfect escape. 
                Walk-ins are welcome, but reservations ensure your desired time.
              </p>
              
                  <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">0651 233 2663</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Shop No: 106 Ranchi Club Shopping Complex Mahatma Gandhi Main Road, Sujata Chowk, Ranchi</span>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors text-sm" placeholder="Alexander Pierce" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors text-sm" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Service</label>
                  <select className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors text-sm bg-transparent">
                    <option>Select Ritual</option>
                    {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Preferred Date</label>
                  <input type="date" className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors text-sm" />
                </div>
                <div className="md:col-span-2 pt-8">
                  <button className="btn-luxury w-full">Confirm Reservation</button>
                  <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-[0.2em]">
                    Instant confirmation via WhatsApp
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-32 bg-paper">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">Voices of Satisfaction</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex text-primary mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary" />)}
                </div>
                <p className="text-secondary text-lg font-serif italic leading-relaxed mb-10">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full gold-gradient p-[1px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-primary">
                      {review.name[0]}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm">{review.name}</div>
                    <div className="text-[9px] text-gray-400 uppercase tracking-widest">Verified Patron</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full -z-10"></div>
              <span className="section-subtitle">Location</span>
              <h2 className="section-title">Visit Our Sanctuary</h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Located in the prestigious Ranchi Club Shopping Complex on MG Main Road, our salon offers a premium retreat for all your beauty needs. 
                Experience luxury that's conveniently located in the heart of Ranchi.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-paper flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-secondary mb-2">The Address</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Shop No: 106 Ranchi Club Shopping Complex,<br />
                      Mahatma Gandhi Main Road, Sujata Chowk,<br />
                      Ranchi, Jharkhand 834001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-paper flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-secondary mb-2">Hours of Service</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Daily: 10:00 AM — 09:00 PM<br />
                      <span className="text-primary font-bold uppercase tracking-widest text-[10px]">Open All Week</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap gap-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Keratin+Care+Unisex+Salon+Ranchi" target="_blank" className="btn-luxury">Get Directions</a>
                <a href="tel:06512332663" className="flex items-center text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  Contact Concierge
                </a>
              </div>
            </div>

            <div className="h-[600px] rounded-[40px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://maps.google.com/maps?q=Keratin%20Care%20Unisex%20Salon%20Ranchi%20Club&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="space-y-8">
              <Logo scrolled={false} />
              <p className="text-white/40 text-sm leading-relaxed">
                Since 2010, we have been the benchmark of beauty in Ranchi. 
                Join us for an unparalleled experience of luxury and care.
              </p>
              <div className="flex space-x-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/40 hover:text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-10">Navigation</h4>
              <ul className="space-y-6 text-sm text-white/60">
                {['Services', 'About', 'Reviews', 'Location'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-10">Services</h4>
              <ul className="space-y-6 text-sm text-white/60">
                <li>Hair Artistry</li>
                <li>Skin Rituals</li>
                <li>Bridal Couture</li>
                <li>Wellness Therapy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-10">Newsletter</h4>
              <p className="text-sm text-white/40 mb-8">Join our elite circle for exclusive offers.</p>
              <div className="flex border-b border-white/20 pb-2">
                <input type="email" placeholder="Email Address" className="bg-transparent outline-none text-sm w-full" />
                <button className="text-primary"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <p>© 2026 Keratin Care Unisex Salon. Crafted for Excellence.</p>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Concierge */}
      <div className="fixed bottom-10 right-10 z-50 hidden md:block">
        <a href="tel:06512332663" className="luxury-glass p-4 rounded-full flex items-center space-x-4 group hover:bg-white/20 transition-all">
          <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="pr-4">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">Concierge</div>
            <div className="text-sm font-serif text-white">Call us</div>
          </div>
        </a>
      </div>
    </div>
  );
}
