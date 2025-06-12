
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 border-t border-gray-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">RR</span>
            </div>
            <span className="font-semibold text-brand-900">RepoRank</span>
          </div>
          
          <p className="text-center text-brand-600 text-sm">
            Built with Google Vertex AI for the AI in Action Hackathon
          </p>
          
          <p className="text-center text-brand-600 text-sm">
            Copyright 2025 RepoRank
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
