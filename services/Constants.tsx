import { Award, Zap, Heart, Shield, Users, TrendingUp, Target, Code, Rocket, Star } from 'lucide-react';


//Home page 
// Types

export interface TechSkill {
  id: number;
  name: string;
  logo: string;
}

export interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

// Dummy Data
export const banners: Banner[] = [
  {
    id: 1,
    title: "Transform Your Business With Digital Innovation",
    subtitle: "Leading IT Solutions Provider",
    description: "We deliver cutting-edge technology solutions that drive growth and efficiency for your business",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Build Scalable Applications",
    subtitle: "Expert Development Team",
    description: "Custom software development tailored to your unique business needs",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Cloud Solutions That Scale",
    subtitle: "Infrastructure Modernization",
    description: "Migrate to the cloud with confidence and unlock unlimited potential",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop"
  }
];

export const techSkills: TechSkill[] = [
  { id: 1, name: "React", logo: "⚛️" },
  { id: 2, name: "Next.js", logo: "▲" },
  { id: 3, name: "TypeScript", logo: "TS" },
  { id: 4, name: "Node.js", logo: "🟢" },
  { id: 5, name: "Python", logo: "🐍" },
  { id: 6, name: "AWS", logo: "☁️" },
  { id: 7, name: "Docker", logo: "🐳" },
  { id: 8, name: "MongoDB", logo: "🍃" },
  { id: 9, name: "PostgreSQL", logo: "🐘" },
  { id: 10, name: "GraphQL", logo: "◈" }
];

// Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Extended Services Data - 20 Services
export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance",
    icon: "💻",
    features: ["React & Next.js", "Responsive Design", "Performance Optimization"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences",
    icon: "📱",
    features: ["iOS & Android", "React Native", "Flutter Development"]
  },
  {
    id: 3,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services for modern businesses",
    icon: "☁️",
    features: ["AWS & Azure", "Cloud Migration", "Infrastructure Management"]
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven insights powered by advanced AI technologies",
    icon: "🤖",
    features: ["Deep Learning", "Predictive Analytics", "Natural Language Processing"]
  },
  {
    id: 5,
    title: "DevOps Solutions",
    description: "Streamlined development pipelines and automated deployment for faster delivery",
    icon: "⚙️",
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "Automation"]
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Strategic technology guidance to help your business stay ahead of the competition",
    icon: "📊",
    features: ["Digital Strategy", "Tech Roadmap", "Business Analysis"]
  },
  {
    id: 7,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide seamless user experiences across all devices",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    id: 8,
    title: "E-Commerce Solutions",
    description: "Comprehensive e-commerce platforms with secure payment integration and inventory management",
    icon: "🛒",
    features: ["Shopping Cart", "Payment Gateway", "Order Management"]
  },
  {
    id: 9,
    title: "Cybersecurity",
    description: "Protect your business with advanced security measures and compliance solutions",
    icon: "🔒",
    features: ["Threat Detection", "Security Audits", "Data Protection"]
  },
  {
    id: 10,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with powerful analytics and visualization",
    icon: "📈",
    features: ["Business Intelligence", "Data Visualization", "Reporting"]
  },
  {
    id: 11,
    title: "Blockchain Development",
    description: "Decentralized solutions and smart contracts for secure, transparent transactions",
    icon: "⛓️",
    features: ["Smart Contracts", "DApps", "Cryptocurrency Integration"]
  },
  {
    id: 12,
    title: "IoT Solutions",
    description: "Connect devices and systems to create intelligent, automated environments",
    icon: "🌐",
    features: ["Device Integration", "Real-time Monitoring", "Automation"]
  },
  {
    id: 13,
    title: "Quality Assurance",
    description: "Comprehensive testing services to ensure your software is bug-free and reliable",
    icon: "✅",
    features: ["Automated Testing", "Manual Testing", "Performance Testing"]
  },
  {
    id: 14,
    title: "Digital Marketing",
    description: "Increase your online presence with data-driven marketing strategies and campaigns",
    icon: "📢",
    features: ["SEO Optimization", "Social Media", "Content Marketing"]
  },
  {
    id: 15,
    title: "CRM Solutions",
    description: "Streamline customer relationships with customized CRM systems and integrations",
    icon: "👥",
    features: ["Customer Management", "Sales Pipeline", "Analytics Dashboard"]
  },
  {
    id: 16,
    title: "API Development",
    description: "Build robust, scalable APIs that power seamless integrations and data exchange",
    icon: "🔌",
    features: ["RESTful APIs", "GraphQL", "API Documentation"]
  },
  {
    id: 17,
    title: "Database Management",
    description: "Design, optimize, and maintain databases for peak performance and reliability",
    icon: "🗄️",
    features: ["SQL & NoSQL", "Data Modeling", "Performance Tuning"]
  },
  {
    id: 18,
    title: "Video Streaming",
    description: "Build scalable video streaming platforms with live and on-demand capabilities",
    icon: "🎥",
    features: ["Live Streaming", "VOD", "CDN Integration"]
  },
  {
    id: 19,
    title: "AR/VR Development",
    description: "Immersive augmented and virtual reality experiences for training and entertainment",
    icon: "🥽",
    features: ["3D Modeling", "Unity Development", "Interactive Experiences"]
  },
  {
    id: 20,
    title: "Maintenance & Support",
    description: "24/7 technical support and maintenance to keep your systems running smoothly",
    icon: "🛠️",
    features: ["24/7 Support", "Bug Fixes", "System Updates"]
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc",
    rating: 5,
    comment: "Outstanding service! They transformed our legacy systems into a modern, scalable platform. The team's expertise and dedication exceeded our expectations.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp",
    rating: 5,
    comment: "Their innovative approach and technical excellence helped us launch our product ahead of schedule. Highly recommended for any serious technology project.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "DataFlow Systems",
    rating: 5,
    comment: "Exceptional team that truly understands business needs. They delivered a solution that not only met but exceeded our requirements.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];




//About us page 


// Types
export interface Mission {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Value {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}

// Dummy Data
export const missions: Mission[] = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to create innovative solutions that transform businesses.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Excellence",
    description: "Quality is at the heart of everything we do. We strive for excellence in every project we undertake.",
    icon: <Award className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Client Success",
    description: "Your success is our success. We build lasting partnerships based on trust and exceptional results.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Integrity",
    description: "We operate with transparency and honesty, maintaining the highest ethical standards in all our dealings.",
    icon: <Shield className="w-8 h-8" />
  }
];

