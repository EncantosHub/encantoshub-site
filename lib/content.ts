export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string; // <title> da página
  metaDescription: string;
  intro: string;
  forWho: string;
  deliverables: string[];
  howItWorks: { step: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    short: "Sua marca aparecendo quando o cliente pesquisa o que você vende.",
    title: "Consultoria e gestão de SEO",
    metaDescription:
      "Gestão de SEO técnica, on-page, de conteúdo e de links para empresas que querem crescer no Google com tráfego orgânico consistente.",
    intro:
      "Cuidamos do SEO de ponta a ponta: a base técnica do site, as páginas que precisam ranquear, os conteúdos que respondem às buscas do seu público e a autoridade que o Google exige para colocar sua marca na frente da concorrência.",
    forWho:
      "Empresas com site próprio, de pequenos negócios a grandes marcas, que querem depender menos de anúncio e construir um canal de aquisição que continua trazendo clientes mês após mês.",
    deliverables: [
      "Diagnóstico técnico completo: rastreamento, indexação, velocidade e Core Web Vitals",
      "Pesquisa de palavras-chave e mapa de intenção de busca",
      "Otimização on-page de páginas de serviço, categorias e produtos",
      "Planejamento e revisão de conteúdo para blog",
      "Link building e auditoria de backlinks tóxicos",
      "Configuração de Google Search Console, GA4 e acompanhamento de posições",
      "Relatório mensal com o que foi feito, o que mudou e o próximo passo",
    ],
    howItWorks: [
      { step: "Diagnóstico", text: "Auditamos o site e a concorrência para entender onde você está e o que está travando o crescimento." },
      { step: "Plano semestral", text: "Priorizamos as ações por impacto e esforço, com metas claras para cada trimestre." },
      { step: "Execução contínua", text: "Técnica, conteúdo e links andando juntos, com reuniões de alinhamento." },
      { step: "Medição", text: "Impressões, cliques, posições e conversões acompanhados todo mês." },
    ],
    faq: [
      { q: "Em quanto tempo o SEO traz resultado?", a: "Ajustes técnicos e de páginas existentes costumam aparecer em semanas. Crescimento consistente de tráfego orgânico normalmente se consolida entre 4 e 8 meses, dependendo da concorrência e do histórico do domínio." },
      { q: "Vocês garantem primeira posição no Google?", a: "Não. Ninguém controla o algoritmo, e quem promete posição garantida está vendendo o que não pode entregar. Garantimos método, transparência e acompanhamento de evolução real." },
      { q: "Preciso trocar de site para fazer SEO?", a: "Na maioria dos casos, não. Trabalhamos com WordPress, Wix, Shopify, Next.js e outras plataformas. Quando o site limita o crescimento, mostramos o porquê e as alternativas." },
    ],
  },
  {
    slug: "geo",
    name: "GEO",
    short: "Sua empresa citada nas respostas do ChatGPT, Gemini e Perplexity.",
    title: "GEO: otimização para inteligências artificiais",
    metaDescription:
      "GEO (Generative Engine Optimization) para sua marca ser citada e recomendada em ChatGPT, Gemini, Perplexity, Copilot e nas AI Overviews do Google.",
    intro:
      "Cada vez mais gente pergunta para uma IA antes de pesquisar no Google. GEO é o trabalho de fazer sua marca ser entendida, citada e recomendada por essas ferramentas: conteúdo que responde com clareza, dados estruturados, presença em fontes confiáveis e uma entidade de marca consistente em toda a web.",
    forWho:
      "Empresas que já têm alguma presença digital e querem garantir que, quando alguém pede uma recomendação a uma IA no seu segmento ou na sua cidade, o seu nome apareça.",
    deliverables: [
      "Mapeamento de como as IAs descrevem sua marca e seus concorrentes hoje",
      "Conteúdos em formato de resposta: perguntas, comparações, dados e definições",
      "Dados estruturados (Schema.org) e arquivo llms.txt",
      "Consistência de entidade: nome, endereço, serviços e perfis alinhados",
      "Presença em diretórios, guias e publicações que as IAs usam como fonte",
      "Monitoramento periódico de citações em ChatGPT, Gemini, Perplexity e AI Overviews",
    ],
    howItWorks: [
      { step: "Leitura das IAs", text: "Fazemos as perguntas que seu cliente faria e registramos quem é citado e por quê." },
      { step: "Base de entidade", text: "Ajustamos site, perfis e dados estruturados para a sua marca ser reconhecida sem ambiguidade." },
      { step: "Conteúdo citável", text: "Produzimos páginas que respondem de forma direta, verificável e fácil de citar." },
      { step: "Acompanhamento", text: "Repetimos as consultas e medimos a evolução das menções." },
    ],
    faq: [
      { q: "GEO substitui o SEO?", a: "Não, complementa. As IAs se apoiam muito no que já ranqueia bem e em fontes confiáveis. Um bom SEO é a base de um bom GEO." },
      { q: "Dá para medir resultado de GEO?", a: "Sim, com monitoramento de menções nas principais IAs, tráfego de referência vindo delas e presença nas AI Overviews do Google." },
    ],
  },
  {
    slug: "gestao-local",
    name: "Presença e gestão local",
    short: "Ser encontrado no mapa por quem está perto e pronto para comprar.",
    title: "SEO local e gestão do Perfil da Empresa no Google",
    metaDescription:
      "Gestão de presença local: Perfil da Empresa no Google (Google Meu Negócio), avaliações, Google Maps, TripAdvisor, Waze, Bing e Apple Maps para negócios regionais.",
    intro:
      "Para restaurantes, pousadas, clínicas, imobiliárias e comércios, o cliente decide no mapa. Cuidamos do Perfil da Empresa no Google, das avaliações e de todos os canais onde as pessoas procuram negócios perto delas.",
    forWho:
      "Negócios com endereço físico ou área de atendimento definida, de Pipa a qualquer cidade do Brasil, que querem mais ligações, rotas e visitas.",
    deliverables: [
      "Diagnóstico do cenário local e dos concorrentes no mapa",
      "Otimização completa do Perfil da Empresa no Google (antigo Google Meu Negócio)",
      "Estratégia de avaliações: como pedir, como responder e como usar QR Code",
      "Cadastro e alinhamento em Google Maps, TripAdvisor, Waze, Bing e Apple Maps",
      "Postagens, fotos e atualizações recorrentes no perfil",
      "Páginas locais no site para cada cidade ou bairro atendido",
      "Acompanhamento de ligações, rotas, cliques e posição no mapa",
    ],
    howItWorks: [
      { step: "Diagnóstico local", text: "Vemos como seu negócio aparece hoje e quem está ocupando os primeiros lugares." },
      { step: "Canais prioritários", text: "Definimos onde vale investir energia: Google, TripAdvisor, site, parceiros." },
      { step: "Reputação", text: "Montamos a rotina de avaliações e respostas com a sua equipe." },
      { step: "Otimização contínua", text: "Atualizações frequentes e ajustes conforme os números." },
    ],
    faq: [
      { q: "Preciso ter site para fazer SEO local?", a: "Não é obrigatório para começar, mas um site com páginas locais bem feitas fortalece muito o perfil no mapa e ajuda a converter quem chega." },
      { q: "Vocês atendem negócios fora de Pipa?", a: "Sim. Nascemos em Pipa, mas atendemos negócios locais em todo o Brasil, de forma remota." },
    ],
  },
  {
    slug: "criacao-de-sites",
    name: "Criação de sites",
    short: "Sites rápidos, bonitos e pensados para ranquear e converter.",
    title: "Criação de sites otimizados para SEO",
    metaDescription:
      "Criação de sites institucionais e landing pages já otimizados para SEO, GEO e conversão, com estrutura técnica correta desde o primeiro dia.",
    intro:
      "Construímos sites que nascem preparados para o Google e para as IAs: carregamento rápido, arquitetura de páginas pensada a partir das buscas, dados estruturados, textos que respondem às dúvidas do cliente e caminhos claros para virar contato.",
    forWho:
      "Empresas sem site, com site desatualizado ou com um site bonito que não aparece em lugar nenhum.",
    deliverables: [
      "Arquitetura de páginas a partir da pesquisa de palavras-chave",
      "Design responsivo alinhado à identidade da marca",
      "Textos de páginas com foco em busca e conversão",
      "SEO técnico: metatags, sitemap, Schema.org, Core Web Vitals",
      "Integração com WhatsApp, formulários e Google Analytics",
      "Hospedagem moderna e de baixo custo, com domínio próprio",
    ],
    howItWorks: [
      { step: "Briefing e pesquisa", text: "Entendemos o negócio, o público e como ele pesquisa." },
      { step: "Estrutura e textos", text: "Definimos páginas, hierarquia e conteúdo antes do visual." },
      { step: "Design e desenvolvimento", text: "Montamos o site com a sua identidade e revisamos juntos." },
      { step: "Publicação", text: "Configuramos domínio, Search Console e analytics e acompanhamos a indexação." },
    ],
    faq: [
      { q: "Quanto tempo leva para o site ficar pronto?", a: "Um site institucional de uma a cinco páginas costuma levar de duas a quatro semanas, dependendo da agilidade nas aprovações e no envio de materiais." },
      { q: "Consigo editar o site depois?", a: "Sim. Escolhemos a tecnologia de acordo com quem vai manter o site e entregamos orientação para atualizações simples." },
    ],
  },
  {
    slug: "producao-de-conteudo",
    name: "Conteúdo e autoridade",
    short: "Conteúdo que responde às buscas e constrói confiança na marca.",
    title: "Produção de conteúdo para SEO e GEO",
    metaDescription:
      "Produção e revisão de conteúdo para blogs, páginas e materiais ricos com foco em SEO, GEO e autoridade de marca.",
    intro:
      "Conteúdo bom é aquele que alguém procurou e encontrou a resposta. Planejamos pautas a partir de dados de busca, escrevemos e revisamos artigos, páginas e materiais com profundidade e linguagem da sua marca.",
    forWho:
      "Empresas que querem um blog que traga clientes, times de marketing que precisam de revisão especializada e marcas que querem ser referência no seu segmento.",
    deliverables: [
      "Calendário editorial guiado por palavras-chave e perguntas reais",
      "Artigos, guias e páginas de serviço",
      "Revisão de SEO e legibilidade de conteúdos produzidos pelo seu time",
      "Otimização e atualização de conteúdos antigos (content pruning)",
      "Roteiros e otimização de vídeos para YouTube",
    ],
    howItWorks: [
      { step: "Pauta", text: "Levantamos o que o seu público pesquisa e o que já existe no site." },
      { step: "Produção", text: "Escrevemos ou revisamos com briefing claro e checklist de SEO." },
      { step: "Publicação", text: "Links internos, dados estruturados e distribuição." },
      { step: "Atualização", text: "Revisitamos o que perde posição e o que pode ganhar mais." },
    ],
    faq: [
      { q: "Vocês usam IA para escrever?", a: "Usamos IA como ferramenta de pesquisa e apoio, mas todo conteúdo passa por estratégia, edição e revisão humana especializada." },
    ],
  },
  {
    slug: "trafego-pago",
    name: "Tráfego pago com parceiros",
    short: "Anúncios no Google e nas redes quando a estratégia pede velocidade.",
    title: "Tráfego pago integrado à estratégia de SEO",
    metaDescription:
      "Gestão de tráfego pago em Google Ads e Meta Ads com parceiros especializados, integrada à estratégia orgânica de SEO e presença local.",
    intro:
      "Nem todo resultado pode esperar o orgânico. Quando a estratégia pede velocidade, acionamos parceiros especializados em Google Ads e Meta Ads e coordenamos tudo para que anúncio e orgânico trabalhem juntos, sem disputar o mesmo clique.",
    forWho:
      "Negócios com lançamento, sazonalidade forte ou necessidade de gerar demanda enquanto o SEO amadurece.",
    deliverables: [
      "Definição de objetivos e verba junto à estratégia orgânica",
      "Campanhas de pesquisa, Performance Max e redes sociais",
      "Landing pages alinhadas às campanhas",
      "Uso de dados do SEO para palavras-chave e públicos",
      "Relatórios integrados de orgânico e pago",
    ],
    howItWorks: [
      { step: "Estratégia", text: "Decidimos onde o pago faz sentido e onde o orgânico já resolve." },
      { step: "Parceiro certo", text: "Indicamos e coordenamos o especialista ideal para o canal." },
      { step: "Integração", text: "Palavras-chave, páginas e mensagens alinhadas." },
      { step: "Leitura conjunta", text: "Um único relatório para entender o que gera cliente." },
    ],
    faq: [
      { q: "Preciso contratar tráfego pago junto com SEO?", a: "Não. Só recomendamos quando faz sentido para o momento do negócio." },
    ],
  },
];

