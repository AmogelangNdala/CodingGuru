
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming & Data Science",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Machine Learning", level: 88 },
      { name: "Data Visualization", level: 85 }
    ]
  },
  {
    title: "Research & Analysis",
    skills: [
      { name: "Sklearn", level: 90 },
      { name: "Pandas & Numpy", level: 88 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Academic Research", level: 95 }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Node.js", level: 60 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "LaTeX", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Power BI", level: 75 }
    ]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-center text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IBM Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Full Stack Software Developer Professional Certificate</li>
                  <li>• Data Science with Python Professional Certificate</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Additional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Power BI Essential Training (LinkedIn Learning)</li>
                  <li>• AWS for Developers (LinkedIn Learning)</li>
                  <li>• Machine Learning with Python: k-Means Clustering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
