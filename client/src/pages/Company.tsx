import { motion } from 'framer-motion';
import { images } from '@/assets/images';
import { Link } from 'wouter';
import { Users, Target, Award, Globe, ArrowRight, Heart, Shield, Zap } from 'lucide-react';

const Company = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make prioritizes the security and protection of our customers' digital assets."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Our success is measured by our customers' success in achieving their security goals."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of cybersecurity technology and best practices."
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "We attract and develop the best cybersecurity talent to serve our customers."
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer",
      bio: "Former CISO at Fortune 500 companies with 15+ years in cybersecurity leadership.",
      image: images.cybersecurityProfessionals[0]
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Technology Officer", 
      bio: "Security researcher and engineer with expertise in AI-driven threat detection.",
      image: images.cybersecurityProfessionals[1]
    },
    {
      name: "Dr. Priya Patel",
      title: "Chief Security Officer",
      bio: "Cybersecurity expert with PhD in Computer Security and 20+ years experience.",
      image: images.cybersecurityProfessionals[2]
    },
    {
      name: "James Wilson",
      title: "Chief Revenue Officer",
      bio: "Growth leader with track record of scaling cybersecurity companies globally.",
      image: images.cybersecurityProfessionals[3]
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "TecAstra founded with vision to democratize enterprise cybersecurity"
    },
    {
      year: "2019", 
      title: "First Product Launch",
      description: "FortIQ Next-Gen Firewall released to market"
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "$25M Series A led by top cybersecurity VCs"
    },
    {
      year: "2021",
      title: "Platform Expansion", 
      description: "Launched comprehensive security platform with 10 integrated products"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to serve customers across 50+ countries"
    },
    {
      year: "2023",
      title: "TecAstra Labs",
      description: "Launched advanced threat research and AI security initiatives"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as leader in next-generation cybersecurity platforms"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Customers Protected" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Platform Uptime" },
    { number: "24/7", label: "Global Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                About TecAstra
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                We're on a mission to make enterprise-grade cybersecurity accessible to organizations of all sizes through innovative, AI-powered security solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                  Join Our Team
                </Link>
                <Link href="/lab" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                  Try Our Platform
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={images.corporateIT[0]}
                alt="TecAstra Team"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-[hsl(var(--tecastra-gray))] rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="h-12 w-12 text-[hsl(var(--tecastra-teal))] mb-6" />
              <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
                To democratize enterprise-grade cybersecurity by providing innovative, AI-powered security solutions that are accessible, effective, and affordable for organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              className="bg-[hsl(var(--tecastra-gray))] rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Globe className="h-12 w-12 text-[hsl(var(--tecastra-gold))] mb-6" />
              <h3 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-[hsl(var(--tecastra-darkgray))]">
                A world where every organization, regardless of size or resources, has access to world-class cybersecurity protection that adapts and evolves with emerging threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our customers, work with partners, and build our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--tecastra-teal))] rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                  {value.title}
                </h3>
                <p className="text-[hsl(var(--tecastra-darkgray))]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Company Timeline */}
      <section className="py-20 bg-[hsl(var(--tecastra-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              From startup to industry leader, here are the key milestones in TecAstra's growth and evolution.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[hsl(var(--tecastra-teal))]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-[hsl(var(--tecastra-teal))] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-[hsl(var(--tecastra-darkgray))]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 bg-[hsl(var(--tecastra-gold))] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[hsl(var(--tecastra-darkblue))] mb-6">
              TecAstra by the Numbers
            </h2>
            <p className="text-lg text-[hsl(var(--tecastra-darkgray))] max-w-3xl mx-auto">
              Our growth and impact in the cybersecurity industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-[hsl(var(--tecastra-gray))] rounded-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[hsl(var(--tecastra-teal))] mb-4">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-[hsl(var(--tecastra-darkblue))]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--tecastra-darkblue))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're looking to secure your organization or join our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-[hsl(var(--tecastra-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))] hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Contact Us
              </Link>
              <Link href="/lab" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Try Our Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;