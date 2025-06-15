import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  BarChart3, 
  Target, 
  Zap, 
  Globe, 
  Smartphone, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Brain,
  CheckCircle
} from 'lucide-react';
import './App.css';

function App() {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Planejamento de Marketing",
      description: "Estratégias de aquisição, retenção e branding baseadas em dados para crescimento sustentável.",
      features: ["Estratégias de aquisição", "Gestão de ciclo de vida", "Posicionamento de marca", "KPIs e métricas"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Gestão de Tráfego Pago",
      description: "Performance marketing com foco em ROI, otimização de campanhas e análise financeira avançada.",
      features: ["Google Ads & Facebook", "Otimização de funil", "Análise ROI/IRR/NPV", "Performance marketing"]
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Google Ad Grants para ONGs",
      description: "Especialização em campanhas para terceiro setor, maximizando o orçamento de $10.000/mês.",
      features: ["Gestão especializada", "Compliance Google", "Terceiro setor", "Maximização orçamento"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Criação de Sites e Hubs",
      description: "Desenvolvimento de plataformas digitais premiadas com foco em SEO e experiência do usuário.",
      features: ["Hubs de conteúdo", "SEO otimizado", "Experiência premiada", "Plataformas escaláveis"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Micro SaaS e Produtos Digitais",
      description: "Desenvolvimento de aplicativos e soluções digitais com integração de IA e automação.",
      features: ["Aplicativos móveis", "Integração IA", "Produtos escaláveis", "50.000+ usuários"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Data Analytics",
      description: "Análise avançada de dados, dashboards e modelos preditivos para tomada de decisão estratégica.",
      features: ["Power BI & Analytics", "Modelos preditivos", "Segmentação avançada", "Insights acionáveis"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Hub de Saúde Premiado",
      description: "11 milhões de visualizações mensais - Brand Publisher Awards 2024"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Aplicativo de Sucesso",
      description: "50.000+ usuários ativos no aplicativo Proteste"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: "Pioneiro em IA",
      description: "Primeiro assistente virtual com IA no terceiro setor brasileiro"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Redução de Churn",
      description: "5 pontos percentuais de redução na Infoglobo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SL</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Sandro Leão</h1>
                <p className="text-sm text-slate-600">Marketing Digital & Analytics</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors">Cases</a>
              <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              17 anos de experiência comprovada
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Transforme Seu Negócio com{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Digital Estratégico
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Combinando experiência sólida em marketing digital com expertise em análise de dados e inteligência artificial, 
              ajudo empresas e ONGs a alcançarem crescimento sustentável através de estratégias personalizadas e baseadas em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                Agende uma Consultoria Gratuita
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300 hover:bg-slate-50">
                Ver Cases de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Sobre Mim</Badge>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                17 Anos Transformando Negócios Digitais
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Líder de Marketing altamente qualificado com mais de 17 anos de experiência promovendo crescimento e inovação. 
                Especialista em usar estratégias de marketing digital, análise de dados e IA para obter resultados excepcionais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">MBA em Gestão de Negócios (IBMEC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Formação Executiva (Fundação Dom Cabral)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Bacharel em Ciências Estatísticas (UERJ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Experiência Internacional (Euroconsumers)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-2">
                    {achievement.icon}
                    <h3 className="font-semibold text-slate-800 text-sm">{achievement.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Serviços</Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Soluções Completas em Marketing Digital
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços especializados para acelerar o crescimento do seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Cases de Sucesso</Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Resultados Que Falam Por Si
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Projetos que geraram impacto real e crescimento sustentável para nossos clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <Badge className="bg-yellow-100 text-yellow-800">Premiado</Badge>
                </div>
                <CardTitle className="text-2xl text-slate-800">Hub de Saúde Proteste</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Criação e gestão do hub de conteúdo que alcançou 11 milhões de visualizações mensais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">11M</div>
                    <div className="text-sm text-slate-600">Visualizações/mês</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2024</div>
                    <div className="text-sm text-slate-600">Brand Publisher Awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                  <Badge className="bg-purple-100 text-purple-800">Inovação</Badge>
                </div>
                <CardTitle className="text-2xl text-slate-800">Assistente Virtual com IA</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Primeiro assistente virtual para direitos do consumidor no terceiro setor brasileiro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">50K+</div>
                    <div className="text-sm text-slate-600">Usuários ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-slate-600">Atendimento IA</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Contato</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Vamos Conversar Sobre Seu Projeto
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Pronto para transformar seu negócio? Entre em contato e vamos discutir como posso ajudar você a alcançar seus objetivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>sandro.alves.leao@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>(21) 97247-4550</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Rio de Janeiro, RJ</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white text-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite uma Consultoria</CardTitle>
                <CardDescription>Preencha o formulário e retornaremos em até 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nome" />
                  <Input placeholder="Empresa" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Telefone" />
                <Textarea placeholder="Conte-nos sobre seu projeto..." rows={4} />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SL</span>
            </div>
            <span className="text-xl font-bold">Sandro Leão</span>
          </div>
          <p className="text-slate-400 mb-4">
            Consultoria especializada em Marketing Digital, Analytics e IA
          </p>
          <p className="text-sm text-slate-500">
            © 2024 Sandro Leão. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

