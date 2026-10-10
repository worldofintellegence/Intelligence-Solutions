import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Sparkles,
  Globe2,
  Smartphone,
  Gamepad2,
  Network,
  Bot,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Cpu,
  Zap,
  Menu,
  X,
  ShieldCheck,
  Clock,
  Code2,
  Rocket,
  Search,
  Sliders,
  ChevronRight,
  ChevronDown,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquareText,
  Terminal,
  HelpCircle,
  Quote,
  Star,
  Flame,
  Activity,
  Laptop,
  Sun,
  Moon,
  QrCode,
  Tv,
  Share2,
  Mic,
  Server
} from 'lucide-react'
import './styles.css'

// Helper to resolve public assets correctly on GitHub Pages or custom domain
const toAsset = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}

// Featured Clients for Infinite Logo Slider
const CLIENTS_SLIDER = [
  {
    name: 'Scan to Move',
    domain: 'scan2move.store',
    category: 'Vehicle QR Platform',
    url: 'https://scan2move.store/',
    badge: 'Live Platform',
    icon: QrCode,
    logoUrl: toAsset('clients/scan-to-move.jpg'),
  },
  {
    name: 'Anime Express TV',
    domain: 'animeexpresstv.com',
    category: 'Complete Cloud Architecture',
    url: 'https://animeexpresstv.com/',
    badge: 'Enterprise Cloud',
    icon: Tv,
    logoUrl: toAsset('clients/anime-express-tv-icon.webp'),
  },
  {
    name: 'FileShift: Send Files Offline',
    domain: 'Apple App Store',
    category: 'iOS P2P Offline Transfer',
    url: 'https://apps.apple.com/nl/app/fileshift-send-files-offline/id6759545902?l=en-GB',
    badge: 'iOS App Store',
    icon: Share2,
    logoUrl: toAsset('clients/fileshift.jpg'),
  },
  {
    name: 'VoiceAI IoT Engine',
    domain: 'Connected Edge Hardware',
    category: 'AI Voice Assistant Software',
    url: '#portfolio',
    badge: 'IoT Voice AI',
    icon: Mic,
    logoUrl: toAsset('clients/voiceai-iot.jpg'),
  },
  {
    name: 'CIEL Tech',
    domain: 'Enterprise Cloud Suite',
    category: 'High-Availability Microservices',
    url: '#portfolio',
    badge: 'Cloud Systems',
    icon: Server,
    logoUrl: toAsset('clients/ciel-tech.jpg'),
  },
  {
    name: 'Makraise Studios',
    domain: 'Creative Game Tech',
    category: 'Interactive 3D & WebGL Engine',
    url: '#portfolio',
    badge: 'Game Studio',
    icon: Gamepad2,
    logoUrl: toAsset('clients/makraise.jpg'),
  },
]

// 6 Core Services
const SERVICES = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Solutions',
    short: 'Intelligent automation & machine learning pipelines',
    desc: 'From custom model integration to computer vision and autonomous agentic workflows. We build intelligent software backends that solve complex operational problems.',
    icon: Sparkles,
    tags: ['Machine Learning', 'Computer Vision', 'Agentic Workflows', 'Vector DBs / RAG', 'Predictive APIs'],
    deliverable: 'Autonomous AI pipelines & custom models',
    badge: 'Popular',
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Applications',
    short: 'Scalable SaaS & high-performance platforms',
    desc: 'Production-ready full-stack web platforms engineered for fast load speeds, fluid UX, high concurrency, and seamless scalability from Day 1.',
    icon: Globe2,
    tags: ['React & Next.js', 'REST & GraphQL APIs', 'Realtime WebSockets', 'PostgreSQL & Redis', 'Cloud Infrastructure'],
    deliverable: 'Full-stack cloud application & API suite',
    badge: 'Core',
  },
  {
    id: 'mobile',
    number: '03',
    title: 'Mobile Apps',
    short: 'Cross-platform iOS & Android products',
    desc: 'Native-feel mobile products designed for responsive touch interactions, offline-first data sync, background notifications, and frictionless app-store release.',
    icon: Smartphone,
    tags: ['iOS & Android', 'React Native / Flutter', 'Offline Sync', 'Biometrics & Payments', 'App Store Launch'],
    deliverable: 'Tested iOS & Android binaries ready for store launch',
    badge: 'Mobile Native',
  },
  {
    id: 'game',
    number: '04',
    title: 'Game Development',
    short: 'Interactive 3D, WebGL & physics engines',
    desc: 'Engaging real-time interactive worlds, browser-based 3D applications, WebGL simulations, and games powered by Unity and modern graphics pipelines.',
    icon: Gamepad2,
    tags: ['Unity & Unreal', 'WebGL 3D', 'Realtime Physics', 'Multiplayer Networking', 'Interactive Shaders'],
    deliverable: 'Playable interactive build with custom shaders & assets',
    badge: 'Interactive 3D',
  },
  {
    id: 'iot',
    number: '05',
    title: 'IoT & Connected Systems',
    short: 'Hardware-to-cloud telemetry & device networks',
    desc: 'Bridging physical hardware and digital platforms. Real-time telemetry streaming, firmware-to-cloud communication, sensor edge processing, and hardware fleet dashboards.',
    icon: Network,
    tags: ['MQTT & WebSockets', 'Hardware Firmware', 'Edge Computing', 'Sensor Dashboards', 'OTA Updates'],
    deliverable: 'Bi-directional IoT telemetry hub & fleet controller',
    badge: 'Connected IoT',
  },
  {
    id: 'chatbots',
    number: '06',
    title: 'Chatbots & Automation',
    short: 'Conversational copilots & workflow automations',
    desc: 'Context-aware conversational agents for customer support, CRM lead capture, internal knowledge retrieval, and automated multi-step operational workflows.',
    icon: Bot,
    tags: ['Slack / WhatsApp Bots', 'CRM Automation', 'Function Calling', 'RAG Knowledge Bases', 'Multi-turn Dialog'],
    deliverable: 'Omnichannel conversational bot & webhook integrations',
    badge: 'Automation',
  },
]

