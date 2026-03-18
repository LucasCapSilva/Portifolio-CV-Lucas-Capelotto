export const cvData = {
  personalInfo: {
    name: "Lucas Capelotto da Silva",
    title: "Senior Full Stack Developer",
    location: "São Paulo - Brasil",
    email: "sid_cap@hotmail.com",
    whatsapp: "5511932147070",
    linkedin: "https://www.linkedin.com/in/lucas-capelotto-da-silva-43b26216a",
    github: "https://github.com/LucasCapSilva",
    summary: "+7 anos de experiência em desenvolvimento de software, liderança técnica, arquitetura de sistemas e desenvolvimento full stack. Especialista em criação de aplicações web, mobile e desktop utilizando microsserviços, com forte vivência em ambientes educacionais, financeiros e corporativos."
  },
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "React Native", level: 80 }
    ],
    backend: [
      { name: "C# / ASP.NET", level: 95 },
      { name: "Java / Spring Boot", level: 90 },
      { name: "Node.js / NestJS", level: 85 },
      { name: "Python / Flask", level: 80 }
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 80 }
    ],
    architecture: [
      { name: "Microsserviços", level: 90 },
      { name: "APIs REST", level: 95 },
      { name: "Mensageria (RabbitMQ, Kafka)", level: 85 },
      { name: "Event-Driven", level: 85 }
    ],
    dataAnalytics: [
      { name: "Power BI", level: 90 },
      { name: "Pandas (Python)", level: 85 },
      { name: "SQL Avançado", level: 90 },
      { name: "Data Warehousing", level: 80 }
    ],
    rpaAutomation: [
      { name: "Selenium", level: 95 },
      { name: "Python Automation", level: 95 },
      { name: "Web Scraping", level: 90 },
      { name: "Integração de APIs", level: 95 }
    ]
  },
  experience: [
    {
      company: "Byte Analysis Informática LTDA",
      period: "2018 - Atual (8 anos)",
      roles: [
        {
          title: "Engenheiro Full Stack Sênior",
          period: "2024 - Atual",
          description: "Liderança no desenvolvimento de aplicações escaláveis e arquitetura de sistemas distribuídos para o setor imobiliário.",
          achievements: [
            "Aumento de 35% na eficiência operacional",
            "Desenvolvimento de APIs REST seguras e performáticas",
            "Implementação de mensageria (RabbitMQ, Kafka, SQS) e arquitetura orientada a eventos",
            "Componentização em React e deploy AWS (EC2, S3, RDS, IAM)",
            "Gestão de ambientes cloud e Docker + Kubernetes"
          ],
          techs: ["C#", "ASP.NET", "React", "AWS", "SQL Server", "Docker", "Kubernetes", "Kafka"]
        },
        {
          title: "Engenheiro Full Stack Pleno",
          period: "2020 - 2024",
          description: "Desenvolvimento de aplicações completas, APIs REST, modelagem de dados e interfaces modernas.",
          achievements: [],
          techs: ["C#", "ASP.NET", "Angular", "SQL Server", "Docker", "AWS"]
        }
      ]
    },
    {
      company: "Generation Brasil",
      period: "2019 - Atual (7 anos)",
      roles: [
        {
          title: "Designer de Currículo & Dev Full Stack",
          period: "2024 - Atual",
          description: "Criação de trilhas educacionais, gestão de +700 alunos, automações com Python (Flask) e análise de dados (Power BI).",
          achievements: [],
          techs: ["Python", "Flask", "Power BI", "Canvas LMS"]
        },
        {
          title: "Instrutor & Desenvolvedor",
          period: "2020 - 2024",
          description: "Formação de +900 alunos e desenvolvimento de plataforma LMS do zero.",
          achievements: [
            "+2.200 usuários na plataforma LMS",
            "Implementação de streaming de vídeo e correção com IA",
            "Desenvolvimento com microsserviços e Docker/Kubernetes"
          ],
          techs: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Kubernetes"]
        }
      ]
    },
    {
      company: "Freelancer – Consultoria",
      period: "2021 - Atual",
      roles: [
        {
          title: "Arquiteto de Software & Dev Full Stack",
          period: "2021 - Atual",
          description: "Desenvolvimento de LMS, plataformas financeiras, CRMs para ONGs e sistemas para corretoras.",
          achievements: [
            "Arquitetura robusta com escalabilidade e segurança",
            "Integração complexa de sistemas"
          ],
          techs: ["Node.js", "NestJS", "Java", "Python", "React Native", "AWS"]
        }
      ]
    }
  ],
  projects: [
    {
      title: "Robô de Busca de Vagas Tech",
      description: "Automação inteligente desenvolvida para auxiliar mais de 2.000 alunos na recolocação profissional. O robô monitora e agrega vagas de tecnologia de múltiplas plataformas como Infojobs, Gupy e LinkedIn.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      techs: ["Python", "Selenium", "Flask", "Pandas"],
      results: "+2.000 alunos impactados em diversas plataformas",
      link: "#"
    },
    {
      title: "Plataforma para ONGs de Mulheres",
      description: "Sistema desenvolvido para apoiar o empreendedorismo feminino através de ONGs. Inclui ferramentas de cálculo de viabilidade de negócios, gestão financeira simplificada e mentorias.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
      techs: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: "Impacto social direto no apoio a microempreendedoras",
      link: "#"
    },
    {
      title: "Dashboards Educacionais & Analytics",
      description: "Solução de Business Intelligence para empresas de educação, focada em métricas de engajamento, retenção e performance acadêmica. Integração direta com LMS e análise preditiva.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      techs: ["Power BI", "Python", "SQL", "Data Warehouse"],
      results: "Otimização de estratégias pedagógicas baseada em dados",
      link: "#"
    },
    {
      title: "Plataforma LMS Escalonável",
      description: "Sistema de gerenciamento de aprendizagem (LMS) desenvolvido do zero, atendendo mais de 2.200 usuários. Inclui streaming de vídeo, correção de exercícios baseada em IA e monitoramento de progresso.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
      results: "Suportou pico de acessos com 99.9% de uptime",
      link: "#"
    },
    {
      title: "Sistema ERP Imobiliário",
      description: "Plataforma de gestão para o setor imobiliário focada em performance e eficiência. Integração com múltiplos serviços de terceiros e mensageria para processamento assíncrono.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
      results: "Aumentou a eficiência operacional em 35%",
      link: "#"
    },
    {
      title: "Portal Financeiro & Corretagem",
      description: "Aplicação robusta para corretoras, fornecendo análises em tempo real, integração de dados complexos e painéis de controle interativos de alta performance.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
      results: "Reduziu latência de processamento de dados em 50%",
      link: "#"
    }
  ]
};
