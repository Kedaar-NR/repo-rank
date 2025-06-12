import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Search, Zap, Code, GitBranch, Star } from "lucide-react";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gradient-blue to-gradient-purple/20">
        <div className="section-container text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-brand-700 mb-8 shadow-soft">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Built with Google Vertex AI for the AI in Action Hackathon
          </div>
          
          <h1 className="hero-title mb-6">
            🧠 RepoRank
          </h1>
          
          <p className="hero-subtitle mx-auto mb-8">
            GitHub trends decoded. MVPs accelerated.
          </p>
          
          <div className="flex justify-center">
            <Link to="/trends" className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-medium transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="mr-2 w-5 h-5" />
              Explore Trends
            </Link>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              🚀 What It Does
            </h2>
            <p className="text-lg text-brand-600 max-w-4xl mx-auto">
              RepoRank is your AI-native launchpad from idea to MVP. It analyzes GitHub repos at scale to surface rising tools, 
              explain why they're gaining traction, and distill key components—so developers can build faster with less guesswork.
            </p>
            <p className="text-lg font-semibold text-brand-800 mt-4">
              Built for builders, optimized for velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gradient-card text-center p-6">
              <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="font-semibold text-brand-900 mb-2">Trend Discovery</h3>
              <p className="text-sm text-brand-600">Track repo activity with semantic search and time-based rankings</p>
            </div>

            <div className="gradient-card text-center p-6">
              <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="font-semibold text-brand-900 mb-2">AI Summarization</h3>
              <p className="text-sm text-brand-600">Vertex AI breaks down tech stacks and design decisions</p>
            </div>

            <div className="gradient-card text-center p-6">
              <div className="w-12 h-12 bg-gradient-coral rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="font-semibold text-brand-900 mb-2">MVP Helper</h3>
              <p className="text-sm text-brand-600">Generate starter templates and reusable components</p>
            </div>

            <div className="gradient-card text-center p-6">
              <div className="w-12 h-12 bg-gradient-mint rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="font-semibold text-brand-900 mb-2">Smart Search</h3>
              <p className="text-sm text-brand-600">Natural language queries like "LLM agents trending in Rust"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      
    </div>;
};
export default Home;