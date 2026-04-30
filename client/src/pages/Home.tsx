import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };

  const skills = [
    {
      title: "Manutenção & Hardware",
      description: "Reparação de hardware e otimização de sistemas operativos.",
      tags: ["Hardware", "Expert", "Troubleshooting", "Expert"],
      icon: "🔧",
    },
    {
      title: "Redes & Cisco",
      description: "Configuração de infraestruturas de rede e segurança Cisco.",
      tags: ["Cisco IT Essentials", "Networking", "Expert"],
      icon: "🌐",
    },
    {
      title: "Web Development",
      description: "Criação de websites modernos, responsivos e dinâmicos.",
      tags: ["PHP", "JavaScript", "HTML", "CSS"],
      icon: "💻",
    },
    {
      title: "Design & Edição",
      description: "Edição de imagem profissional e criação de assets visuais.",
      tags: ["Photoshop", "Editing", "Expert"],
      icon: "🎨",
    },
  ];

  const projects = [
    {
      title: "Website E-commerce",
      description: "Plataforma de comércio com checkout integrado e painel administrativo.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Sistema de Gestão",
      description: "Aplicação para gestão de tarefas e utilizadores com interface intuitiva.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Campanha Publicitária",
      description: "Edição avançada de imagens para marketing e branding.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      link: "#",
    },
  ];

  const specialties = [
    {
      title: "Manutenção",
      description: "Hardware & OS — Windows / Linux",
      icon: "🛠️",
    },
    {
      title: "Web Dev",
      description: "PHP • JavaScript • HTML • CSS",
      icon: "🚀",
    },
    {
      title: "Redes",
      description: "Configuração Wi-Fi / Routers / IP",
      icon: "📡",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            EG
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["Início", "Sobre", "Habilidades", "Portfólio", "Contacto"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contacto"
            className="btn-premium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032648219/imqxHnyUy6XseznsBNK5kp/hero-tech-abstract-LXT3oAtTEU2QbrC6S5k4n7.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                Olá, sou <span className="text-primary">Enio Gama</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-text-secondary"
                variants={itemVariants}
              >
                Técnico de Informática • Desenvolvedor Web
              </motion.p>
              <motion.p
                className="text-lg text-text-secondary leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Especializado em manutenção de hardware, redes e desenvolvimento web. Transformo desafios técnicos em soluções elegantes e eficientes.
              </motion.p>
              <motion.div
                className="flex gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#portfolio"
                  className="btn-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Projetos
                </motion.a>
                <motion.a
                  href="#contacto"
                  className="btn-outline-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactar
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-64 h-64 rounded-3xl glass p-8 flex items-center justify-center text-6xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity } as any}
              >
                💻
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover:border-primary transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(210, 255, 0, 0.2)" }}
              >
                <div className="text-5xl mb-4">{specialty.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{specialty.title}</h3>
                <p className="text-text-secondary">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Sobre Mim</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Sou apaixonado por tecnologia e por transformar desafios em soluções práticas. Procuro trabalhos freelance e projetos que valorizem qualidade e eficiência.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed italic">
                Objetivo: Técnico de Informática — suporte, manutenção e desenvolvimento web de alta qualidade.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span>Experiência em suporte técnico e manutenção de sistemas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span>Desenvolvimento web com foco em UX/UI</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span>Configuração e otimização de infraestruturas de rede</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold">Principais Competências</h3>
              <div className="space-y-4">
                {[
                  { skill: "HARDWARE", percentage: 95 },
                  { skill: "PHOTOSHOP", percentage: 90 },
                  { skill: "FRONTEND", percentage: 85 },
                  { skill: "WINDOWS", percentage: 85 },
                  { skill: "LINUX", percentage: 80 },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{item.skill}</span>
                      <span className="text-primary font-bold">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1 } as any}
                    viewport={{ once: true }}
                  />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="habilidades"
        className="py-20 bg-secondary"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032648219/imqxHnyUy6XseznsBNK5kp/skills-tech-pattern-bcBU5Ce3hCunyaw5QMAyw3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Habilidades & Tecnologias
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover:border-primary transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(210, 255, 0, 0.2)" }}
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-text-secondary mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projetos
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 bg-secondary"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032648219/imqxHnyUy6XseznsBNK5kp/contact-section-bg-GHnykQD5y43HWfTB4TSF3Z.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vamos Falar?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contacto</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:enniogama11@gmail.com"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="text-primary" size={24} />
                    enniogama11@gmail.com
                  </motion.a>
                  <motion.a
                    href="tel:+244936459748"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="text-primary" size={24} />
                    +244 936 459 748
                  </motion.a>
                  <motion.div
                    className="flex items-center gap-3 text-lg"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="text-primary" size={24} />
                    Luanda, Angola
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Redes Sociais</h3>
                <motion.div
                  className="flex gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Github, link: "https://github.com/enniogama11", label: "GitHub" },
                    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg hover:bg-primary/20 hover:border-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <social.icon className="text-primary" size={24} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              className="space-y-4"
              variants={itemVariants}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formulário de contacto - integração em desenvolvimento");
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-premium w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensagem
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center text-text-secondary">
          <p>© 2025 Enio Gama — Técnico de Informática & Desenvolvedor Web</p>
        </div>
      </footer>
    </div>
  );
}
