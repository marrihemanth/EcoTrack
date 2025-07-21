import React from 'react';
import { Leaf, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-green-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-green-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-2/3 w-3 h-3 bg-green-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-green-400/25 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Leaf className="h-10 w-10 text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-3xl font-bold tracking-wide text-white uppercase font-inter">
                  EcoTrack
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering individuals and communities to make sustainable choices and track their environmental impact for a greener future.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-green-500/20 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  'Dashboard',
                  'Carbon Tracker',
                  'EcoMap',
                  'Rewards Store',
                  'Knowledge Hub',
                  'Community'
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Features
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  'Impact Tracking',
                  'Eco Challenges',
                  'Reward System',
                  'Community Events',
                  'NGO Partnerships',
                  'Sustainability Tips'
                ].map((feature) => (
                  <li key={feature}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {feature}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:hello@ecotrack.com" className="hover:text-green-400 transition-colors duration-300">
                      hello@ecotrack.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+911234567890" className="hover:text-green-400 transition-colors duration-300">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="hover:text-green-400 transition-colors duration-300">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-r-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 EcoTrack. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for the planet.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-green-500/20 backdrop-blur-sm rounded-full hover:bg-green-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600"></div>
    </footer>
  );
};

export default Footer;