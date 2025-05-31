
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MeerLICHT Southern All-Sky Survey",
    description: "MSc thesis project utilizing advanced data science techniques and machine learning algorithms to analyze data from GAIA and SALT telescopes for cosmic discovery.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop",
    technologies: ["Python", "SQL", "Machine Learning", "GAIA", "SALT"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Astrophysical Data Fusion and Anomaly Detection",
    description: "Merged GAIA DR3 and MeerLICHT data using spherical cross-match, constructed color-magnitude diagrams, and applied DBSCAN clustering for anomaly detection.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=300&fit=crop",
    technologies: ["Python", "DBSCAN", "Data Fusion", "Clustering"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Wi-Fi Hotspot Network Optimization",
    description: "Simulated 1,000 Wi-Fi hotspots over a 5×5 km grid using spectral clustering and greedy graph coloring for channel assignment optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
    technologies: ["Python", "Spectral Clustering", "Graph Theory", "Kriging"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Flash Point Prediction Model",
    description: "Predicted lab flash points using multivariate linear regression with R² = 0.93, validated through residual analysis and Q-Q plots.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    technologies: ["Python", "Linear Regression", "Statistical Analysis"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Research Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-scale">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