export const values: Value[] = [
  {
    id: 1,
    title: "Customer-Centric Approach",
    description: "We put our clients at the center of everything we do, understanding their needs and delivering solutions that exceed expectations."
  },
  {
    id: 2,
    title: "Continuous Learning",
    description: "In the ever-evolving tech landscape, we prioritize continuous learning and skill development to stay ahead of the curve."
  },
  {
    id: 3,
    title: "Collaborative Spirit",
    description: "We believe in the power of collaboration, working together as a team to achieve extraordinary results."
  },
  {
    id: 4,
    title: "Social Responsibility",
    description: "We're committed to making a positive impact on society through responsible business practices and community engagement."
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    image: "https://i.pravatar.cc/300?img=5"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Head of Design",
    image: "https://i.pravatar.cc/300?img=13"
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Head of Operations",
    image: "https://i.pravatar.cc/300?img=9"
  },
];

export const milestones: Milestone[] = [
  {
    id: 1,
    year: "2015",
    title: "Company Founded",
    description: "Started our journey with a vision to transform businesses through technology"
  },
  {
    id: 2,
    year: "2017",
    title: "100+ Projects Delivered",
    description: "Reached our first major milestone of successfully delivering 100 projects"
  },
  {
    id: 3,
    year: "2019",
    title: "International Expansion",
    description: "Expanded our operations to serve clients across multiple continents"
  },
  {
    id: 4,
    year: "2021",
    title: "Award Recognition",
    description: "Received multiple industry awards for excellence in technology solutions"
  },
  {
    id: 5,
    year: "2023",
    title: "500+ Happy Clients",
    description: "Proud to serve over 500 satisfied clients worldwide"
  },
  {
    id: 6,
    year: "2025",
    title: "AI Innovation Lab",
    description: "Launched our dedicated AI research and development center"
  }
];



//Protfolio Page 
// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

