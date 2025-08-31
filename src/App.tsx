import React, { useState, useEffect } from 'react';
import { Highlight } from '@/components/ui/hero-highlight';
import {
  Zap,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Hexagon,
  BarChart3,
  MessageSquare,
  Star,
  Mail,
  Phone,
  MapPin,
  Play,
  Sparkles,
  X,
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [popupEmail, setPopupEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [popupThankYou, setPopupThankYou] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendToBrevo = async (email: string) => {
    try {
      const res = await fetch("/api/addContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      return res.ok;
    } catch (err) {
      console.error("Erro ao enviar para Brevo:", err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await sendToBrevo(email);
    if (ok) {
      console.log("Email submitted:", email);
      setEmail("");
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await sendToBrevo(popupEmail);
    if (ok) {
      console.log("Popup email submitted:", popupEmail);
      setPopupEmail("");
      setPopupThankYou(true);
      setTimeout(() => {
        setPopupThankYou(false);
        setShowPopup(false);
      }, 2000);
    }
  };

  const openPopup = () => {
    setShowPopup(true);
    setPopupThankYou(false);
  };

  const showDemo = () => {
    // Toggle to show the HeroHighlight demo
    const demoSection = document.getElementById('hero-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Análise IA Avançada',
      description:
        'Nossa IA analisa seus textos de vendas identificando pontos fracos e oportunidades de melhoria em segundos.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Geração de Copy',
      description:
        'Gere textos de alta conversão para emails, páginas de vendas, anúncios e scripts personalizados para seu público.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Otimização de Conversão',
      description:
        'Melhore suas taxas de conversão com sugestões baseadas em dados de milhares de campanhas de sucesso.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Storytelling Poderoso',
      description:
        'Crie narrativas envolventes que conectam emocionalmente com seu público e impulsionam as vendas.',
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Diretor de Marketing Digital',
      company: 'AgênciaTop',
      content:
        'Com o Copyts, nossos textos de vendas melhoraram 300%. É uma revolução para agências como a nossa.',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Ana Rodrigues',
      role: 'Lançadora Digital',
      company: 'Cursos Premium',
      content:
        'Nunca pensei que um AI pudesse entender tanto sobre persuasão. Copyts transformou meus lançamentos.',
      avatar:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Roberto Santos',
      role: 'Afiliado Premium',
      company: 'Vendas Online',
      content:
        'Meus emails agora convertem 5x mais. O Copyts é o segredo que todo afiliado precisa conhecer.',
      avatar:
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Textos Analisados' },
    { number: '500%', label: 'Aumento Médio em Conversões' },
    { number: '2,500+', label: 'Profissionais na Lista de Espera' },
    { number: '30s', label: 'Para Gerar Copy Perfeito' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform rotate-12">
                <Hexagon className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Copyts</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-white/80 hover:text-white transition-colors"
              >
                Recursos
              </a>
              <a
                href="#testimonials"
                className="text-white/80 hover:text-white transition-colors"
              >
                Depoimentos
              </a>
            </nav>
            <button 
              onClick={openPopup}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Entrar na Lista
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-white/20">
              <Hexagon className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-white/90 text-sm">
                Lançamento em breve - Seja o primeiro a usar!
              </span>
            </div>

            <h1 className="text-6xl md:text-8x1 font-bold text-white mb-8 leading-tight">
              Transforme palavras em lucro
              <br />
              <Highlight className="text-white mb-6 leading-tight">no piloto automático</Highlight>
            </h1>
            <br />

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Copyts o marketing com scripts que conquistam e convertem.
              <br />
              Feito especialmente para{' '}
              <strong className="text-white"> você. </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 min-h-[80px]">
              {!showThankYou ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2 w-full max-w-lg"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email profissional"
                    required
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap font-semibold"
                  >
                    <span>Garantir Acesso</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center space-x-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-8 py-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold text-lg">
                    Obrigado! Você está na lista!
                  </span>
                </div>
              )}
            </div>
            <br />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O Copyts é Para Você Se...
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Se você busca otimizar suas estratégias de vendas e marketing com
            textos de alta performance, o Copyts é a ferramenta ideal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Agências de Marketing',
                description:
                  'Crie campanhas de alta conversão e storytelling envolvente para seus clientes.',
                benefits: [
                  'Campanhas mais eficazes',
                  'Clientes satisfeitos',
                  'Resultados mensuráveis',
                ],
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Lançadores Digitais',
                description:
                  'Desenvolva scripts persuasivos e sequências de email que maximizam conversões.',
                benefits: [
                  'Lançamentos de sucesso',
                  'Lista engajada',
                  'Vendas recorrentes',
                ],
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Afiliados Premium',
                description:
                  'Crie conteúdos únicos e scripts de vendas que se destacam no mercado.',
                benefits: [
                  'Comissões maiores',
                  'Aprovação garantida',
                  'Autoridade no nicho',
                ],
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: 'Profissionais de Vendas',
                description:
                  'Desenvolva scripts de vendas e apresentações que fecham mais negócios.',
                benefits: [
                  'Mais fechamentos',
                  'Ciclo de vendas menor',
                  'Performance superior',
                ],
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: 'Empresas B2B',
                description:
                  'Otimize propostas comerciais e materiais de marketing para B2B.',
                benefits: [
                  'Propostas mais assertivas',
                  'Maior taxa de fechamento',
                  'Equipe alinhada',
                ],
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Criadores de Conteúdo',
                description:
                  'Produza conteúdos envolventes e storytelling que conecta com a audiência.',
                benefits: [
                  'Maior engajamento',
                  'Audiência fiel',
                  'Monetização eficaz',
                ],
              },
            ].map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {audience.title}
                </h3>
                <p className="text-white/70 mb-6">{audience.description}</p>
                <div className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-white/80"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recursos que{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Transformam
              </span>{' '}
              Resultados
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nossa IA foi treinada com milhares de campanhas de sucesso para
              entregar exatamente o que você precisa para vender mais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeFeature === index
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                          : 'bg-white/10'
                      } transition-all duration-300`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                    <div className="h-4 bg-white/20 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
                    <div className="h-4 bg-white/20 rounded animate-pulse w-1/2"></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-4 py-2 text-white text-sm">
                    <Play className="w-4 h-4 mr-2" />
                    <button onClick={showDemo} className="hover:underline">
                      Veja o Copyts em ação
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que os{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Especialistas
              </span>{' '}
              Estão Dizendo
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Profissionais que testaram o Copyts em beta estão obtendo
              resultados extraordinários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/80 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-purple-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Não Perca Esta Oportunidade Única
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            O Copyts será lançado em breve e os primeiros usuários terão acesso
            a condições especiais que nunca mais se repetirão.
          </p>

          <button
            onClick={() => {
              const heroSection = document.getElementById('hero-section');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap"
          >
            Quero meu acesso
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 max-w-md w-full border border-white/20 relative transform transition-all duration-300 scale-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hexagon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Teste nossa versão Beta!
              </h3>
              <p className="text-white/70">
                Seja um dos primeiros a ter acesso ao Copyts e receba condições especiais de lançamento.
              </p>
            </div>

            {!popupThankYou ? (
              <form onSubmit={handlePopupSubmit} className="space-y-4">
                <input
                  type="email"
                  value={popupEmail}
                  onChange={(e) => setPopupEmail(e.target.value)}
                  placeholder="Seu melhor email profissional"
                  required
                  className="w-full px-6 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Garantir Meu Acesso VIP</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h4 className="text-xl font-bold text-white mb-2">
                  Perfeito! Você está na lista VIP!
                </h4>
                <p className="text-white/70">
                  Em breve você receberá todas as novidades e acesso prioritário ao Copyts.
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-white/50 text-xs">
                Seus dados estão seguros conosco. Sem spam, apenas conteúdo de valor.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform rotate-12">
                  <Hexagon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Copyts</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Todo negócio tem um pitch. Poucos têm um Copyts. Transforme suas
                palavras em lucros.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Recursos
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Changelog
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Carreira
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors block"
                >
                  Contato
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-white/70">
                  <Mail className="w-4 h-4 mr-2" />
                  copyts.ia@gmail.com
                </div>
                <div className="flex items-center text-white/70">
                  <Phone className="w-4 h-4 mr-2" />
                  +55 (11) 9 9999-9999
                </div>
                <div className="flex items-center text-white/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  São Paulo, Brasil
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm">
              © 2024 Copyts. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Termos
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
