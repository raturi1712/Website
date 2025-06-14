
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Building, Home, Shield, Trash2, Recycle, Leaf, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Office Recycling Program (GORP)",
      icon: Building,
      color: "blue",
      description: "Comprehensive office recycling solutions for organizations of all sizes",
      features: [
        "Complete waste audits and analysis",
        "Employee training and awareness programs", 
        "Custom waste management strategies",
        "Regular monitoring and reporting",
        "Compliance with environmental regulations"
      ],
      pricing: "Starting from ₹5,000/month",
      popular: true
    },
    {
      id: 2,
      title: "Home Recycling Collection",
      icon: Home,
      color: "purple",
      description: "Convenient doorstep collection service with reward system",
      features: [
        "Scheduled doorstep pickup",
        "Earn credit points for materials",
        "Convert credits to cash or donate to NGOs",
        "Mobile app for easy booking",
        "Educational resources for families"
      ],
      pricing: "Free pickup, earn up to ₹500/month",
      popular: false
    },
    {
      id: 3,
      title: "Security Document Shredding",
      icon: Shield,
      color: "red",
      description: "Secure destruction of confidential documents and data",
      features: [
        "On-site and off-site shredding options",
        "Certified destruction certificates",
        "Chain of custody documentation",
        "GDPR and compliance standards",
        "Employee training on data security"
      ],
      pricing: "₹2 per kg",
      popular: false
    },
    {
      id: 4,
      title: "Specialized Recycling Bins",
      icon: Trash2,
      color: "yellow",
      description: "Premium recycling bins for efficient waste sorting",
      features: [
        "Multiple compartment designs",
        "Durable and weather-resistant",
        "Custom branding options",
        "Smart bin sensors available",
        "Maintenance and cleaning services"
      ],
      pricing: "₹2,500 - ₹15,000 per unit",
      popular: false
    },
    {
      id: 5,
      title: "PET Bottle Recycling",
      icon: Recycle,
      color: "green",
      description: "Community-focused plastic bottle recycling initiatives",
      features: [
        "Community collection drives",
        "School and college programs",
        "Public awareness campaigns",
        "Bulk collection for businesses",
        "Environmental impact reporting"
      ],
      pricing: "₹15 per kg",
      popular: false
    },
    {
      id: 6,
      title: "Waste Management Consulting",
      icon: Leaf,
      color: "indigo",
      description: "Expert consultation for sustainable waste management",
      features: [
        "Comprehensive waste audits",
        "Sustainability strategy development",
        "Cost optimization analysis",
        "Regulatory compliance guidance",
        "Long-term partnership programs"
      ],
      pricing: "₹10,000 per consultation",
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-500 border-t-blue-500",
      purple: "text-purple-500 border-t-purple-500", 
      red: "text-red-500 border-t-red-500",
      yellow: "text-yellow-500 border-t-yellow-500",
      green: "text-green-500 border-t-green-500",
      indigo: "text-indigo-500 border-t-indigo-500"
    };
    return colors[color as keyof typeof colors] || "text-gray-500 border-t-gray-500";
  };

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
                <h1 className="text-2xl font-bold text-gray-900">GreenoBin Services</h1>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Complete Recycling Solutions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Choose from our comprehensive range of eco-friendly services designed to make recycling easy and rewarding for individuals and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              const colorClasses = getColorClasses(service.color);
              
              return (
                <Card key={service.id} className={`hover:shadow-xl transition-shadow duration-300 border-t-4 ${colorClasses} relative`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <IconComponent className={`h-12 w-12 ${colorClasses.split(' ')[0]} mb-4`} />
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t">
                        <p className="text-lg font-semibold text-gray-900 mb-4">{service.pricing}</p>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8">
            We offer tailored recycling and waste management solutions to meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