// Dummy Data - 30 Projects
export const allProjects: Project[] = [
  {
    id: 1,
    title: "AirFlow X - SaaS Website Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["SaaS", "Webflow", "UI/UX"],
    category: "Web Design"
  },
  {
    id: 2,
    title: "AirExploreX - Tourism Website Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    tags: ["Tag one", "Tag two", "Tag three"],
    category: "Web Design"
  },
  {
    id: 3,
    title: "AirTach SaaS Webflow Website Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Tag one", "Tag two", "Tag three"],
    category: "Web Design"
  },
  {
    id: 4,
    title: "AirFlow - SaaS Website Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    tags: ["SaaS", "Software", "Webflow"],
    category: "Web Design"
  },
  {
    id: 5,
    title: "E-Commerce Platform Dashboard",
    description: "Modern dashboard for managing online store operations with real-time analytics and insights.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop",
    tags: ["Dashboard", "E-Commerce", "React"],
    category: "Web Application"
  },
  {
    id: 6,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare solution for patient management and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Healthcare", "Management", "System"],
    category: "Web Application"
  },
  {
    id: 7,
    title: "FinTech Mobile Banking App",
    description: "Secure and intuitive mobile banking application with advanced financial features.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["FinTech", "Mobile", "Banking"],
    category: "Mobile App"
  },
  {
    id: 8,
    title: "Real Estate Listing Platform",
    description: "Beautiful property listing website with advanced search and virtual tour capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Real Estate", "Platform", "UI/UX"],
    category: "Web Design"
  },
  {
    id: 9,
    title: "Food Delivery Mobile App",
    description: "User-friendly food delivery app connecting customers with local restaurants.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    tags: ["Food", "Delivery", "Mobile"],
    category: "Mobile App"
  },
  {
    id: 10,
    title: "AI-Powered Analytics Dashboard",
    description: "Advanced analytics platform leveraging AI for business intelligence and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["AI", "Analytics", "Dashboard"],
    category: "Web Application"
  },
  {
    id: 11,
    title: "Social Media Management Tool",
    description: "Comprehensive tool for managing multiple social media accounts and campaigns.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Social Media", "Marketing", "Tool"],
    category: "Web Application"
  },
  {
    id: 12,
    title: "Fitness Tracking Mobile App",
    description: "Personal fitness companion with workout tracking and nutrition planning.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tags: ["Fitness", "Health", "Mobile"],
    category: "Mobile App"
  },
  {
    id: 13,
    title: "Educational Learning Platform",
    description: "Interactive online learning platform with live classes and course management.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Education", "E-Learning", "Platform"],
    category: "Web Application"
  },
  {
    id: 14,
    title: "Travel Booking Website",
    description: "Complete travel booking solution with flights, hotels, and tour packages.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    tags: ["Travel", "Booking", "Tourism"],
    category: "Web Design"
  },
  {
    id: 15,
    title: "Project Management Dashboard",
    description: "Collaborative project management tool with task tracking and team coordination.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Project", "Management", "Collaboration"],
    category: "Web Application"
  },
  {
    id: 16,
    title: "Restaurant Point of Sale System",
    description: "Modern POS system for restaurants with inventory and order management.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["POS", "Restaurant", "System"],
    category: "Web Application"
  },
  {
    id: 17,
    title: "Fashion E-Commerce Store",
    description: "Trendy fashion e-commerce platform with AR try-on features.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["Fashion", "E-Commerce", "Retail"],
    category: "Web Design"
  },
  {
    id: 18,
    title: "Music Streaming Platform",
    description: "Feature-rich music streaming service with playlist creation and discovery.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    tags: ["Music", "Streaming", "Entertainment"],
    category: "Web Application"
  },
  {
    id: 19,
    title: "Crypto Trading Dashboard",
    description: "Real-time cryptocurrency trading platform with advanced charting tools.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    tags: ["Crypto", "Trading", "Blockchain"],
    category: "Web Application"
  },
  {
    id: 20,
    title: "Weather Forecast Mobile App",
    description: "Accurate weather forecasting app with hourly and weekly predictions.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["Weather", "Forecast", "Mobile"],
    category: "Mobile App"
  },
  {
    id: 21,
    title: "Hotel Booking Management System",
    description: "Complete hotel management solution with booking and guest services.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    tags: ["Hotel", "Booking", "Hospitality"],
    category: "Web Application"
  },
  {
    id: 22,
    title: "Car Rental Platform",
    description: "User-friendly car rental service with real-time availability and booking.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    tags: ["Car Rental", "Transport", "Service"],
    category: "Web Design"
  },
  {
    id: 23,
    title: "Job Portal Platform",
    description: "Comprehensive job search and recruitment platform connecting talent with opportunities.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    tags: ["Jobs", "Recruitment", "Career"],
    category: "Web Application"
  },
  {
    id: 24,
    title: "News & Media Portal",
    description: "Modern news platform with real-time updates and multimedia content.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    tags: ["News", "Media", "Content"],
    category: "Web Design"
  },
  {
    id: 25,
    title: "Video Conference Platform",
    description: "Secure video conferencing solution for remote teams and webinars.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    tags: ["Video", "Conference", "Remote"],
    category: "Web Application"
  },
  {
    id: 26,
    title: "Doctor Appointment Booking App",
    description: "Seamless healthcare appointment booking with doctor profiles and reviews.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    tags: ["Healthcare", "Appointment", "Medical"],
    category: "Mobile App"
  },
  {
    id: 27,
    title: "Event Management Platform",
    description: "Complete event planning and management solution with ticketing.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    tags: ["Event", "Management", "Ticketing"],
    category: "Web Application"
  },
  {
    id: 28,
    title: "Virtual Reality Training System",
    description: "Immersive VR training platform for corporate and educational purposes.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
    tags: ["VR", "Training", "Innovation"],
    category: "Web Application"
  },
  {
    id: 29,
    title: "Smart Home Control App",
    description: "Unified smart home control system for IoT devices and automation.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    tags: ["IoT", "Smart Home", "Automation"],
    category: "Mobile App"
  },
  {
    id: 30,
    title: "Inventory Management System",
    description: "Advanced inventory tracking and warehouse management solution.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    tags: ["Inventory", "Warehouse", "Management"],
    category: "Web Application"
  }
];




//Blogs page 
// Types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

