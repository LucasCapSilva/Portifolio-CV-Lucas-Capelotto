import type { Language } from './translations';

export const getCvData = (lang: Language = 'pt') => {
  const data = {
    pt: {
      personalInfo: {
        name: "Lucas Capelotto da Silva",
        title: "Senior Full Stack Developer",
        location: "São Paulo - Brasil",
        email: "sid_cap@hotmail.com",
        whatsapp: "5511932147070",
        linkedin: "https://www.linkedin.com/in/lucas-capelotto-da-silva-43b26216a",
        github: "https://github.com/LucasCapSilva",
        portfolioGithub: "https://github.com/LucasCapSilva/Portifolio-CV-Lucas-Capelotto",
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
        ],
        curriculumDesign: [
          { name: "Estruturação de Trilhas (LMS)", level: 95 },
          { name: "Design Instrucional", level: 90 },
          { name: "Criação de Materiais Didáticos", level: 95 },
          { name: "Análise de Métricas Educacionais", level: 85 },
          { name: "Gestão de OKRs", level: 85 },
          { name: "Metodologias Ágeis", level: 90 }
        ],
        techInstruction: [
          { name: "Mentoria Técnica", level: 95 },
          { name: "Comunicação e Didática", level: 95 },
          { name: "Code Review Educativo", level: 90 },
          { name: "Aprendizagem Ativa", level: 90 },
          { name: "Avaliação Contínua", level: 90 },
          { name: "Capacitação de Instrutores", level: 85 }
        ],
        leadershipManagement: [
          { name: "Liderança de Times Técnicos", level: 95 },
          { name: "Treinamento de Equipes", level: 95 },
          { name: "Coordenação de Processos Seletivos", level: 90 },
          { name: "Gestão de Reuniões e Feedbacks", level: 90 },
          { name: "Desenvolvimento de Talentos", level: 95 },
          { name: "Alinhamento Estratégico", level: 85 }
        ]
      },
      experience: [
        {
          company: "Byte Analysis Informática LTDA",
          period: "2018 - Atual",
          roles: [
            {
              title: "Engenheiro Full Stack Sênior",
              period: "2024 - Atual",
              description: "Liderança no desenvolvimento de aplicações escaláveis e robustas para o setor imobiliário, construindo plataformas completas para gestão de imóveis, propostas e funil de vendas. Atuação abrangente em arquiteturas modernas, mensageria distribuída e ambientes cloud.",
              achievements: [
                "Aumento de 35% na eficiência operacional através de melhorias arquiteturais",
                "Projetou e implementou APIs REST seguras e de alta performance com ASP.NET",
                "Estruturou comunicação assíncrona com RabbitMQ, Kafka e AWS SQS",
                "Conduziu a evolução do frontend em React com componentes reutilizáveis",
                "Implantação e gestão de aplicações em AWS (EC2, S3, RDS) com Docker e Kubernetes",
                "Mentoria técnica de equipes, disseminando boas práticas"
              ],
              techs: ["C#", "ASP.NET", "React", "AWS", "SQL Server", "Docker", "Kubernetes", "Kafka"]
            },
            {
              title: "Engenheiro Full Stack Pleno",
              period: "2020 - 2024",
              description: "Desenvolvimento de plataformas imobiliárias completas cobrindo todo o processo comercial e operacional, focando em soluções escaláveis e seguras.",
              achievements: [
                "Otimização de bancos SQL Server com queries e procedures eficientes",
                "Criação de interfaces modernas e responsivas com Angular",
                "Integrações eficientes entre frontend e backend via APIs",
                "Implantação de aplicações em AWS e orquestração com Docker/Kubernetes"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server", "Docker", "AWS"]
            },
            {
              title: "Engenheiro Full Stack Júnior",
              period: "2018 - 2020",
              description: "Desenvolvimento e manutenção de aplicações web, contribuindo para funcionalidades, integração entre serviços e melhoria contínua dos sistemas.",
              achievements: [
                "Desenvolvimento de APIs REST com ASP.NET e endpoints para frontend",
                "Criação de componentes reutilizáveis em React",
                "Modelagem de banco de dados SQL Server",
                "Aplicação de boas práticas, testes e validação de funcionalidades"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server"]
            }
          ]
        },
        {
          company: "Generation Brasil",
          period: "2019 - Atual",
          roles: [
            {
              title: "Designer de Currículo & Dev Full Stack",
              period: "2024 - Atual",
              description: "Criação e evolução de programas educacionais voltados à formação em tecnologia, alinhando trilhas de aprendizado às demandas do mercado. Atuação conjunta como Desenvolvedor e Analista de Dados.",
              achievements: [
                "Estruturação de cursos e trilhas no Canvas LMS, acompanhando evolução de +700 alunos",
                "Desenvolvimento de automações em Python (Flask) incluindo robô de busca de vagas",
                "Geração de insights com Python e Power BI para aprimorar currículo e empregabilidade",
                "Integração de dados de performance e métricas de aprendizagem para decisões estratégicas"
              ],
              techs: ["Python", "Flask", "Power BI", "Canvas LMS", "Data Analytics"]
            },
            {
              title: "Instrutor & Dev Full Stack",
              period: "2020 - 2024",
              description: "Formação de profissionais de tecnologia, impactando mais de 900 alunos. Desenvolvimento paralelo de plataforma LMS escalável em arquitetura de microsserviços.",
              achievements: [
                "Lecionou Java, C#, Node.js, React e Angular com mentoria em projetos reais",
                "Desenvolvimento de LMS que gerenciou aprendizado de +2.200 usuários",
                "Implementou streaming de vídeo e correção automatizada com Inteligência Artificial",
                "Sistema construído com Java, Spring Boot, React, MySQL, Docker e Kubernetes"
              ],
              techs: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Kubernetes"]
            },
            {
              title: "Instrutor de Desenvolvimento de Software",
              period: "2019 - 2020",
              description: "Formação de profissionais em programas intensivos de desenvolvimento web com foco em Java e Angular.",
              achievements: [
                "Conduziu aulas práticas de APIs REST e banco de dados relacionais",
                "Mentoria de alunos em projetos reais, oferecendo code review",
                "Ensino focado em desenvolvimento full stack e versionamento com Git"
              ],
              techs: ["Java", "Spring Boot", "Angular", "Git"]
            }
          ]
        },
        {
          company: "Consultoria em Tecnologia Freelancer",
          period: "2021 - Atual",
          roles: [
            {
              title: "Arquiteto de Software & Dev Full Stack",
              period: "2021 - Atual",
              description: "Condução de projetos sob demanda para empresas, startups e ONGs. Atuação desde a definição da arquitetura até a implementação completa de aplicações focadas em escalabilidade e segurança.",
              achievements: [
                "Desenvolvimento de CRMs personalizados para ONGs (gestão de doadores e campanhas)",
                "Construção de plataformas de investimento e sistemas para corretoras financeiras",
                "Desenvolvimento de plataformas LMS para gestão de cursos e conteúdos",
                "Criação de APIs e microsserviços (Node.js, Java, Python) e apps móveis (React Native)",
                "Infraestrutura baseada em containers (Docker/Kubernetes) e deploy na AWS"
              ],
              techs: ["Node.js", "Java", "Python", "React Native", "AWS", "Docker", "Kubernetes"]
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
          longDescription: "Uma aplicação web White-Label de alta performance para o mercado financeiro, desenvolvida para oferecer uma experiência de SaaS Financeiro premium. O sistema combina dados em tempo real, simulação de trading e gestão de carteira em uma interface sofisticada e totalmente personalizável. Permite personalização instantânea de cores da marca, suporte a Dark/Light Mode e integração híbrida de dados de mercado (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Reduziu latência de processamento de dados em 50%",
          link: "https://portal-financeiro-corretagem-white.vercel.app"
        }
      ]
    },
    en: {
      personalInfo: {
        name: "Lucas Capelotto da Silva",
        title: "Senior Full Stack Developer",
        location: "São Paulo - Brazil",
        email: "sid_cap@hotmail.com",
        whatsapp: "5511932147070",
        linkedin: "https://www.linkedin.com/in/lucas-capelotto-da-silva-43b26216a",
        github: "https://github.com/LucasCapSilva",
        portfolioGithub: "https://github.com/LucasCapSilva/Portifolio-CV-Lucas-Capelotto",
        summary: "7+ years of experience in software development, technical leadership, systems architecture, and full-stack development. Expert in creating web, mobile, and desktop applications using microservices, with strong background in educational, financial, and corporate environments."
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
          { name: "Microservices", level: 90 },
          { name: "REST APIs", level: 95 },
          { name: "Messaging (RabbitMQ, Kafka)", level: 85 },
          { name: "Event-Driven", level: 85 }
        ],
        dataAnalytics: [
          { name: "Power BI", level: 90 },
          { name: "Pandas (Python)", level: 85 },
          { name: "Advanced SQL", level: 90 },
          { name: "Data Warehousing", level: 80 }
        ],
        rpaAutomation: [
          { name: "Selenium", level: 95 },
          { name: "Python Automation", level: 95 },
          { name: "Web Scraping", level: 90 },
          { name: "API Integration", level: 95 }
        ],
        curriculumDesign: [
          { name: "Trail Structuring (LMS)", level: 95 },
          { name: "Instructional Design", level: 90 },
          { name: "Teaching Materials Creation", level: 95 },
          { name: "Educational Metrics Analysis", level: 85 },
          { name: "OKR Management", level: 85 },
          { name: "Agile Methodologies", level: 90 }
        ],
        techInstruction: [
          { name: "Technical Mentoring", level: 95 },
          { name: "Communication & Didactics", level: 95 },
          { name: "Educational Code Review", level: 90 },
          { name: "Active Learning", level: 90 },
          { name: "Continuous Assessment", level: 90 },
          { name: "Instructor Training", level: 85 }
        ],
        leadershipManagement: [
          { name: "Technical Team Leadership", level: 95 },
          { name: "Team Training", level: 95 },
          { name: "Hiring Process Coordination", level: 90 },
          { name: "Meeting & Feedback Management", level: 90 },
          { name: "Talent Development", level: 95 },
          { name: "Strategic Alignment", level: 85 }
        ]
      },
      experience: [
        {
          company: "Byte Analysis Informática LTDA",
          period: "2018 - Present",
          roles: [
            {
              title: "Senior Full Stack Engineer",
              period: "2024 - Present",
              description: "Leading the development of scalable and robust applications for the real estate sector, building comprehensive platforms for property management, proposals, and sales funnels. Extensive work in modern architectures, distributed messaging, and cloud environments.",
              achievements: [
                "Increased operational efficiency by 35% through architectural improvements",
                "Designed and implemented secure, high-performance REST APIs with ASP.NET",
                "Structured asynchronous communication with RabbitMQ, Kafka, and AWS SQS",
                "Led frontend evolution in React with reusable components",
                "Deployed and managed applications on AWS (EC2, S3, RDS) with Docker and Kubernetes",
                "Provided technical mentoring to teams, disseminating best practices"
              ],
              techs: ["C#", "ASP.NET", "React", "AWS", "SQL Server", "Docker", "Kubernetes", "Kafka"]
            },
            {
              title: "Mid-level Full Stack Engineer",
              period: "2020 - 2024",
              description: "Development of comprehensive real estate platforms covering the entire commercial and operational process, focusing on scalable and secure solutions.",
              achievements: [
                "Optimized SQL Server databases with efficient queries and procedures",
                "Created modern and responsive interfaces with Angular",
                "Efficient integrations between frontend and backend via APIs",
                "Deployed applications on AWS and orchestrated with Docker/Kubernetes"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server", "Docker", "AWS"]
            },
            {
              title: "Junior Full Stack Engineer",
              period: "2018 - 2020",
              description: "Development and maintenance of web applications, contributing to features, service integration, and continuous system improvement.",
              achievements: [
                "Developed REST APIs with ASP.NET and endpoints for frontend",
                "Created reusable components in React",
                "Modeled SQL Server databases",
                "Applied best practices, testing, and feature validation"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server"]
            }
          ]
        },
        {
          company: "Generation Brasil",
          period: "2019 - Present",
          roles: [
            {
              title: "Curriculum Designer & Full Stack Dev",
              period: "2024 - Present",
              description: "Creation and evolution of educational programs aimed at technology training, aligning learning trails with market demands. Joint role as Developer and Data Analyst.",
              achievements: [
                "Structured courses and trails in Canvas LMS, tracking progress of 700+ students",
                "Developed automations in Python (Flask) including a job search bot",
                "Generated insights with Python and Power BI to improve curriculum and employability",
                "Integrated performance data and learning metrics for strategic decisions"
              ],
              techs: ["Python", "Flask", "Power BI", "Canvas LMS", "Data Analytics"]
            },
            {
              title: "Instructor & Full Stack Dev",
              period: "2020 - 2024",
              description: "Training technology professionals, impacting over 900 students. Parallel development of a scalable LMS platform in a microservices architecture.",
              achievements: [
                "Taught Java, C#, Node.js, React, and Angular with mentoring in real projects",
                "Developed LMS that managed learning for 2,200+ users",
                "Implemented video streaming and AI-based automated grading",
                "System built with Java, Spring Boot, React, MySQL, Docker, and Kubernetes"
              ],
              techs: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Kubernetes"]
            },
            {
              title: "Software Development Instructor",
              period: "2019 - 2020",
              description: "Training professionals in intensive web development programs focusing on Java and Angular.",
              achievements: [
                "Conducted practical classes on REST APIs and relational databases",
                "Mentored students in real projects, offering code reviews",
                "Teaching focused on full-stack development and version control with Git"
              ],
              techs: ["Java", "Spring Boot", "Angular", "Git"]
            }
          ]
        },
        {
          company: "Freelance Tech Consultant",
          period: "2021 - Present",
          roles: [
            {
              title: "Software Architect & Full Stack Dev",
              period: "2021 - Present",
              description: "Leading on-demand projects for companies, startups, and NGOs. Involvement from architecture definition to full implementation of applications focused on scalability and security.",
              achievements: [
                "Developed custom CRMs for NGOs (donor and campaign management)",
                "Built investment platforms and systems for financial brokerages",
                "Developed LMS platforms for course and content management",
                "Created APIs and microservices (Node.js, Java, Python) and mobile apps (React Native)",
                "Container-based infrastructure (Docker/Kubernetes) and AWS deployment"
              ],
              techs: ["Node.js", "Java", "Python", "React Native", "AWS", "Docker", "Kubernetes"]
            }
          ]
        }
      ],
      projects: [
        {
          title: "Tech Job Search Bot",
          description: "Intelligent automation developed to assist over 2,000 students in professional placement. The bot monitors and aggregates tech jobs from multiple platforms like Infojobs, Gupy, and LinkedIn.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["Python", "Selenium", "Flask", "Pandas"],
          results: "2,000+ students impacted across multiple platforms",
          link: "#"
        },
        {
          title: "Platform for Women's NGOs",
          description: "System developed to support female entrepreneurship through NGOs. Includes business viability calculation tools, simplified financial management, and mentoring.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS"],
          results: "Direct social impact in supporting micro-entrepreneurs",
          link: "#"
        },
        {
          title: "Educational Dashboards & Analytics",
          description: "Business Intelligence solution for education companies, focused on engagement, retention, and academic performance metrics. Direct LMS integration and predictive analysis.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Power BI", "Python", "SQL", "Data Warehouse"],
          results: "Optimization of pedagogical strategies based on data",
          link: "#"
        },
        {
          title: "Scalable LMS Platform",
          description: "Learning Management System (LMS) developed from scratch, serving over 2,200 users. Includes video streaming, AI-based exercise correction, and progress monitoring.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
          results: "Supported traffic peaks with 99.9% uptime",
          link: "#"
        },
        {
          title: "Real Estate ERP System",
          description: "Management platform for the real estate sector focused on performance and efficiency. Integration with multiple third-party services and messaging for asynchronous processing.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
          results: "Increased operational efficiency by 35%",
          link: "#"
        },
        {
          title: "Financial & Brokerage Portal",
          description: "Robust application for brokerages, providing real-time analytics, complex data integration, and high-performance interactive dashboards.",
          longDescription: "A high-performance White-Label web application for the financial market, developed to offer a premium Financial SaaS experience. The system combines real-time data, trading simulation, and portfolio management in a sophisticated and fully customizable interface. It allows instant brand color customization, Dark/Light Mode support, and hybrid market data integration (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Reduced data processing latency by 50%",
          link: "https://portal-financeiro-corretagem-white.vercel.app"
        }
      ]
    },
    es: {
      personalInfo: {
        name: "Lucas Capelotto da Silva",
        title: "Senior Full Stack Developer",
        location: "São Paulo - Brasil",
        email: "sid_cap@hotmail.com",
        whatsapp: "5511932147070",
        linkedin: "https://www.linkedin.com/in/lucas-capelotto-da-silva-43b26216a",
        github: "https://github.com/LucasCapSilva",
        portfolioGithub: "https://github.com/LucasCapSilva/Portifolio-CV-Lucas-Capelotto",
        summary: "Más de 7 años de experiencia en desarrollo de software, liderazgo técnico, arquitectura de sistemas y desarrollo full stack. Especialista en la creación de aplicaciones web, móviles y de escritorio utilizando microservicios, con sólida experiencia en entornos educativos, financieros y corporativos."
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
          { name: "Microservicios", level: 90 },
          { name: "APIs REST", level: 95 },
          { name: "Mensajería (RabbitMQ, Kafka)", level: 85 },
          { name: "Event-Driven", level: 85 }
        ],
        dataAnalytics: [
          { name: "Power BI", level: 90 },
          { name: "Pandas (Python)", level: 85 },
          { name: "SQL Avanzado", level: 90 },
          { name: "Data Warehousing", level: 80 }
        ],
        rpaAutomation: [
          { name: "Selenium", level: 95 },
          { name: "Python Automation", level: 95 },
          { name: "Web Scraping", level: 90 },
          { name: "Integración de APIs", level: 95 }
        ],
        curriculumDesign: [
          { name: "Estructuración de Rutas (LMS)", level: 95 },
          { name: "Diseño Instruccional", level: 90 },
          { name: "Creación de Materiales Didácticos", level: 95 },
          { name: "Análisis de Métricas Educativas", level: 85 },
          { name: "Gestión de OKRs", level: 85 },
          { name: "Metodologías Ágiles", level: 90 }
        ],
        techInstruction: [
          { name: "Mentoría Técnica", level: 95 },
          { name: "Comunicación y Didáctica", level: 95 },
          { name: "Code Review Educativo", level: 90 },
          { name: "Aprendizaje Activo", level: 90 },
          { name: "Evaluación Continua", level: 90 },
          { name: "Capacitación de Instructores", level: 85 }
        ],
        leadershipManagement: [
          { name: "Liderazgo de Equipos Técnicos", level: 95 },
          { name: "Entrenamiento de Equipos", level: 95 },
          { name: "Coordinación de Procesos de Selección", level: 90 },
          { name: "Gestión de Reuniones y Feedbacks", level: 90 },
          { name: "Desarrollo de Talentos", level: 95 },
          { name: "Alineación Estratégica", level: 85 }
        ]
      },
      experience: [
        {
          company: "Byte Analysis Informática LTDA",
          period: "2018 - Presente",
          roles: [
            {
              title: "Ingeniero Full Stack Senior",
              period: "2024 - Presente",
              description: "Liderazgo en el desarrollo de aplicaciones escalables y robustas para el sector inmobiliario, construyendo plataformas completas para la gestión de propiedades, propuestas y embudos de ventas. Amplia experiencia en arquitecturas modernas, mensajería distribuida y entornos en la nube.",
              achievements: [
                "Aumento del 35% en la eficiencia operativa a través de mejoras arquitectónicas",
                "Diseñó e implementó APIs REST seguras y de alto rendimiento con ASP.NET",
                "Estructuró la comunicación asíncrona con RabbitMQ, Kafka y AWS SQS",
                "Lideró la evolución del frontend en React con componentes reutilizables",
                "Despliegue y gestión de aplicaciones en AWS (EC2, S3, RDS) con Docker y Kubernetes",
                "Mentoría técnica de equipos, diseminando buenas prácticas"
              ],
              techs: ["C#", "ASP.NET", "React", "AWS", "SQL Server", "Docker", "Kubernetes", "Kafka"]
            },
            {
              title: "Ingeniero Full Stack Semi-Senior",
              period: "2020 - 2024",
              description: "Desarrollo de plataformas inmobiliarias completas que cubren todo el proceso comercial y operativo, centrándose en soluciones escalables y seguras.",
              achievements: [
                "Optimización de bases de datos SQL Server con consultas y procedimientos eficientes",
                "Creación de interfaces modernas y responsivas con Angular",
                "Integraciones eficientes entre frontend y backend vía APIs",
                "Implementación de aplicaciones en AWS y orquestación con Docker/Kubernetes"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server", "Docker", "AWS"]
            },
            {
              title: "Ingeniero Full Stack Junior",
              period: "2018 - 2020",
              description: "Desarrollo y mantenimiento de aplicaciones web, contribuyendo a funcionalidades, integración entre servicios y mejora continua de los sistemas.",
              achievements: [
                "Desarrollo de APIs REST con ASP.NET y endpoints para frontend",
                "Creación de componentes reutilizables en React",
                "Modelado de bases de datos SQL Server",
                "Aplicación de buenas prácticas, pruebas y validación de funcionalidades"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server"]
            }
          ]
        },
        {
          company: "Generation Brasil",
          period: "2019 - Presente",
          roles: [
            {
              title: "Diseñador de Currículo y Dev Full Stack",
              period: "2024 - Presente",
              description: "Creación y evolución de programas educativos orientados a la formación en tecnología, alineando las rutas de aprendizaje a las demandas del mercado. Rol conjunto como Desarrollador y Analista de Datos.",
              achievements: [
                "Estructuración de cursos y rutas en Canvas LMS, siguiendo el progreso de +700 estudiantes",
                "Desarrollo de automatizaciones en Python (Flask) incluyendo un bot de búsqueda de empleo",
                "Generación de insights con Python y Power BI para mejorar el currículo y la empleabilidad",
                "Integración de datos de rendimiento y métricas de aprendizaje para decisiones estratégicas"
              ],
              techs: ["Python", "Flask", "Power BI", "Canvas LMS", "Data Analytics"]
            },
            {
              title: "Instructor y Dev Full Stack",
              period: "2020 - 2024",
              description: "Formación de profesionales de tecnología, impactando a más de 900 estudiantes. Desarrollo paralelo de una plataforma LMS escalable en una arquitectura de microservicios.",
              achievements: [
                "Enseñó Java, C#, Node.js, React y Angular con mentoría en proyectos reales",
                "Desarrollo de LMS que gestionó el aprendizaje de +2.200 usuarios",
                "Implementó streaming de video y corrección automatizada basada en IA",
                "Sistema construido con Java, Spring Boot, React, MySQL, Docker y Kubernetes"
              ],
              techs: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Kubernetes"]
            },
            {
              title: "Instructor de Desarrollo de Software",
              period: "2019 - 2020",
              description: "Formación de profesionales en programas intensivos de desarrollo web enfocados en Java y Angular.",
              achievements: [
                "Impartió clases prácticas de APIs REST y bases de datos relacionales",
                "Mentoría de estudiantes en proyectos reales, ofreciendo revisión de código",
                "Enseñanza enfocada en desarrollo full stack y control de versiones con Git"
              ],
              techs: ["Java", "Spring Boot", "Angular", "Git"]
            }
          ]
        },
        {
          company: "Consultoría en Tecnología Freelance",
          period: "2021 - Presente",
          roles: [
            {
              title: "Arquitecto de Software y Dev Full Stack",
              period: "2021 - Presente",
              description: "Liderazgo de proyectos bajo demanda para empresas, startups y ONGs. Participación desde la definición de la arquitectura hasta la implementación completa de aplicaciones enfocadas en escalabilidad y seguridad.",
              achievements: [
                "Desarrollo de CRMs personalizados para ONGs (gestión de donantes y campañas)",
                "Construcción de plataformas de inversión y sistemas para corredurías financieras",
                "Desarrollo de plataformas LMS para gestión de cursos y contenidos",
                "Creación de APIs y microservicios (Node.js, Java, Python) y apps móviles (React Native)",
                "Infraestructura basada en contenedores (Docker/Kubernetes) e implementación en AWS"
              ],
              techs: ["Node.js", "Java", "Python", "React Native", "AWS", "Docker", "Kubernetes"]
            }
          ]
        }
      ],
      projects: [
        {
          title: "Bot de Búsqueda de Empleo Tech",
          description: "Automatización inteligente desarrollada para ayudar a más de 2.000 estudiantes en la colocación profesional. El bot monitorea y agrega empleos tecnológicos de múltiples plataformas como Infojobs, Gupy y LinkedIn.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["Python", "Selenium", "Flask", "Pandas"],
          results: "+2.000 estudiantes impactados en múltiples plataformas",
          link: "#"
        },
        {
          title: "Plataforma para ONGs de Mujeres",
          description: "Sistema desarrollado para apoyar el emprendimiento femenino a través de ONGs. Incluye herramientas de cálculo de viabilidad empresarial, gestión financiera simplificada y mentorías.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS"],
          results: "Impacto social directo en el apoyo a microemprendedoras",
          link: "#"
        },
        {
          title: "Dashboards Educativos y Analytics",
          description: "Solución de Business Intelligence para empresas de educación, centrada en métricas de compromiso, retención y rendimiento académico. Integración directa con LMS y análisis predictivo.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Power BI", "Python", "SQL", "Data Warehouse"],
          results: "Optimización de estrategias pedagógicas basadas en datos",
          link: "#"
        },
        {
          title: "Plataforma LMS Escalable",
          description: "Sistema de gestión de aprendizaje (LMS) desarrollado desde cero, atendiendo a más de 2.200 usuarios. Incluye streaming de video, corrección de ejercicios basada en IA y monitoreo de progreso.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
          results: "Soportó picos de tráfico con un 99.9% de tiempo de actividad",
          link: "#"
        },
        {
          title: "Sistema ERP Inmobiliario",
          description: "Plataforma de gestión para el sector inmobiliario enfocada en el rendimiento y la eficiencia. Integración con múltiples servicios de terceros y mensajería para procesamiento asíncrono.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
          results: "Aumentó la eficiencia operativa en un 35%",
          link: "#"
        },
        {
          title: "Portal Financiero y Corretaje",
          description: "Aplicación robusta para corredurías, que proporciona análisis en tiempo real, integración de datos complejos y paneles de control interactivos de alto rendimiento.",
          longDescription: "Una aplicación web White-Label de alto rendimiento para el mercado financiero, desarrollada para ofrecer una experiencia premium de SaaS Financiero. El sistema combina datos en tiempo real, simulación de trading y gestión de cartera en una interfaz sofisticada y totalmente personalizable. Permite la personalización instantánea de los colores de la marca, soporte para Modo Oscuro/Claro e integración híbrida de datos de mercado (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Redujo la latencia de procesamiento de datos en un 50%",
          link: "https://portal-financeiro-corretagem-white.vercel.app"
        }
      ]
    }
  };

  return data[lang];
};
