
import { CheckCircle, Mail, Users, FileText, Clock } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the detailed application form with your personal and educational information",
      step: "Step 1"
    },
    {
      icon: Clock,
      title: "Application Review",
      description: "VRC officials will carefully review and verify your submitted application",
      step: "Step 2"
    },
    {
      icon: Mail,
      title: "Confirmation Email",
      description: "You'll receive a confirmation email at your registered email address",
      step: "Step 3"
    },
    {
      icon: Users,
      title: "Private Group Access",
      description: "Get added to our exclusive private group for program sessions and resources",
      step: "Step 4"
    }
  ];

  return (
    <section id="application-process" className="py-20 bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-6">
            <CheckCircle className="text-emerald-400" size={32} />
          </div>
          <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Application</span>
            <br />
            <span className="cyber-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to join our cybersecurity internship program and start your journey in the field of cybersecurity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-emerald-500/20 z-0"></div>
                )}
                
                <div className="bg-card/50 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 relative z-10">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-4 border border-emerald-500/30">
                      <step.icon className="text-emerald-400" size={24} />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                        {step.step}
                      </span>
                    </div>
                    
                    <h3 className="font-inter text-lg font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="font-inter text-xl font-semibold text-emerald-400 mb-4">
                Important Information
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center justify-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={16} />
                  All sessions and materials will be accessible through the private group
                </p>
                <p className="flex items-center justify-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={16} />
                  Application review process takes around one business day
                </p>
                <p className="flex items-center justify-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={16} />
                  Make sure to check your email regularly for updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
