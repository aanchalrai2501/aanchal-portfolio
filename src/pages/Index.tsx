
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
  TrendingUp,
  Sparkles,
  ChevronDown,
  GraduationCap,
  Calendar,
  MapPin,
  Zap
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
    { name: "Python", level: 85, icon: Code, color: "from-yellow-400 to-orange-500" },
    { name: "SQL", level: 80, icon: Database, color: "from-blue-400 to-blue-600" },
    { name: "Data Visualization", level: 75, icon: BarChart3, color: "from-green-400 to-emerald-500" },
    { name: "Machine Learning", level: 70, icon: Brain, color: "from-purple-400 to-pink-500" }
  ];

  const projects = [
    {
      title: "Music Store Analysis",
      tools: ["SQL", "Data Analysis"],
      description: "Used SQL joins across multiple tables to uncover customer behavior, top cities, and spending patterns.",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Credit Card Analysis",
      tools: ["SQL", "Business Intelligence"],
      description: "Extracted growth trends and card usage patterns for strategic insights.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Diwali Sales Analysis",
      tools: ["Python", "Pandas", "Matplotlib"],
      description: "Cleaned and visualized sales data to identify festival buying patterns.",
      icon: Target,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Student Score Analysis",
      tools: ["Python", "Statistical Analysis"],
      description: "Analyzed score trends and correlations to predict student performance.",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "Data Analysis",
      description: "Cleaning, transforming, and interpreting data for actionable insights. I help businesses make data-driven decisions through comprehensive analysis.",
      icon: Database,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Data Visualization",
      description: "Creating clear, interactive dashboards and visual reports that tell compelling stories with your data and drive strategic decisions.",
      icon: BarChart3,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Machine Learning",
      description: "Building predictive models and algorithms to extract insights from complex datasets and automate decision-making processes.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Business Intelligence",
      description: "Transforming raw data into strategic insights through advanced analytics and comprehensive reporting solutions.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-teal-600/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Enhanced Profile Picture */}
          <div className="mb-12 relative">
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1 animate-spin-slow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 blur-md opacity-75"></div>
              </div>
              {/* Inner container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                  <User className="w-20 h-20 text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text" />
                </div>
              </div>
              {/* Floating sparkles */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-pink-400 animate-pulse delay-700" />
            </div>
          </div>
          
          {/* Enhanced Typography */}
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text animate-fade-in leading-tight">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                    Aanchal Rai
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-lg -z-10"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
              A passionate{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">
                data science enthusiast
              </span>{" "}
              focused on transforming data into{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-semibold">
                meaningful insights
              </span>
            </p>
            
            {/* Enhanced Status Badge */}
            <div className="flex justify-center animate-fade-in delay-500">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 font-medium">Available for Data Science Projects</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Explore My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-2 border-purple-400/50 text-purple-300 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-purple-600/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Code className="w-5 h-5" />
                  View Projects
                </span>
              </Button>
            </div>
            
            {/* Enhanced Tech Stack Preview */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in delay-1000">
              {["Python", "SQL", "Machine Learning", "Data Viz"].map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-6 py-2 text-slate-300 text-sm font-medium hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02] shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Personal Journey</h3>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    I'm currently pursuing B.Tech in Mechanical Engineering at NIT Surat (2022–2026). 
                    With a strong interest in data science, I enjoy solving real-world problems using data.
                  </p>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I'm passionate about leveraging Python, SQL, ML models, and data dashboards to 
                    create meaningful insights that drive decision-making.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                {["Python", "SQL", "Machine Learning", "Data Visualization", "Pandas", "Matplotlib"].map((skill) => (
                  <Badge 
                    key={skill}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02] shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-medium text-purple-300">B.Tech Mechanical Engineering</h4>
                        <div className="flex items-center gap-2 text-slate-400 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>NIT Surat</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>2022–2026</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-300">Higher Secondary (12th)</h4>
                        <div className="flex items-center gap-2 text-slate-400 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>St. Mary's School</span>
                          <span className="ml-2 text-green-400 font-medium">85.56%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-medium text-green-300">Secondary (10th)</h4>
                        <div className="flex items-center gap-2 text-slate-400 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>St. Mary's School</span>
                          <span className="ml-2 text-green-400 font-medium">91.22%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-800/30 to-slate-900/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
              Continuously learning and growing in the data science ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <div className="w-full bg-slate-700/50 rounded-full h-3 mb-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <span className="text-slate-400 text-sm font-medium">
                    {skill.level}% Proficiency
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
              Real-world projects showcasing data analysis and visualization skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30 text-xs hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-300 mb-6 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-800/30 to-slate-900/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
              Comprehensive data science solutions to drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-base">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next data science project? Let's connect!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "aanchalrai2501@gmail.com", color: "text-blue-400" },
                      { icon: Phone, label: "Phone", value: "9695666546", color: "text-green-400" },
                      { icon: Linkedin, label: "LinkedIn", value: "aanchal2501", color: "text-blue-400" },
                      { icon: Github, label: "GitHub", value: "aanchalrai2501", color: "text-purple-400" }
                    ].map((contact, index) => (
                      <div key={contact.label} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors duration-300">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center`}>
                          <contact.icon className={`w-5 h-5 ${contact.color}`} />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">{contact.label}</p>
                          <p className="text-slate-300 font-medium">{contact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 min-h-[120px] focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
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

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 bg-gradient-to-b from-slate-900/80 to-slate-900 border-t border-slate-700/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">Aanchal Rai</span>
          </div>
          
          <p className="text-slate-400 mb-6">
            © 2024 Aanchal Rai. All rights reserved. 
          </p>
          
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <span className="text-red-400">❤️</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
