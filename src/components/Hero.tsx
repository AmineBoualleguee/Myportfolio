import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Linkedin, Github, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🎯 Recherche un stage PFE
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent gradient-primary bg-gradient-to-r from-primary to-accent">
            Amine Bouallegue
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            Ingénieur Informatique
          </p>
          
          {/* Specialization */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Étudiant en 3ᵉ année d'ingénierie informatique, passionné par le développement logiciel, 
            la cybersécurité, le cloud et l'intelligence artificielle
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sousse – Tunisie</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+216 58 643 373</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>amin.bouallegue2002@gmail.com</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
  <Button 
  size="lg" 
  className="px-8 py-3 text-lg shadow-button"
  onClick={() => {
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement('a');
    link.href = '/AmineBouallegueCV.pdf'; // Chemin vers votre CV
    link.download = 'AmineBouallegueCV.pdf'; // Nom du fichier téléchargé
    link.click();
  }}
>
  <Download className="w-5 h-5 mr-2" />
  Télécharger CV
</Button>
  <Button 
    variant="outline" 
    size="lg" 
    className="px-8 py-3 text-lg"
    onClick={() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Voir mes projets
  </Button>
</div>
          
{/* Social Links */}
<div className="text-center">
  <h3 className="text-xl font-semibold mb-6">Suivez-moi</h3>
  <div className="flex justify-center gap-4">
    <a
      href="https://www.linkedin.com/in/amine-bouallegue-753169181/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="lg"
        className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth"
      >
        <Linkedin className="w-5 h-5 mr-2 text-primary" />
        LinkedIn
      </Button>
    </a>

    <a
      href="https://github.com/AmineBoualleguee"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-10" // Add margin-left here
    >
      <Button
        variant="outline"
        size="lg"
        className="px-6 py-3 hover:bg-primary/10 hover:border-primary transition-smooth"
      >
        <Github className="w-5 h-5 mr-2 text-primary" />
        GitHub
      </Button>
    </a>
  </div>
</div>


        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;