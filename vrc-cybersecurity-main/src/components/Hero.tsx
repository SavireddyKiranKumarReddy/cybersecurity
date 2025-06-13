
import { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, BookOpen, Award, Users, Zap, Brain, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MatrixBackground from './MatrixBackground';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showLearnMore, setShowLearnMore] = useState(false);
  const fullText = 'VRC - Cybersecurity';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 75);

    return () => clearInterval(typing);
  }, []);

  const handleApplyNow = () => {
    window.open('https://forms.gle/kE1kbgZfxWYXZeUA7', '_blank');
  };

  const programFeatures = [
    {
      icon: BookOpen,
      title: "Premium Reference Books",
      description: "Access to cybersecurity textbooks and materials worth ₹15,000",
      value: "₹15,000 Value"
    },
    {
      icon: Zap,
      title: "Premium Security Tools",
      description: "Hands-on access to professional cybersecurity tools and software",
      value: "₹25,000 Value"
    },
    {
      icon: Award,
      title: "Interactive Quizzes & Assessments",
      description: "Weekly skill assessments and certification practice tests",
      value: "₹8,000 Value"
    },
    {
      icon: Users,
      title: "Comprehensive Study Guides",
      description: "Detailed study materials and industry best practices documentation",
      value: "₹12,000 Value"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Matrix Background */}
      <MatrixBackground />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>

      <div className="container mx-auto px-6 text-center relative z-20">
        {/* Terminal-style header */}
        <div className="mb-8 max-w-2xl mx-auto animate-fade-in">
          <div className="cyber-terminal-window">
            <div className="cyber-terminal-header">
              <div className="cyber-terminal-buttons">
                <div className="cyber-btn cyber-btn-red"></div>
                <div className="cyber-btn cyber-btn-yellow"></div>
                <div className="cyber-btn cyber-btn-green"></div>
              </div>
              <div className="cyber-terminal-title">root@vrc-security:~$</div>
            </div>
            <div className="cyber-terminal-body">
              <div className="font-mono text-emerald-400 text-sm">
                <span className="text-muted-foreground">$</span> ./initialize_cyber_training.sh
              </div>
              <div className="font-mono text-emerald-300 text-xs mt-1">
                [INFO] Loading AI-powered cybersecurity protocols...
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main heading with typing animation */}
        <h1 className="font-inter text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center animate-fade-in">
          <span className="cyber-text-glow-reduced">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <h2 className="font-inter text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-cyan-300 animate-fade-in">
          AI-Powered Cybersecurity Internship Program
        </h2>

        {/* AI Learning Highlight */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg px-6 py-3">
            <Brain className="text-emerald-400 mr-3" size={24} />
            <div className="text-left">
              <div className="text-emerald-400 font-semibold">Learn with AI Intelligence</div>
              <div className="text-cyan-300 text-sm">Personalized curriculum adapted to your learning pace</div>
            </div>
          </div>
        </div>

        {/* Vacancy Alert */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg px-6 py-3">
            <AlertCircle className="text-red-400 mr-3" size={24} />
            <div className="text-left">
              <div className="text-red-400 font-semibold">Limited Seats Available!</div>
              <div className="text-orange-300 text-sm">Only 8 vacancies left for this batch</div>
            </div>
          </div>
        </div>

        {/* Program info cards with cyber theme */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="cyber-card cyber-border-blue animate-slide-in-right">
            <div className="cyber-card-header">Duration</div>
            <div className="cyber-card-title">8 Weeks Intensive</div>
            <div className="cyber-card-subtitle">June 15 - Aug 15, 2025</div>
          </div>
          
          <div className="cyber-card cyber-border-purple animate-fade-in">
            <div className="cyber-card-header">Level</div>
            <div className="cyber-card-title">Beginner Friendly</div>
            <div className="cyber-card-subtitle">AI-guided learning path</div>
          </div>
          
          <div className="cyber-card cyber-border-emerald animate-slide-in-right">
            <div className="cyber-card-header">Value</div>
            <div className="cyber-card-title">₹60,000+ Worth FREE</div>
            <div className="cyber-card-subtitle">Tools + Books + AI Tutoring</div>
          </div>

          <div className="cyber-card cyber-border-gold animate-slide-in-right">
            <div className="cyber-card-header">Investment</div>
            <div className="cyber-card-title">₹4,999 Only</div>
            <div className="cyber-card-subtitle">Complete Program Cost</div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-cyan-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Master cybersecurity fundamentals with <span className="text-emerald-400 font-semibold">AI-powered personalized learning</span> and 
          hands-on training from industry experts at Viswa Robotic Cars.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={handleApplyNow}
            className="cyber-button-primary"
          >
            <Shield className="mr-2" size={20} />
            APPLY NOW
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowLearnMore(true)}
            className="cyber-button-secondary"
          >
            <Terminal className="mr-2" size={20} />
            ACCESS_DETAILS
          </Button>
        </div>
      </div>

      {/* Learn More Dialog */}
      <Dialog open={showLearnMore} onOpenChange={setShowLearnMore}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto cyber-dialog">
          <DialogHeader>
            <DialogTitle className="font-inter text-2xl font-bold text-center mb-6" style={{
              color: '#39FF14',
              textShadow: '0 0 5px #39FF14',
              lineHeight: '1.3'
            }}>
              <Shield className="inline-block mr-2 text-emerald-400" size={28} />
              VRC Cybersecurity Internship - Complete Package
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-400 mb-4" style={{
                textShadow: '0 0 5px #14b8a6',
                lineHeight: '1.3'
              }}>
                What You Get - Worth ₹60,000+ for Just ₹4,999!
              </h3>
              <p className="text-cyan-200 text-lg font-mono" style={{lineHeight: '1.4'}}>
                A comprehensive cybersecurity learning experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programFeatures.map((feature, index) => (
                <Card key={index} className="cyber-card-enhanced">
                  <CardHeader>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="cyber-icon-container">
                        <feature.icon className="text-emerald-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg font-mono" style={{lineHeight: '1.3'}}>{feature.title}</CardTitle>
                        <div className="text-emerald-400 font-semibold text-sm font-mono">{feature.value}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-200 font-mono text-sm" style={{lineHeight: '1.4'}}>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="cyber-info-panel">
              <h4 className="text-xl font-bold text-emerald-400 mb-4 font-mono" style={{lineHeight: '1.3'}}>Additional Benefits:</h4>
              <ul className="space-y-2 text-cyan-200 font-mono">
                <li className="flex items-center">
                  <div className="cyber-bullet"></div>
                  Industry-recognized completion certificate
                </li>
                <li className="flex items-center">
                  <div className="cyber-bullet"></div>
                  Letter of Recommendation from VRC
                </li>
                <li className="flex items-center">
                  <div className="cyber-bullet"></div>
                  Career guidance and placement assistance
                </li>
                <li className="flex items-center">
                  <div className="cyber-bullet"></div>
                  Access to VRC alumni network
                </li>
                <li className="flex items-center">
                  <div className="cyber-bullet"></div>
                  One-on-one mentorship sessions
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <div className="mb-4 text-red-400 font-mono text-lg font-bold">
                ⚠️ Only 8 Seats Remaining!
              </div>
              <Button 
                onClick={() => {
                  setShowLearnMore(false);
                  handleApplyNow();
                }}
                className="cyber-button-primary"
              >
                APPLY NOW - ₹4,999 ONLY!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