export const stages = [
  {
    name: "Precisa ser encontrado",
    text: "Construímos as bases: site, perfil da empresa no Google, dados corretos e as primeiras páginas que respondem ao que o cliente procura.",
  },
  {
    name: "Precisa ganhar espaço",
    text: "Identificamos as buscas e os canais onde a concorrência está na frente e abrimos caminho com SEO, conteúdo e reputação.",
  },
  {
    name: "Precisa virar autoridade",
    text: "Expandimos a presença para buscas, conteúdos, plataformas e inteligências artificiais, até sua marca ser a referência do segmento.",
  },
];

export const method = [
  { name: "Pesquisamos", text: "Buscas, demanda, concorrentes e comportamento do público." },
  { name: "Analisamos", text: "O estágio atual da sua presença digital." },
  { name: "Planejamos", text: "Canais, prioridades e oportunidades." },
  { name: "Executamos", text: "SEO, GEO, conteúdo, site, presença local e, quando faz sentido, anúncios." },
  { name: "Medimos e melhoramos", text: "Acompanhamos resultados e ajustamos a estratégia." },
];

export type Case = { metric: string; label: string; client: string; text: string; tags: string[] };

export const cases: Case[] = [
  {
    metric: "+1.634%",
    label: "de tráfego orgânico",
    client: "Sociedade da Mesa",
    text: "Migração bem planejada, poda e melhoria de conteúdos e auditoria de backlinks tóxicos levaram a autoridade de domínio de 15 para 32 e multiplicaram o tráfego orgânico.",
    tags: ["SEO técnico", "Conteúdo", "Links"],
  },
  {
    metric: "+1.141%",
    label: "de tráfego orgânico",
    client: "Banco PAN",
    text: "Otimização de artigos do blog em projeto conduzido com a agência Prosperidade Conteúdos, organizando e priorizando conteúdos para crescimento orgânico.",
    tags: ["Conteúdo", "SEO on-page"],
  },
  {
    metric: "+309%",
    label: "de visibilidade em um ano",
    client: "Ludmila Abreu",
    text: "Gestão do site de uma imobiliária em Praia da Pipa: no mesmo período, os cliques vindos do Google passaram de 14 para 46 por mês.",
    tags: ["SEO local", "Site"],
  },
  {
    metric: "+200%",
    label: "em ligações pelo site",
    client: "NET (Claro)",
    text: "Redesenho do layout com foco em navegação e conversão aumentou as ligações recebidas pelo site.",
    tags: ["Site", "Conversão"],
  },
  {
    metric: "30+",
    label: "backlinks por mês",
    client: "NET (Claro)",
    text: "Link building recorrente que consolidou a marca nas buscas próprias e expandiu o ranqueamento para termos de alto volume, como “internet”.",
    tags: ["Links", "Autoridade"],
  },
  {
    metric: "100+",
    label: "empresas com SEO local",
    client: "Negócios locais",
    text: "Estratégias de presença local aplicadas em mais de cem empresas, aumentando a visibilidade em pesquisas regionais.",
    tags: ["SEO local"],
  },
];

