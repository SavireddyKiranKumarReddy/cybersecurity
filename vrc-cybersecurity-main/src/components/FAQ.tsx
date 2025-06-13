
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need prior experience in cybersecurity?",
      answer: "No! This program is designed for absolute beginners. We'll start from the basics and gradually build your knowledge in cybersecurity fundamentals. Many successful cybersecurity professionals in India started with zero experience."
    },
    {
      question: "What will I learn during the 8-week program?",
      answer: "You'll learn network security, ethical hacking basics, risk assessment, incident response, security tools (including Kali Linux), and hands-on practical skills that are relevant to the Indian cybersecurity industry."
    },
    {
      question: "Will I get a certificate upon completion?",
      answer: "Yes! You'll receive both a completion certificate and a Letter of Recommendation (LOR) from VRC detailing the skills you've acquired during the internship. These are recognized by Indian IT companies."
    },
    {
      question: "What are the program timings?",
      answer: "The program runs from January 15 to March 15, 2025. We offer flexible timings suitable for students and working professionals in India. Specific session timings will be communicated during the onboarding process."
    },
    {
      question: "Is this a paid internship?",
      answer: "This is a learning-focused internship program with nominal fees. However, you get access to premium resources worth ₹60,000+ absolutely free, making it incredibly valuable."
    },
    {
      question: "What career opportunities are available in India after completion?",
      answer: "Graduates can pursue roles like Security Analyst, Cybersecurity Specialist, Ethical Hacker, or SOC Analyst in Indian IT companies like TCS, Infosys, Wipro, and many cybersecurity startups. Starting salaries range from ₹4-8 LPA."
    },
    {
      question: "What tools and software will I need?",
      answer: "We'll provide guidance on all necessary tools. Most software used will be free and open-source. A basic laptop with internet connection is required. We'll help you set up virtual machines for hands-on practice."
    },
    {
      question: "How is the program delivered?",
      answer: "The program combines online theoretical sessions, hands-on labs, real-world projects, and interactive workshops. We also provide recorded sessions for revision and flexible learning suitable for Indian time zones."
    },
    {
      question: "Is placement assistance provided?",
      answer: "Yes! We provide career guidance, resume building, interview preparation, and connections to our network of partner companies in India's cybersecurity ecosystem."
    },
    {
      question: "What makes this program unique for Indian students?",
      answer: "Our curriculum includes India-specific cybersecurity challenges, compliance requirements (like RBI guidelines), case studies from Indian organizations, and career guidance tailored to the Indian job market."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-6">
            <HelpCircle className="text-emerald-400" size={32} />
          </div>
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="cyber-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our cybersecurity internship program designed for India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-emerald-500/5 transition-colors duration-300 rounded-xl"
              >
                <h3 className="font-inter text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-emerald-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-emerald-500/20 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
