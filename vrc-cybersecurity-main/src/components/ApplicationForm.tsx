
import { useState } from 'react';
import { X, Shield, Mail, User, MessageSquare, CheckCircle, AlertTriangle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationForm = ({ isOpen, onClose }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    state: '',
    education: '',
    college: '',
    yearOfStudy: '',
    cyberInterest: '',
    currentLevel: '',
    expectations: '',
    motivation: '',
    availability: '',
    previousExperience: '',
    termsAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.fullName && 
           formData.email && 
           formData.phone &&
           formData.city &&
           formData.state &&
           formData.cyberInterest && 
           formData.currentLevel && 
           formData.motivation && 
           formData.termsAccepted;
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Chandigarh', 'Puducherry'
  ];

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-card border-emerald-500/30">
          <div className="text-center py-8">
            <CheckCircle className="text-emerald-400 mx-auto mb-4" size={64} />
            <h3 className="font-inter text-xl font-bold text-white mb-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your interest in VRC Cybersecurity Internship. We'll review your application and get back to you within 2-3 business days.
            </p>
            <p className="text-emerald-400 text-sm font-semibold">
              Check your email for confirmation details.
            </p>
            <Button 
              onClick={onClose}
              className="mt-6 bg-emerald-500 text-black hover:bg-emerald-400"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-emerald-500/30">
        <DialogHeader>
          <DialogTitle className="font-inter text-2xl font-bold text-center">
            <Shield className="inline-block mr-2 text-emerald-400" size={28} />
            VRC Cybersecurity Internship Application
          </DialogTitle>
          <p className="text-center text-muted-foreground">Join India's Leading Cybersecurity Training Program</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-inter text-lg font-semibold text-emerald-400">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-white">Mobile Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="whatsapp" className="text-white">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="+91 9876543210 (if different)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-white">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="Your city"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="state" className="text-white">State *</Label>
                <select
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full p-2 rounded-md bg-background border border-emerald-500/30 text-white focus:border-emerald-400"
                  required
                >
                  <option value="">Select your state</option>
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Educational Background */}
          <div className="space-y-4">
            <h3 className="font-inter text-lg font-semibold text-emerald-400">Educational Background</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="education" className="text-white">Current Education Level</Label>
                <select
                  id="education"
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full p-2 rounded-md bg-background border border-emerald-500/30 text-white focus:border-emerald-400"
                >
                  <option value="">Select education level</option>
                  <option value="12th-science">12th Science</option>
                  <option value="12th-commerce">12th Commerce</option>
                  <option value="diploma">Diploma</option>
                  <option value="btech">B.Tech/B.E</option>
                  <option value="bsc">B.Sc</option>
                  <option value="bca">BCA</option>
                  <option value="mtech">M.Tech</option>
                  <option value="msc">M.Sc</option>
                  <option value="mca">MCA</option>
                  <option value="working-professional">Working Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="yearOfStudy" className="text-white">Year of Study/Experience</Label>
                <Input
                  id="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                  className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                  placeholder="e.g., 2nd Year, Final Year, 2 years exp"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="college" className="text-white">College/University/Organization</Label>
              <Input
                id="college"
                value={formData.college}
                onChange={(e) => handleInputChange('college', e.target.value)}
                className="bg-background border-emerald-500/30 text-white focus:border-emerald-400"
                placeholder="Name of your college or organization"
              />
            </div>
          </div>

          {/* Cybersecurity Interest */}
          <div className="space-y-4">
            <h3 className="font-inter text-lg font-semibold text-emerald-400">Cybersecurity Interest</h3>
            
            <div>
              <Label htmlFor="cyberInterest" className="text-white">Why are you interested in cybersecurity? *</Label>
              <Textarea
                id="cyberInterest"
                value={formData.cyberInterest}
                onChange={(e) => handleInputChange('cyberInterest', e.target.value)}
                className="bg-background border-emerald-500/30 text-white min-h-[100px] focus:border-emerald-400"
                placeholder="Tell us what sparked your interest in cybersecurity..."
                required
              />
            </div>

            <div>
              <Label htmlFor="currentLevel" className="text-white">What's your current level in cybersecurity? *</Label>
              <select
                id="currentLevel"
                value={formData.currentLevel}
                onChange={(e) => handleInputChange('currentLevel', e.target.value)}
                className="w-full p-2 rounded-md bg-background border border-emerald-500/30 text-white focus:border-emerald-400"
                required
              >
                <option value="">Select your level</option>
                <option value="complete-beginner">Complete Beginner - No prior knowledge</option>
                <option value="basic-awareness">Basic Awareness - Heard about cybersecurity</option>
                <option value="some-knowledge">Some Knowledge - Read articles/watched videos</option>
                <option value="basic-tools">Basic Tools - Used some security tools</option>
                <option value="intermediate">Intermediate - Some hands-on experience</option>
                <option value="advanced">Advanced - Professional experience</option>
              </select>
            </div>

            <div>
              <Label htmlFor="previousExperience" className="text-white">Any previous experience with technology/programming?</Label>
              <Textarea
                id="previousExperience"
                value={formData.previousExperience}
                onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                className="bg-background border-emerald-500/30 text-white min-h-[80px] focus:border-emerald-400"
                placeholder="Mention any programming languages, tools, or projects you've worked on..."
              />
            </div>
          </div>

          {/* Program Specific */}
          <div className="space-y-4">
            <h3 className="font-inter text-lg font-semibold text-emerald-400">Program Details</h3>
            
            <div>
              <Label htmlFor="expectations" className="text-white">What do you hope to achieve from this internship?</Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) => handleInputChange('expectations', e.target.value)}
                className="bg-background border-emerald-500/30 text-white min-h-[80px] focus:border-emerald-400"
                placeholder="Your goals and expectations..."
              />
            </div>

            <div>
              <Label htmlFor="motivation" className="text-white">Why do you want to join VRC's cybersecurity program specifically? *</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                className="bg-background border-emerald-500/30 text-white min-h-[100px] focus:border-emerald-400"
                placeholder="What motivates you to join our program..."
                required
              />
            </div>

            <div>
              <Label htmlFor="availability" className="text-white">Confirm your availability (January 15 - March 15, 2025)</Label>
              <Textarea
                id="availability"
                value={formData.availability}
                onChange={(e) => handleInputChange('availability', e.target.value)}
                className="bg-background border-emerald-500/30 text-white min-h-[60px] focus:border-emerald-400"
                placeholder="Any scheduling conflicts or availability notes..."
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                className="mt-1 border-emerald-500/50 data-[state=checked]:bg-emerald-500"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I accept the terms and conditions of the VRC Cybersecurity Internship Program. I understand that this is an educational program and I commit to attending all sessions and completing assigned projects. I also consent to receive program updates via email and WhatsApp. *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="flex-1 bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
