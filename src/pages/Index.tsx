
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Recycle, Building, Home, Shield, Trash2, Leaf, Award, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      {/* <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">GreenoBin</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </nav>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Transform Your Waste into Worth
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join the green revolution with our comprehensive recycling and waste management solutions. 
            Earn rewards while making a positive impact on the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Start Recycling Today
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Office Recycling Program</CardTitle>
                <CardDescription>
                  Complete office recycling solutions with waste audits and training sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Waste audits and analysis</li>
                  <li>• Employee training programs</li>
                  <li>• Custom recycling strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
              <CardHeader>
                <Home className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Home Recycling</CardTitle>
                <CardDescription>
                  Doorstep collection service with rewards for your recyclable materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Convenient doorstep pickup</li>
                  <li>• Earn credit points</li>
                  <li>• Convert to cash or donate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-red-500">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Security Shredding</CardTitle>
                <CardDescription>
                  Secure destruction of confidential documents with professional handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• On-site and off-site options</li>
                  <li>• Certified destruction</li>
                  <li>• Security training included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
              <CardHeader>
                <Trash2 className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Recycling Bins</CardTitle>
                <CardDescription>
                  Specialized bins for efficient sorting and recycling of different materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Paper recycling bins</li>
                  <li>• Vending cup containers</li>
                  <li>• Custom sorting solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
              <CardHeader>
                <Recycle className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">PET Bottle Recycling</CardTitle>
                <CardDescription>
                  Community-focused PET bottle recycling with public awareness programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Community collection drives</li>
                  <li>• Public recycling initiatives</li>
                  <li>• Environmental education</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-indigo-500">
              <CardHeader>
                <Leaf className="h-12 w-12 text-indigo-500 mb-4" />
                <CardTitle className="text-xl text-gray-900">Waste Audits</CardTitle>
                <CardDescription>
                  Comprehensive waste analysis to optimize your recycling efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Detailed waste composition</li>
                  <li>• Reduction recommendations</li>
                  <li>• Cost-saving strategies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg">Tons Recycled</div>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <Building className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Corporate Partners</div>
            </div>
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">₹2.5M+</div>
              <div className="text-lg">Rewards Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of eco-conscious individuals and businesses in creating a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
              Schedule Pickup
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">GreenoBin</h3>
              </div>
              <p className="text-gray-400">
                Making recycling easy and rewarding for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Office Recycling</li>
                <li>Home Collection</li>
                <li>Document Shredding</li>
                <li>Waste Audits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Impact</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@greenobin.com</li>
                <li>+91 12345 67890</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GreenoBin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