// Dummy Blog Data - 30 Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Explore how modern technology is revolutionizing the way we work and collaborate in today's digital age.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "August 20, 2022",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Future of AI in Business: Transforming Industries",
    excerpt: "Discover how artificial intelligence is reshaping business operations and creating new opportunities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "August 18, 2022",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 3,
    title: "Cloud Computing: The Backbone of Modern Business",
    excerpt: "Learn why cloud infrastructure is essential for scaling your business in the digital era.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "August 15, 2022",
    readTime: "6 min read",
    featured: true
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Remote Teams",
    excerpt: "Essential security measures every remote team should implement to protect their data.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    author: { name: "Ernie Smith", avatar: "https://i.pravatar.cc/100?img=13" },
    category: "Technology",
    date: "August 12, 2022",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 5,
    title: "The Rise of Progressive Web Applications",
    excerpt: "Understanding PWAs and why they're becoming the future of web development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "August 10, 2022",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Blockchain Technology Beyond Cryptocurrency",
    excerpt: "Exploring the diverse applications of blockchain in various industries.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    author: { name: "Eric Smith", avatar: "https://i.pravatar.cc/100?img=14" },
    category: "Technology",
    date: "August 8, 2022",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "Building Scalable Microservices Architecture",
    excerpt: "Best practices for designing and implementing microservices at scale.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "August 5, 2022",
    readTime: "9 min read"
  },
  {
    id: 8,
    title: "The DevOps Revolution: Streamlining Development",
    excerpt: "How DevOps practices are transforming software development and deployment.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "August 3, 2022",
    readTime: "7 min read"
  },
  {
    id: 9,
    title: "Mobile-First Design: Why It Matters in 2024",
    excerpt: "The importance of prioritizing mobile users in modern web design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "July 30, 2022",
    readTime: "5 min read"
  },
  {
    id: 10,
    title: "Data Analytics: Turning Information into Insights",
    excerpt: "Leveraging data analytics to make informed business decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    author: { name: "Ernie Smith", avatar: "https://i.pravatar.cc/100?img=13" },
    category: "Technology",
    date: "July 28, 2022",
    readTime: "6 min read"
  },
  {
    id: 11,
    title: "The Power of Serverless Architecture",
    excerpt: "Understanding the benefits and use cases of serverless computing.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "July 25, 2022",
    readTime: "7 min read"
  },
  {
    id: 12,
    title: "5G Technology and Its Impact on IoT",
    excerpt: "How 5G networks are enabling the next generation of IoT devices.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "July 22, 2022",
    readTime: "8 min read"
  },
  {
    id: 13,
    title: "Agile Methodology: A Comprehensive Guide",
    excerpt: "Master the principles and practices of Agile project management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "July 20, 2022",
    readTime: "10 min read"
  },
  {
    id: 14,
    title: "Machine Learning for Beginners",
    excerpt: "A beginner-friendly introduction to machine learning concepts and applications.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    author: { name: "Eric Smith", avatar: "https://i.pravatar.cc/100?img=14" },
    category: "Technology",
    date: "July 18, 2022",
    readTime: "12 min read"
  },
  {
    id: 15,
    title: "The Evolution of E-Commerce Platforms",
    excerpt: "How e-commerce technology has evolved to meet modern consumer demands.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "July 15, 2022",
    readTime: "6 min read"
  },
  {
    id: 16,
    title: "Virtual Reality in Enterprise Training",
    excerpt: "Exploring how VR technology is revolutionizing corporate training programs.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "July 12, 2022",
    readTime: "7 min read"
  },
  {
    id: 17,
    title: "API Design Best Practices",
    excerpt: "Essential guidelines for creating robust and developer-friendly APIs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "July 10, 2022",
    readTime: "8 min read"
  },
  {
    id: 18,
    title: "The Green IT Revolution",
    excerpt: "Sustainable technology practices for environmentally conscious businesses.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    author: { name: "Ernie Smith", avatar: "https://i.pravatar.cc/100?img=13" },
    category: "Technology",
    date: "July 8, 2022",
    readTime: "6 min read"
  },
  {
    id: 19,
    title: "Quantum Computing: The Next Frontier",
    excerpt: "Understanding the potential and challenges of quantum computing technology.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "July 5, 2022",
    readTime: "9 min read"
  },
  {
    id: 20,
    title: "Low-Code Development Platforms",
    excerpt: "How low-code tools are democratizing application development.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "July 3, 2022",
    readTime: "5 min read"
  },
  {
    id: 21,
    title: "The Rise of Edge Computing",
    excerpt: "Why edge computing is becoming essential for real-time data processing.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "June 30, 2022",
    readTime: "7 min read"
  },
  {
    id: 22,
    title: "Digital Transformation Strategies",
    excerpt: "A roadmap for successful digital transformation in your organization.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    author: { name: "Eric Smith", avatar: "https://i.pravatar.cc/100?img=14" },
    category: "Technology",
    date: "June 28, 2022",
    readTime: "11 min read"
  },
  {
    id: 23,
    title: "Container Orchestration with Kubernetes",
    excerpt: "Mastering Kubernetes for efficient container management at scale.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "June 25, 2022",
    readTime: "10 min read"
  },
  {
    id: 24,
    title: "The Future of Work: Hybrid Models",
    excerpt: "Adapting technology infrastructure for the hybrid workplace.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "June 22, 2022",
    readTime: "6 min read"
  },
  {
    id: 25,
    title: "GraphQL vs REST: Choosing the Right API",
    excerpt: "Comparing GraphQL and REST to determine the best fit for your project.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "June 20, 2022",
    readTime: "8 min read"
  },
  {
    id: 26,
    title: "Automated Testing Best Practices",
    excerpt: "Building a robust automated testing strategy for quality assurance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    author: { name: "Ernie Smith", avatar: "https://i.pravatar.cc/100?img=13" },
    category: "Technology",
    date: "June 18, 2022",
    readTime: "9 min read"
  },
  {
    id: 27,
    title: "The Impact of 3D Printing Technology",
    excerpt: "How 3D printing is revolutionizing manufacturing and prototyping.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    author: { name: "Tracey Wilson", avatar: "https://i.pravatar.cc/100?img=5" },
    category: "Technology",
    date: "June 15, 2022",
    readTime: "7 min read"
  },
  {
    id: 28,
    title: "Natural Language Processing Applications",
    excerpt: "Exploring real-world applications of NLP in modern software.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    author: { name: "Elizabeth Slavin", avatar: "https://i.pravatar.cc/100?img=9" },
    category: "Technology",
    date: "June 12, 2022",
    readTime: "8 min read"
  },
  {
    id: 29,
    title: "Building Real-Time Applications",
    excerpt: "Technologies and patterns for creating responsive real-time apps.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    author: { name: "Jason Francisco", avatar: "https://i.pravatar.cc/100?img=12" },
    category: "Technology",
    date: "June 10, 2022",
    readTime: "10 min read"
  },
  {
    id: 30,
    title: "The Role of Big Data in Decision Making",
    excerpt: "Leveraging big data analytics for strategic business decisions.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    author: { name: "Eric Smith", avatar: "https://i.pravatar.cc/100?img=14" },
    category: "Technology",
    date: "June 8, 2022",
    readTime: "11 min read"
  }
];