// Portfolio Projects with real client links
const PORTFOLIO_PROJECTS = [
  {
    id: 'scan-to-move',
    name: 'Scan to Move',
    category: 'IoT & Connected Systems',
    tag: 'Smart Vehicle QR Platform',
    liveUrl: 'https://scan2move.store/',
    logoUrl: toAsset('clients/scan-to-move.jpg'),
    monogram: 'SM',
    metric: '100% Privacy',
    metricLabel: 'Zero phone number disclosure',
    shortDesc: 'Instant vehicle QR communication platform. Scan the QR code on any parked car to securely alert the owner without disclosing personal phone numbers.',
    fullDesc: 'We engineered the complete technical architecture for Scan to Move (scan2move.store). The product features instant QR generation, masked twilio and push notifications, an ultra-fast responsive mobile web client, and an integrated vehicle sticker store with secure checkout.',
    technologies: ['React & Next.js', 'QR Code Engine', 'Encrypted Telephony', 'Cloudflare Edge', 'Stripe Payments'],
    outcome: 'Live vehicle platform with active users across commercial parking lots and residential communities.',
  },
  {
    id: 'anime-express-tv',
    name: 'Anime Express TV',
    category: 'Digital Media & Web Apps',
    tag: 'Complete Cloud Architecture',
    liveUrl: 'https://animeexpresstv.com/',
    logoUrl: toAsset('clients/anime-express-tv-icon.webp'),
    monogram: 'AE',
    metric: '99.99% Uptime',
    metricLabel: 'Global streaming cloud infrastructure',
    shortDesc: 'Complete cloud architecture handling their global digital streaming business with automated transcoding, edge CDN delivery, and elastic scalability.',
    fullDesc: 'Architected and deployed the enterprise cloud backbone for Anime Express TV (animeexpresstv.com). The system handles high-throughput video ingestion, distributed HLS edge transcoding, adaptive multi-bitrate delivery, and a robust media caching layer with zero streaming buffer lag.',
    technologies: ['Distributed Cloud', 'HLS Edge Streaming', 'AWS & Kubernetes', 'Redis Cluster', 'Adaptive Bitrate'],
    outcome: 'Reduced media buffering by 64% and seamlessly handled traffic spikes over 1.2M concurrent requests.',
  },
  {
    id: 'fileshift',
    name: 'FileShift: Send Files Offline',
    category: 'Mobile Apps',
    tag: 'Apple App Store iOS App',
    liveUrl: 'https://apps.apple.com/nl/app/fileshift-send-files-offline/id6759545902?l=en-GB',
    logoUrl: toAsset('clients/fileshift.jpg'),
    monogram: 'FS',
    metric: '200x Faster',
    metricLabel: 'Offline P2P transfer vs Bluetooth',
    shortDesc: 'Native iOS offline file transfer app delivering direct WiFi peer-to-peer speeds up to 200x faster than Bluetooth with zero internet required.',
    fullDesc: 'Engineered a high-performance Apple iOS mobile application published on the App Store. FileShift creates an encrypted direct WiFi peer-to-peer network between iPhones and iPads to transfer full-resolution 4K videos, photos, and large files offline in seconds with zero cloud dependency.',
    technologies: ['iOS Swift / React Native', 'P2P WiFi Direct', 'AES-256 Encryption', 'In-App Subscriptions', 'Local Networking'],
    outcome: 'Featured on the Apple App Store Utilities category with 5-star ratings and instant device-to-device transfers.',
  },
  {
    id: 'voice-ai-iot',
    name: 'VoiceAI IoT Engine',
    category: 'IoT & Connected Systems',
    tag: 'Voice Assistant Powered Software',
    liveUrl: '#contact',
    logoUrl: toAsset('clients/voiceai-iot.jpg'),
    monogram: 'VA',
    metric: '< 180ms',
    metricLabel: 'On-device voice-to-intent latency',
    shortDesc: 'Embedded AI voice assistant software running on connected IoT hardware with on-device wake-word detection, speech-to-intent engine, and cloud fleet telemetry.',
    fullDesc: 'Architected edge computing firmware and cloud bridge for hardware devices. Includes custom wake-word neural models, low-latency on-device voice processing, secure MQTT telemetry, and bidirectional cloud device synchronization.',
    technologies: ['Embedded Linux / C++', 'Edge Voice AI (STT/TTS)', 'MQTT Broker', 'WebSockets', 'Cloud Fleet Management'],
    outcome: 'Deployed to smart connected hardware units enabling hands-free voice automation without latency lag.',
  },
  {
    id: 'ciel-tech',
    name: 'CIEL Tech',
    category: 'Enterprise Web & AI',
    tag: 'Enterprise Cloud Architecture',
    liveUrl: '#portfolio',
    logoUrl: toAsset('clients/ciel-tech.jpg'),
    monogram: 'CT',
    metric: '99.99% Uptime',
    metricLabel: 'High-availability microservices',
    shortDesc: 'Mission-critical enterprise software suite featuring intelligent automated data analysis, distributed microservices, and secure role-based access.',
    fullDesc: 'CIEL Tech required a robust cloud overhaul capable of processing multi-gigabyte business datasets in real-time. We architected a scalable distributed cloud system with automated asynchronous queues and an intelligent prediction module.',
    technologies: ['Next.js', 'Go Microservices', 'Kafka', 'PostgreSQL', 'Docker / Kubernetes'],
    outcome: 'Reduced report generation turnaround from 4 hours to 38 seconds for tier-1 corporate clients.',
  },
  {
    id: 'makraise-studios',
    name: 'Makraise Studios',
    category: 'Game Development',
    tag: 'Interactive Game Tech',
    liveUrl: '#portfolio',
    logoUrl: toAsset('clients/makraise.jpg'),
    monogram: 'MS',
    metric: '60 FPS Native',
    metricLabel: 'WebGL & Unity optimization',
    shortDesc: 'Creative technology and interactive game engine development featuring real-time physics simulation and dynamic particle shaders.',
    fullDesc: 'A flagship collaboration focused on building high-performance interactive experiences across web and native platforms. Our team engineered modular character physics, custom rendering shaders, and cloud state synchronization.',
    technologies: ['Unity Engine', 'WebGL Shaders', 'C# Systems', 'Spatial Audio', 'Multiplayer Netcode'],
    outcome: 'Over 400,000 unique players during open beta with zero server downtime and fluid 60 FPS performance.',
  },
]

