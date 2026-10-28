import { useState, useEffect } from 'react';

// ============ DATA ============
const projects = [
  {
    id: 1,
    title: 'Abstract Geometry',
    category: 'Дизайн',
    description: 'Минималистичная композиция с геометрическими формами и мягкими градиентами. Исследование баланса и пространства.',
    tags: ['Figma', 'Illustrator', 'UI'],
    color: 'from-violet-600/20 to-indigo-600/20',
    accent: '#6c63ff',
  },
  {
    id: 2,
    title: 'Web Platform',
    category: 'Веб-разработка',
    description: 'Современный веб-интерфейс с адаптивным дизайном, чистой типографикой и продуманной навигацией.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    color: 'from-cyan-600/20 to-blue-600/20',
    accent: '#06b6d4',
  },
  {
    id: 3,
    title: 'Mobile Experience',
    category: 'Мобильное приложение',
    description: 'Тёмная тема с яркими акцентами. Glassmorphism-элементы и плавные переходы между экранами.',
    tags: ['React Native', 'Figma', 'Motion'],
    color: 'from-purple-600/20 to-pink-600/20',
    accent: '#a855f7',
  },
  {
    id: 4,
    title: 'Brand Identity',
    category: 'Брендинг',
    description: 'Полный фирменный стиль: от логотипа до гайдлайнов. Единый визуальный язык для всех носителей.',
    tags: ['Branding', 'Typography', 'Print'],
    color: 'from-amber-600/20 to-orange-600/20',
    accent: '#f59e0b',
  },
  {
    id: 5,
    title: 'Dashboard UI',
    category: 'Веб-разработка',
    description: 'Аналитическая панель с графиками, таблицами и виджетами. Фокус на читаемости данных.',
    tags: ['Vue.js', 'D3.js', 'SCSS'],
    color: 'from-emerald-600/20 to-teal-600/20',
    accent: '#10b981',
  },
  {
    id: 6,
    title: '3D Visualization',
    category: '3D / Motion',
    description: 'Интерактивная 3D-сцена с анимациями и шейдерами. Эксперимент с WebGL и пространством.',
    tags: ['Three.js', 'GLSL', 'Blender'],
    color: 'from-rose-600/20 to-red-600/20',
    accent: '#f43f5e',
  },
];

const skills = [
  'UI/UX Design', 'Figma', 'React', 'TypeScript',
  'Tailwind CSS', 'Node.js', 'Three.js', 'Motion Design',
  'Branding', 'Illustration', 'Blender', 'Git',
];

// ============ COMPONENTS ============

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Работы', href: '#projects' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-[var(--color-accent)] no-underline">
          portfolio<span className="text-[var(--color-text-primary)]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[var(--color-text-secondary)] text-sm font-medium no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold no-underline hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Связаться
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="w-[min(1200px,calc(100%-40px))] mx-auto relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Привет, я
          </p>
        </div>
        <h1 className="animate-fade-in-up delay-100 text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight mb-6">
          <span className="text-[var(--color-text-primary)]">Дизайнер</span>
          <br />
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-purple-400 bg-clip-text text-transparent">
            & Разработчик
          </span>
        </h1>
        <p className="animate-fade-in-up delay-200 max-w-lg text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10">
          Создаю цифровые продукты, которые сочетают эстетику и функциональность.
          Каждый проект — это история, рассказанная через дизайн и код.
        </p>
        <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold no-underline hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/25 animate-pulse-glow"
          >
            Смотреть работы
          </a>
          <a
            href="#about"
            className="px-7 py-3.5 rounded-full border border-[var(--color-dark-border)] text-[var(--color-text-secondary)] font-semibold no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            Подробнее
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-dark-border)] flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-[var(--color-accent)] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar/Visual */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 animate-gradient" />
              <div className="absolute inset-4 rounded-2xl bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    5+ лет опыта в дизайне и разработке
                  </p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float">
                🎨 Дизайн
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float delay-200">
                💻 Код
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
              Обо мне
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Превращаю идеи в{' '}
              <span className="text-[var(--color-accent)]">цифровую реальность</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Я — дизайнер и разработчик с опытом создания веб-приложений,
              мобильных интерфейсов и брендинга. Мой подход сочетает
              аналитическое мышление с творческим видением.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Каждый проект начинается с глубокого понимания задачи и заканчивается
              решением, которое не только выглядит хорошо, но и работает безупречно.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState('Все');
  const categories = ['Все', 'Дизайн', 'Веб-разработка', 'Мобильное приложение', 'Брендинг', '3D / Motion'];

  const filteredProjects = filter === 'Все'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-dark-border)] to-transparent" />

      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Портфолио
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Избранные работы
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
            Подборка проектов, которыми я горжусь. Каждый — уникальная задача с уникальным решением.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group rounded-2xl bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] overflow-hidden cursor-pointer"
            >
              {/* Image area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="project-image absolute inset-0 transition-transform duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-3xl">
                      {project.id === 1 && '◆'}
                      {project.id === 2 && '⬡'}
                      {project.id === 3 && '◉'}
                      {project.id === 4 && '✦'}
                      {project.id === 5 && '▣'}
                      {project.id === 6 && '⬢'}
                    </span>
                  </div>
                </div>
                <div className="project-overlay absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
                    Подробнее →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: project.accent }}>
                  {project.category}
                </p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs bg-[var(--color-dark)] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-dark-border)] to-transparent" />

      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Контакты
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Давайте работать вместе
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed">
            Есть интересный проект или идея? Напишите мне, и мы обсудим,
            как воплотить её в жизнь.
          </p>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8 text-left">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/25"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-10">
            {[
              { label: 'Telegram', icon: '✈️' },
              { label: 'GitHub', icon: '🐙' },
              { label: 'Dribbble', icon: '🏀' },
              { label: 'Behance', icon: '🅱️' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-12 h-12 rounded-full bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] flex items-center justify-center text-lg hover:border-[var(--color-accent)] hover:scale-110 transition-all no-underline"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-dark-border)]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-text-muted)] text-sm">
          © 2025 portfolio. Все права защищены.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm">
          Сделано с 💜 и большим количеством ☕
        </p>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text-primary)]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
