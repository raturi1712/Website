
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Recycle, Target, Heart, Globe, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Environmental Stewardship",
      description: "We're committed to reducing environmental impact through innovative recycling solutions and sustainable practices."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger communities through education, engagement, and shared responsibility for our planet's future."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Delivering exceptional service quality while maintaining the highest standards of professionalism and reliability."
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Creating positive social change by connecting recycling efforts with charitable causes and community development."
    }
  ];

  const team = [
    {
      name: "Dinesh Pokhriyal",
      role: "Founder & CEO",
      description: "10+ years in environmental consulting with a passion for sustainable business practices."
    },
    {
      name: "Rahul Gupta",
      role: "Head of Operations",
      description: "Expert in waste management logistics with experience in scaling eco-friendly operations."
    },
    {
      name: "Anjali Patel",
      role: "Community Outreach Director",
      description: "Specialist in environmental education and community engagement programs."
    },
    {
      name: "Shubham Raturi",
      role: "IT Team Lead",
      description: "Developing innovative solutions to make recycling more accessible and efficient."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      {/* <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Recycle className="h-8 w-8 text-green-600" />
                <h1 className="text-2xl font-bold text-gray-900">About GreenoBin</h1>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Transforming Waste into Opportunity
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Founded in 2018, GreenoBin has been at the forefront of India's recycling revolution, 
            making sustainable waste management accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To make recycling accessible, rewarding, and impactful for every household and business 
                  in India. We believe that small actions, when multiplied by millions of people, 
                  can transform the world.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A world where waste is viewed as a resource, where every community has access to 
                  sustainable waste management solutions, and where environmental responsibility 
                  is embedded in daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Story</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              GreenoBin started as a simple idea: what if we could make recycling as easy as ordering food online? 
              Our founders, frustrated by the lack of convenient recycling options in urban India, decided to create 
              a solution that would benefit both people and the planet.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              What began as a small doorstep collection service in Mumbai has grown into a comprehensive platform 
              serving thousands of households and hundreds of businesses across multiple cities. We've processed 
              over 50,000 tons of recyclable materials and distributed more than ₹2.5 million in rewards to our users.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we're proud to be India's leading tech-enabled recycling platform, but our mission remains 
              the same: making the world a cleaner, greener place, one pickup at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <IconComponent className="h-10 w-10 text-green-600 mb-3" />
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg">Tons Recycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Business Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            Be part of the change you want to see in the world. Start your recycling journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