// 4-Step Process: Discover → Define MVP → Build → Launch
const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'Discover',
    title: 'Discover & Technical Feasibility',
    timeline: 'Sprint 1 • Days 1 – 7',
    desc: 'We unpack your core vision, analyze the target audience, map user journeys, and evaluate technical feasibility to eliminate risks before writing code.',
    deliverables: ['Problem-Solution Blueprint', 'Architecture Feasibility Study', 'Tech Stack Selection', 'Risk Mitigation Plan'],
    icon: Search,
  },
  {
    step: '02',
    phase: 'Define MVP',
    title: 'Define MVP & Interactive Prototype',
    timeline: 'Sprint 2 • Days 8 – 14',
    desc: 'We ruthlessly prioritize the essential 20% of features that will deliver 80% of customer value. We draft the data schemas, API contracts, and clickable prototypes.',
    deliverables: ['Clickable Prototype', 'MVP Scope Matrix', 'Database & API Specifications', 'Sprint Milestone Roadmap'],
    icon: Sliders,
  },
  {
    step: '03',
    phase: 'Build',
    title: 'Agile Engineering & Continuous Testing',
    timeline: 'Sprints 3–5 • Weeks 3 – 6',
    desc: 'High-velocity 2-week agile development cycles with regular staging demos. We write clean, tested, modular code with full CI/CD deployment pipelines.',
    deliverables: ['Weekly Staging Builds', 'Automated Test Coverage', 'Clean Modular Codebase', 'Bi-weekly Video Demos'],
    icon: Code2,
  },
  {
    step: '04',
    phase: 'Launch',
    title: 'Production Launch & Growth Handover',
    timeline: 'Sprint 6 • Weeks 7 – 8',
    desc: 'Production infrastructure hardening, telemetry monitoring, app store submission, and full IP handover. We stay by your side for post-launch user validation.',
    deliverables: ['Production Cloud Deployment', 'Telemetry & Error Monitoring', '100% Code & IP Handover', 'Post-Launch Support Period'],
    icon: Rocket,
  },
]

// Founder Testimonials
const TESTIMONIALS = [
  {
    quote: 'Intelligence Solutions built our Scan to Move platform with incredible speed. The privacy-first vehicle QR architecture and sticker store works flawlessly.',
    author: 'Founder',
    role: 'Product Lead',
    company: 'Scan to Move',
    logoUrl: toAsset('clients/scan-to-move.jpg'),
    stars: 5,
  },
  {
    quote: 'They engineered the complete cloud architecture handling our global streaming platform. 99.99% uptime and zero latency even during massive traffic surges.',
    author: 'Architecture Team',
    role: 'Infrastructure Lead',
    company: 'Anime Express TV',
    logoUrl: toAsset('clients/anime-express-tv-icon.webp'),
    stars: 5,
  },
  {
    quote: 'FileShift on the App Store proves their native mobile capabilities. Offline P2P transfers are 200x faster than Bluetooth and our users love the simplicity.',
    author: 'Engineering Lead',
    role: 'Mobile Product Team',
    company: 'FileShift',
    logoUrl: toAsset('clients/fileshift.jpg'),
    stars: 5,
  },
  {
    quote: 'Their AI voice assistant software running on embedded hardware solved our edge latency problem. An unmatched technical partner for complex systems.',
    author: 'Hardware Architect',
    role: 'IoT Systems',
    company: 'VoiceAI IoT',
    logoUrl: toAsset('clients/voiceai-iot.jpg'),
    stars: 5,
  },
]

// Tech Stack Tags
const TECH_STACK = [
  'Python & PyTorch',
  'TypeScript',
  'React 18 & Next.js',
  'Node.js & Go',
  'Unity Engine & C#',
  'iOS (Swift & React Native)',
  'PostgreSQL & Redis',
  'WebSockets & MQTT',
  'Docker & Kubernetes',
  'AWS & Cloudflare Edge',
  'Tailwind CSS',
  'Edge Voice AI & IoT',
]

// Technical FAQs
const FAQS = [
  {
    q: 'How fast can we launch our MVP?',
    a: 'Our typical end-to-end MVP cycle is 6 to 8 weeks from the first discovery workshop to production deployment. Because we use battle-tested architectural boilerplates and agile 2-week sprints, we bypass common development roadblocks.',
  },
  {
    q: 'Who owns the intellectual property and code?',
    a: 'You own 100% of all source code, repository commits, cloud accounts, and intellectual property from Day 1. We provide clean documentation and zero vendor lock-in.',
  },
  {
    q: 'Can you handle production cloud architecture and App Store submissions?',
    a: 'Yes! As demonstrated with Anime Express TV (complete streaming cloud architecture) and FileShift (approved and live on the Apple App Store), we handle complete infrastructure setup, CI/CD pipelines, and app store compliance.',
  },
  {
    q: 'Can you build custom AI and IoT voice hardware software?',
    a: 'Absolutely. We build embedded firmware, on-device voice processing engines, and real-time MQTT telemetry pipelines connecting physical hardware to web/mobile companion apps.',
  },
  {
    q: 'What happens after the MVP is launched?',
    a: 'We provide 30 days of complimentary post-launch support and telemetry monitoring. Afterward, you can transition to our fractional CTO retainer or we help recruit and onboard your permanent internal engineering team.',
  },
]

// Budget Ranges
const BUDGET_OPTIONS = [
  { label: 'Under $5,000', value: 'Under $5,000', note: 'Prototype / Proof of Concept', sprint: '3–4 Weeks', squad: '1 Senior Full-Stack Engineer' },
  { label: '$5,000 – $15,000', value: '$5,000 - $15,000', note: 'Standard MVP Sprint', sprint: '6–8 Weeks', squad: '1 Tech Lead + 1 Full-Stack + 1 UI/UX' },
  { label: '$15,000 – $30,000', value: '$15,000 - $30,000', note: 'Full-Scale Production Launch', sprint: '8–10 Weeks', squad: '1 Lead Architect + 2 Full-Stack + 1 QA' },
  { label: '$30,000+', value: '$30,000+', note: 'Enterprise / Complex Ecosystem', sprint: '10–14 Weeks', squad: 'Dedicated 4-Person Engineering Squad' },
  { label: 'Exploring / Flexible', value: 'Exploring / Flexible', note: 'Technical Scoping Needed', sprint: 'Tailored', squad: 'CTO Advisory + Architecture Review' },
]

// Project Type Options
const PROJECT_TYPES = [
  'MVP / Complete Product',
  'AI Solutions',
  'Web Applications',
  'Mobile Apps (iOS & Android)',
  'Game Development',
  'IoT & Connected Systems',
  'Chatbots & Automation',
]

// Timeline Options
const TIMELINE_OPTIONS = [
  'Urgent (< 4 weeks)',
  'Standard (6–8 weeks)',
  'Flexible (2–3 months)',
]

