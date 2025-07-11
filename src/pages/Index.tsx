
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  Database,
  BarChart3,
  Brain,
  Code,
  User,
  Briefcase,
  MessageSquare,
  Star,
  Award,
  Target,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "Python", level: 85, icon: Code },
    { name: "SQL", level: 80, icon: Database },
    { name: "Data Visualization", level: 75, icon: BarChart3 },
    { name: "Machine Learning", level: 70, icon: Brain }
  ];

  const projects = [
    {
      title: "Music Store Analysis",
      tools: ["SQL", "Data Analysis"],
      description: "Used SQL joins across multiple tables to uncover customer behavior, top cities, and spending patterns.",
      icon: BarChart3
    },
    {
      title: "Credit Card Analysis",
      tools: ["SQL", "Business Intelligence"],
      description: "Extracted growth trends and card usage patterns for strategic insights.",
      icon: TrendingUp
    },
    {
      title: "Diwali Sales Analysis",
      tools: ["Python", "Pandas", "Matplotlib"],
      description: "Cleaned and visualized sales data to identify festival buying patterns.",
      icon: Target
    },
    {
      title: "Student Score Analysis",
      tools: ["Python", "Statistical Analysis"],
      description: "Analyzed score trends and correlations to predict student performance.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Aanchal Rai</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            A passionate data science enthusiast focused on transforming data into meaningful insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all">
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    I'm currently pursuing B.Tech in Mechanical Engineering at NIT Surat (2022–2026). 
                    With a strong interest in data science, I enjoy solving real-world problems using data.
                  </p>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    I completed my 10th and 12th at St. Mary's School with 91.22% and 85.56% respectively, 
                    and I'm passionate about leveraging Python, SQL, ML models, and data dashboards to 
                    create meaningful insights.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Python</Badge>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">SQL</Badge>
                    <Badge className="bg-green-600/20 text-green-300 border-green-500/30">Machine Learning</Badge>
                    <Badge className="bg-orange-600/20 text-orange-300 border-orange-500/30">Data Visualization</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-purple-300">B.Tech Mechanical Engineering</h4>
                      <p className="text-slate-400">NIT Surat • 2022–2026</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-purple-300">Higher Secondary (12th)</h4>
                      <p className="text-slate-400">St. Mary's School • 85.56%</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-purple-300">Secondary (10th)</h4>
                      <p className="text-slate-400">St. Mary's School • 91.22%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <project.icon className="w-8 h-8 text-purple-400" />
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">
                    {project.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <Database className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white mb-4">Data Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Cleaning, transforming, and interpreting data for actionable insights. 
                  I help businesses make data-driven decisions through comprehensive analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white mb-4">Data Visualization</h3>
                <p className="text-slate-300 leading-relaxed">
                  Creating clear, interactive dashboards and visual reports that tell compelling 
                  stories with your data and drive strategic decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-purple-400" />
                      <span className="text-slate-300">aanchalrai2501@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-purple-400" />
                      <span className="text-slate-300">9695666546</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-6 h-6 text-purple-400" />
                      <span className="text-slate-300">aanchal2501</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Github className="w-6 h-6 text-purple-400" />
                      <span className="text-slate-300">aanchalrai2501</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/50 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Aanchal Rai. All rights reserved. • Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
