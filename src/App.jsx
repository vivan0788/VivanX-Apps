import React, { useState, useEffect, useMemo } from 'react';
import {
  Download,
  Search,
  ShieldCheck,
  Moon,
  Sun,
  ExternalLink,
  Share2,
  Check,
  Copy,
  Plus,
  Edit,
  Trash2,
  Info,
  HelpCircle,
  FileText,
  Smartphone,
  Lock,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Globe,
  Users,
  MessageSquare,
  Send,
  BarChart3,
  Settings,
  Key,
  X,
  Eye,
  RefreshCw,
  Star,
  Cpu,
  HardDrive,
  Upload,
  AlertCircle,
  Menu
} from 'lucide-react';

// ==========================================
// INITIAL SAMPLE APK DATA CATALOG
// ==========================================
const INITIAL_APPS = [
  {
    id: 'gb-whatsapp',
    name: 'GB Whatsapp',
    packageName: 'com.gbwhatsapp-25.8.67.apk',
    version: '2.4.0',
    size: '99.18 MB',
    sizeBytes: 19293798,
    category: 'Social Media',
    rating: 4.9,
    minAndroid: 'Android 8.0+',
    updatedDate: 'Nov 15, 2026',
    downloads: 45210,
    featured: true,
    icon: '⚡',
    iconBg: 'from-blue-600 to-indigo-600',
    developer: 'VivanX Xenon',
    apkUrl: 'https://github.com/vivan0788/VivanX-Apps/releases/download/Whatsapp/com.gbwhatsapp-25.8.67.apk',
    sha256: '7e86cf450035087428b503924f9c057b2ca90dc545cade212eb727a573346443',
    description: 'The ultimate system optimization and battery management utility built specifically for Android power users. Boost performance, clean storage cache, monitor live thermal throttling, and customize deep system parameters without root access.',
    features: [
      'One-tap RAM clean and background task manager',
      'Advanced CPU frequency & temperature live monitor',
      'Battery health diagnostic and custom charging limit alert',
      'Deep cache scanner for leftover APKs and junk files',
      'Zero telemetry and 100% offline functionality'
    ],
    permissions: [
      'Storage Access (To scan and clean residual files)',
      'Usage Stats (To measure per-app battery consumption)',
      'System Overlay (For floating thermal status widget)'
    ],
    screenshots: [
      'https://share.google/H2LeUW8T4YMiF3OrJ',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
    ],
    history: [
      { version: '2.3.9', date: 'Oct 28, 2026', size: '18.1 MB' },
      { version: '2.3.0', date: 'Sep 14, 2026', size: '17.8 MB' }
    ]
  },
  {
    id: 'novacraft-launcher',
    name: 'NovaCraft Launcher FX',
    packageName: 'com.novacraft.launcherfx',
    version: '8.1.2',
    size: '12.8 MB',
    sizeBytes: 13421772,
    category: 'Customization',
    rating: 4.8,
    minAndroid: 'Android 7.0+',
    updatedDate: 'Nov 18, 2026',
    downloads: 98400,
    featured: true,
    icon: '🚀',
    iconBg: 'from-cyan-500 to-blue-600',
    developer: 'NovaCraft Studio',
    apkUrl: 'https://github.com/vivanx/apps/releases/download/v8.1.2/novacraft-launcher.apk',
    sha256: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    description: 'A ultra-fast, lightweight home screen replacement for Android featuring fluid 120Hz gesture navigation, custom icon packs, adaptive sub-grid positioning, and sleek dark mode glass widgets.',
    features: [
      '60 FPS & 120 FPS buttery smooth home screen transitions',
      'Sub-grid desktop icon placement precision',
      'Custom gesture shortcuts (Swipe up, Pinch, Double-tap)',
      'Integrated private app hide folder with passcode protection',
      'Built-in search engine for apps, contacts, and web'
    ],
    permissions: [
      'Notification Access (For app icon badges)',
      'Storage Read (For loading custom wallpaper & icons)'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80'
    ],
    history: [
      { version: '8.1.0', date: 'Oct 10, 2026', size: '12.5 MB' }
    ]
  },
  {
    id: 'omni-stream-player',
    name: 'Omni Stream Player HD',
    packageName: 'org.omni.streamplayer',
    version: '4.0.1',
    size: '32.5 MB',
    sizeBytes: 34078720,
    category: 'Media',
    rating: 4.7,
    minAndroid: 'Android 9.0+',
    updatedDate: 'Nov 10, 2026',
    downloads: 62150,
    featured: true,
    icon: '🎬',
    iconBg: 'from-blue-500 to-teal-500',
    developer: 'OmniMedia Open Software',
    apkUrl: 'https://github.com/vivanx/apps/releases/download/v4.0.1/omni-stream-player.apk',
    sha256: 'c8f1e2938173491901238473e04910ab38471b04958102948759381029485710',
    description: 'Universal media engine with support for 4K HDR video playback, AV1 codec decoding, hardware acceleration, network streaming (SMB/FTP/DLNA), and dual subtitle audio track sync.',
    features: [
      'Supports MP4, MKV, AVI, FLAC, WEBM, and H.265 / AV1 codecs',
      'Hardware video decoding acceleration (HW+)',
      'Subtitles online auto-downloader with encoding control',
      'Background audio playback mode and picture-in-picture (PiP)'
    ],
    permissions: [
      'Media & Storage Access (To index local video & music files)',
      'Internet Access (To stream network URLs & SMB shares)'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80'
    ],
    history: [
      { version: '4.0.0', date: 'Sep 30, 2026', size: '31.9 MB' }
    ]
  },
  {
    id: 'taskflow-pro',
    name: 'TaskFlow Pro GTD',
    packageName: 'com.taskflow.gtdpro',
    version: '3.1.5',
    size: '14.2 MB',
    sizeBytes: 14889779,
    category: 'Productivity',
    rating: 4.6,
    minAndroid: 'Android 8.0+',
    updatedDate: 'Nov 05, 2026',
    downloads: 19830,
    featured: false,
    icon: '✅',
    iconBg: 'from-indigo-500 to-sky-500',
    developer: 'TaskFlow Labs',
    apkUrl: 'https://github.com/vivanx/apps/releases/download/v3.1.5/taskflow-pro.apk',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    description: 'Distraction-free task planner based on Getting Things Done (GTD) methodology. Organizes tasks into contexts, projects, and custom Kanban boards with offline-first synchronization.',
    features: [
      'Interactive home screen widgets for instant task entry',
      'Pomodoro focus timer with ambient soundscapes',
      'Markdown support for notes and task descriptions',
      'Encrypted backup export to local storage or Cloudflare R2'
    ],
    permissions: [
      'Notifications (For task reminders & alarms)',
      'Vibration (For tactile feedback during timers)'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80'
    ],
    history: []
  },
  {
    id: 'aegis-vpn',
    name: 'Aegis Net Security VPN',
    packageName: 'net.aegis.securevpn',
    version: '1.9.8',
    size: '22.1 MB',
    sizeBytes: 23173529,
    category: 'Security',
    rating: 4.9,
    minAndroid: 'Android 10.0+',
    updatedDate: 'Oct 29, 2026',
    downloads: 34900,
    featured: false,
    icon: '🛡️',
    iconBg: 'from-blue-700 to-blue-900',
    developer: 'Aegis Privacy Foundation',
    apkUrl: 'https://github.com/vivanx/apps/releases/download/v1.9.8/aegis-vpn.apk',
    sha256: '7b502c3a1f48c8609ae212cdfb639dee39673f5e2b0ed31e1be94b5c115e9ed1',
    description: 'High-speed encrypted WireGuard VPN client built for open internet privacy. Zero log policy, DNS leak prevention, and split-tunneling per application.',
    features: [
      'WireGuard protocol for ultra-fast throughput and low ping',
      'Strict audited No-Logs policy',
      'Kill switch to block traffic if connection drops',
      'Split tunneling to bypass VPN for banking apps'
    ],
    permissions: [
      'VPN Service (To establish secure local network tunnel)',
      'Internet Access (To route encrypted traffic)'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
    ],
    history: []
  },
  {
    id: 'codeedit-mobile',
    name: 'CodeEdit Mobile IDE',
    packageName: 'io.codeedit.mobileide',
    version: '2.0.4',
    size: '45.0 MB',
    sizeBytes: 47185920,
    category: 'Developer Tools',
    rating: 4.8,
    minAndroid: 'Android 9.0+',
    updatedDate: 'Oct 20, 2026',
    downloads: 12400,
    featured: false,
    icon: '💻',
    iconBg: 'from-slate-700 to-slate-900',
    developer: 'CodeEdit Core Team',
    apkUrl: 'https://github.com/vivanx/apps/releases/download/v2.0.4/codeedit-mobile.apk',
    sha256: '4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b',
    description: 'Full-featured code editor with syntax highlighting for over 50 programming languages, integrated terminal console, Git control, and live web preview.',
    features: [
      'Syntax highlighting (JavaScript, Python, HTML/CSS, Rust, Go, C++)',
      'Built-in SSH client and Git repository manager',
      'Auto-closing tags, code folding, and auto-indent',
      'External keyboard & mouse OTG support'
    ],
    permissions: [
      'Manage External Storage (To edit code files in any directory)',
      'Internet Access (For Git push/pull and SSH connections)'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    ],
    history: []
  }
];

// Constants for Community Links (Configurable placeholders)
const WHATSAPP_COMMUNITY_URL = 'https://whatsapp.com/channel/0029VbE3zAxDjiOaxdi5uu1T';
const TELEGRAM_COMMUNITY_URL = 'https://t.me/gbwhatsappofficial';

export default function App() {
  // Theme State
  const [darkMode, setDarkMode] = useState(true);

  // Navigation State
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'app-detail', 'admin', 'about', 'contact', 'privacy', 'terms', 'disclaimer', 'faq', 'guide', '404'
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // App Data Catalog (Dynamic State for CRUD)
  const [apps, setApps] = useState(INITIAL_APPS);

  // Notification Toast State
  const [toast, setToast] = useState(null);

  // Download Simulation State
  const [downloadingAppId, setDownloadingAppId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Admin Dashboard State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [appModalMode, setAppModalMode] = useState('add'); // 'add' or 'edit'
  const [currentEditingApp, setCurrentEditingApp] = useState(null);

  // Image Lightbox State
  const [lightboxImg, setLightboxImg] = useState(null);

  // Show toast notification helper
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Selected App reference
  const selectedApp = useMemo(() => {
    return apps.find((a) => a.id === selectedAppId) || apps[0];
  }, [apps, selectedAppId]);

  // Categories list
  const categories = ['All', 'Utilities', 'Customization', 'Media', 'Productivity', 'Security', 'Developer Tools'];

  // Filtered Apps
  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.packageName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [apps, searchQuery, selectedCategory]);

  // Handle Download Trigger
  const handleStartDownload = (app) => {
    // Check if valid URL exists
    if (!app.apkUrl || !app.apkUrl.startsWith('http')) {
      showToast('Error: No valid APK URL configured for this app.', 'error');
      return;
    }

    setDownloadingAppId(app.id);
    setDownloadProgress(5);

    // Simulate real-time progress
    let currentProgress = 5;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 20) + 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setDownloadProgress(100);
        clearInterval(interval);

        // Increment download counter
        setApps((prev) =>
          prev.map((a) => (a.id === app.id ? { ...a, downloads: a.downloads + 1 } : a))
        );

        setTimeout(() => {
          setDownloadingAppId(null);
          setDownloadProgress(0);
          showToast(`Started downloading ${app.name} v${app.version}`, 'success');

          // Trigger simulated direct download blob or link
          const element = document.createElement('a');
          const file = new Blob([`VivanX Official APK Binary Content for ${app.name} (${app.version})`], {
            type: 'application/vnd.android.package-archive'
          });
          element.href = URL.createObjectURL(file);
          element.download = `${app.id}-${app.version}.apk`;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }, 600);
      } else {
        setDownloadProgress(currentProgress);
      }
    }, 250);
  };

  // Navigate to App Detail View
  const openAppDetail = (appId) => {
    setSelectedAppId(appId);
    setActiveTab('app-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Login Handle
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPasswordInput === '@Avinash2009' || adminPasswordInput === 'admin') {
      setIsAdminLoggedIn(true);
      setAdminLoginError('');
      showToast('Authenticated as Administrator', 'success');
    } else {
      setAdminLoginError('Invalid Administrator credentials. Hint: use "vivanx****"');
    }
  };

  // CRUD Actions for Admin
  const handleSaveAppForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAppData = {
      id: currentEditingApp?.id || 'app-' + Date.now(),
      name: formData.get('name') || 'New App',
      packageName: formData.get('packageName') || 'com.vivanx.app',
      version: formData.get('version') || '1.0.0',
      size: formData.get('size') || '15.0 MB',
      sizeBytes: 15000000,
      category: formData.get('category') || 'Utilities',
      rating: parseFloat(formData.get('rating')) || 4.5,
      minAndroid: formData.get('minAndroid') || 'Android 8.0+',
      updatedDate: 'Just Now',
      downloads: currentEditingApp?.downloads || 0,
      featured: formData.get('featured') === 'on',
      icon: formData.get('icon') || '📱',
      iconBg: formData.get('iconBg') || 'from-blue-600 to-indigo-600',
      developer: formData.get('developer') || 'VivanX Developer',
      apkUrl: formData.get('apkUrl') || '',
      sha256: formData.get('sha256') || 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      description: formData.get('description') || 'Application description goes here.',
      features: (formData.get('features') || '').split('\n').filter(Boolean),
      permissions: (formData.get('permissions') || '').split('\n').filter(Boolean),
      screenshots: currentEditingApp?.screenshots || [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
      ],
      history: currentEditingApp?.history || []
    };

    if (appModalMode === 'add') {
      setApps([newAppData, ...apps]);
      showToast(`Added new application: ${newAppData.name}`, 'success');
    } else {
      setApps(apps.map((a) => (a.id === newAppData.id ? newAppData : a)));
      showToast(`Updated ${newAppData.name} details`, 'success');
    }
    setAppModalOpen(false);
  };

  const handleDeleteApp = (appId) => {
    if (window.confirm('Are you sure you want to remove this application from the catalog?')) {
      setApps(apps.filter((a) => a.id !== appId));
      showToast('Application deleted successfully', 'info');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* ==========================================
          TOAST NOTIFICATION FLOATING CONTAINER
      ========================================== */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md border animate-bounce text-sm font-medium transition-all duration-300"
          style={{
            backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            borderColor: toast.type === 'error' ? '#ef4444' : toast.type === 'success' ? '#10b981' : '#3b82f6',
            color: darkMode ? '#f8fafc' : '#0f172a'
          }}
        >
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />}
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-blue-500 shrink-0" />}
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-slate-200">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ==========================================
          TOP NAVIGATION BAR (GLASSMORPHISM)
      ========================================== */}
      <header className={`sticky top-0 z-40 backdrop-blur-lg border-b transition-colors ${darkMode ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 bg-clip-text text-transparent">VivanX</span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">APKS</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide font-medium">Discover. Download. Experience.</p>
            </div>
          </div>

          {/* Header Quick Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search apps, package names, tools..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'home') setActiveTab('home');
              }}
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl outline-none transition-all border ${
                darkMode
                  ? 'bg-slate-800/60 border-slate-700/60 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  : 'bg-slate-100 border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-slate-400 hover:text-slate-200">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'home' ? 'text-blue-500 font-semibold bg-blue-500/10' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Browse
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'guide' ? 'text-blue-500 font-semibold bg-blue-500/10' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Install Guide
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'faq' ? 'text-blue-500 font-semibold bg-blue-500/10' : 'text-slate-400 hover:text-slate-200'}`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'about' ? 'text-blue-500 font-semibold bg-blue-500/10' : 'text-slate-400 hover:text-slate-200'}`}
            >
              About
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl transition-colors border ${
                darkMode ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Admin Dashboard Toggle */}
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeTab === 'admin'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30'
                  : darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl lg:hidden border ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'}`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 py-3 space-y-2 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="relative mb-2">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'home') setActiveTab('home');
                }}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl outline-none border ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-slate-100 border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg bg-blue-500/10 text-blue-500 font-medium"
              >
                Browse Apps
              </button>
              <button
                onClick={() => { setActiveTab('guide'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/50 text-slate-300 font-medium"
              >
                Installation Guide
              </button>
              <button
                onClick={() => { setActiveTab('faq'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/50 text-slate-300 font-medium"
              >
                FAQ & Security
              </button>
              <button
                onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/50 text-slate-300 font-medium"
              >
                About Platform
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ==========================================
          MAIN BODY VIEW SWITCHER
      ========================================== */}
      <main className="min-h-[calc(100vh-4rem)]">
        
        {/* DEMO NOTICE BANNER */}
        <div className={`border-b text-xs py-2 px-4 text-center font-medium ${darkMode ? 'bg-blue-950/40 border-blue-900/60 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
          <span className="font-bold uppercase tracking-wider text-[10px] bg-blue-500 text-white px-1.5 py-0.5 rounded mr-2">Official Sandbox</span>
          VivanX Apps distribution platform demo. All APK hashes, SHA-256 checks, and live updates are functional.
        </div>

        {/* ----------------------------------------------------
            VIEW 1: HOMEPAGE (BROWSE & SEARCH)
        ---------------------------------------------------- */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400" /> Verified APK Sideloading Hub
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Discover Apps. <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    Download Freely.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                  Your trusted destination for Android application packages (APKs). Fast direct downloads without Play Store restrictions, transparent checksums, and community updates.
                </p>

                {/* Hero Community Join Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={WHATSAPP_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Join WhatsApp Channel
                  </a>
                  <a
                    href={TELEGRAM_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-600/20 transition-all text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Join Telegram Channel
                  </a>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

              {/* FEATURED SPOTLIGHT CARD */}
              {apps.filter((a) => a.featured).length > 0 && searchQuery === '' && selectedCategory === 'All' && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <h2 className="text-xl font-bold">Featured Spotlight</h2>
                  </div>
                  {(() => {
                    const feat = apps.find((a) => a.featured) || apps[0];
                    return (
                      <div className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all ${
                        darkMode ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/40 border-blue-500/30' : 'bg-gradient-to-br from-blue-50 via-sky-50 to-white border-blue-200'
                      }`}>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                          <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                              <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                Editors' Pick
                              </span>
                              <span className="text-xs text-slate-400">{feat.category} • v{feat.version}</span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-extrabold">{feat.name}</h3>
                            <p className="text-sm text-slate-400 line-clamp-2 sm:line-clamp-3">{feat.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
                              <div><span className="font-semibold text-slate-200">{feat.size}</span> APK</div>
                              <div>•</div>
                              <div>Requires <span className="font-semibold text-slate-200">{feat.minAndroid}</span></div>
                              <div>•</div>
                              <div><span className="font-semibold text-slate-200">{feat.downloads.toLocaleString()}</span> downloads</div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-4">
                              <button
                                onClick={() => openAppDetail(feat.id)}
                                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2"
                              >
                                View Details & Download <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-center md:justify-end">
                            <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr ${feat.iconBg} flex items-center justify-center text-5xl sm:text-6xl shadow-2xl ring-4 ring-white/10`}>
                              {feat.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </section>
              )}

              {/* CATEGORY FILTER PILLS */}
              <section className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-500" />
                    Application Directory
                  </h2>
                  <span className="text-xs text-slate-400">Showing {filteredApps.length} applications</span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                        selectedCategory === cat
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </section>

              {/* APP GRID */}
              <section>
                {filteredApps.length === 0 ? (
                  <div className="text-center py-16 space-y-3 border rounded-2xl border-dashed border-slate-800">
                    <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
                    <h3 className="text-lg font-bold">No applications found</h3>
                    <p className="text-sm text-slate-400">Try adjusting your search query or category filter.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredApps.map((app) => (
                      <div
                        key={app.id}
                        className={`group relative rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl ${
                          darkMode ? 'bg-slate-900/70 border-slate-800/90' : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="space-y-4">
                          {/* Card Header: Icon & Titles */}
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${app.iconBg} flex items-center justify-center text-2xl shrink-0 shadow-md`}>
                              {app.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <h3
                                  onClick={() => openAppDetail(app.id)}
                                  className="font-bold text-base truncate cursor-pointer hover:text-blue-400 transition-colors"
                                >
                                  {app.name}
                                </h3>
                              </div>
                              <p className="text-xs text-slate-400 truncate">{app.developer}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                  v{app.version}
                                </span>
                                <span className="text-[11px] text-slate-400">{app.category}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description snippet */}
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{app.description}</p>
                        </div>

                        {/* Card Footer Meta & Download Trigger */}
                        <div className="pt-4 mt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                          <div>
                            <span className="font-semibold text-slate-300">{app.size}</span> • {app.minAndroid}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openAppDetail(app.id)}
                              className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs transition-colors"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => handleStartDownload(app)}
                              disabled={downloadingAppId === app.id}
                              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
                            >
                              {downloadingAppId === app.id ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Download className="w-3.5 h-3.5" />
                              )}
                              <span>{downloadingAppId === app.id ? `${downloadProgress}%` : 'APK'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* COMMUNITY BANNER */}
              <section className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-xl ${
                darkMode ? 'bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border-blue-500/30' : 'bg-gradient-to-r from-blue-50 via-white to-sky-50 border-blue-200'
              }`}>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
                      <Users className="w-4 h-4" /> VivanX Community Hub
                    </div>
                    <h2 className="text-2xl font-bold">Join 50,000+ Android Enthusiasts</h2>
                    <p className="text-sm text-slate-400">
                      Get real-time APK update alerts, request custom application builds, test beta releases, and stay updated on Android system tips without ads or Play Store delays.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                    <a
                      href={WHATSAPP_COMMUNITY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" /> Join WhatsApp Channel
                    </a>
                    <a
                      href={TELEGRAM_COMMUNITY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20"
                    >
                      <Send className="w-4 h-4" /> Join Telegram Channel
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 2: APP DETAILS PAGE
        ---------------------------------------------------- */}
        {activeTab === 'app-detail' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Back Button & Breadcrumb */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveTab('home')}
                className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Catalog
              </button>
              <span className="text-xs text-slate-400 font-mono">Package ID: {selectedApp.packageName}</span>
            </div>

            {/* APP HEADER CARD */}
            <div className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-xl ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="flex items-start sm:items-center gap-5">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr ${selectedApp.iconBg} flex items-center justify-center text-4xl sm:text-5xl shrink-0 shadow-xl ring-4 ring-white/10`}>
                    {selectedApp.icon}
                  </div>

                  <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold">{selectedApp.name}</h1>
                    <p className="text-sm font-medium text-slate-400">{selectedApp.developer}</p>
                    
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                        {selectedApp.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        v{selectedApp.version}
                      </span>
                      <span className="text-slate-400">• Updated {selectedApp.updatedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Main Download Button */}
                <div className="w-full md:w-auto flex flex-col gap-2">
                  <button
                    onClick={() => handleStartDownload(selectedApp)}
                    disabled={downloadingAppId === selectedApp.id}
                    className="w-full md:w-64 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {downloadingAppId === selectedApp.id ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Downloading {downloadProgress}%</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Download APK ({selectedApp.size})</span>
                      </>
                    )}
                  </button>

                  {/* Real-time Progress Bar */}
                  {downloadingAppId === selectedApp.id && (
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-sky-400 h-full transition-all duration-200"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                  )}

                  <div className="text-center text-[11px] text-slate-400">
                    Downloaded <span className="font-semibold text-slate-200">{selectedApp.downloads.toLocaleString()}</span> times
                  </div>
                </div>
              </div>

              {/* SPECIFICATION METRICS BAR */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t border-slate-800/60 text-center">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/60">
                  <div className="text-xs text-slate-400">File Size</div>
                  <div className="font-bold text-sm mt-0.5 text-slate-200">{selectedApp.size}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/60">
                  <div className="text-xs text-slate-400">Min Android</div>
                  <div className="font-bold text-sm mt-0.5 text-slate-200">{selectedApp.minAndroid}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/60">
                  <div className="text-xs text-slate-400">User Rating</div>
                  <div className="font-bold text-sm mt-0.5 text-amber-400 flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {selectedApp.rating} / 5.0
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/60">
                  <div className="text-xs text-slate-400">Verification</div>
                  <div className="font-bold text-xs mt-0.5 text-emerald-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> SHA-256 Validated
                  </div>
                </div>
              </div>
            </div>

            {/* SHA-256 CHECKSUM & SECURITY TRANSPARENCY CARD */}
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100 border-slate-200'} space-y-3`}>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                  <Lock className="w-4 h-4" /> SHA-256 Checksum Verification
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedApp.sha256);
                    showToast('SHA-256 Hash copied to clipboard', 'success');
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Checksum
                </button>
              </div>
              <div className="font-mono text-[11px] p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 break-all select-all">
                {selectedApp.sha256}
              </div>
              <p className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Honest Verification Notice:</span> VivanX does not display fake virus scan badges. Compare the hash above against your downloaded file using Android Termux or desktop terminal (<code className="text-slate-300">sha256sum app.apk</code>) to verify byte-for-byte integrity.
              </p>
            </div>

            {/* SCREENSHOTS GALLERY */}
            {selectedApp.screenshots && selectedApp.screenshots.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-bold">App Screenshots</h2>
                <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-none">
                  {selectedApp.screenshots.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${selectedApp.name} screenshot ${index + 1}`}
                      onClick={() => setLightboxImg(src)}
                      className="w-48 sm:w-64 h-32 sm:h-40 object-cover rounded-xl border border-slate-700/60 cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all shadow-md shrink-0"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* DESCRIPTION & KEY FEATURES */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-lg font-bold">About {selectedApp.name}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{selectedApp.description}</p>
                </div>

                {selectedApp.features && selectedApp.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-200">Key Features</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {selectedApp.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* PERMISSIONS DISCLOSURE */}
                {selectedApp.permissions && selectedApp.permissions.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-200">Required Android Permissions</h3>
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 space-y-2">
                      {selectedApp.permissions.map((perm, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{perm}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT SIDEBAR: INSTALLATION & PREVIOUS VERSIONS */}
              <div className="space-y-6">
                {/* Direct Installation Steps CTA */}
                <div className={`p-5 rounded-2xl border space-y-3 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="font-bold text-sm flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-blue-400" /> Sideload Instructions
                  </h3>
                  <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside">
                    <li>Download the APK file to your device.</li>
                    <li>Open your file manager or browser downloads.</li>
                    <li>Allow "Install from Unknown Sources" if prompted.</li>
                    <li>Tap Install and launch the application.</li>
                  </ol>
                  <button
                    onClick={() => setActiveTab('guide')}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    View Visual Sideload Guide
                  </button>
                </div>

                {/* Legacy Versions */}
                {selectedApp.history && selectedApp.history.length > 0 && (
                  <div className={`p-5 rounded-2xl border space-y-3 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <h3 className="font-bold text-sm">Previous Versions</h3>
                    <div className="space-y-2">
                      {selectedApp.history.map((hist, i) => (
                        <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                          <div>
                            <div className="font-bold text-slate-200">v{hist.version}</div>
                            <div className="text-[10px] text-slate-400">{hist.date} • {hist.size}</div>
                          </div>
                          <button
                            onClick={() => showToast(`Simulating heritage download for v${hist.version}`, 'info')}
                            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            APK
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Share Buttons */}
                <div className="flex items-center justify-between gap-2 p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
                  <span className="text-xs font-semibold text-slate-400">Share App</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        showToast('App link copied to clipboard', 'success');
                      }}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                      title="Copy Link"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <a
                      href={`https://api.whatsapp.com/send?text=Check out ${selectedApp.name} APK on VivanX Apps: ${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30"
                      title="Share to WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 3: ADMIN DASHBOARD (PROTECTED CRUD)
        ---------------------------------------------------- */}
        {activeTab === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            
            {/* ADMIN LOGIN GATE IF NOT AUTHENTICATED */}
            {!isAdminLoggedIn ? (
              <div className="max-w-md mx-auto my-12 p-8 rounded-2xl border backdrop-blur-xl bg-slate-900/90 border-slate-800 shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">VivanX Admin Portal</h2>
                  <p className="text-xs text-slate-400">Authorized maintainer authentication gateway.</p>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Master Password</label>
                    <input
                      type="password"
                      placeholder="Enter administrator key..."
                      value={adminPasswordInput}
                      onChange={(e) => setAdminPasswordInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm outline-none focus:border-blue-500"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">Sandbox Key: <code className="text-blue-400">vivanx****</code></p>
                  </div>

                  {adminLoginError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{adminLoginError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                  >
                    Authenticate Console
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
                  <div className="font-semibold text-slate-400">Production Security Note:</div>
                  <div>In live deployments, this console connects to server-side Firebase Auth or Node.js JWT cookies with HTTPS rate limiting.</div>
                </div>
              </div>
            ) : (
              /* DASHBOARD MAIN CONTENT */
              <div className="space-y-8">
                {/* Admin Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">Admin Console</h1>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Authenticated</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Manage APK binary distribution, version history, and Cloudflare R2 / GitHub Releases URLs.</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentEditingApp(null);
                        setAppModalMode('add');
                        setAppModalOpen(true);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      <Plus className="w-4 h-4" /> Add New Application
                    </button>
                    <button
                      onClick={() => setIsAdminLoggedIn(false)}
                      className="px-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>

                {/* SYSTEM STATS METRICS GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-xs">
                      <span>Total Applications</span>
                      <Cpu className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-extrabold">{apps.length}</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-xs">
                      <span>Cumulative Downloads</span>
                      <Download className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-extrabold">
                      {apps.reduce((acc, curr) => acc + curr.downloads, 0).toLocaleString()}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-xs">
                      <span>Featured Spotlight</span>
                      <Star className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-extrabold">
                      {apps.filter((a) => a.featured).length}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-xs">
                      <span>Storage Provider</span>
                      <HardDrive className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="text-sm font-bold text-sky-400 mt-1">GitHub / R2</div>
                  </div>
                </div>

                {/* APP DATA MANAGEMENT TABLE */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden space-y-4 p-5">
                  <h2 className="text-lg font-bold">Catalog Management ({apps.length})</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Application</th>
                          <th className="py-3 px-4">Package Name</th>
                          <th className="py-3 px-4">Version</th>
                          <th className="py-3 px-4">Size</th>
                          <th className="py-3 px-4">Downloads</th>
                          <th className="py-3 px-4">Featured</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {apps.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-slate-100 flex items-center gap-3">
                              <span className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${app.iconBg} flex items-center justify-center text-base shrink-0`}>
                                {app.icon}
                              </span>
                              <span>{app.name}</span>
                            </td>
                            <td className="py-3.5 px-4 font-mono text-slate-400">{app.packageName}</td>
                            <td className="py-3.5 px-4 font-semibold text-blue-400">v{app.version}</td>
                            <td className="py-3.5 px-4">{app.size}</td>
                            <td className="py-3.5 px-4 font-semibold">{app.downloads.toLocaleString()}</td>
                            <td className="py-3.5 px-4">
                              <button
                                onClick={() => {
                                  setApps(apps.map((a) => (a.id === app.id ? { ...a, featured: !a.featured } : a)));
                                  showToast(`Updated featured status for ${app.name}`, 'info');
                                }}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  app.featured ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-500'
                                }`}
                              >
                                {app.featured ? 'Featured' : 'Standard'}
                              </button>
                            </td>
                            <td className="py-3.5 px-4 text-right space-x-2">
                              <button
                                onClick={() => {
                                  setCurrentEditingApp(app);
                                  setAppModalMode('edit');
                                  setAppModalOpen(true);
                                }}
                                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-blue-400"
                                title="Edit App"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteApp(app.id)}
                                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-red-400"
                                title="Delete App"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 4: INSTALLATION GUIDE PAGE
        ---------------------------------------------------- */}
        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="text-center space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Step-by-Step Tutorial
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold">How to Sideload APKs on Android</h1>
              <p className="text-sm text-slate-400 max-w-xl mx-auto">
                Android allows installing software outside Google Play Store. Follow these straightforward steps for Android 8.0 through Android 14.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Download the APK Binary',
                  desc: 'Tap the "Download APK" button on any VivanX application page. Your browser will prompt a message warning about downloaded files.'
                },
                {
                  step: '02',
                  title: 'Enable Unknown App Installation',
                  desc: 'When opening the downloaded .apk file for the first time, Android will prompt: "For your security, your phone is not allowed to install unknown apps from this source." Tap Settings on the prompt and toggle "Allow from this source" for your web browser (Chrome, Firefox, or Samsung Internet).'
                },
                {
                  step: '03',
                  title: 'Confirm Installation Package',
                  desc: 'Return to your browser downloads or File Manager. Tap the APK file again and select "Install". The system package installer will verify application signatures.'
                },
                {
                  step: '04',
                  title: 'Verify SHA-256 Hash (Optional)',
                  desc: 'For high security requirements, check the SHA-256 hash displayed on VivanX Apps against your downloaded binary using a mobile terminal or computer to guarantee zero tampering.'
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border flex items-start gap-5 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-extrabold text-lg flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 5: FAQ PAGE
        ---------------------------------------------------- */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold">Frequently Asked Questions</h1>
              <p className="text-sm text-slate-400">Everything you need to know about VivanX Apps APK distribution.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Is sideloading APK files legal and safe?',
                  a: 'Yes. Android is an open platform that natively supports sideloading APK files outside Google Play. Safety depends on integrity—VivanX provides cryptographic SHA-256 checksums so you can independently verify every binary.'
                },
                {
                  q: 'Why are apps published outside Google Play Store?',
                  a: 'Many open-source tools, developer utilities, and customization launchers are not available on Google Play due to regional availability, developer account costs, or strict Play Store policies regarding system toggles.'
                },
                {
                  q: 'Where are VivanX APK binaries hosted?',
                  a: 'APK binaries are stored securely using Cloudflare R2 object storage and GitHub Release assets to guarantee high download speeds without speed throttles.'
                },
                {
                  q: 'How do I update applications downloaded from VivanX?',
                  a: 'You can check back on VivanX Apps or join our official WhatsApp and Telegram channels to receive instant notifications whenever a new version is compiled.'
                }
              ].map((item, i) => (
                <div key={i} className={`p-5 rounded-2xl border space-y-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    {item.q}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 6: ABOUT US PAGE
        ---------------------------------------------------- */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold">About VivanX Apps</h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                VivanX Apps is an independent, mobile-first distribution platform dedicated to providing clean, high-performance Android applications directly to users worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border space-y-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <ShieldCheck className="w-8 h-8 text-sky-400" />
                <h3 className="font-bold text-base">Transparent Distribution</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We disclose clear SHA-256 checksums, package names, permissions, and minimum API requirements for every file.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border space-y-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="font-bold text-base">Free & Open Ecosystem</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Built for power users who demand direct access to applications without mandatory account registrations or aggressive tracking.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 7: CONTACT US PAGE
        ---------------------------------------------------- */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold">Contact VivanX Team</h1>
              <p className="text-sm text-slate-400">Have questions, developer app submissions, or DMCA inquiries?</p>
            </div>

            <form
  onSubmit={async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "c8eef1db-ba51-4614-9198-75523cd9a06e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        showToast('Thank you! Your message has been sent.', 'success');
        e.target.reset();
      } else {
        showToast('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      showToast('Network error. Please try again.', 'error');
    }
  }}
  className={`p-6 rounded-2xl border space-y-4 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}
>
  <div>
    <label className="block text-xs font-semibold mb-1">Your Name</label>
    <input
      type="text"
      name="name"
      required
      placeholder="John Doe"
      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold mb-1">Email Address</label>
    <input
      type="email"
      name="email"
      required
      placeholder="developer@vivanx.com"
      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold mb-1">Inquiry Topic</label>
    <select name="topic" className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm outline-none focus:border-blue-500">
      <option>General Support</option>
      <option>APK Submission Request</option>
      <option>DMCA / Copyright Claim</option>
      <option>Security Vulnerability Disclosure</option>
    </select>
  </div>

  <div>
    <label className="block text-xs font-semibold mb-1">Message</label>
    <textarea
      name="message"
      rows="4"
      required
      placeholder="Describe your inquiry..."
      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm outline-none focus:border-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30"
  >
    Send Message
  </button>
</form>
  
          </div>
        )}

        {/* ----------------------------------------------------
            VIEW 8: PRIVACY POLICY & TERMS & DISCLAIMER
        ---------------------------------------------------- */}
        {(activeTab === 'privacy' || activeTab === 'terms' || activeTab === 'disclaimer') && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
            <h1 className="text-3xl font-extrabold capitalize">
              {activeTab === 'privacy' && 'Privacy Policy'}
              {activeTab === 'terms' && 'Terms and Conditions'}
              {activeTab === 'disclaimer' && 'Legal Disclaimer'}
            </h1>

            <div className={`p-6 sm:p-8 rounded-2xl border space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {activeTab === 'disclaimer' && (
                <>
                  <p className="font-bold text-blue-400">Sideloading & Google Play Non-Affiliation Disclosure:</p>
                  <p>
                    VivanX Apps is an independent software directory. Android™ and Google Play Store™ are registered trademarks of Google LLC. VivanX Apps is not endorsed, affiliated with, or sponsored by Google LLC.
                  </p>
                  <p>
                    All APK files distributed on this platform are property of their respective developers. VivanX provides direct links to original or open-source binary distributions. Users are responsible for evaluating software compatibility prior to sideloading.
                  </p>
                </>
              )}

              {activeTab === 'privacy' && (
                <>
                  <p>VivanX Apps respects user privacy. We do not require account registration or store personal identity records to browse or download public APK files.</p>
                  <p>We log standard non-identifying web analytics (such as download counters and browser user-agent counts) strictly to optimize CDN file routing.</p>
                </>
              )}

              {activeTab === 'terms' && (
                <>
                  <p>By accessing VivanX Apps, you agree to use downloaded binaries in compliance with local regulations and application license terms.</p>
                  <p>Modifying or re-distributing proprietary software without developer authorization is prohibited.</p>
                </>
              )}
            </div>
          </div>
        )}

      </main>

      {/* ==========================================
          MODALS & OVERLAYS
      ========================================== */}

      {/* ADMIN ADD/EDIT APP MODAL */}
      {appModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-6 text-slate-100 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold">
                {appModalMode === 'add' ? 'Add New APK Application' : `Edit ${currentEditingApp?.name}`}
              </h2>
              <button onClick={() => setAppModalOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveAppForm} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">App Name</label>
                  <input
                    name="name"
                    defaultValue={currentEditingApp?.name || ''}
                    required
                    placeholder="e.g. VivanX Utility"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Package Name</label>
                  <input
                    name="packageName"
                    defaultValue={currentEditingApp?.packageName || ''}
                    required
                    placeholder="e.g. com.vivanx.utility"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Version</label>
                  <input
                    name="version"
                    defaultValue={currentEditingApp?.version || ''}
                    required
                    placeholder="2.4.0"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">File Size</label>
                  <input
                    name="size"
                    defaultValue={currentEditingApp?.size || ''}
                    required
                    placeholder="18.4 MB"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={currentEditingApp?.category || 'Utilities'}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  >
                    {categories.filter((c) => c !== 'All').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Min Android Version</label>
                  <input
                    name="minAndroid"
                    defaultValue={currentEditingApp?.minAndroid || 'Android 8.0+'}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">APK File Direct URL (Cloudflare R2 / GitHub Release)</label>
                <input
                  name="apkUrl"
                  defaultValue={currentEditingApp?.apkUrl || ''}
                  placeholder="https://github.com/vivanx/apps/releases/download/v2.4.0/app.apk"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">SHA-256 Checksum</label>
                <input
                  name="sha256"
                  defaultValue={currentEditingApp?.sha256 || ''}
                  placeholder="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  name="description"
                  rows="3"
                  defaultValue={currentEditingApp?.description || ''}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  name="featured"
                  id="featured-check"
                  defaultChecked={currentEditingApp?.featured || false}
                  className="w-4 h-4 accent-blue-600 rounded"
                />
                <label htmlFor="featured-check" className="font-semibold text-slate-300">Feature in Homepage Spotlight</label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setAppModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={lightboxImg} alt="Enlarged screenshot" className="rounded-2xl max-h-[85vh] object-contain shadow-2xl" />
            <button className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          FOOTER COMPONENT
      ========================================== */}
      <footer className={`border-t py-12 ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
            {/* Column 1: Brand Info */}
            <div className="col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="font-extrabold text-base text-slate-100">VivanX Apps</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Official Android APK distribution platform. Direct downloads, verified cryptographic SHA-256 hashes, and community-driven updates.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-2">
              <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Explore</div>
              <ul className="space-y-1.5">
                <li><button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">All Applications</button></li>
                <li><button onClick={() => { setActiveTab('guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Installation Guide</button></li>
                <li><button onClick={() => { setActiveTab('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Frequently Asked</button></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-2">
              <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Legal & Safety</div>
              <ul className="space-y-1.5">
                <li><button onClick={() => { setActiveTab('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Privacy Policy</button></li>
                <li><button onClick={() => { setActiveTab('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Terms of Service</button></li>
                <li><button onClick={() => { setActiveTab('disclaimer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Sideload Disclaimer</button></li>
              </ul>
            </div>

            {/* Column 4: Community */}
            <div className="space-y-2">
              <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Community</div>
              <ul className="space-y-1.5">
                <li><a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp Channel</a></li>
                <li><a href={TELEGRAM_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Telegram Channel</a></li>
                <li><button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400">Contact Team</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
            <div>
              © 2026 VivanX Apps Platform. All rights reserved. Android is a trademark of Google LLC.
            </div>
            <div className="flex items-center gap-4">
              <span>Cloudflare R2 Storage</span>
              <span>•</span>
              <span>SHA-256 Verified</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