//Contact Us page

export interface Office {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

export interface FAQ {
  id?: number;
  question: string;
  answer: string;
}

// Data
export const offices: Office[] = [
  {
    id: 1,
    name: "Headquarters - San Francisco",
    address: "123 Tech Street, Silicon Valley, CA 94025, USA",
    phone: "+1 (555) 123-4567",
    email: "sf@techsolutions.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290837334!2d-122.08624968469225!3d37.42199997982456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619635234567!5m2!1sen!2sus"
  },
  {
    id: 2,
    name: "Branch Office - New York",
    address: "456 Innovation Ave, Manhattan, NY 10001, USA",
    phone: "+1 (555) 987-6543",
    email: "ny@techsolutions.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346458!3d40.75889713522436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1619635345678!5m2!1sen!2sus"
  },
  
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services does TechSolutions offer?",
    answer: "We offer a comprehensive range of IT services including web development, mobile app development, cloud solutions, AI & machine learning, DevOps services, and IT consulting. Our team of experts works closely with clients to deliver customized solutions that meet their specific business needs."
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months or more. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, performance optimization, and feature enhancements. We have flexible support packages to suit different needs and budgets."
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: "Our pricing is project-based and depends on various factors including project scope, technology stack, timeline, and required resources. We provide transparent, detailed quotes after understanding your requirements. We also offer flexible payment plans for larger projects."
  },
  {
    id: 5,
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! Our team has expertise in a wide range of technologies and frameworks. We can seamlessly integrate with your existing systems or help you modernize your technology stack. We conduct a thorough assessment before starting any project to ensure compatibility."
  },
  {
    id: 6,
    question: "Do you sign NDAs and protect client confidentiality?",
    answer: "Yes, we take confidentiality very seriously. We're happy to sign Non-Disclosure Agreements (NDAs) before discussing your project details. All client information and intellectual property are protected under strict confidentiality agreements."
  },
  {
    id: 7,
    question: "What industries do you specialize in?",
    answer: "We have experience across multiple industries including e-commerce, healthcare, finance, education, real estate, and entertainment. Our diverse portfolio allows us to bring best practices from various sectors to your project."
  },
  {
    id: 8,
    question: "How do you ensure project quality?",
    answer: "We follow industry-standard development practices including code reviews, automated testing, continuous integration/deployment, and quality assurance processes. Each project goes through rigorous testing phases before delivery to ensure it meets our high-quality standards."
  }
];




//Careers page 
// Types
export interface Job {
  id: number;
  title: string;
  category: string;
  experience: string;
  deadline: string;
  location: string;
  type: string;
  description: string;
}

export interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Dummy Data
export const jobs: Job[] = [
  {
    id: 1,
    title: "Wordpress Developer",
    category: "Engineering",
    experience: "2 Years",
    deadline: "2021-05-08",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced WordPress developer to join our team."
  },
  {
    id: 2,
    title: "Javascript Developer",
    category: "Engineering",
    experience: "1 Years",
    deadline: "2021-05-08",
    location: "Remote",
    type: "Full-time",
    description: "Join our frontend team to build amazing web applications."
  },
  {
    id: 3,
    title: "Apps Developer",
    category: "Engineering",
    experience: "3 Years",
    deadline: "2021-05-08",
    location: "New York, NY",
    type: "Full-time",
    description: "Create innovative mobile applications for iOS and Android."
  },
  {
    id: 4,
    title: "IOS Developer",
    category: "Engineering",
    experience: "2 Years",
    deadline: "2021-05-08",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build cutting-edge iOS applications using Swift and SwiftUI."
  },
  {
    id: 5,
    title: "Node JS Developer",
    category: "Engineering",
    experience: "3 Years",
    deadline: "2021-05-08",
    location: "Remote",
    type: "Full-time",
    description: "Develop scalable backend services with Node.js and Express."
  },
  {
    id: 6,
    title: "Senior UI/UX Designer",
    category: "Design",
    experience: "4 Years",
    deadline: "2021-06-15",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead design initiatives and create exceptional user experiences."
  },
  {
    id: 7,
    title: "Product Designer",
    category: "Design",
    experience: "2 Years",
    deadline: "2021-06-20",
    location: "Remote",
    type: "Contract",
    description: "Design beautiful and intuitive product interfaces."
  },
  {
    id: 8,
    title: "Digital Marketing Manager",
    category: "Digital Marketing",
    experience: "3 Years",
    deadline: "2021-06-10",
    location: "New York, NY",
    type: "Full-time",
    description: "Drive our digital marketing strategy and campaigns."
  },
  {
    id: 9,
    title: "SEO Specialist",
    category: "Digital Marketing",
    experience: "2 Years",
    deadline: "2021-06-12",
    location: "Remote",
    type: "Part-time",
    description: "Optimize our web presence and improve search rankings."
  },
  {
    id: 10,
    title: "Technical Support Engineer",
    category: "Support",
    experience: "1 Years",
    deadline: "2021-06-05",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Provide technical support to our valued customers."
  },
  {
    id: 11,
    title: "Customer Success Manager",
    category: "Support",
    experience: "2 Years",
    deadline: "2021-06-18",
    location: "Remote",
    type: "Full-time",
    description: "Ensure customer satisfaction and drive retention."
  },
  {
    id: 12,
    title: "HR Manager",
    category: "HT & Admin",
    experience: "3 Years",
    deadline: "2021-06-25",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Manage HR operations and talent acquisition."
  },
  {
    id: 13,
    title: "DevOps Engineer",
    category: "Engineering",
    experience: "3 Years",
    deadline: "2021-07-01",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our cloud infrastructure."
  },
  {
    id: 14,
    title: "Data Scientist",
    category: "Engineering",
    experience: "4 Years",
    deadline: "2021-07-05",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Analyze data and build ML models to drive insights."
  },
  {
    id: 15,
    title: "Content Writer",
    category: "Digital Marketing",
    experience: "1 Years",
    deadline: "2021-07-10",
    location: "Remote",
    type: "Contract",
    description: "Create engaging content for our blog and social media."
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    icon: <Users size={40} />,
    title: "Team work",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
  },
  {
    id: 2,
    icon: <Award size={40} />,
    title: "Secured Future",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
  },
  {
    id: 3,
    icon: <TrendingUp size={40} />,
    title: "Learning Opportunity",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
  },
  {
    id: 4,
    icon: <Heart size={40} />,
    title: "Upgrade Skills",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
  }
];



//Job Details Page 
// Types
export interface JobDetail {
  id: number;
  title: string;
  category: string;
  experience: string;
  deadline: string;
  location: string;
  type: string;
  salary: string;
  workplaceType: string;
  primaryResponsibility: string;
  jobSpecifications: string[];
  employmentType: string;
  experienceRequired: string;
  description: string;
  benefits: string[];
}


// Current Job Data
export const currentJob: JobDetail = {
  id: 1,
  title: "Full Stack Developer",
  category: "Engineering",
  experience: "3 Years",
  deadline: "2025-12-31",
  location: "Chennai, Madurai, Coimbatore",
  type: "Full-time",
  salary: "Commensurate with experience and skills",
  workplaceType: "Hybrid",
  primaryResponsibility: `Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases and APIs using technologies such as Node.js, Python, Ruby, or Java.Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval.Using version control systems like Git to manage code changes and collaborate with other developers.Implementing security best practices to protect applications from vulnerabilities and threats.Automating deployment processes and managing CI/CD pipelines to streamline development and release cycles.Working with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software.`,
  jobSpecifications: [
    "Proficiency in front-end technologies HTML, CSS, JavaScript frameworks like React or Angular.",
    "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
    "Experience in designing and managing databases (SQL and NoSQL)",
    "Proficiency in schema design and query optimization.",
    "Strong knowledge of version control systems, particularly Git.",
    "Expertise in managing and collaborating on code repositories.",
    "Knowledge of web security best practices.",
    "Experience with performance optimization techniques.",
    "Excellent collaboration skills for working effectively in a team environment",
    "Ability to communicate technical concepts to non-technical stakeholders."
  ],
  employmentType: "Full-time",
  experienceRequired: "Minimum 3 Years",
  description: "We are looking for a talented Full Stack Developer to join our growing team. You will be responsible for developing and maintaining both front-end and back-end components of our web applications.",
  benefits: [
    "Competitive salary package",
    "Health insurance coverage",
    "Flexible working hours",
    "Remote work options",
    "Professional development opportunities",
    "Annual performance bonuses",
    "Collaborative work environment",
    "Latest technology stack"
  ]
};



