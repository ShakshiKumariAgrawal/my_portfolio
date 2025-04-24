import { motion } from 'framer-motion';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ExperienceSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-space-dark relative z-10">
      <div className="container mx-auto px-4">
        <SectionHeader title="Education & Training" subtitle="My academic journey and professional development" />

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-medium text-cosmic-blue mb-8 flex items-center"
          >
            <GraduationCap className="mr-2" /> Education
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={item} className="bg-space-light/30 backdrop-blur-sm p-6 rounded-lg border border-cosmic-blue/20">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium">Lovely Professional University</h4>
                <span className="text-cosmic-purple px-3 py-1 rounded-full bg-cosmic-purple/10 text-sm">Pursuing</span>
              </div>
              <div className="text-gray-400 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Phagwara, Punjab
              </div>
              <p className="text-gray-300">Bachelor of Technology in Computer Science and Engineering</p>
              <p className="text-cosmic-blue mt-2">CGPA: 8.2</p>
            </motion.div>

            <motion.div variants={item} className="bg-space-light/30 backdrop-blur-sm p-6 rounded-lg border border-cosmic-blue/20">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium">DAV Kapildev Public School</h4>
                <span className="text-cosmic-purple px-3 py-1 rounded-full bg-cosmic-purple/10 text-sm">2021-2022</span>
              </div>
              <div className="text-gray-400 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Ranchi, Jharkhand
              </div>
              <p className="text-gray-300">Intermediate (PCM)</p>
              <p className="text-cosmic-blue mt-2">Percentage: 91%</p>
            </motion.div>

            <motion.div variants={item} className="bg-space-light/30 backdrop-blur-sm p-6 rounded-lg border border-cosmic-blue/20">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium">D.A.V Public School</h4>
                <span className="text-cosmic-purple px-3 py-1 rounded-full bg-cosmic-purple/10 text-sm">2019-2020</span>
              </div>
              <div className="text-gray-400 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Daudnagar, Bihar
              </div>
              <p className="text-gray-300">Matriculation</p>
              <p className="text-cosmic-blue mt-2">Percentage: 92%</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Training */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-medium text-cosmic-blue mb-8 flex items-center"
          >
            <BookOpen className="mr-2" /> Training
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={item} className="bg-space-light/30 backdrop-blur-sm p-6 rounded-lg border border-cosmic-blue/20">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium">Board Infinity</h4>
                <span className="text-cosmic-purple px-3 py-1 rounded-full bg-cosmic-purple/10 text-sm">Jun-Jul 2024</span>
              </div>
              <p className="text-gray-300 mb-4">R Programming</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Learned and applied data preprocessing using libraries such as NumPy, NLTK, and Scikit-learn</li>
                <li>Created visualizations using ggplot2 to communicate insights effectively</li>
                <li>Generated comprehensive reports summarizing findings for stakeholders</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;