export const otherProjects = [
  { client: "Casas Bahia", text: "Estratégia de conteúdo para o aplicativo, adaptando o SEO a um público majoritariamente mobile." },
  { client: "Loggi", text: "Diagnóstico completo de SEO: configurações, rastreamento, indexação e estratégias on-page, off-page, local e técnica." },
  { client: "Insper", text: "Treinamento da equipe de produção sobre SEO para vídeos, levando mais tráfego a páginas de cursos e artigos." },
];

export const testimonials = [
  {
    quote:
      "Trabalhamos juntos em um projeto de e-commerce que precisava de uma estratégia escalável de posicionamento para enfrentar concorrentes mais avançados em SEO e CRO. A Isabella teve atuação fundamental no desenho dessas estratégias, orientando exatamente os passos e investimentos necessários para posicionar a marca no curto, médio e longo prazo.",
    name: "Marlon Laossa",
    role: "Head de Produtos Digitais",
  },
  {
    quote:
      "A Isa é uma profissional exemplar. Nos projetos em que trabalhamos juntos, sempre demonstrou muito profissionalismo e criatividade para entregar os melhores resultados possíveis. Além de excelente profissional, é uma pessoa muito agradável para trabalhar em equipe.",
    name: "Danilo Israel",
    role: "SEO & Link Building Strategist, fundador da Services Black",
  },
];