//Service Details page 
// Types
export interface ServiceDetail {
  id: number;
  title: string;
  icon: string;
  category: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  benefits: string[];
  technologies: string[];
  process: ProcessStep[];
  pricing: PricingTier[];
  faqs: FAQ[];
  caseStudies: CaseStudy[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  image: string;
}

export interface RelatedService {
  id: number;
  title: string;
  icon: string;
  description: string;
}

// Current Service Data
export const currentService: ServiceDetail = {
  id: 1,
  title: "Web Development",
  icon: "💻",
  category: "Development",
  description: "Custom web applications built with modern frameworks and best practices for optimal performance",
  longDescription: "Our web development services encompass everything from simple landing pages to complex enterprise applications. We leverage cutting-edge technologies and methodologies to create scalable, secure, and high-performing web solutions that drive business growth. Our team of expert developers works closely with you to understand your requirements and deliver solutions that exceed expectations.",
  keyFeatures: [
    "Responsive Design - Works seamlessly across all devices",
    "Performance Optimization - Lightning-fast load times",
    "SEO-Friendly - Built with search engine optimization in mind",
    "Scalable Architecture - Grows with your business",
    "Security First - Industry-standard security practices",
    "Cross-Browser Compatible - Works on all major browsers",
    "Progressive Web Apps - App-like experience on web",
    "API Integration - Connect with third-party services"
  ],
  benefits: [
    "Increased online visibility and reach",
    "Enhanced user experience and engagement",
    "Improved conversion rates",
    "Reduced development costs",
    "Faster time to market",
    "Better customer retention"
  ],
  technologies: [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker"
  ],
  process: [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      icon: <Target size={32} />
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our designers create intuitive wireframes and interactive prototypes for your approval.",
      icon: <Code size={32} />
    },
    {
      step: 3,
      title: "Development",
      description: "Our developers bring designs to life with clean, efficient, and maintainable code.",
      icon: <Rocket size={32} />
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your application.",
      icon: <Star size={32} />
    }
  ],
  pricing: [
    {
      name: "Starter",
      price: "$5,000",
      description: "Perfect for small businesses",
      features: [
        "5-10 pages",
        "Responsive design",
        "Basic SEO",
        "Contact form",
        "3 months support"
      ]
    },
    {
      name: "Professional",
      price: "$15,000",
      description: "Ideal for growing companies",
      features: [
        "15-25 pages",
        "Advanced features",
        "Complete SEO",
        "CMS integration",
        "6 months support",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom features",
        "Priority support",
        "Dedicated team",
        "12 months support",
        "Performance monitoring"
      ]
    }
  ],
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies based on complexity. A simple website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! We offer maintenance packages that include updates, security patches, performance monitoring, and technical support to keep your website running smoothly."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure the best user experience across all platforms."
    },
    {
      question: "Can you help with website hosting?",
      answer: "Yes, we can help you choose and set up the right hosting solution for your needs, whether it's shared hosting, VPS, or cloud infrastructure like AWS or Azure."
    },
    {
      question: "Do you redesign existing websites?",
      answer: "Certainly! We can modernize your existing website with a fresh design, improved functionality, and better performance while maintaining your brand identity."
    }
  ],
  caseStudies: [
    {
      title: "E-Commerce Platform",
      client: "RetailCo",
      result: "300% increase in online sales",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop"
    },
    {
      title: "SaaS Dashboard",
      client: "TechStart",
      result: "50% reduction in load time",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Corporate Website",
      client: "GlobalCorp",
      result: "200% boost in engagement",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    }
  ]
};

// Related Services
export const relatedServices: RelatedService[] = [
  {
    id: 2,
    title: "Mobile App Development",
    icon: "📱",
    description: "Native and cross-platform mobile solutions"
  },
  {
    id: 7,
    title: "UI/UX Design",
    icon: "🎨",
    description: "Beautiful, intuitive interface design"
  },
  {
    id: 3,
    title: "Cloud Services",
    icon: "☁️",
    description: "Scalable cloud infrastructure"
  },
  {
    id: 16,
    title: "API Development",
    icon: "🔌",
    description: "Robust and scalable APIs"
  }
];



