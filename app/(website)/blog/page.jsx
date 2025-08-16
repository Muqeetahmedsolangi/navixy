"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

// Static blog data for maximum performance
const BLOG_CATEGORIES = [
  "All",
  "Fleet Management",
  "GPS Tracking", 
  "Telematics",
  "IoT Solutions",
  "Industry News",
  "Product Updates",
  "Case Studies"
];

const BLOG_POSTS = [
  {
    id: "user-applications",
    title: "Make GeoTrack work for you: Introducing User Applications",
    slug: "introducing-user-applications",
    excerpt: "GeoTrack's new User Applications feature allows you to embed custom web apps directly within the platform. Whether it's fleet analytics, compliance tools, or industry-specific modules, this functionality empowers integrators to create tailored telematics solutions for their clients.",
    content: "Detailed content about User Applications...",
    category: "Product Updates",
    author: "Svyatoslav I.",
    authorRole: "Product Manager, GeoTrack IoT Logic",
    publishDate: "2025-01-15",
    readTime: "5 min read",
    tags: ["User Applications", "Integration", "Custom Solutions"],
    featured: true,
    image: "/assets/new-images/hero-image.svg"
  },
  {
    id: "ngp-protocol",
    title: "Introducing NGP: A new standard for telematics data exchange",
    slug: "ngp-protocol-telematics-standard",
    excerpt: "We're introducing the GeoTrack Generic Protocol (NGP) — our answer to the fragmentation challenge in the telematics industry. Explore how NGP transforms telematics, how it works, and the ways it can benefit your operations.",
    content: "Detailed content about NGP Protocol...",
    category: "Telematics",
    author: "Maria Rodriguez",
    authorRole: "Senior Software Engineer, GeoTrack",
    publishDate: "2025-01-12",
    readTime: "8 min read",
    tags: ["NGP", "Protocol", "Data Exchange"],
    featured: true,
    image: "/assets/new-images/hero-background.svg"
  },
  {
    id: "passenger-counter",
    title: "Enhancing public transportation with automatic passenger counting",
    slug: "automatic-passenger-counting-solution",
    excerpt: "GeoTrack's automatic passenger counter solutions, powered by advanced sensors like the ASPC102, enable transit operators to optimize routes, improve vehicle occupancy rates, and reduce operational costs.",
    content: "Detailed content about passenger counting...",
    category: "IoT Solutions",
    author: "David Chen",
    authorRole: "IoT Solutions Architect, GeoTrack",
    publishDate: "2025-01-10",
    readTime: "6 min read",
    tags: ["Passenger Counting", "Public Transport", "IoT"],
    featured: false,
    image: "/assets/new-images/LOGO.png"
  },
  {
    id: "fleet-safety-streamax",
    title: "Fleet video telematics: Revamping safety with Streamax",
    slug: "fleet-video-telematics-streamax",
    excerpt: "Big fleets deal with big problems, and road accidents are among the most critical. Traditional GPS shows where things went wrong, but understanding why often requires video evidence and AI-powered analysis.",
    content: "Detailed content about fleet safety...",
    category: "Fleet Management",
    author: "Alex Thompson",
    authorRole: "Fleet Safety Specialist, GeoTrack",
    publishDate: "2025-01-08",
    readTime: "7 min read",
    tags: ["Video Telematics", "Safety", "Streamax"],
    featured: false,
    image: "/assets/new-images/hero-image.svg"
  },
  {
    id: "iot-logic-health-check",
    title: "Device and vehicle health check functionality: The Logic node in IoT Logic",
    slug: "iot-logic-health-check-functionality",
    excerpt: "Learn how IoT Logic's health check functionality helps monitor device status, predict failures, and maintain optimal fleet performance through advanced analytics and real-time monitoring.",
    content: "Detailed content about IoT Logic health checks...",
    category: "IoT Solutions",
    author: "Sarah Johnson",
    authorRole: "IoT Product Manager, GeoTrack",
    publishDate: "2025-01-05",
    readTime: "6 min read",
    tags: ["IoT Logic", "Health Check", "Monitoring"],
    featured: false,
    image: "/assets/new-images/hero-background.svg"
  },
  {
    id: "gps-tracking-trends-2025",
    title: "GPS Tracking Trends 2025: What's Next for Fleet Management",
    slug: "gps-tracking-trends-2025",
    excerpt: "Explore the latest trends in GPS tracking technology, from AI-powered analytics to sustainable fleet management practices that are shaping the industry in 2025.",
    content: "Detailed content about GPS tracking trends...",
    category: "GPS Tracking",
    author: "Michael Brown",
    authorRole: "Technology Analyst, GeoTrack",
    publishDate: "2025-01-03",
    readTime: "9 min read",
    tags: ["GPS Tracking", "2025 Trends", "AI Analytics"],
    featured: false,
    image: "/assets/new-images/LOGO.png"
  },
  {
    id: "telematics-roi-guide",
    title: "Maximizing ROI with Telematics: A Complete Guide for Fleet Managers",
    slug: "telematics-roi-complete-guide",
    excerpt: "Discover proven strategies to maximize return on investment from your telematics implementation, including cost reduction techniques and performance optimization methods.",
    content: "Detailed content about telematics ROI...",
    category: "Fleet Management",
    author: "Lisa Wang",
    authorRole: "Business Analyst, GeoTrack",
    publishDate: "2025-01-01",
    readTime: "12 min read",
    tags: ["ROI", "Telematics", "Fleet Management"],
    featured: false,
    image: "/assets/new-images/hero-image.svg"
  },
  {
    id: "electric-fleet-transition",
    title: "Transitioning to Electric Fleets: Challenges and Opportunities",
    slug: "electric-fleet-transition-guide",
    excerpt: "Navigate the complexities of transitioning to electric vehicles with comprehensive insights on infrastructure, costs, and telematics solutions for EV fleet management.",
    content: "Detailed content about electric fleet transition...",
    category: "Industry News",
    author: "Robert Kim",
    authorRole: "Sustainability Expert, GeoTrack",
    publishDate: "2024-12-28",
    readTime: "10 min read",
    tags: ["Electric Vehicles", "Sustainability", "Fleet Transition"],
    featured: false,
    image: "/assets/new-images/hero-background.svg"
  },
  {
    id: "ai-predictive-maintenance",
    title: "AI-Powered Predictive Maintenance: Reducing Fleet Downtime",
    slug: "ai-predictive-maintenance-fleet",
    excerpt: "Learn how artificial intelligence and machine learning are revolutionizing vehicle maintenance, helping fleets predict failures before they happen and reduce costly downtime.",
    content: "Detailed content about AI predictive maintenance...",
    category: "Telematics",
    author: "Jennifer Davis",
    authorRole: "AI Research Lead, GeoTrack",
    publishDate: "2024-12-25",
    readTime: "8 min read",
    tags: ["AI", "Predictive Maintenance", "Machine Learning"],
    featured: false,
    image: "/assets/new-images/LOGO.png"
  },
  {
    id: "cold-chain-monitoring",
    title: "Cold Chain Monitoring: Ensuring Temperature-Sensitive Cargo Safety",
    slug: "cold-chain-monitoring-solution",
    excerpt: "Discover how advanced IoT sensors and real-time monitoring systems ensure the integrity of temperature-sensitive shipments throughout the supply chain.",
    content: "Detailed content about cold chain monitoring...",
    category: "Case Studies",
    author: "Carlos Martinez",
    authorRole: "Solutions Engineer, GeoTrack",
    publishDate: "2024-12-22",
    readTime: "7 min read",
    tags: ["Cold Chain", "Temperature Monitoring", "Supply Chain"],
    featured: false,
    image: "/assets/new-images/hero-image.svg"
  }
];

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Optimized filtering with useMemo for performance
  const filteredPosts = useMemo(() => {
    if (!searchQuery && selectedCategory === "All") {
      return BLOG_POSTS; // Return full array immediately
    }
    
    return BLOG_POSTS.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Optimized pagination with useMemo
  const { totalPages, paginatedPosts } = useMemo(() => {
    const total = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginated = filteredPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );
    return { totalPages: total, paginatedPosts: paginated };
  }, [filteredPosts, currentPage]);

  // Reset page when filters change
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
      
      {/* Hero Section */}
      <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-16`}>
        <div className="container mx-auto px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              GeoTrack Blog
            </h1>
            <p className={`text-xl mb-8 opacity-90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              Stay ahead with the latest news, insights, and innovations in GPS tracking, 
              fleet management, and telematics technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Icon 
                  icon="heroicons:magnifying-glass" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-lg text-gray-800 placeholder-gray-400 focus:ring-4 ${isTwThemeEnabled ? 'focus:ring-twBlue-200' : 'focus:ring-blue-200'} focus:outline-none text-lg ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 sticky top-8`}>
              
              {/* Categories */}
              <h3 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                Categories
              </h3>
              <div className="space-y-2">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category
                        ? isTwThemeEnabled 
                          ? 'bg-twBlue-500 text-white font-semibold shadow-md' 
                          : 'bg-blue-500 text-white font-semibold shadow-md'
                        : isTwThemeEnabled 
                          ? 'tw-text-secondary hover:bg-twNavy-50 dark:hover:bg-twNavy-700' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                    } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
                <h4 className={`text-lg font-semibold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Newsletter
                </h4>
                <p className={`text-sm mb-4 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Get the latest articles delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className={`w-full px-3 py-2 rounded-lg border mb-3 focus:ring-2 focus:outline-none ${isTwThemeEnabled ? 'border-twNavy-200 focus:ring-twBlue-200 dark:border-twNavy-600 dark:bg-twNavy-700' : 'border-gray-300 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-700'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                />
                <Button
                  text="Subscribe"
                  className={`w-full py-2 text-sm ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 font-proximaNova' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors`}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Results Info */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className={`text-2xl font-bold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  {selectedCategory === "All" ? "All Articles" : selectedCategory}
                </h2>
                <p className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {/* Sort */}
              <select className={`px-4 py-2 rounded-lg border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-600 dark:bg-twNavy-700' : 'border-gray-300 dark:border-slate-600 dark:bg-slate-700'} focus:ring-2 focus:outline-none ${isTwThemeEnabled ? 'focus:ring-twBlue-200 font-proximaNova' : 'focus:ring-blue-200'}`}>
                <option>Latest first</option>
                <option>Oldest first</option>
                <option>Most popular</option>
              </select>
            </div>

            {/* Blog Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {paginatedPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <article className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 hover:bg-twNavy-50 dark:hover:bg-twNavy-700' : 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]`}>
                        
                        {/* Article Image */}
                        <div className={`h-48 bg-gradient-to-br ${isTwThemeEnabled ? 'from-twBlue-400 to-twNavy-600' : 'from-blue-400 to-blue-600'} rounded-t-xl relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 font-proximaNova' : 'bg-blue-100 text-blue-700'}`}>
                              {post.category}
                            </span>
                          </div>
                          {post.featured && (
                            <div className="absolute top-4 right-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${isTwThemeEnabled ? 'bg-twGreen-100 text-twGreen-700 font-proximaNova' : 'bg-green-100 text-green-700'}`}>
                                Featured
                              </span>
                            </div>
                          )}
                          
                          {/* Visual Element */}
                          <div className="absolute bottom-4 right-4">
                            <div className="w-16 h-12 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                              <div className="p-2 space-y-1">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-white/40 rounded"></div>
                                  <div className="w-2 h-2 bg-white/60 rounded"></div>
                                </div>
                                <div className="w-full h-0.5 bg-white/40 rounded"></div>
                                <div className="w-3/4 h-0.5 bg-white/30 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6">
                          <div className="flex items-center text-xs mb-3 space-x-4">
                            <span className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                              {new Date(post.publishDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                            <span className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                              {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'} group-hover:${isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600'} transition-colors`}>
                            {post.title}
                          </h3>
                          
                          <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className={`px-2 py-1 rounded-md text-xs ${isTwThemeEnabled ? 'bg-twNavy-100 text-twNavy-700 dark:bg-twNavy-700 dark:text-twNavy-300 font-proximaNova' : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300'}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Author */}
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className={`text-sm font-medium ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                                {post.author}
                              </p>
                              <p className={`text-xs ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                                {post.authorRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        isTwThemeEnabled 
                          ? 'border-twNavy-200 hover:bg-twNavy-50 dark:border-twNavy-600 dark:hover:bg-twNavy-700' 
                          : 'border-gray-300 hover:bg-gray-50 dark:border-slate-600 dark:hover:bg-slate-700'
                      } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? isTwThemeEnabled 
                              ? 'bg-twBlue-500 text-white' 
                              : 'bg-blue-500 text-white'
                            : isTwThemeEnabled 
                              ? 'border border-twNavy-200 hover:bg-twNavy-50 dark:border-twNavy-600 dark:hover:bg-twNavy-700' 
                              : 'border border-gray-300 hover:bg-gray-50 dark:border-slate-600 dark:hover:bg-slate-700'
                        } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        isTwThemeEnabled 
                          ? 'border-twNavy-200 hover:bg-twNavy-50 dark:border-twNavy-600 dark:hover:bg-twNavy-700' 
                          : 'border-gray-300 hover:bg-gray-50 dark:border-slate-600 dark:hover:bg-slate-700'
                      } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* No Results */
              <div className="text-center py-12">
                <Icon 
                  icon="heroicons:magnifying-glass" 
                  className={`w-16 h-16 mx-auto mb-4 ${isTwThemeEnabled ? 'text-twNavy-300' : 'text-gray-300'}`}
                />
                <h3 className={`text-xl font-semibold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  No articles found
                </h3>
                <p className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
