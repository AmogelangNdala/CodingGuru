
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="id.jpg&fit=crop&crop=face"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm currently pursuing my MSc in Astronomy at the University of Cape Town, 
                specializing in Astrophysics and Space Science. My thesis focuses on "Unveiling 
                Cosmic Mysteries: The MeerLICHT Southern All-Sky Survey."
              </p>
              
              <p className="text-lg text-muted-foreground">
                With a strong foundation in data science and machine learning, I leverage 
                advanced techniques in Python and SQL, utilizing data from leading telescopes 
                including GAIA and SALT to explore the cosmos.
              </p>
              
              <p className="text-lg text-muted-foreground">
                My journey includes hands-on experience as a Chemistry Laboratory Instructor 
                and completion of specialized courses in data science and full-stack development.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Research Projects</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">MSc</div>
                    <div className="text-sm text-muted-foreground">Current Degree</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
