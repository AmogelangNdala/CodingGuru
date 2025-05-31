
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ndala Amogelang
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            MSc Astronomy Student & Data Scientist
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Specializing in Astrophysics and Space Science
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            Leveraging advanced data science techniques and cutting-edge machine learning algorithms to unveil cosmic mysteries through the MeerLICHT Southern All-Sky Survey.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <Button variant="default" size="lg">
            View My Research
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.linkedin.com/in/amogelang-ndala-0628b5208/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:ndala31amogelang@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