//Project Details Page 
// Types
export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  client: string;
  date: string;
  duration: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  technologies: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    avatar: string;
  };
}



// Current Project Data
export const currentProject: ProjectDetail = {
  id: 1,
  title: "AirFlow X - SaaS Website Template",
  description: "A modern, responsive SaaS website template designed for scalability and performance",
  longDescription: "AirFlow X is a comprehensive SaaS website template built with cutting-edge technologies and best practices. This template provides a complete solution for SaaS businesses looking to establish a strong online presence. With its modern design, intuitive user experience, and powerful features, AirFlow X helps businesses convert visitors into customers effectively.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  tags: ["SaaS", "Webflow", "UI/UX"],
  category: "Web Design",
  client: "TechStart Inc.",
  date: "January 2024",
  duration: "8 Weeks",
  gallery: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  ],
  challenge: "The client needed a website template that could handle rapid growth while maintaining excellent performance and user experience. They required a solution that was both visually appealing and highly functional, with easy customization options for different business needs.",
  solution: "We developed AirFlow X using modern web technologies with a component-based architecture. The template features a modular design system, allowing for easy customization and scalability. We implemented advanced performance optimization techniques and ensured responsive design across all devices.",
  results: [
    "50% improvement in page load speed",
    "300% increase in user engagement",
    "95% client satisfaction rate",
    "40% reduction in bounce rate",
    "200+ successful implementations"
  ],
  features: [
    "Fully responsive design across all devices",
    "Dark mode support with smooth transitions",
    "Advanced animation and micro-interactions",
    "SEO-optimized structure and content",
    "Performance-optimized with lazy loading",
    "Accessible design following WCAG guidelines",
    "Easy customization with design tokens",
    "Cross-browser compatibility"
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Webflow",
    "Figma",
    "Git"
  ],
  testimonial: {
    text: "Working with TechSolutions on AirFlow X was an absolute pleasure. They delivered a product that exceeded our expectations in every way. The attention to detail and commitment to quality is unmatched.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
};

// FAQs
export const faqsForProduct: FAQ[] = [
  {
    question: "What is included in this project?",
    answer: "The project includes complete source files, documentation, design assets, and full support for implementation. You'll receive all components, pages, and resources needed to deploy the solution."
  },
  {
    question: "Can I customize this template?",
    answer: "Absolutely! The template is built with customization in mind. It uses a modular component structure and design tokens, making it easy to adjust colors, typography, spacing, and layout to match your brand."
  },
  {
    question: "Is this project mobile-responsive?",
    answer: "Yes, the project is fully responsive and optimized for all device sizes including mobile phones, tablets, and desktop computers. It provides an excellent user experience across all platforms."
  },
  {
    question: "What technologies were used?",
    answer: "This project was built using modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. These technologies ensure optimal performance, maintainability, and scalability."
  },
  {
    question: "Do you provide support after delivery?",
    answer: "Yes, we provide comprehensive post-delivery support including bug fixes, minor updates, and technical assistance for a specified period. Extended support packages are also available."
  },
  {
    question: "Can I see a live demo?",
    answer: "Yes, a live demo is available. Contact us to request access to the demo environment where you can explore all features and functionality in detail."
  }
];


//Video testimonial
// Types
export interface VideoTestimonial {
  id: number;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientImage: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  rating: number;
}

// Dummy Video Testimonials Data
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    clientName: "Pall",
    clientPosition: "CEO",
    clientCompany: "TechVision Inc",
    clientImage: "https://i.pravatar.cc/150?img=12", 
    videoUrl: "/video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop",
    description: "Working with TechSolutions has been transformative for our business. Their expertise in web development and cloud solutions helped us scale our operations efficiently. The team's dedication and innovative approach exceeded all our expectations.",
    rating: 5
  },
  {
    id: 2,
    clientName: "Michael Chen",
    clientPosition: "CTO",
    clientCompany: "InnovateCorp",
    clientImage: "https://i.pravatar.cc/150?img=5",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    description: "The mobile app they developed for us is outstanding! Not only did they deliver on time, but the quality of work and attention to detail was exceptional. Our user engagement increased by 300% within the first month of launch.",
    rating: 5
  },
  {
    id: 3,
    clientName: "Emily Rodriguez",
    clientPosition: "Product Manager",
    clientCompany: "DataFlow Systems",
    clientImage: "https://i.pravatar.cc/150?img=9",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    description: "TechSolutions provided us with a comprehensive data analytics platform that revolutionized how we make business decisions. Their team understood our complex requirements and delivered a solution that perfectly fits our needs.",
    rating: 5
  },
  {
    id: 4,
    clientName: "David Park",
    clientPosition: "Founder",
    clientCompany: "StartupHub",
    clientImage: "https://i.pravatar.cc/150?img=13",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop",
    description: "As a startup, we needed a reliable technology partner who could grow with us. TechSolutions not only built our platform but also provided invaluable consulting that helped shape our product strategy. Highly recommend!",
    rating: 5
  }
];