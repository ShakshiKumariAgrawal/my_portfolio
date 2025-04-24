import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    issuer: string;
    date: string;
    image: string;
  }>(null);

  const certificates = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "November 2024",
      link: "#",
      image: "/certificates/nptel.jpg" 
    },
    {
      title: "Tableau",
      issuer: "Coursera",
      date: "September 2024",
      link: "#",
      image: "/certificates/tableu.jpg"
    },
    {
      title: "R Programming",
      issuer: "Coursera",
      date: "April 2024",
      link: "#",
      image: "/certificates/rprogramming.jpg"
    },
    {
      title: "Excel Skills for Data Analytics and Visualization",
      issuer: "Coursera",
      date: "February 2024",
      link: "#",
      image: "/certificates/excel.jpg"
    },
    {
      title: "Excel Skill Job Simulation",
      issuer: "JP Morgan Chase & Co.",
      date: "August 2024",
      link: "#",
      image: "/certificates/jpmorgan.jpg"
    },
  ];

  const achievements = [
    {
      title: "NSS Executive Member",
      organization: "National Service Scheme",
      date: "Since September 2023",
      description: "Spearheaded social initiatives like blood donation, plantation drives, and women's rights campaigns.",
      image: "/certificates/nss.jpg"
    },
    {
      title: "Infineon Hackathon Finalist",
      organization: "Infineon Technologies",
      date: "October 2023",
      description: "Developed an IoT-based solution for smart energy management, placing among the top 10 teams.",
      image: "/certificates/infineon.jpg"
    },
    {
      title: "Amazon ML Challenge",
      organization: "Amazon Web Services",
      date: "July 2023",
      description: "Built a machine learning model for product categorization with 92% accuracy.",
      image: "/certificates/amazon.jpg"
    },
    {
      title: "R Programming",
      organization: "Board Infinity",
      date: "July 2024",
      description: "Successfully completed course from board infinity and made several project out of it.",
      image: "/certificates/boardinfinity.jpg"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleOpenCertificate = (cert: { title: string; issuer: string; date: string; image: string; link: string }) => {
    setSelectedCertificate(cert);
  };

  return (
    <>
      <section id="certificates" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="text-cosmic-blue">Certificates</span> & Achievements
            </h2>
            <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional certifications and recognition highlighting my ongoing commitment
              to learning and excellence in data analysis and technology.
            </p>
          </motion.div>

          <div className="mb-20">
            <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Certificates</h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            >
              {certificates.map((cert, index) => (
                <motion.div key={index} variants={item}>
                  <Card 
                    className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20 h-full overflow-hidden group cursor-pointer"
                    onClick={() => handleOpenCertificate(cert)}
                  >
                    {/* Certificate Image Preview - More balanced height */}
                    <div className="w-full h-44 overflow-hidden relative">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/certificate-placeholder.jpg';
                        }}
                      />
                      <div className="absolute bottom-3 right-3 bg-cosmic-blue/90 p-1.5 rounded-full text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-cosmic-blue/10 mt-1">
                          <Award className="text-cosmic-blue" size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-base mb-1 line-clamp-1">{cert.title}</h4>
                          <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <Calendar size={12} />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Achievements</h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20 h-full overflow-hidden group">
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Achievement Image or Logo - more compact */}
                      <div className="sm:w-1/4 h-32 sm:h-auto overflow-hidden relative">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/achievement-placeholder.jpg';
                          }}
                        />
                      </div>
                      
                      <CardContent className="p-4 sm:w-3/4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-cosmic-purple/10 mt-1 flex-shrink-0">
                            <Trophy className="text-cosmic-purple" size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-base mb-1">{achievement.title}</h4>
                            <p className="text-gray-400 text-sm mb-1">{achievement.organization}</p>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                              <Calendar size={12} />
                              <span>{achievement.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile-optimized full-screen Certificate Modal */}
      <Dialog 
        open={selectedCertificate !== null} 
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="bg-space-darker/95 border-cosmic-blue/30 max-w-5xl w-[95vw] h-[90vh] p-4 sm:p-6 [&>button]:hidden">
          <div className="absolute top-3 right-3 z-50">
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-5 w-5 text-gray-400 hover:text-white" />
              </Button>
            </DialogClose>
          </div>
          
          {/* Responsive layout that works on all screen sizes */}
          <div className="flex flex-col h-full overflow-hidden">
            {/* Certificate info on small screens */}
            <div className="sm:hidden mb-3">
              <h3 className="text-lg font-bold font-display text-cosmic-blue mb-1">
                {selectedCertificate?.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-300 text-sm">{selectedCertificate?.issuer}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar size={12} />
                  <span>{selectedCertificate?.date}</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row md:gap-4 h-full overflow-hidden">
              {/* Large certificate view - optimized for mobile */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {selectedCertificate?.image && (
                  <div className="relative flex-1 overflow-auto rounded-lg border border-cosmic-blue/20 bg-black/20">
                    <img 
                      src={selectedCertificate.image} 
                      alt={`${selectedCertificate.title} Certificate`} 
                      className="w-full h-auto object-contain max-h-full p-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/certificate-placeholder.jpg';
                      }}
                    />
                  </div>
                )}
              </div>
              
              {/* Certificate details sidebar - hidden on small screens */}
              <div className="hidden md:block md:w-64 mt-4 md:mt-0">
                <div className="bg-space-light p-4 rounded-lg border border-cosmic-blue/20">
                  <h3 className="text-xl font-bold font-display text-cosmic-blue mb-2">
                    {selectedCertificate?.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{selectedCertificate?.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <Calendar size={16} />
                    <span>{selectedCertificate?.date}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    This certificate validates my expertise and knowledge in {selectedCertificate?.title?.toLowerCase()}.
                  </p>
                  
                  <DialogClose asChild>
                    <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                      Close
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </div>
            
            {/* Mobile close button at bottom */}
            <div className="md:hidden mt-3">
              <DialogClose asChild>
                <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificatesSection;