import { Award, Zap, Heart, Shield } from 'lucide-react';


//Home page 
// Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

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

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance",
    icon: "💻"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences",
    icon: "📱"
  },
  {
    id: 3,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services for modern businesses",
    icon: "☁️"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven insights powered by advanced AI technologies",
    icon: "🤖"
  },
  {
    id: 5,
    title: "DevOps Solutions",
    description: "Streamlined development pipelines and automated deployment for faster delivery",
    icon: "⚙️"
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Strategic technology guidance to help your business stay ahead of the competition",
    icon: "📊"
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