import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { SendIcon, MailIcon, MessageSquare, User, Sparkles, MapPin, ExternalLink, Clock, AtSign, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "shakshiagrawal4221@gmail.com", // Optional: you can set this in the EmailJS template instead
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll respond soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-space-darker overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-space-dark to-transparent z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cosmic-blue opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cosmic-purple opacity-5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4">
            Get in <span className="text-cosmic-blue">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-md mx-auto text-sm">
            Have a question or want to work together? Drop me a message below.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Form - Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-space-light border-cosmic-blue/20 overflow-hidden relative h-full">
              {/* Glowing border effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-blue"></div>
              
              {/* Subtle corner decorations */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-cosmic-blue"></div>
                <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-cosmic-purple"></div>
                <div className="absolute top-9 right-9 w-1 h-1 rounded-full bg-cosmic-blue"></div>
              </div>
              
              <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-1.5">
                      <User size={14} className="text-cosmic-blue" />
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-space-darker border-gray-700 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue/30 h-9 text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
                      <MailIcon size={14} className="text-cosmic-blue" />
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-space-darker border-gray-700 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue/30 h-9 text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-cosmic-blue" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-space-darker border-gray-700 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue/30 resize-none text-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white h-10 transition-all duration-300 relative group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity"></span>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <SendIcon className="mr-1.5 h-3.5 w-3.5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  
                  <div className="flex items-center justify-center pt-1">
                    <Sparkles className="h-3 w-3 text-cosmic-purple opacity-50 mr-1.5" />
                    <p className="text-xs text-gray-400">I typically respond within 24-48 hours</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info - Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Top Card - Contact Information */}
            <Card className="bg-space-light border-cosmic-blue/20 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-blue"></div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-medium mb-4 sm:mb-6 flex items-center">
                  <AtSign className="mr-2 h-5 w-5 text-cosmic-purple" />
                  Contact Information
                </h3>
                <ul className="space-y-4 sm:space-y-6">
                  <li>
                    <div className="flex items-start">
                      <div className="bg-space-darker p-2 sm:p-2.5 rounded-md mr-3 sm:mr-4">
                        <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cosmic-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-0.5">Email</p>
                        <a href="mailto:shakshiagrawal4221@gmail.com" className="text-gray-200 hover:text-cosmic-blue transition-colors text-sm sm:text-base truncate block max-w-full">
                          shakshiagrawal4221@gmail.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <div className="bg-space-darker p-2 sm:p-2.5 rounded-md mr-3 sm:mr-4">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-cosmic-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-0.5">Phone</p>
                        <a href="tel:+916200993655" className="text-gray-200 hover:text-cosmic-blue transition-colors text-sm sm:text-base">
                          +91 6200993655
                        </a>
                      </div>
                    </div>
                  </li>
                    <li>
                    <div className="flex items-start">
                      <div className="bg-space-darker dark:bg-space-darker p-2 sm:p-2.5 rounded-md mr-3 sm:mr-4 bg-gray-100">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cosmic-blue" />
                      </div>
                      <div>
                        <p className="text-sm dark:text-gray-400 text-gray-500 mb-0.5">Location</p>
                        <p className="dark:text-gray-200 text-gray-800 text-sm sm:text-base">Bihar, India</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <div className="bg-space-darker dark:bg-space-darker p-2 sm:p-2.5 rounded-md mr-3 sm:mr-4 bg-gray-100">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cosmic-blue" />
                      </div>
                      <div>
                        <p className="text-sm dark:text-gray-400 text-gray-500 mb-0.5">Availability</p>
                        <p className="dark:text-gray-200 text-gray-800 text-sm sm:text-base">Open to collaborations and projects</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Bottom Card - Connect */}
            <Card className="bg-space-light border-cosmic-blue/20 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple"></div>
              <CardContent className="p-4 sm:p-6">
                <div className="relative">
                  <div className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-br from-cosmic-blue/10 to-cosmic-purple/10 rounded-full blur-xl"></div>
                  <div className="absolute right-20 bottom-20 w-20 h-20 bg-gradient-to-br from-cosmic-blue/10 to-cosmic-purple/10 rounded-full blur-lg"></div>
                  
                  <div className="relative z-10 space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-space-darker rounded-full flex items-center justify-center">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple flex items-center justify-center animate-pulse-slow">
                        <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-medium text-center">Let's Connect</h3>
                    <p className="text-gray-400 text-center text-xs sm:text-sm">
                      Follow me on social media for updates on my latest work and projects.
                    </p>
                    
                    <div className="flex justify-center space-x-4 pt-2">
                      {/* Social media icons with updated links */}
                      <a href="https://github.com/ShakshiKumariAgrawal" target="_blank" rel="noopener noreferrer" className="bg-space-darker p-2 rounded-full hover:bg-cosmic-blue/20 transition-all" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                      <a href="https://www.linkedin.com/in/shakshiagrawal-/" target="_blank" rel="noopener noreferrer" className="bg-space-darker p-2 rounded-full hover:bg-cosmic-blue/20 transition-all" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;