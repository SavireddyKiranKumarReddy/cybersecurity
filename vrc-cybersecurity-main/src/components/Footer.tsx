
import { Shield, Terminal, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/09123cca-1ae1-4264-a474-8f09efcfc8b2.png" 
                alt="VRC Logo" 
                className="w-8 h-8 object-contain mr-2"
              />
              <span className="font-mono text-xl font-bold text-emerald-400 cyber-text-glow">VRC Cybersecurity</span>
            </div>
            <p className="text-cyan-200 mb-4 font-mono text-sm">
              Viswa Robotic Cars (VRC) - Leading the future of cybersecurity education with hands-on training programs.
            </p>
            <div className="cyber-terminal-mini">
              <div className="font-mono text-xs space-y-1">
                <div className="text-emerald-400">
                  <span className="text-cyan-300">$</span> echo "Building tomorrow's cyber defenders"
                </div>
                <div className="text-cyan-200">Output: Securing digital futures since 2025</div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div>
            <h3 className="font-mono text-lg font-semibold text-emerald-400 mb-4 cyber-text-glow">Program Highlights</h3>
            <ul className="space-y-3 text-cyan-200 font-mono text-sm">
              <li className="flex items-center">
                <Terminal className="text-emerald-400 mr-2" size={16} />
                8-Week Intensive Training
              </li>
              <li className="flex items-center">
                <Shield className="text-emerald-400 mr-2" size={16} />
                Industry Certification
              </li>
              <li className="flex items-center">
                <Terminal className="text-emerald-400 mr-2" size={16} />
                Letter of Recommendation
              </li>
              <li className="flex items-center">
                <Shield className="text-emerald-400 mr-2" size={16} />
                Hands-on Lab Experience
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-lg font-semibold text-emerald-400 mb-4 cyber-text-glow">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-cyan-200 font-mono text-sm">
                <Mail className="text-emerald-400 mr-2" size={16} />
                <a href="mailto:officialvrccs@gmail.com" className="cyber-link">
                  officialvrccs@gmail.com
                </a>
              </div>
              <div className="flex items-center text-cyan-200 font-mono text-sm">
                <Phone className="text-emerald-400 mr-2" size={16} />
                <a href="tel:+917672010211" className="cyber-link">
                  +91 7672010211
                </a>
              </div>
              <div className="flex items-center text-cyan-200 font-mono text-sm">
                <Github className="text-emerald-400 mr-2" size={16} />
                <a href="https://github.com/SavireddyKiranKumarReddy" target="_blank" rel="noopener noreferrer" className="cyber-link">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center text-cyan-200 font-mono text-sm">
                <Linkedin className="text-emerald-400 mr-2" size={16} />
                <a href="https://www.linkedin.com/in/kiran-kumar-reddy-savireddy/" target="_blank" rel="noopener noreferrer" className="cyber-link">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center text-cyan-200 font-mono text-sm">
                <MapPin className="text-emerald-400 mr-2" size={16} />
                <span>Viswa Robotic Cars </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-emerald-400 font-medium text-sm mb-2 font-mono">Ready to join?</div>
              <div className="cyber-info-badge">
                <div className="text-emerald-400 font-mono text-xs">
                  Next batch: June 15, 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cyber-footer-divider"></div>
        <div className="text-center py-6">
          <p className="text-cyan-300 font-mono text-sm">
            © 2025 Viswa Robotic Cars (VRC). Cybersecurity Program. All rights reserved.
          </p>
          <div className="mt-2 text-emerald-400 font-mono text-xs">
            <span className="text-cyan-300">$</span> Powered by passion for cybersecurity education
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
