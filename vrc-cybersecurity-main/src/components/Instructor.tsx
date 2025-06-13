
import { ExternalLink, Award, Code, Shield, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Instructor = () => {
  const achievements = [
    {
      icon: Shield,
      title: "Cybersecurity Expert",
      description: "Extensive experience in security architecture and threat analysis"
    },
    {
      icon: Code,
      title: "Industry Practitioner", 
      description: "Real-world experience in implementing security solutions"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple industry certifications and credentials"
    }
  ];

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SavireddyKiranKumarReddy"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kiran-kumar-reddy-savireddy/"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kiransavireddy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+917672010211"
    }
  ];

  return (
    <section id="instructor" className="py-20 cyber-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6" style={{
            color: '#39FF14',
            textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14',
            lineHeight: '1.3',
            padding: '0.1em 0'
          }}>
            Meet Your <span className="text-emerald-400">Instructor</span>
          </h2>
          <div className="cyber-divider"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="cyber-instructor-card">
            <CardHeader className="text-center pb-8">
              <div className="cyber-avatar">
                <div className="cyber-avatar-inner">
                  <div className="text-4xl font-mono font-bold text-emerald-400">KR</div>
                </div>
              </div>
              <CardTitle className="font-mono text-3xl text-emerald-400 mb-4" style={{
                textShadow: '0 0 5px #14b8a6',
                lineHeight: '1.3'
              }}>
                Kiran Kumar Reddy Savireddy
              </CardTitle>
              <p className="text-cyan-300 font-semibold text-lg mb-6 font-mono" style={{lineHeight: '1.4'}}>
                Cybersecurity Expert & Lead Instructor
              </p>
              
              {/* Contact Links */}
              <div className="flex justify-center space-x-4 mb-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-social-link"
                    title={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-center">
                <p className="text-cyan-200 text-lg leading-relaxed max-w-3xl mx-auto font-mono" style={{lineHeight: '1.6'}}>
                  With extensive experience in cybersecurity and a passion for education, Kiran brings real-world expertise 
                  to the classroom. Specializing in network security, penetration testing, and secure system design, 
                  he has helped numerous organizations strengthen their security posture.
                </p>
              </div>

              {/* Achievements Grid - Fixed Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-4">
                    <div className="cyber-icon-container">
                      <achievement.icon className="text-emerald-400" size={32} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-mono font-semibold text-emerald-400" style={{
                        textShadow: '0 0 5px #14b8a6',
                        lineHeight: '1.3'
                      }}>
                        {achievement.title}
                      </h3>
                      <p className="text-cyan-200 text-sm font-mono" style={{lineHeight: '1.4'}}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  className="cyber-button-secondary"
                  onClick={() => window.open('https://v0-kiran-portfolio-six.vercel.app/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={18} />
                  ACCESS_PORTFOLIO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
