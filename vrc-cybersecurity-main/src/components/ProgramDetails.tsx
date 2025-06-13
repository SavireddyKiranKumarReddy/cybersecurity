
import { Calendar, Users, Award, BookOpen, Shield, Lock, Code, Database, Server, Terminal, Network, Bug, Eye, Cpu, Brain, FileSearch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramDetails = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "8-Week Intensive",
      description: "June 15 - August 15, 2025",
      detail: "Comprehensive training program"
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "No prior experience required",
      detail: "Perfect starting point for cybersecurity"
    },
    {
      icon: Award,
      title: "Certificate & LOR",
      description: "Industry-recognized credentials",
      detail: "Boost your career prospects"
    },
    {
      icon: BookOpen,
      title: "₹60,000+ Worth FREE",
      description: "Premium tools, books & resources",
      detail: "Complete learning ecosystem"
    }
  ];

  const skills = [
    { icon: Terminal, name: "Operating Systems Mastery", level: "Windows & Linux Administration" },
    { icon: Network, name: "Network Security", level: "Protocols, Devices & Troubleshooting" },
    { icon: Shield, name: "Linux Security Essentials", level: "Command Line & System Hardening" },
    { icon: Eye, name: "Threat Landscape Analysis", level: "Malware & Social Engineering" },
    { icon: Cpu, name: "VMware & Lab Setup", level: "Virtualization & Testing Environment" },
    { icon: Bug, name: "Ethical Hacking (5 Phases)", level: "Reconnaissance to Reporting" },
    { icon: FileSearch, name: "Bug Bounty Methodology", level: "Real-world Vulnerability Assessment" },
    { icon: Brain, name: "AI-Powered Learning", level: "Personalized Cybersecurity Education" },
    { icon: Lock, name: "Incident Response", level: "Security Breach Handling" },
    { icon: Code, name: "Security Scripting", level: "Automation & Tool Development" },
    { icon: Database, name: "Penetration Testing", level: "Controlled Environment Testing" },
    { icon: Award, name: "Professional Reporting", level: "Documentation & Communication" }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6 cyber-text">
            Program Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity training designed to transform beginners into skilled security professionals through AI-powered personalized learning
          </p>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="terminal-border hover-glow bg-card/50 backdrop-blur-sm group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="text-emerald-400" size={32} />
                </div>
                <CardTitle className="font-inter text-xl text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-emerald-400 font-semibold mb-2">{item.description}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-inter text-3xl font-bold text-center mb-4 text-white">
            Skills You'll <span className="cyber-text">Master</span>
          </h3>
          <p className="text-center text-emerald-400 mb-12 font-mono">
            Based on our comprehensive 8-week curriculum with AI-guided learning
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="terminal-border hover-glow bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                      <skill.icon className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-inter">{skill.name}</h4>
                      <p className="text-emerald-400 text-sm">{skill.level}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="terminal-border bg-card/50 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="font-inter text-2xl font-bold mb-4 text-white">
              Ready to Start Your AI-Powered Cybersecurity Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our intensive 8-week program and gain the skills needed to protect digital assets in today's threat landscape. Learn with personalized AI guidance and hands-on practical experience.
            </p>
            <div className="font-mono text-emerald-400">
              <span className="text-muted-foreground">Next batch starts:</span> June 15, 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
