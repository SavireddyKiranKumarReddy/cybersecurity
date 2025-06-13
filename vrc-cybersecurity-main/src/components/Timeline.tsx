import { Calendar, Clock, CheckCircle, Users, ChevronDown, ChevronUp, Brain, Cpu, Shield, Terminal, Network, Bug, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const Timeline = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const timelineData = [
    {
      week: "Week 1",
      phase: "Foundation Building",
      title: "Operating Systems Fundamentals",
      theme: "Master Your Digital Environment",
      icon: Cpu,
      date: "June 15 - June 21, 2025",
      overview: "Windows essentials, Linux fundamentals, and cross-platform security comparison",
      details: {
        topics: [
          "Windows Essentials: File systems (NTFS, FAT32), Registry basics, User accounts & permissions",
          "Linux Fundamentals: Distributions, File hierarchy, Terminal commands (ls, cd, grep, find)",
          "Cross-Platform Security: Windows vs Linux security differences, Live USB & dual-boot setup"
        ],
        practicals: [
          "Navigate Windows via command line and manage users",
          "Set up Ubuntu VM and practice terminal navigation", 
          "Boot from live USB and configure dual-boot setup"
        ],
        assessment: "OS navigation challenge + basic troubleshooting scenarios"
      }
    },
    {
      week: "Week 2", 
      phase: "Foundation Building",
      title: "Computer Networks Deep Dive",
      theme: "Decode the Digital Highway",
      icon: Network,
      date: "June 22 - June 28, 2025",
      overview: "OSI/TCP models, protocols, network devices, and wireless security fundamentals",
      details: {
        topics: [
          "Network Basics: OSI and TCP/IP models, IP addressing & subnetting, MAC addresses & ARP",
          "Critical Protocols: HTTP/HTTPS, DNS, DHCP, FTP, SSH, common port numbers",
          "Network Infrastructure: Routers, switches, firewalls, WAPs, network topology",
          "Wireless Security: WiFi protocols (WEP, WPA, WPA2, WPA3), wireless attack vectors"
        ],
        practicals: [
          "Build basic networks using Packet Tracer",
          "Capture and analyze traffic with Wireshark", 
          "Configure small office network simulation",
          "Audit home WiFi security and fix vulnerabilities"
        ],
        assessment: "Network design challenge + protocol identification quiz"
      }
    },
    {
      week: "Week 3",
      phase: "Foundation Building", 
      title: "Linux Security Essentials",
      theme: "Command the Terminal Like a Pro",
      icon: Terminal,
      date: "June 29 - July 5, 2025",
      overview: "Advanced Linux administration, security management, and automation scripting",
      details: {
        topics: [
          "Advanced File Management: Permissions deep dive (sticky bits, SUID, SGID), ownership",
          "Process & Service Management: systemd, daemons, process monitoring (ps, top, htop)",
          "Security Management: sudo configuration, SSH key management, firewall (ufw)",
          "System Monitoring: Log analysis (/var/log/), system resources monitoring"
        ],
        practicals: [
          "Secure file sharing setup between users",
          "Configure passwordless SSH and firewall rules",
          "Set up log monitoring and alerting systems",
          "Create security audit automation script"
        ],
        assessment: "Linux administration scenarios + scripting challenge"
      }
    },
    {
      week: "Week 4",
      phase: "Cybersecurity Core",
      title: "Cybersecurity Awareness & Threat Landscape", 
      theme: "Know Your Enemy",
      icon: Shield,
      date: "July 6 - July 12, 2025",
      overview: "Threat landscape analysis, social engineering, malware, and incident response basics",
      details: {
        topics: [
          "Cyber Threat Landscape: Attack types (malware, phishing, ransomware), criminal motivations", 
          "Social Engineering: Phishing, vishing, smishing techniques, physical security",
          "Malware Analysis: Viruses, worms, trojans, rootkits, static vs dynamic analysis",
          "Data Protection: Classification, GDPR compliance, privacy measures"
        ],
        practicals: [
          "Analyze real breach case studies interactively",
          "Conduct ethical phishing awareness simulation",
          "Analyze malware samples in isolated environment",
          "Handle simulated security incident scenarios"
        ],
        assessment: "Threat identification challenge + incident response scenario"
      }
    },
    {
      week: "Week 5",
      phase: "Cybersecurity Core",
      title: "VMware & Lab Environment Setup",
      theme: "Build Your Cyber Lab", 
      icon: Cpu,
      date: "July 13 - July 19, 2025",
      overview: "Virtualization mastery, security lab creation, and advanced VM networking",
      details: {
        topics: [
          "Virtualization Fundamentals: VMware vs VirtualBox vs Hyper-V comparison",
          "Security VM Creation: Kali Linux setup, Windows 10/11 configuration for testing",
          "Vulnerable Labs: Metasploitable, DVWA, VulnHub VMs, network segmentation",
          "Lab Management: Resource allocation, performance tuning, backup strategies"
        ],
        practicals: [
          "Install and configure VMware Workstation/VirtualBox",
          "Create isolated testing network with multiple VMs",
          "Set up vulnerable applications for safe testing",
          "Design multi-tier network lab architecture"
        ],
        assessment: "Lab setup verification + network configuration challenge"
      }
    },
    {
      week: "Week 6",
      phase: "Cybersecurity Core", 
      title: "The 5 Phases of Ethical Hacking",
      theme: "Think Like an Ethical Hacker",
      icon: Bug,
      date: "July 20 - July 26, 2025",
      overview: "Complete ethical hacking methodology from reconnaissance to reporting",
      details: {
        topics: [
          "Phase 1 - Reconnaissance: OSINT techniques, passive vs active information gathering",
          "Phase 2 - Scanning: Network scanning with Nmap, service enumeration, banner grabbing", 
          "Phase 3 - Gaining Access: Vulnerability identification, controlled exploitation with Metasploit",
          "Phase 4 - Maintaining Access: Post-exploitation, privilege escalation in controlled environment",
          "Phase 5 - Covering Tracks: Ethical log management, documentation, professional reporting"
        ],
        practicals: [
          "OSINT gathering using theHarvester, Maltego, Google dorking",
          "Network scanning and service identification with Nmap, Nikto",
          "Controlled exploitation using Metasploit, Burp Suite, SQLmap",
          "Complete ethical penetration test documentation"
        ],
        assessment: "Simulated penetration test on lab environment"
      }
    },
    {
      week: "Week 7",
      phase: "Real-World Application",
      title: "External Methodology - Bug Bounty Basics", 
      theme: "Your Real-World Cyber Career Starts Here",
      icon: Bug,
      date: "July 27 - August 2, 2025",
      overview: "Professional bug bounty hunting, systematic methodology, and real-world application",
      details: {
        topics: [
          "Bug Bounty Fundamentals: HackerOne, Bugcrowd platforms, legal & ethical guidelines",
          "Systematic Methodology: Testing checklists, professional approach to bug hunting",
          "OWASP Top 10: XSS, SQL injection, IDOR, broken authentication in real applications",
          "Advanced Tools: Burp Suite Professional techniques, automated vs manual testing"
        ],
        practicals: [
          "Set up bug bounty platform accounts and understand scope",
          "Practice systematic testing on beginner-friendly programs",
          "Advanced Burp Suite workshop with real targets",
          "Write professional vulnerability reports"
        ],
        assessment: "Vulnerability assessment report + methodology evaluation"
      }
    },
    {
      week: "Week 8",
      phase: "Real-World Application",
      title: "Capstone Projects & Career Path",
      theme: "Launch Your Cybersecurity Journey", 
      icon: Award,
      date: "August 3 - August 15, 2025",
      overview: "Portfolio development, project presentation, and career guidance for cybersecurity roles",
      details: {
        topics: [
          "Capstone Project Options: Mini penetration test, security audit, or incident response simulation",
          "Professional Presentation: Document findings, create recommendations, peer review process",
          "Career Development: Resume building, certification roadmap (Security+, CEH, CISSP)",
          "Industry Preparation: Interview techniques, technical questions, professional networking"
        ],
        practicals: [
          "Complete comprehensive security assessment project",
          "Present findings to group with professional documentation",
          "Build cybersecurity-focused resume and LinkedIn profile",
          "Practice technical interview scenarios"
        ],
        assessment: "Project presentation + comprehensive skills evaluation"
      }
    }
  ];

  const bonusItems = [
    "LinkedIn Profile Optimization & Maintenance",
    "GitHub Portfolio Creation & Management", 
    "Medium Technical Blog Writing",
    "Professional Portfolio Website Development"
  ];

  const programInfo = [
    {
      icon: Calendar,
      label: "Start Date", 
      value: "June 15, 2025"
    },
    {
      icon: Clock,
      label: "Duration",
      value: "8 Weeks Intensive"
    },
    {
      icon: Users,
      label: "Learning Method",
      value: "AI-Powered Interactive"
    },
    {
      icon: CheckCircle,
      label: "End Date",
      value: "August 15, 2025"
    }
  ];

  const toggleWeek = (weekIndex: number) => {
    setExpandedWeek(expandedWeek === weekIndex ? null : weekIndex);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6 cyber-text">
            8-Week Beginner-Friendly Cybersecurity Curriculum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Complete journey from Zero to Cyber Hero with AI-powered interactive learning
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg px-6 py-3">
            <Brain className="text-emerald-400 mr-2" size={20} />
            <span className="text-emerald-400 font-semibold">Powered by AI for Personalized Learning</span>
          </div>
        </div>

        {/* Program Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {programInfo.map((info, index) => (
            <Card key={index} className="terminal-border hover-glow bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <info.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="font-inter font-semibold text-emerald-400 mb-2">{info.label}</h3>
                <p className="text-white font-semibold">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-400 to-teal-400"></div>
            
            <div className="space-y-8">
              {timelineData.map((phase, index) => (
                <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-background z-10 flex items-center justify-center pulse-green">
                    <phase.icon size={12} className="text-black" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="terminal-border hover-glow bg-card/50 backdrop-blur-sm transition-all duration-300">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleWeek(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                              <phase.icon className="text-emerald-400" size={20} />
                            </div>
                            <div>
                              <CardTitle className="font-inter text-lg text-white">{phase.week}</CardTitle>
                              <p className="text-emerald-400 font-mono text-sm font-semibold">{phase.phase}</p>
                            </div>
                          </div>
                          {expandedWeek === index ? 
                            <ChevronUp className="text-emerald-400" size={20} /> : 
                            <ChevronDown className="text-emerald-400" size={20} />
                          }
                        </div>
                        <div className="mt-4">
                          <h3 className="font-semibold text-cyan-300 text-lg">{phase.title}</h3>
                          <p className="text-muted-foreground italic">"{phase.theme}"</p>
                          <p className="text-sm text-emerald-400 mt-2">{phase.date}</p>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{phase.overview}</p>
                        
                        {expandedWeek === index && (
                          <div className="space-y-6 border-t border-emerald-500/20 pt-6 animate-fade-in">
                            <div>
                              <h4 className="font-semibold text-emerald-400 mb-3 flex items-center">
                                <BookOpen size={16} className="mr-2" />
                                Key Topics
                              </h4>
                              <ul className="space-y-2">
                                {phase.details.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="flex items-start text-muted-foreground text-sm">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                                <Terminal size={16} className="mr-2" />
                                Hands-on Practicals
                              </h4>
                              <ul className="space-y-2">
                                {phase.details.practicals.map((practical, practicalIndex) => (
                                  <li key={practicalIndex} className="flex items-start text-muted-foreground text-sm">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span>{practical}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                              <h4 className="font-semibold text-emerald-400 mb-2 flex items-center">
                                <Award size={16} className="mr-2" />
                                Weekly Assessment
                              </h4>
                              <p className="text-sm text-muted-foreground">{phase.details.assessment}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <Card className="terminal-border bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-center text-purple-400 text-xl font-bold">
                🎁 Bonus Career Development Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bonusItems.map((item, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum Note */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <div className="terminal-border bg-card/50 backdrop-blur-sm rounded-lg p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="text-emerald-400">
                <span className="text-muted-foreground">$</span> ./curriculum_note.sh
              </div>
              <div className="text-white">📋 Curriculum Flexibility: This curriculum is dynamically modified based on:</div>
              <div className="text-white">   • Student skill levels and learning pace</div>
              <div className="text-white">   • Industry trends and emerging threats</div>
              <div className="text-white">   • Real-world security incidents and case studies</div>
              <div className="text-white">   • Student feedback and assessment results</div>
              <div className="text-emerald-400">
                Status: <span className="pulse-green">Adaptive Learning Enabled with AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
