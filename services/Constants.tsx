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