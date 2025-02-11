import { motion } from "framer-motion";
import {
  FiCheck,
  FiClock,
  FiFilter,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import React from "react";
import useDynamicPricing from "../hooks/useDynamicPricing";

export default function LandingPage() {
  const { setupPrice, monthlyPrice, comparisonText, equivalentMonthly } = useDynamicPricing();

  return (
    <div className="font-urbanist bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-primary-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            NyxAI: Your 24/7 Real Estate Automation Partner
            <span className="block text-primary-600 mt-2">
              Generate Qualified Leads. Close Deals Faster.
            </span>
          </motion.h1>

          <div className="aspect-video bg-dark-two rounded-xl overflow-hidden mt-8">
            <video
              src="https://res.cloudinary.com/dbsbevgcj/video/upload/v1739299632/2025-02-11_00-04-10_hreron.mkv"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Real Estate Agents Choose NyxAI
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-primary-600 text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
            Real Estate Agent Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                Intelligent System Setup
              </h3>
              <p className="text-4xl font-bold text-gray-800">{setupPrice}</p>
              <p className="mt-2 text-gray-600">Property lead engine configuration</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                Monthly AI Management
              </h3>
              <p className="text-4xl font-bold text-gray-800">{monthlyPrice}</p>
              <p className="mt-2 text-gray-600">24/7 lead qualification & nurturing</p>
            </div>
          </div>

          <div className="bg-dark-two text-white p-8 rounded-xl">
            <p className="text-lg mb-4">
              <span className="text-secondary-1 font-bold">Save 60-80%:</span>{" "}
              Compared to hiring a full-time agent ({comparisonText})
            </p>
            <p className="text-xl">
              Get AI-powered lead generation for{" "}
              <span className="font-bold">{equivalentMonthly}</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-dark-two text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <a
            href="https://wa.me/075991906"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition-colors"
          >
            <span className="mr-2 text-2xl animate-bounce">
              <SiWhatsapp />
            </span>
            Chat with Our Property AI Experts
          </a>
          <p className="text-gray-300 mt-4 text-lg">+256759919067</p>
        </motion.div>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} NyxAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <FiZap />,
    title: "Instant Buyer Qualification",
    description:
      "Automatically capture buyer budgets, preferred locations, property types among other preferences",
  },
  {
    icon: <FiSmartphone />,
    title: "Property Lead Alerts",
    description:
      "Receive instant WhatsApp notifications for hot leads from portals like Zillow & Realtor.com",
  },
  {
    icon: <FiClock />,
    title: "24/7 Lead Response",
    description:
      "Automatically engage property inquiries even while you sleep",
  },
  {
    icon: <FiFilter />,
    title: "Smart Buyer Filtering",
    description:
      "Prioritize serious buyers & investors while filtering out casual browsers",
  },
  {
    icon: <FiCheck />,
    title: "MLS Integration Ready",
    description:
      "Seamless connection with major real estate platforms and CRM systems",
  },
];