export const team = [
  {
    name: "Isabella Brilha",
    role: "Cofundadora, especialista em SEO",
    bio: "Formada em Rádio, TV e Internet, trabalha com marketing digital desde 2016 e é especialista em SEO e presença digital. Já atuou em projetos para marcas como NET, Banco PAN, Loggi e Insper. Conhece Pipa desde 2021, onde apoia empresas locais e projetos sociais.",
  },
  {
    name: "Paloma Nogueira",
    role: "Cofundadora, estrategista digital",
    bio: "Técnica de Qualidade Digital e consultora de visibilidade online. Cuida para que cada negócio esteja presente, correto e bem avaliado nos canais certos. Vive em Pipa desde 2024 e conhece cada cantinho da região.",
  },
];

export const plans = [
  {
    name: "Gestão completa",
    text: "Para sites e marcas que querem crescer de forma consistente no Google e nas IAs.",
    items: ["Diagnóstico completo", "Plano estratégico semestral", "Técnica, conteúdo e backlinks", "Relatórios e reuniões de alinhamento"],
  },
  {
    name: "Gestão essencial",
    text: "SEO acessível para pequenas e médias empresas evoluírem com consistência.",
    items: ["Configuração de ferramentas de análise", "Otimização de páginas e conteúdos", "Monitoramento de impressões, cliques e CTR", "Relatório simplificado de evolução"],
  },
  {
    name: "Gestão local",
    text: "Para negócios regionais que precisam ser encontrados por quem está perto.",
    items: ["Diagnóstico do cenário local", "Perfil da Empresa, site e parceiros", "Estratégia de avaliações", "Acompanhamento e otimização contínua"],
  },
  {
    name: "Consultoria estratégica",
    text: "Sessão avulsa para quem quer direção antes de contratar uma gestão contínua.",
    items: ["Sessão online de 1h30", "Auditoria inicial do site", "Sugestão de plano personalizado", "Próximos passos claros"],
  },
];

export const homeFaq = [
  { q: "O que é SEO?", a: "SEO (Search Engine Optimization) é o conjunto de ajustes técnicos, de conteúdo e de autoridade que faz um site aparecer nos resultados orgânicos do Google quando alguém pesquisa algo relacionado ao seu negócio." },
  { q: "O que é GEO?", a: "GEO (Generative Engine Optimization) é a otimização para inteligências artificiais como ChatGPT, Gemini, Perplexity e as AI Overviews do Google, para que sua marca seja citada e recomendada nas respostas." },
  { q: "A Encantos Hub atende só Praia da Pipa?", a: "Não. A agência tem base em Praia da Pipa (RN) e atende empresas de todo o Brasil de forma remota, de negócios locais a grandes marcas." },
  { q: "Como começa o trabalho?", a: "Com uma conversa e um diagnóstico da sua presença digital. A partir dele, indicamos o formato de gestão que faz sentido para o momento do seu negócio." },
];
