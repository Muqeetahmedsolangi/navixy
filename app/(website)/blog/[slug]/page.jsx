"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

// Extended blog data with full content
const BLOG_POSTS = {
  "introducing-user-applications": {
    id: "user-applications",
    title: "Make GeoTrack work for you: Introducing User Applications",
    slug: "introducing-user-applications",
    excerpt: "GeoTrack's new User Applications feature allows you to embed custom web apps directly within the platform. Whether it's fleet analytics, compliance tools, or industry-specific modules, this functionality empowers integrators to create tailored telematics solutions for their clients.",
    content: `
      <p>The telematics industry has long struggled with the challenge of providing specialized functionality while maintaining platform simplicity. Different industries have unique requirements – construction companies need equipment monitoring, logistics firms require route optimization, and public transit operators demand passenger counting capabilities.</p>

      <p>Today, we're excited to announce <strong>User Applications</strong> – a revolutionary feature that allows you to embed custom web applications directly within the GeoTrack platform. This isn't just another integration; it's a fundamental shift in how telematics platforms can be customized.</p>

      <h2>What are User Applications?</h2>

      <p>User Applications are custom web apps that run seamlessly within the GeoTrack interface. They have full access to your fleet data, can interact with our APIs, and provide specialized functionality tailored to your specific business needs.</p>

      <h3>Key Features:</h3>
      <ul>
        <li><strong>Seamless Integration:</strong> Apps appear as native GeoTrack modules</li>
        <li><strong>Full Data Access:</strong> Real-time access to all vehicle and sensor data</li>
        <li><strong>Custom UI/UX:</strong> Design interfaces that match your workflow</li>
        <li><strong>API Integration:</strong> Connect with external systems and databases</li>
        <li><strong>White-label Ready:</strong> Perfect for resellers and integrators</li>
      </ul>

      <h2>Real-World Use Cases</h2>

      <h3>Construction Fleet Management</h3>
      <p>A construction company can create an app that combines vehicle tracking with equipment usage monitoring, maintenance scheduling, and compliance reporting – all in one unified interface.</p>

      <h3>Cold Chain Logistics</h3>
      <p>Food distributors can build specialized temperature monitoring dashboards that track cargo conditions, alert on violations, and generate compliance reports for regulatory authorities.</p>

      <h3>Public Transportation</h3>
      <p>Transit agencies can develop passenger information systems that combine real-time vehicle locations with passenger counting data, service announcements, and route optimization.</p>

      <h2>Getting Started</h2>

      <p>Creating your first User Application is straightforward:</p>

      <ol>
        <li><strong>Design Your App:</strong> Use any web technology stack (React, Vue, Angular, or vanilla JavaScript)</li>
        <li><strong>Integrate APIs:</strong> Connect to GeoTrack's comprehensive API suite</li>
        <li><strong>Test & Deploy:</strong> Use our sandbox environment for testing</li>
        <li><strong>Publish:</strong> Make your app available to users with appropriate permissions</li>
      </ol>

      <h2>Technical Architecture</h2>

      <p>User Applications run in secure iframes with controlled access to GeoTrack data. They can:</p>

      <ul>
        <li>Access real-time vehicle data through WebSocket connections</li>
        <li>Query historical data using our REST APIs</li>
        <li>Trigger actions like sending commands to devices</li>
        <li>Display custom reports and analytics</li>
        <li>Integrate with third-party services</li>
      </ul>

      <h2>Security & Permissions</h2>

      <p>Security is paramount. User Applications operate within a controlled environment with:</p>

      <ul>
        <li><strong>Role-based Access:</strong> Apps respect existing user permissions</li>
        <li><strong>Data Isolation:</strong> Apps only access authorized data</li>
        <li><strong>Audit Trails:</strong> All actions are logged and monitored</li>
        <li><strong>Secure Communication:</strong> All API calls use encrypted channels</li>
      </ul>

      <h2>Future Roadmap</h2>

      <p>This is just the beginning. We're working on:</p>

      <ul>
        <li><strong>App Marketplace:</strong> A central hub for sharing and discovering applications</li>
        <li><strong>Advanced APIs:</strong> More granular control over platform features</li>
        <li><strong>Mobile Support:</strong> User Applications on mobile devices</li>
        <li><strong>AI Integration:</strong> Built-in machine learning capabilities</li>
      </ul>

      <h2>Get Involved</h2>

      <p>User Applications are available now for all GeoTrack partners. Whether you're building solutions for your own fleet or developing applications for clients, this feature opens up unlimited possibilities.</p>

      <p>Ready to start building? Contact our development team or check out our comprehensive documentation and sample applications.</p>
    `,
    category: "Product Updates",
    author: "Svyatoslav I.",
    authorRole: "Product Manager, GeoTrack IoT Logic",
    publishDate: "2025-01-15",
    readTime: "5 min read",
    tags: ["User Applications", "Integration", "Custom Solutions", "API", "Platform"],
    featured: true,
    image: "/assets/new-images/hero-image.svg",
    metaDescription: "Discover GeoTrack's new User Applications feature that allows custom web apps to be embedded directly within the platform for tailored telematics solutions.",
    metaKeywords: "GeoTrack, User Applications, Telematics, Custom Solutions, API Integration, Fleet Management"
  },
  "ngp-protocol-telematics-standard": {
    id: "ngp-protocol",
    title: "Introducing NGP: A new standard for telematics data exchange",
    slug: "ngp-protocol-telematics-standard",
    excerpt: "We're introducing the GeoTrack Generic Protocol (NGP) — our answer to the fragmentation challenge in the telematics industry. Explore how NGP transforms telematics, how it works, and the ways it can benefit your operations.",
    content: `
      <p>The telematics industry faces a significant challenge: fragmentation. With hundreds of device manufacturers, each using proprietary protocols, integrating diverse hardware into a unified platform has become increasingly complex and costly.</p>

      <p>Today, we're proud to introduce the <strong>GeoTrack Generic Protocol (NGP)</strong> – our comprehensive solution to this fragmentation challenge.</p>

      <h2>The Problem with Current Protocols</h2>

      <p>Traditional telematics protocols were designed in isolation, leading to:</p>

      <ul>
        <li><strong>Integration Complexity:</strong> Each device requires custom parsing logic</li>
        <li><strong>Development Overhead:</strong> Supporting new devices takes weeks or months</li>
        <li><strong>Limited Functionality:</strong> Proprietary protocols restrict feature availability</li>
        <li><strong>Vendor Lock-in:</strong> Switching devices often means rebuilding integrations</li>
      </ul>

      <h2>What is NGP?</h2>

      <p>The GeoTrack Generic Protocol is a unified, extensible protocol designed for modern telematics applications. It provides:</p>

      <h3>Universal Device Support</h3>
      <p>NGP acts as a translation layer, converting proprietary device protocols into a standardized format. This means any GPS tracker, sensor, or IoT device can communicate using the same protocol structure.</p>

      <h3>Rich Data Types</h3>
      <p>Unlike traditional protocols that focus mainly on location data, NGP supports:</p>
      <ul>
        <li>Vehicle diagnostics (OBD-II, CAN bus data)</li>
        <li>Environmental sensors (temperature, humidity, pressure)</li>
        <li>Driver behavior metrics</li>
        <li>Fuel consumption and efficiency data</li>
        <li>Maintenance alerts and schedules</li>
        <li>Custom sensor data</li>
      </ul>

      <h3>Real-time and Batch Processing</h3>
      <p>NGP supports both real-time streaming and batch data transmission, optimizing bandwidth usage based on data priority and network conditions.</p>

      <h2>Technical Architecture</h2>

      <h3>Protocol Structure</h3>
      <p>NGP uses a hierarchical message structure:</p>

      <pre><code>{
  "device_id": "unique_identifier",
  "timestamp": "2025-01-15T10:30:00Z",
  "message_type": "telemetry",
  "data": {
    "location": {
      "lat": 40.7128,
      "lon": -74.0060,
      "altitude": 10,
      "accuracy": 3
    },
    "vehicle": {
      "speed": 65,
      "heading": 90,
      "odometer": 15432
    },
    "sensors": {
      "fuel_level": 75,
      "engine_temp": 89,
      "battery_voltage": 12.6
    }
  }
}</code></pre>

      <h3>Compression and Efficiency</h3>
      <p>NGP includes built-in compression algorithms that reduce data transmission by up to 60% compared to traditional protocols, significantly lowering operational costs for cellular connections.</p>

      <h2>Benefits for Different Stakeholders</h2>

      <h3>For Fleet Managers</h3>
      <ul>
        <li><strong>Device Flexibility:</strong> Choose hardware based on features and price, not protocol compatibility</li>
        <li><strong>Unified Reporting:</strong> Consistent data format across all devices</li>
        <li><strong>Cost Savings:</strong> Reduced development and integration costs</li>
      </ul>

      <h3>For Integrators and Developers</h3>
      <ul>
        <li><strong>Simplified Development:</strong> One protocol to learn and implement</li>
        <li><strong>Faster Time-to-Market:</strong> New device support in days, not months</li>
        <li><strong>Rich APIs:</strong> Comprehensive data access for custom applications</li>
      </ul>

      <h3>For Device Manufacturers</h3>
      <ul>
        <li><strong>Broader Market Access:</strong> Instant compatibility with NGP-enabled platforms</li>
        <li><strong>Reduced Support Overhead:</strong> Standardized integration reduces support tickets</li>
        <li><strong>Innovation Focus:</strong> Concentrate on hardware innovation, not protocol development</li>
      </ul>

      <h2>Implementation and Migration</h2>

      <h3>For Existing Customers</h3>
      <p>Current GeoTrack users don't need to change anything. NGP works transparently with existing devices through our protocol translation layer.</p>

      <h3>For New Deployments</h3>
      <p>New customers can take advantage of NGP immediately by:</p>
      <ol>
        <li>Choosing NGP-native devices from our certified hardware list</li>
        <li>Using our device configuration tools for automatic setup</li>
        <li>Accessing enhanced features through the standardized protocol</li>
      </ol>

      <h2>Industry Impact</h2>

      <p>NGP represents more than a technical improvement – it's a step toward industry standardization. By open-sourcing key components of the protocol specification, we're encouraging adoption across the telematics ecosystem.</p>

      <h3>Ecosystem Benefits</h3>
      <ul>
        <li><strong>Reduced Development Costs:</strong> Industry-wide savings on integration efforts</li>
        <li><strong>Accelerated Innovation:</strong> Developers can focus on features, not protocol parsing</li>
        <li><strong>Better Interoperability:</strong> Easier data exchange between platforms</li>
        <li><strong>Enhanced Competition:</strong> Lower barriers to entry for new players</li>
      </ul>

      <h2>Security and Reliability</h2>

      <p>NGP incorporates enterprise-grade security features:</p>

      <ul>
        <li><strong>End-to-End Encryption:</strong> All data is encrypted in transit</li>
        <li><strong>Device Authentication:</strong> Strong cryptographic device identity verification</li>
        <li><strong>Message Integrity:</strong> Tamper detection for all transmitted data</li>
        <li><strong>Replay Protection:</strong> Prevents malicious data injection</li>
      </ul>

      <h2>Getting Started with NGP</h2>

      <p>Ready to experience the benefits of NGP? Here's how to get started:</p>

      <ol>
        <li><strong>Evaluate Your Current Setup:</strong> Our team can assess your existing devices for NGP compatibility</li>
        <li><strong>Plan Your Migration:</strong> We'll create a migration plan that minimizes disruption</li>
        <li><strong>Test and Deploy:</strong> Use our sandbox environment to test NGP functionality</li>
        <li><strong>Monitor and Optimize:</strong> Take advantage of enhanced monitoring and analytics</li>
      </ol>

      <p>The future of telematics is standardized, efficient, and open. NGP is our contribution to that future, and we invite you to be part of this transformation.</p>
    `,
    category: "Telematics",
    author: "Maria Rodriguez",
    authorRole: "Senior Software Engineer, GeoTrack",
    publishDate: "2025-01-12",
    readTime: "8 min read",
    tags: ["NGP", "Protocol", "Data Exchange", "Telematics", "Standardization"],
    featured: true,
    image: "/assets/new-images/hero-background.svg",
    metaDescription: "Learn about GeoTrack's Generic Protocol (NGP), a new standard for telematics data exchange that solves industry fragmentation challenges.",
    metaKeywords: "NGP, GeoTrack Generic Protocol, Telematics Protocol, Data Exchange, Device Integration"
  }
  // Add more blog posts here...
};

