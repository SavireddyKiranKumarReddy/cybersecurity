
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleApplyNow = () => {
    window.open('https://forms.gle/kE1kbgZfxWYXZeUA7', '_blank');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Program', href: '#program' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instructor', href: '#instructor' },
    { name: 'Process', href: '#application-process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 cyber-nav">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/09123cca-1ae1-4264-a474-8f09efcfc8b2.png" 
                alt="VRC Logo" 
                className="w-10 h-10 object-contain mr-3"
              />
              <span className="font-inter text-xl font-bold text-emerald-400 cyber-text-glow">VRC Cybersecurity</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="cyber-nav-link"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                size="sm" 
                onClick={handleApplyNow}
                className="cyber-button-nav"
              >
                APPLY_NOW
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-emerald-400 p-2 cyber-button-icon"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden cyber-mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="cyber-mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  size="sm" 
                  onClick={() => {
                    handleApplyNow();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 cyber-button-primary"
                >
                  APPLY_NOW
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
