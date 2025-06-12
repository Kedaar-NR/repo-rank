
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Star, GitFork, ExternalLink, Calendar } from "lucide-react";

type TimeRange = 'daily' | 'weekly' | '2weeks' | 'monthly' | '6months' | 'yearly' | 'alltime';

interface Repository {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  owner: string;
}

const Trends = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('weekly');

  const timeRanges = [
    { key: 'daily' as TimeRange, label: 'Daily' },
    { key: 'weekly' as TimeRange, label: 'Weekly' },
    { key: '2weeks' as TimeRange, label: 'Last 2 Weeks' },
    { key: 'monthly' as TimeRange, label: 'Monthly' },
    { key: '6months' as TimeRange, label: 'Last 6 Months' },
    { key: 'yearly' as TimeRange, label: 'Yearly' },
    { key: 'alltime' as TimeRange, label: 'All Time' },
  ];

  // Mock data - in real app this would come from your backend
  const mockRepos: Repository[] = [
    {
      id: '1',
      name: 'shadcn/ui',
      description: 'Beautifully designed components that you can copy and paste into your apps.',
      stars: 45123,
      forks: 3456,
      language: 'TypeScript',
      url: 'https://github.com/shadcn/ui',
      owner: 'shadcn'
    },
    {
      id: '2',
      name: 'vercel/next.js',
      description: 'The React Framework for the Web',
      stars: 112589,
      forks: 24567,
      language: 'JavaScript',
      url: 'https://github.com/vercel/next.js',
      owner: 'vercel'
    },
    {
      id: '3',
      name: 'microsoft/vscode',
      description: 'Visual Studio Code',
      stars: 152341,
      forks: 27890,
      language: 'TypeScript',
      url: 'https://github.com/microsoft/vscode',
      owner: 'microsoft'
    },
    // Add more mock repos to reach 30+
    ...Array.from({ length: 27 }, (_, i) => ({
      id: `${i + 4}`,
      name: `trending-repo-${i + 1}`,
      description: `A trending repository with amazing features for modern development. This is repository number ${i + 1}.`,
      stars: Math.floor(Math.random() * 50000) + 1000,
      forks: Math.floor(Math.random() * 5000) + 100,
      language: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust'][Math.floor(Math.random() * 5)],
      url: `https://github.com/user/trending-repo-${i + 1}`,
      owner: `user${i + 1}`
    }))
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'Go': 'bg-cyan-500',
      'Rust': 'bg-orange-500',
      'Java': 'bg-red-500',
      'C++': 'bg-purple-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-gradient-blue to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            📈 Trending Repositories
          </h1>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto">
            Discover the hottest GitHub repositories based on recent activity, stars, and community engagement.
          </p>
        </div>
      </section>

      {/* Time Range Selector */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-5 h-5 text-brand-600 mr-2" />
            <span className="text-sm font-medium text-brand-700">Time Range:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {timeRanges.map((range) => (
              <button
                key={range.key}
                onClick={() => setSelectedTimeRange(range.key)}
                className={cn(
                  "pill-button",
                  selectedTimeRange === range.key && "pill-button-active"
                )}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Repository List */}
      <section className="py-12">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              Top Repositories - {timeRanges.find(r => r.key === selectedTimeRange)?.label}
            </h2>
            <p className="text-brand-600">
              Showing {mockRepos.length} trending repositories
            </p>
          </div>

          <div className="grid gap-6">
            {mockRepos.map((repo, index) => (
              <div key={repo.id} className="repo-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-brand-500 mr-2">#{index + 1}</span>
                      <h3 className="text-lg font-semibold text-brand-900">
                        {repo.owner}/{repo.name}
                      </h3>
                    </div>
                    
                    <p className="text-brand-600 mb-4 leading-relaxed">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-medium text-brand-700">{formatNumber(repo.stars)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 text-orange-500 mr-1" />
                        <span className="font-medium text-brand-700">{formatNumber(repo.forks)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className={cn("w-3 h-3 rounded-full mr-2", getLanguageColor(repo.language))}></div>
                        <span className="text-brand-600">{repo.language}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 text-brand-600 hover:text-brand-800 hover:bg-gray-50 rounded-lg transition-colors"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trends;
