import { Recycle } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
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
      </footer>  )
}

export default Footer