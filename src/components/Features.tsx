import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Video, 
  MessageSquare,
  Download,
  Trophy,
  Smartphone,
  Globe,
  Shield,
  Zap
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world experience.",
      color: "text-blue-500"
    },
    {
      icon: Video,
      title: "HD Video Content",
      description: "Crystal clear video lectures with downloadable resources and materials.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with fellow learners, join study groups, and collaborate on projects.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Flexible scheduling that fits your lifestyle with lifetime access to courses.",
      color: "text-orange-500"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates upon completion to boost your career prospects.",
      color: "text-pink-500"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Get help when you need it with our responsive support team and Q&A forums.",
      color: "text-indigo-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Access your courses anywhere with our mobile-optimized platform.",
      color: "text-cyan-500"
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Download content for offline viewing and never miss a learning opportunity.",
      color: "text-red-500"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Learn from anywhere in the world with multi-language support.",
      color: "text-emerald-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and progress are protected with enterprise-grade security.",
      color: "text-amber-500"
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with quizzes, assignments, and hands-on projects.",
      color: "text-violet-500"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Track your progress and earn badges as you complete milestones.",
      color: "text-rose-500"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our
            <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Learning Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey with 
            cutting-edge technology and proven teaching methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Learning?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students already advancing their careers with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero px-8 py-3 rounded-lg text-white font-semibold">
                  Browse Courses
                </button>
                <button className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};