export default function App() {
  const [theme, setTheme] = useState('light') // Default: Clean Light Theme!
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [copiedSummary, setCopiedSummary] = useState(false)
  const [inquiryId, setInquiryId] = useState('')

  // Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'MVP / Complete Product',
    budget: '$5,000 - $15,000',
    timeline: 'Standard (6–8 weeks)',
    details: '',
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Active budget details
  const activeBudgetConfig = BUDGET_OPTIONS.find((b) => b.value === form.budget) || BUDGET_OPTIONS[1]

  // Dynamic logos depending on theme
  const brandLogoUrl = theme === 'light' ? toAsset('company-logo-emerald.jpg') : toAsset('company-logo.jpg')
  const brandMarkUrl = theme === 'light' ? toAsset('company-mark-emerald.jpg') : toAsset('company-mark.jpg')

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const randomRef = 'IS-' + Math.floor(1000 + Math.random() * 9000)
    setInquiryId(randomRef)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#059669', '#10b981', '#047857', '#34d399', '#f59e0b'],
        })
      } catch (err) {
        // Fallback
      }
    }, 600)
  }

  // Handle service quick select
  const handleSelectService = (serviceTitle) => {
    setForm((prev) => ({
      ...prev,
      projectType: serviceTitle,
    }))
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Copy inquiry summary
  const handleCopySummary = () => {
    const summaryText = `[Inquiry Ref: ${inquiryId}]\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\nProject Type: ${form.projectType}\nEstimated Budget: ${form.budget}\nTimeline: ${form.timeline}\nEstimated Squad: ${activeBudgetConfig.squad}\nEstimated Sprint: ${activeBudgetConfig.sprint}\nDetails: ${form.details}`
    navigator.clipboard.writeText(summaryText)
    setCopiedSummary(true)
    setTimeout(() => setCopiedSummary(false), 2500)
  }

  // Compose mailto link
  const mailtoLink = `mailto:hello@intelligencesolutions.dev?subject=${encodeURIComponent(`New MVP Project Inquiry [${form.projectType}] - ${inquiryId || 'New'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'Not provided'}\nProject Type: ${form.projectType}\nBudget Range: ${form.budget}\nTarget Timeline: ${form.timeline}\nEstimated Sprint: ${activeBudgetConfig.sprint}\n\nProject Scope & Vision:\n${form.details}`
  )}`

  // Filter projects
  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category.includes(activeCategory))

  return (
    <div className={`site-shell theme-${theme}`}>
      {/* Background Ambient Tint Accents */}
      <div className="ambient-orb ambient-top-emerald" />
      <div className="ambient-orb ambient-top-mint" />
      <div className="ambient-orb ambient-mid-sage" />

      {/* Global Navigation Bar */}
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand-logo-wrap" aria-label="Intelligence Solutions Home">
            <img
              src={brandMarkUrl}
              alt="Intelligence Solutions Emblem"
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-title">INTELLIGENCE</span>
              <span className="brand-sub">SOLUTIONS</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
              <span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>

            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              <span>Build Your MVP</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="mobile-actions-group">
            <button
              onClick={toggleTheme}
              className="theme-toggle-mobile"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-left">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hero-eyebrow"
              >
                <span className="pulsing-indicator" />
                <span>YOUR TECHNICAL PARTNER • FROM FIRST SKETCH TO LAUNCH</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-heading"
              >
                Build Your MVP. <br />
                <span className="gradient-highlight">Turn Your Idea</span> <br />
                Into a Product<span className="brand-period">.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtext"
              >
                We partner with ambitious founders, startups, and product teams to engineer and deploy high-performing digital products across <strong>AI</strong>, <strong>Web apps</strong>, <strong>Mobile apps</strong>, <strong>Game development</strong>, <strong>IoT</strong>, and <strong>Chatbots</strong>.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hero-actions"
              >
                <a href="#contact" className="btn-primary">
                  <span>Start Your MVP Project</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#portfolio" className="btn-secondary">
                  <span>Explore Portfolio</span>
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-guarantees"
              >
                <div className="guarantee-item">
                  <ShieldCheck size={17} className="text-emerald" />
                  <span>100% Code & IP Ownership</span>
                </div>
                <div className="guarantee-item">
                  <Clock size={17} className="text-emerald" />
                  <span>6–8 Weeks Avg. Launch</span>
                </div>
                <div className="guarantee-item">
                  <Zap size={17} className="text-emerald" />
                  <span>Direct CTO & Tech Leads</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Right Visual: Clean Modern Architecture Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-visual-wrapper"
            >
              <div className="visual-core-box">
                <div className="core-ambient-soft" />

                <div className="core-emblem-card">
                  <div className="card-top-bar">
                    <span className="live-status-pill">
                      <span className="dot" /> ACTIVE SPRINT
                    </span>
                    <span className="core-tag">SPRINT v2.4</span>
                  </div>

                  <div className="emblem-container">
                    <img
                      src={brandMarkUrl}
                      alt="Intelligence Solutions Logo Mark"
                      className="core-logo-mark"
                    />
                  </div>

                  <div className="core-pipeline">
                    <span className="p-step">Discover</span>
                    <ChevronRight size={14} className="p-sep" />
                    <span className="p-step">Define MVP</span>
                    <ChevronRight size={14} className="p-sep" />
                    <span className="p-step">Build</span>
                    <ChevronRight size={14} className="p-sep" />
                    <span className="p-step active">Launch</span>
                  </div>
                </div>

                {/* Floating Micro Chips */}
                <div className="float-chip chip-ai">
                  <div className="chip-icon-box brand">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <strong>AI Architecture</strong>
                    <small>LLMs & Neural Systems</small>
                  </div>
                </div>

                <div className="float-chip chip-cloud">
                  <div className="chip-icon-box dark">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <strong>Production Cloud</strong>
                    <small>Zero Technical Debt</small>
                  </div>
                </div>

                <div className="float-chip chip-iot">
                  <div className="chip-icon-box brand">
                    <Network size={16} />
                  </div>
                  <div>
                    <strong>Cross-Platform</strong>
                    <small>Mobile & IoT Ready</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Bottom Telemetry Ribbon */}
          <div className="container hero-ribbon">
            <div className="ribbon-item">
              <span className="ribbon-num">25+</span>
              <span className="ribbon-txt">Products Delivered</span>
            </div>
            <div className="ribbon-sep" />
            <div className="ribbon-item">
              <span className="ribbon-num">6-8 Wks</span>
              <span className="ribbon-txt">Average Time to Market</span>
            </div>
            <div className="ribbon-sep" />
            <div className="ribbon-item">
              <span className="ribbon-num">$15M+</span>
              <span className="ribbon-txt">Client Follow-on Funding</span>
            </div>
            <div className="ribbon-sep" />
            <div className="ribbon-item">
              <span className="ribbon-num">100%</span>
              <span className="ribbon-txt">IP & Source Ownership</span>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS SLIDER SECTION (Requested by User) */}
        <section className="clients-slider-section" id="clients">
          <div className="container">
            <div className="slider-header-wrap">
              <span className="slider-kicker">FEATURED CLIENTS & COLLABORATIONS</span>
              <p className="slider-sub">Products, apps, and complete cloud architectures built in partnership with our engineering team</p>
            </div>
          </div>

          {/* Infinite Marquee Track */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Duplicate array for seamless infinite marquee loop */}
              {[...CLIENTS_SLIDER, ...CLIENTS_SLIDER].map((client, idx) => {
                const ClientIcon = client.icon
                return (
                  <a
                    key={`${client.name}-${idx}`}
                    href={client.url}
                    target={client.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="client-logo-card"
                  >
                    <div className="client-logo-icon-wrap">
                      {client.logoUrl ? (
                        <img src={client.logoUrl} alt={client.name} className="client-logo-img" />
                      ) : (
                        <ClientIcon size={20} />
                      )}
                    </div>
                    <div className="client-logo-meta">
                      <div className="client-name-row">
                        <strong className="client-name">{client.name}</strong>
                        <span className="client-badge">{client.badge}</span>
                      </div>
                      <span className="client-category">{client.category}</span>
                      <span className="client-domain">{client.domain} <ExternalLink size={11} className="inline-icon" /></span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* TECH STACK TICKER / STRIP */}
        <section className="tech-stack-strip">
          <div className="container">
            <div className="stack-wrap">
              <span className="stack-label">PROVEN TECH:</span>
              <div className="stack-pills">
                {TECH_STACK.map((tech) => (
                  <span key={tech} className="stack-pill-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 SERVICES SECTION */}
        <section className="section-padding services-section-bg" id="services">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>FULL-SPECTRUM CAPABILITIES</span>
              </div>
              <h2 className="section-title">
                Six Core Services to <span className="gradient-highlight">Build Anything.</span>
              </h2>
              <p className="section-subtitle">
                Whether you need a custom AI copilot, an enterprise-grade web application, or real-time IoT hardware telemetry, our engineering squad handles every layer.
              </p>
            </div>

            <div className="services-grid">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="service-card group"
                  >
                    <div className="service-top">
                      <div className="service-icon-box">
                        <IconComponent size={22} />
                      </div>
                      <div className="service-badge-num-wrap">
                        <span className="service-badge-tag">{service.badge}</span>
                        <span className="service-num">{service.number}</span>
                      </div>
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short">{service.short}</p>
                    <p className="service-desc">{service.desc}</p>

                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="service-footer">
                      <button
                        onClick={() => handleSelectService(service.title)}
                        className="service-action-btn"
                        type="button"
                      >
                        <span>Configure in MVP Planner</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="section-padding portfolio-bg" id="portfolio">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>PROVEN TRACK RECORD</span>
              </div>
              <h2 className="section-title">
                Featured Work & <span className="gradient-highlight">Client Collaborations.</span>
              </h2>
              <p className="section-subtitle">
                A selection of high-impact products engineered with speed, precision, and measurable business outcomes.
              </p>

              {/* Category Filter Pills */}
              <div className="portfolio-filters">
                {['All', 'IoT & Connected Systems', 'Digital Media & Web Apps', 'Mobile Apps', 'Enterprise Web & AI', 'Game Development'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat === 'All' ? 'All' : cat)}
                    className={`filter-btn ${
                      (cat === 'All' && activeCategory === 'All') || activeCategory === cat ? 'active' : ''
                    }`}
                  >
                    {cat === 'All' ? 'All Projects' : cat.split('&')[0].trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio-grid">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="portfolio-card"
                >
                  <div className="portfolio-art-box">
                    <div className="art-grid-overlay" />
                    {project.logoUrl ? (
                      <div className="art-logo-wrapper">
                        <img
                          src={project.logoUrl}
                          alt={project.name}
                          className="art-client-logo-img"
                        />
                      </div>
                    ) : (
                      <div className="art-monogram">{project.monogram}</div>
                    )}

                    <div className="art-badge-top">
                      <span className="project-category-tag">{project.category}</span>
                      <span className="project-index-num">0{idx + 1} / 06</span>
                    </div>

                    <div className="art-badge-bottom">
                      <span className="metric-pill">
                        <strong>{project.metric}</strong> — {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <h3 className="project-name">{project.name}</h3>
                      <span className="project-tag-pill">{project.tag}</span>
                    </div>

                    <p className="project-desc">{project.shortDesc}</p>

                    <div className="project-tech-list">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-badge muted">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="portfolio-actions">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="project-inspect-btn"
                        type="button"
                      >
                        <span>View Technical Architecture</span>
                        <ArrowUpRight size={15} />
                      </button>

                      {project.liveUrl && project.liveUrl.startsWith('http') && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-live-btn"
                        >
                          <span>Live Site / Store</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION: Discover → Define MVP → Build → Launch */}
        <section className="section-padding process-section-bg" id="process">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>THE MVP PLAYBOOK</span>
              </div>
              <h2 className="section-title">
                From Concept to Reality in <span className="gradient-highlight">Four Clear Steps.</span>
              </h2>
              <p className="section-subtitle">
                A predictable, transparent delivery pipeline engineered to eliminate surprises, keep scopes tight, and launch on time.
              </p>
            </div>

            {/* Process Flow Cards */}
            <div className="process-flow-grid">
              {PROCESS_STEPS.map((stepItem, sIdx) => {
                const StepIcon = stepItem.icon
                return (
                  <motion.div
                    key={stepItem.step}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: sIdx * 0.1 }}
                    className="process-card"
                  >
                    <div className="process-card-top">
                      <div className="process-step-num">{stepItem.step}</div>
                      <div className="process-icon-wrap">
                        <StepIcon size={20} />
                      </div>
                    </div>

                    <div className="process-timeline-badge">{stepItem.timeline}</div>
                    <h3 className="process-title">{stepItem.title}</h3>
                    <p className="process-desc">{stepItem.desc}</p>

                    <div className="process-deliverables-box">
                      <span className="deliv-heading">Key Deliverables:</span>
                      <ul className="deliv-list">
                        {stepItem.deliverables.map((deliv) => (
                          <li key={deliv}>
                            <CheckCircle2 size={14} className="deliv-check" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="section-padding testimonials-bg">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>FOUNDER TESTIMONIALS</span>
              </div>
              <h2 className="section-title">
                What Partners Say About <span className="gradient-highlight">Our Technical Squad.</span>
              </h2>
              <p className="section-subtitle">
                Authentic feedback from the founders and CTOs behind our collaborative case studies.
              </p>
            </div>

            <div className="testimonials-grid">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="testimonial-card"
                >
                  <div className="stars-row">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} className="star-filled" fill="#f59e0b" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.quote}"</p>
                  <div className="testimonial-author">
                    {t.logoUrl ? (
                      <img src={t.logoUrl} alt={t.company} className="author-client-logo" />
                    ) : (
                      <div className="author-avatar-badge">{t.author.charAt(0)}</div>
                    )}
                    <div>
                      <strong className="author-name">{t.author}</strong>
                      <span className="author-role">{t.role} • <strong>{t.company}</strong></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION: TECHNICAL-PARTNER POSITIONING */}
        <section className="section-padding about-section" id="about">
          <div className="container about-grid">
            <div className="about-left-card">
              <div className="about-visual-frame">
                <img
                  src={brandLogoUrl}
                  alt="Intelligence Solutions Brand Emblem"
                  className="about-emblem-img"
                />
                <div className="about-hologram-banner">
                  <ShieldCheck size={18} className="text-emerald" />
                  <span>Verified Technical Partner</span>
                </div>
              </div>
            </div>

            <div className="about-content">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>YOUR TECHNICAL PARTNER</span>
              </div>
              <h2 className="section-title">
                Not Just a Dev Shop. <br />
                <span className="gradient-highlight">In Your Corner as Your CTO Squad.</span>
              </h2>
              <p className="about-lead">
                Building an MVP is not about churning out boilerplate code. It's about strategic product scoping, clean architecture that won't require a total rewrite, and dependable execution speed.
              </p>

              <div className="about-pillars">
                <div className="pillar-item">
                  <div className="pillar-bullet">
                    <CheckCircle2 size={18} className="text-emerald" />
                  </div>
                  <div>
                    <h4>Zero Vendor Lock-In & 100% IP Ownership</h4>
                    <p>You own all repository commits, cloud accounts, architectural diagrams, and documentation from Day 1.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-bullet">
                    <CheckCircle2 size={18} className="text-emerald" />
                  </div>
                  <div>
                    <h4>Direct Senior Engineer Communication</h4>
                    <p>No layers of non-technical account managers. You collaborate directly with software architects via shared Slack channels.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-bullet">
                    <CheckCircle2 size={18} className="text-emerald" />
                  </div>
                  <div>
                    <h4>Scalable Architecture Built for Growth</h4>
                    <p>We pick modern, battle-tested tools (TypeScript, Python, Go, Next.js, Cloudflare, AWS) configured to withstand rapid user scaling.</p>
                  </div>
                </div>
              </div>

              <div className="about-cta-row">
                <a href="#contact" className="btn-primary">
                  <span>Schedule Technical Discovery</span>
                  <ArrowRight size={18} />
                </a>
                <span className="about-ndas-badge">
                  <ShieldCheck size={15} /> Mutual NDA included on request
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-padding faq-section-bg" id="faq">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>FREQUENT QUESTIONS</span>
              </div>
              <h2 className="section-title">
                Everything You Need to Know About <span className="gradient-highlight">Working Together.</span>
              </h2>
              <p className="section-subtitle">
                Clear answers about our development process, intellectual property rights, and timelines.
              </p>
            </div>

            <div className="faq-accordion-list">
              {FAQS.map((faqItem, fIdx) => (
                <div
                  key={faqItem.q}
                  className={`faq-item ${openFaq === fIdx ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === fIdx ? -1 : fIdx)}
                >
                  <div className="faq-question-row">
                    <h4 className="faq-q-title">{faqItem.q}</h4>
                    <ChevronDown size={18} className="faq-icon-arrow" />
                  </div>
                  <AnimatePresence>
                    {openFaq === fIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="faq-answer-wrap"
                      >
                        <p className="faq-answer">{faqItem.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT US SECTION & ESTIMATOR FORM */}
        <section className="section-padding contact-section" id="contact">
          <div className="container">
            {/* Top Logo Banner in Contact Section */}
            <div className="contact-brand-banner">
              <div className="banner-logo-wrap">
                <img
                  src={brandLogoUrl}
                  alt="Intelligence Solutions Logo"
                  className="banner-logo-img"
                />
              </div>
              <div className="banner-text-wrap">
                <span className="banner-kicker">GET STARTED TODAY</span>
                <h3 className="banner-title">Build Your MVP With Intelligence Solutions</h3>
                <p className="banner-sub">
                  Tell us about your product idea. We review every submission within 24 hours with an actionable technical scoping breakdown and cost estimate.
                </p>
              </div>
            </div>

            <div className="contact-main-grid">
              {/* Form Column */}
              <div className="contact-form-card">
                <div className="form-card-header">
                  <div>
                    <span className="form-step-tag">MVP PROJECT PLANNER</span>
                    <h3 className="form-card-title">Describe Your Idea</h3>
                  </div>
                  <span className="response-time-pill">
                    <Zap size={14} /> 24h Response Guarantee
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="project-form">
                  {/* Field: Project Type */}
                  <div className="form-field-group">
                    <label className="form-label">
                      1. What are you looking to build? <span className="req">*</span>
                    </label>
                    <div className="project-type-pills">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`type-pill-btn ${form.projectType === type ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field: Budget Range */}
                  <div className="form-field-group">
                    <label className="form-label">
                      2. Estimated Budget Range <span className="req">*</span>
                    </label>
                    <div className="budget-grid">
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b.value })}
                          className={`budget-card-btn ${form.budget === b.value ? 'active' : ''}`}
                        >
                          <span className="b-val">{b.label}</span>
                          <span className="b-note">{b.note}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field: Timeline Target */}
                  <div className="form-field-group">
                    <label className="form-label">
                      3. Target Launch Timeline <span className="req">*</span>
                    </label>
                    <div className="timeline-pills">
                      {TIMELINE_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, timeline: t })}
                          className={`timeline-pill-btn ${form.timeline === t ? 'active' : ''}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className="form-row-two">
                    <div className="form-field-group">
                      <label className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="form-label">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@startup.io"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Company / Startup Name */}
                  <div className="form-field-group">
                    <label className="form-label">Company / Startup Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Acme Innovations"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* Project Scope & Details */}
                  <div className="form-field-group">
                    <label className="form-label">
                      Project Details & Vision <span className="req">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what problem your product solves, key features needed for v1, existing prototypes, and your core technical priorities..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Analyzing & Submitting...</span>
                    ) : (
                      <>
                        <span>Submit MVP Project Inquiry</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <div className="form-disclaimer">
                    <ShieldCheck size={15} className="text-emerald" />
                    <span>Your data is strictly confidential. Mutual NDA applied by default.</span>
                  </div>
                </form>
              </div>

              {/* Sidebar Info & Live Summary Column */}
              <div className="contact-sidebar">
                {/* Live Estimator Summary Card */}
                <div className="sidebar-card live-summary-card">
                  <div className="summary-header">
                    <span className="summary-dot" />
                    <h4>Live Estimator Summary</h4>
                  </div>

                  <div className="summary-details">
                    <div className="summary-row">
                      <span className="s-label">Product Type:</span>
                      <span className="s-value">{form.projectType}</span>
                    </div>
                    <div className="summary-row">
                      <span className="s-label">Budget Tier:</span>
                      <span className="s-value">{form.budget}</span>
                    </div>
                    <div className="summary-row">
                      <span className="s-label">Target Launch:</span>
                      <span className="s-value">{form.timeline}</span>
                    </div>
                    <div className="summary-row highlight-row">
                      <span className="s-label">Estimated Sprint:</span>
                      <span className="s-value accent-emerald-text">{activeBudgetConfig.sprint}</span>
                    </div>
                    <div className="summary-row highlight-row">
                      <span className="s-label">Engineering Squad:</span>
                      <span className="s-value accent-emerald-text">{activeBudgetConfig.squad}</span>
                    </div>
                  </div>

                  <div className="summary-perks">
                    <div className="perk-line">
                      <CheckCircle2 size={15} className="text-emerald" />
                      <span>Architecture blueprint within 24h</span>
                    </div>
                    <div className="perk-line">
                      <CheckCircle2 size={15} className="text-emerald" />
                      <span>Dedicated Technical Lead assigned</span>
                    </div>
                    <div className="perk-line">
                      <CheckCircle2 size={15} className="text-emerald" />
                      <span>Fixed-price milestone contracts</span>
                    </div>
                    <div className="perk-line">
                      <CheckCircle2 size={15} className="text-emerald" />
                      <span>100% IP & Git repository handover</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Channels */}
                <div className="sidebar-card contact-direct-card">
                  <h4>Direct Contact Channels</h4>
                  <p>Prefer to reach out directly or schedule an intro call?</p>

                  <div className="contact-channel-item">
                    <span className="channel-icon">
                      <MessageSquareText size={16} />
                    </span>
                    <div>
                      <small>Email Inquiries</small>
                      <a href="mailto:hello@intelligencesolutions.dev" className="channel-link">
                        hello@intelligencesolutions.dev
                      </a>
                    </div>
                  </div>

                  <div className="contact-channel-item">
                    <span className="channel-icon">
                      <Terminal size={16} />
                    </span>
                    <div>
                      <small>Engineering HQ</small>
                      <span className="channel-text">Intelligence Studio • San Francisco & Remote</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand-logo-wrap">
              <img
                src={brandMarkUrl}
                alt="Intelligence Solutions Logo Mark"
                className="brand-logo-img"
              />
              <div className="brand-text">
                <span className="brand-title">INTELLIGENCE</span>
                <span className="brand-sub">SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-tagline">
              Build Your MVP. Turn Your Idea Into a Product.
              Your full-stack technical partner for AI, Web, Mobile, Games, IoT, and Chatbots.
            </p>
          </div>

          <div className="footer-nav-col">
            <h5>Services</h5>
            <a href="#services">AI Solutions</a>
            <a href="#services">Web Applications</a>
            <a href="#services">Mobile Apps</a>
            <a href="#services">Game Development</a>
            <a href="#services">IoT Systems</a>
            <a href="#services">Chatbots & Bots</a>
          </div>

          <div className="footer-nav-col">
            <h5>Portfolio</h5>
            <a href="https://scan2move.store/" target="_blank" rel="noopener noreferrer">Scan to Move</a>
            <a href="https://animeexpresstv.com/" target="_blank" rel="noopener noreferrer">Anime Express TV</a>
            <a href="https://apps.apple.com/nl/app/fileshift-send-files-offline/id6759545902?l=en-GB" target="_blank" rel="noopener noreferrer">FileShift (App Store)</a>
            <a href="#portfolio">VoiceAI IoT Engine</a>
          </div>

          <div className="footer-nav-col">
            <h5>Get in Touch</h5>
            <a href="mailto:hello@intelligencesolutions.dev">hello@intelligencesolutions.dev</a>
            <a href="#contact" className="footer-cta-link">Request MVP Proposal</a>
            <span className="status-badge-inline">
              <span className="pulse-dot" /> Now Onboarding Q4 & Q1 Cohort
            </span>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Intelligence Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* SUCCESS CONFIRMATION MODAL */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={() => setSubmitSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top">
                <div className="modal-success-icon">
                  <CheckCircle2 size={36} className="text-emerald" />
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <span className="modal-ref">INQUIRY REF: {inquiryId}</span>
                <h3 className="modal-title">Inquiry Received Successfully!</h3>
                <p className="modal-p">
                  Thank you, <strong>{form.name}</strong>. Our senior engineering squad will review your <strong>{form.projectType}</strong> project requirements and reply to <strong>{form.email}</strong> within 24 hours.
                </p>

                <div className="modal-summary-box">
                  <div className="m-row">
                    <span>Selected Scope:</span>
                    <strong>{form.projectType}</strong>
                  </div>
                  <div className="m-row">
                    <span>Budget Target:</span>
                    <strong>{form.budget}</strong>
                  </div>
                  <div className="m-row">
                    <span>Target Timeline:</span>
                    <strong>{form.timeline}</strong>
                  </div>
                  <div className="m-row">
                    <span>Estimated Sprint:</span>
                    <strong className="accent-emerald-text">{activeBudgetConfig.sprint}</strong>
                  </div>
                </div>

                <div className="modal-actions">
                  <button
                    onClick={handleCopySummary}
                    className="modal-btn-copy"
                    type="button"
                  >
                    {copiedSummary ? (
                      <>
                        <Check size={16} /> Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Inquiry Summary
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoLink}
                    className="modal-btn-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Open in Email App</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PORTFOLIO DETAIL DRAWER MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              className="modal-card modal-project-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top">
                <div className="modal-brand-header">
                  {selectedProject.logoUrl && (
                    <img
                      src={selectedProject.logoUrl}
                      alt={selectedProject.name}
                      className="modal-client-logo"
                    />
                  )}
                  <div className="modal-project-badge">
                    <span>{selectedProject.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="modal-close-btn"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-project-body">
                <h3 className="project-detail-title">{selectedProject.name}</h3>
                <span className="project-detail-metric">
                  ⚡ {selectedProject.metric} — {selectedProject.metricLabel}
                </span>

                <div className="project-detail-section">
                  <h5>Technical Architecture & Challenge</h5>
                  <p>{selectedProject.fullDesc}</p>
                </div>

                <div className="project-detail-section">
                  <h5>Technologies Deployed</h5>
                  <div className="project-detail-tags">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="tag-pill-large">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-detail-section">
                  <h5>Outcome & Business Impact</h5>
                  <div className="impact-box">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <span>{selectedProject.outcome}</span>
                  </div>
                </div>

                <div className="modal-project-footer">
                  {selectedProject.liveUrl && selectedProject.liveUrl.startsWith('http') && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ marginRight: '10px' }}
                    >
                      <span>Visit Live Store / App</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setSelectedProject(null)
                      handleSelectService(selectedProject.name)
                    }}
                    className="btn-primary"
                  >
                    <span>Discuss a Similar Product</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
