import { 
  Sprout, 
  Scale, 
  Map, 
  ShoppingBag, 
  CloudSun, 
  GraduationCap, 
  FileText, 
  Book, 
  BookOpen,
  Search,
  Users,
  Lightbulb
} from 'lucide-react';

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Sobre", href: "#about-page" }, // Special ID for the page
  { label: "Jornal Mapeia", href: "#journal" },
  { label: "Materiais", href: "#materials" },
  { label: "Contato", href: "#footer" },
];

export const HERO_CONTENT = {
  slogan: "Cultura Alimentar e Resiliência Climática no Semiárido Baiano",
  cta: "Acesse o Jornal Mapeia"
};

export const CONCEPT_CONTENT = {
  title: "Do Ser ao",
  subtitle: "Entenda a filosofia por trás do nosso nome e nossa atuação no território.",
  ser: {
    title: "SER",
    description: "Refere-se ao sujeito, à identidade sertaneja, aos saberes ancestrais e à essência de quem vive, produz e resiste no semiárido."
  },
  tao: {
    title: "TÃO",
    description: "Remete à intensidade, ao tempo da natureza e à vastidão do território que molda a vida e a cultura local."
  }
};

export const ABOUT_CONTENT = {
  title: "O Que é o Mapeia Ser-Tão?",
  text: "O Mapeia Ser-Tão é uma iniciativa de extensão e pesquisa coordenada pela UFBA e UFSB, em parceria com a Rede Pintadas e o Consórcio Jacuípe. Nosso objetivo é valorizar o patrimônio cultural alimentar e fortalecer a resiliência climática no Território da Bacia do Jacuípe. Unindo saberes acadêmicos e tradicionais, capacitamos a comunidade para mapear riscos e preservar cadeias produtivas locais frente aos desafios globais.",
  cards: [
    {
      title: "Segurança Alimentar",
      description: "Fortalecimento da agricultura familiar e combate à fome.",
      icon: Sprout
    },
    {
      title: "Justiça Climática",
      description: "Enfrentamento das secas e adaptação às mudanças.",
      icon: Scale
    },
    {
      title: "Mapeamento Social",
      description: "Empoderamento da comunidade e diagnósticos participativos.",
      icon: Map
    }
  ]
};

export const SERVICES_CONTENT = [
  {
    title: "Pesquisa Aplicada",
    description: "Desenvolvimento de estudos científicos alinhados às necessidades reais da comunidade e do território.",
    icon: Search
  },
  {
    title: "Extensão e Formação",
    description: "Capacitação técnica e troca de saberes para fortalecer a autonomia das famílias agricultoras.",
    icon: Users
  },
  {
    title: "Inovação Social",
    description: "Criação de tecnologias sociais e metodologias participativas para convivência com o semiárido.",
    icon: Lightbulb
  }
];

export const TIMELINE_CONTENT = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Levantamento participativo das demandas e potencialidades do território da Bacia do Jacuípe."
  },
  {
    step: "02",
    title: "Articulação",
    description: "Construção da rede de parceiros envolvendo universidades, prefeituras e organizações sociais."
  },
  {
    step: "03",
    title: "Ação em Campo",
    description: "Início das atividades de mapeamento, oficinas formativas e intervenções locais."
  },
  {
    step: "04",
    title: "Consolidação",
    description: "Sistematização dos resultados e fortalecimento das políticas públicas de convivência."
  }
];

export const JOURNAL_CONTENT = [
  {
    title: "Mulheres lideram a comercialização na Feira de Baixa Grande",
    tag: "Economia Solidária",
    summary: "Como a organização feminina tem transformado a dinâmica econômica local e fortalecido a venda de produtos orgânicos.",
    date: "12 OUT 2023",
    icon: ShoppingBag
  },
  {
    title: "Mapeamento identifica impactos da seca no cultivo de feijão e milho",
    tag: "Clima",
    summary: "Estudo participativo revela as áreas mais afetadas e propõe novas técnicas de manejo para o próximo ciclo.",
    date: "25 SET 2023",
    icon: CloudSun
  },
  {
    title: "Oficina reúne jovens para construção de mapas de risco no território",
    tag: "Educação",
    summary: "Juventude rural utiliza tecnologia social para identificar vulnerabilidades e potencialidades da região.",
    date: "10 SET 2023",
    icon: GraduationCap
  }
];

export const MATERIALS_CONTENT = [
  {
    title: "Guia: Teoria da Mudança na Prática",
    type: "PDF",
    icon: FileText
  },
  {
    title: "Glossário do Sertão",
    type: "E-book",
    icon: Book
  },
  {
    title: "Cartilha de Mapeamento Social",
    type: "PDF",
    icon: BookOpen
  }
];

export const FOOTER_CONTENT = {
  partners: [
    "UFBA", "UFSB", "Rede Pintadas", "Consórcio Jacuípe", "Huairou Commission", "ALL ACT"
  ],
  copyright: `© ${new Date().getFullYear()} Mapeia Ser-Tão. Todos os direitos reservados.`
};