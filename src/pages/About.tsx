import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-primary-light/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About EduPlatform</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize education and empower millions of learners worldwide 
              with high-quality, accessible, and engaging online courses.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At EduPlatform, we believe that education should be accessible to everyone, everywhere. 
                  Our platform connects passionate instructors with eager learners, creating a global 
                  community of knowledge sharing and skill development.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're committed to providing the tools, resources, and support needed to help 
                  individuals achieve their learning goals and advance their careers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">10M+</h3>
                    <p className="text-muted-foreground">Students Worldwide</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">50K+</h3>
                    <p className="text-muted-foreground">Courses Available</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">15K+</h3>
                    <p className="text-muted-foreground">Expert Instructors</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">190+</h3>
                    <p className="text-muted-foreground">Countries Reached</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Education should be available to everyone, regardless of location, 
                    background, or financial situation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Quality</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in course content, instruction, 
                    and learning experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our platform with cutting-edge technology 
                    and learning methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;