const RELATED_POSTS = [
  {
    title: "Fleet video telematics: Revamping safety with Streamax",
    slug: "fleet-video-telematics-streamax",
    category: "Fleet Management",
    readTime: "7 min read"
  },
  {
    title: "GPS Tracking Trends 2025: What's Next for Fleet Management",
    slug: "gps-tracking-trends-2025", 
    category: "GPS Tracking",
    readTime: "9 min read"
  },
  {
    title: "AI-Powered Predictive Maintenance: Reducing Fleet Downtime",
    slug: "ai-predictive-maintenance-fleet",
    category: "Telematics", 
    readTime: "8 min read"
  }
];

const BlogPostPage = ({ params }) => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  // Ensure params is available before proceeding
  if (!params?.slug) {
    return null; // Return null instead of loading state for faster rendering
  }
  
  // Get post data instantly - direct access for maximum performance
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return (
      <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} flex items-center justify-center`}>
        <div className="text-center">
          <Icon 
            icon="heroicons:exclamation-triangle" 
            className={`w-24 h-24 mx-auto mb-6 ${isTwThemeEnabled ? 'text-twNavy-300' : 'text-gray-300'}`}
          />
          <h1 className={`text-2xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
            Article Not Found
          </h1>
          <p className={`mb-6 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog">
            <Button
              text="Back to Blog"
              className={`${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 font-proximaNova' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-3 rounded-lg`}
            />
          </Link>
        </div>
      </div>
    );
  }

  // Simple and fast sharing function
  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = post.title;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | GeoTrack Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.metaKeywords || post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>

      <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
        
        {/* Article Header */}
        <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-12`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="flex items-center text-white/80 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Icon icon="heroicons:chevron-right" className="w-4 h-4 mx-2" />
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Icon icon="heroicons:chevron-right" className="w-4 h-4 mx-2" />
                <span className="text-white">{post.category}</span>
              </nav>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span className={`px-3 py-1 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-600' : 'bg-blue-600'} text-white font-medium`}>
                  {post.category}
                </span>
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
                {post.featured && (
                  <span className={`px-3 py-1 rounded-full ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'} text-white font-medium`}>
                    Featured
                  </span>
                )}
              </div>

              {/* Article Title */}
              <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                {post.title}
              </h1>

              {/* Article Excerpt */}
              <p className={`text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className={`text-white font-semibold ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {post.author}
                  </p>
                  <p className={`text-white/80 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {post.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Main Content */}
              <article className="lg:w-2/3">
                <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 md:p-8 lg:p-10`}>
                  
                  {/* Article Body */}
                  <div 
                    className={`blog-content max-w-none ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                    <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 dark:bg-twBlue-900 dark:text-twBlue-300 font-proximaNova' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                
                {/* Share Article */}
                <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 mb-8`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                    Share article
                  </h4>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                      <Icon icon="heroicons:face-smile" className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${isTwThemeEnabled ? 'bg-twBlue-400 hover:bg-twBlue-500' : 'bg-blue-400 hover:bg-blue-500'} text-white`}
                    >
                      <Icon icon="heroicons:chat-bubble-left" className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${isTwThemeEnabled ? 'bg-twNavy-600 hover:bg-twNavy-700' : 'bg-slate-600 hover:bg-slate-700'} text-white`}
                    >
                      <Icon icon="heroicons:building-office" className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Author Card */}
                <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 mb-8`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                    About the Author
                  </h4>
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className={`font-semibold mb-1 ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                        {post.author}
                      </h5>
                      <p className={`text-sm mb-3 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                        {post.authorRole}
                      </p>
                      <p className={`text-sm ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                        Passionate about technology and innovation in the telematics industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                    Related Articles
                  </h4>
                  <div className="space-y-4">
                    {RELATED_POSTS.map((relatedPost, index) => (
                      <Link
                        key={index}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className={`p-4 rounded-lg transition-colors ${isTwThemeEnabled ? 'hover:bg-twNavy-50 dark:hover:bg-twNavy-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700'}`}>
                          <h5 className={`font-medium mb-2 line-clamp-2 ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'} group-hover:${isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600'} transition-colors`}>
                            {relatedPost.title}
                          </h5>
                          <div className="flex items-center text-xs space-x-3">
                            <span className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                              {relatedPost.category}
                            </span>
                            <span className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                              {relatedPost.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`border-t ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} py-8`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Link
                href="/blog"
                className={`flex items-center space-x-2 ${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
              >
                <Icon icon="heroicons:arrow-left" className="w-5 h-5" />
                <span className={isTwThemeEnabled ? 'font-proximaNova' : ''}>Back to Blog</span>
              </Link>
              
              <Button
                text="Subscribe to Newsletter"
                className={`${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 font-proximaNova' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-3 rounded-lg transition-colors`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Styles */}
      <style jsx global>{`
        .blog-content {
          font-size: 18px;
          line-height: 1.8;
          color: ${isTwThemeEnabled ? (isDark ? '#e2e8f0' : '#334155') : (isDark ? '#e2e8f0' : '#374151')};
        }
        
        .blog-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 2.5rem 0 1.5rem 0;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#0f172a') : (isDark ? '#ffffff' : '#111827')};
          line-height: 1.2;
          ${isTwThemeEnabled ? 'font-family: "Lexend", sans-serif;' : ''}
        }
        
        .blog-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#0f172a') : (isDark ? '#ffffff' : '#111827')};
          line-height: 1.3;
          ${isTwThemeEnabled ? 'font-family: "Lexend", sans-serif;' : ''}
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#1e293b') : (isDark ? '#ffffff' : '#1f2937')};
          line-height: 1.4;
          ${isTwThemeEnabled ? 'font-family: "Lexend", sans-serif;' : ''}
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.25rem 0 0.5rem 0;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#334155') : (isDark ? '#ffffff' : '#374151')};
          ${isTwThemeEnabled ? 'font-family: "Lexend", sans-serif;' : ''}
        }
        
        .blog-content p {
          margin: 1.25rem 0;
          text-align: justify;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin: 0.5rem 0;
          line-height: 1.7;
        }
        
        .blog-content strong {
          font-weight: 600;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#0f172a') : (isDark ? '#ffffff' : '#111827')};
        }
        
        .blog-content a {
          color: ${isTwThemeEnabled ? '#3BAFF3' : '#3b82f6'};
          text-decoration: none;
          font-weight: 500;
        }
        
        .blog-content a:hover {
          text-decoration: underline;
        }
        
        .blog-content blockquote {
          border-left: 4px solid ${isTwThemeEnabled ? '#3BAFF3' : '#3b82f6'};
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          background: ${isTwThemeEnabled ? (isDark ? '#1e293b' : '#f8fafc') : (isDark ? '#1e293b' : '#f9fafb')};
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
        }
        
        .blog-content pre {
          background: ${isTwThemeEnabled ? (isDark ? '#1e293b' : '#f8fafc') : (isDark ? '#1e293b' : '#f9fafb')};
          border: 1px solid ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#374151' : '#e5e7eb')};
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
          overflow-x: auto;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .blog-content code {
          background: ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#374151' : '#e5e7eb')};
          color: ${isTwThemeEnabled ? '#0F2D53' : '#1f2937'};
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.9em;
          font-weight: 500;
        }
        
        .blog-content pre code {
          background: transparent;
          padding: 0;
          color: ${isDark ? '#e2e8f0' : '#374151'};
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          border: 1px solid ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#374151' : '#e5e7eb')};
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .blog-content th,
        .blog-content td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#374151' : '#e5e7eb')};
        }
        
        .blog-content th {
          background: ${isTwThemeEnabled ? (isDark ? '#1e293b' : '#f8fafc') : (isDark ? '#1e293b' : '#f9fafb')};
          font-weight: 600;
          color: ${isTwThemeEnabled ? (isDark ? '#ffffff' : '#0f172a') : (isDark ? '#ffffff' : '#111827')};
        }
        
        .blog-content hr {
          border: none;
          height: 1px;
          background: ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#374151' : '#e5e7eb')};
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
};

export default BlogPostPage;
