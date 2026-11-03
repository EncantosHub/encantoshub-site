export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  site?: { url: string; label: string };
  title: string;
  metrics: { value: string; label: string }[];
  summary: string; // aceita **negrito**
  actions: string[];
  images: { src: string; width: number; height: number; alt: string; caption?: string; contain?: boolean }[];
  logo?: { src: string; width: number; height: number; alt: string; pad?: boolean };
  wide?: boolean; // imagem de resultado em largura total, abaixo do texto
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ludmila-abreu",
    wide: true,
    client: "Ludmila Abreu Imóveis",
    segment: "Imobiliária · Praia da Pipa (RN)",
    site: { url: "https://ludmilaabreu.com.br/", label: "ludmilaabreu.com.br" },
    title: "Resultados comprovados no mercado imobiliário",
    metrics: [
      { value: "+278%", label: "de impressões no Google" },
      { value: "+78%", label: "de cliques orgânicos" },
      { value: "157 mil", label: "impressões em 4 meses" },
    ],
    summary:
      "A partir de **janeiro de 2026**, com as primeiras otimizações de SEO implementadas, o site da imobiliária passou a aparecer para muito mais pesquisas. Entre maio e agosto de 2026, comparado ao mesmo período de 2025, as impressões saltaram de **41,5 mil para 157 mil** e os cliques orgânicos de **1,81 mil para 3,22 mil**.",
    actions: [
      "Gestão contínua de SEO e otimização do site em WordPress",
      "Otimização do blog e das páginas do site",
      "Organização de quase 2.000 contatos do site em 8 grupos de atendimento por WhatsApp e Instagram, com ferramentas gratuitas",
    ],
    images: [
      {
        src: "/cases/ludmila-abreu-resultados-site-imobiliaria.webp",
        width: 1600,
        height: 910,
        alt: "Relatório do Google Search Console do site da Ludmila Abreu: impressões cresceram 278% e cliques 78%",
        caption: "Google Search Console: maio a agosto de 2026 comparado a 2025.",
      },
    ],
  },
  {
    slug: "grupo-amazonas",
    wide: true,
    client: "Grupo Amazonas",
    segment: "Concessionárias · Peugeot, Citroën, Fiat, Jeep, Ford e Renault",
    site: { url: "https://grupoamazonas.com.br/", label: "grupoamazonas.com.br" },
    title: "Mais de 1 milhão de aparições no Google para um grupo de concessionárias",
    metrics: [
      { value: "1,08 mi", label: "de impressões no Google" },
      { value: "5,8 mil", label: "cliques orgânicos" },
      { value: "7,6", label: "posição média: primeira página" },
    ],
    summary:
      "Em seis meses de trabalho (julho a dezembro de 2025), o site do grupo apareceu **mais de 1 milhão de vezes** nas pesquisas do Google e recebeu **5,8 mil visitas orgânicas**, com posição média de **7,6**, ou seja, na primeira página. No pico, foram 88 cliques em um único dia.",
    actions: [
      "Gestão de SEO do site do grupo",
      "Otimizações técnicas e de conteúdo nas páginas",
      "Acompanhamento de impressões, cliques e posições no Google Search Console",
    ],
    logo: { src: "/cases/grupo-amazonas-logo.webp", width: 600, height: 598, alt: "Logo do Grupo Amazonas" },
    images: [
      {
        src: "/cases/grupo-amazonas-resultados-search-console.webp",
        width: 1600,
        height: 543,
        alt: "Gráfico do Google Search Console do Grupo Amazonas com 5,8 mil cliques e 1,08 milhão de impressões",
        caption: "Google Search Console: julho a dezembro de 2025.",
      },
    ],
  },
  {
    slug: "sociedade-da-mesa",
    client: "Sociedade da Mesa / Chez France",
    segment: "E-commerce e clube de vinhos",
    site: { url: "https://loja.chezfrance.com.br/", label: "loja.chezfrance.com.br" },
    title: "Autoridade de domínio e crescimento de tráfego",
    metrics: [
      { value: "+1.634%", label: "de tráfego orgânico" },
      { value: "15 → 32", label: "de autoridade de domínio" },
    ],
    summary:
      "Elevamos a autoridade de domínio da Sociedade da Mesa de **15 para 32** e impulsionamos o tráfego orgânico em **1.634,46%**. As ações fortaleceram o perfil de links do site e a presença nos buscadores, maximizando a relevância e o alcance no setor.",
    actions: [
      "Estratégia de migração de site sem perder posições",
      "Aprimoramento e poda de conteúdos (content pruning)",
      "Auditoria e limpeza de backlinks tóxicos",
    ],
    images: [
      {
        src: "/cases/sociedade-da-mesa-chez-france.webp",
        width: 1200,
        height: 727,
        alt: "Site da Sociedade da Mesa integrado à Chez France em computador, notebook e celular",
        contain: true,
      },
    ],
  },
  {
    slug: "banco-pan",
    client: "Banco PAN",
    segment: "Blog financeiro · com a agência Prosperidade Conteúdos",
    title: "Crescimento de 1.141% em tráfego orgânico",
    metrics: [{ value: "+1.141%", label: "de tráfego orgânico no blog" }],
    summary:
      "Em parceria com a agência **Prosperidade Conteúdos**, otimizamos os artigos do blog do Banco PAN. Organizamos, gerenciamos e documentamos as estratégias de SEO aplicadas, o que levou a um crescimento de **1.141% no tráfego orgânico**.",
    actions: [
      "Otimização de títulos, estrutura e conteúdo dos artigos",
      "Gestão e documentação das estratégias de SEO do projeto",
      "Priorização dos conteúdos com maior potencial de busca",
    ],
    images: [
      {
        src: "/cases/banco-pan-seo-artigos.webp",
        width: 1200,
        height: 686,
        alt: "Ilustração de otimização de conteúdo e velocidade em uma página web",
        contain: true,
      },
    ],
  },
  {
    slug: "net-claro",
    wide: true,
    client: "NET (Claro)",
    segment: "Telecomunicações",
    site: { url: "https://www.net.com.br/", label: "net.com.br" },
    title: "Mais ligações pelo site e domínio das buscas da marca",
    metrics: [
      { value: "+200%", label: "em ligações recebidas pelo site" },
      { value: "30+", label: "backlinks conquistados por mês" },
    ],
    summary:
      "Redesenhamos o layout do site da NET com uma navegação mais intuitiva, o que resultou em **200% mais ligações** recebidas. Com link building recorrente, conquistamos **mais de 30 backlinks por mês**, dominando as buscas pela marca e ampliando o ranqueamento para termos de alto volume, como “internet”.",
    actions: [
      "Redesenho do layout com foco em conversão",
      "Campanhas mensais de link building com metas e acompanhamento",
      "Monitoramento de posição, Trust Flow e Citation Flow de cada página",
    ],
    images: [
      {
        src: "/cases/net-backlinks-conquistados.webp",
        width: 1400,
        height: 454,
        alt: "Planilha de acompanhamento de campanha de backlinks com funil de prospecção e impacto nas posições",
        caption: "Modelo de controle das campanhas de backlinks.",
        contain: true,
      },
    ],
  },
  {
    slug: "casas-bahia",
    client: "Casas Bahia",
    segment: "Varejo · aplicativo",
    title: "Estratégia de conteúdo para o aplicativo das Casas Bahia",
    metrics: [{ value: "Mobile", label: "SEO pensado para quem compra pelo celular" }],
    summary:
      "Contribuímos com a otimização estratégica de conteúdos para o aplicativo das Casas Bahia, adaptando o SEO para um público predominantemente **mobile**, considerando que **59% do tráfego da internet vem de dispositivos móveis**.",
    actions: [
      "Conteúdos adaptados à leitura e à busca no celular",
      "Otimização estratégica das páginas do aplicativo",
    ],
    images: [
      {
        src: "/cases/casas-bahia-app.webp",
        width: 1200,
        height: 680,
        alt: "Aplicativo das Casas Bahia aberto no celular em frente ao site no computador",
      },
    ],
  },
  {
    slug: "insper",
    client: "Insper",
    segment: "Educação · treinamento de equipe",
    site: { url: "https://www.insper.edu.br/", label: "insper.edu.br" },
    title: "Treinamento para o time do Insper sobre SEO para vídeos",
    metrics: [
      { value: "+157%", label: "de tráfego orgânico em páginas com vídeo, comparado a páginas só com texto" },
    ],
    summary:
      "Realizamos treinamentos especializados para a equipe de produção do **Insper Educação**, mostrando o impacto do conteúdo em vídeo, que aumenta o tráfego orgânico em **157%** em comparação com páginas apenas com texto. Também desenvolvemos **web stories** para levar mais tráfego às páginas de cursos e artigos, ampliando o alcance e o engajamento dos conteúdos educacionais.",
    actions: [
      "Treinamento de SEO para vídeos com a equipe de produção",
      "Criação de web stories para páginas de cursos e artigos",
    ],
    logo: { src: "/cases/insper-logo.webp", width: 200, height: 200, alt: "Logo do Insper", pad: true },
    images: [],
  },
  {
    slug: "loggi",
    client: "Loggi",
    segment: "Logística · diagnóstico de SEO",
    site: { url: "https://www.loggi.com/", label: "loggi.com" },
    title: "Diagnóstico de SEO completo para a Loggi",
    metrics: [
      { value: "360°", label: "análise técnica, de conteúdo, links e SEO local" },
    ],
    summary:
      "Realizamos uma análise abrangente para a **Loggi**, cobrindo todos os aspectos críticos de SEO: configurações do site, rastreamento, indexação e estratégias **on-page, off-page, locais e técnicas**.",
    actions: [
      "Auditoria de configurações do site, rastreamento e indexação",
      "Análise das estratégias on-page e off-page",
      "Recomendações de SEO local e técnico",
    ],
    logo: { src: "/cases/loggi-logo.webp", width: 214, height: 200, alt: "Logo da Loggi", pad: true },
    images: [],
  },
  {
    slug: "seo-local",
    client: "SEO local para mais de 100 empresas",
    segment: "Negócios locais · restaurantes, pousadas, serviços",
    title: "Empresas encontradas por quem está perto",
    metrics: [
      { value: "100+", label: "empresas com SEO local" },
      { value: "+98,9%", label: "de interações no perfil (exemplo)" },
      { value: "+73,3%", label: "de pesquisas que mostram o perfil" },
    ],
    summary:
      "Implementamos estratégias de SEO local para **mais de 100 empresas**, aumentando a visibilidade em pesquisas regionais e o engajamento com o público local. Exemplo: no Hygge Café, em Pipa, o perfil da empresa no Google teve **3.734 visualizações (+67,4%)**, **1.695 pesquisas (+73,3%)** e **362 interações (+98,9%)** em setembro, comparado ao ano anterior.",
    actions: [
      "Otimização completa do perfil da empresa no Google",
      "Rotina de avaliações, fotos e publicações",
      "Cadastro alinhado em Google Maps, TripAdvisor, Waze e Bing",
    ],
    images: [
      {
        src: "/cases/seo-local-perfil-da-empresa-no-google.webp",
        width: 1200,
        height: 680,
        alt: "Celular mostrando o perfil da empresa no Google com estatísticas e ferramentas do Google",
      },
    ],
  },
];

export const builtSites = [
  {
    name: "Coelho Vegano",
    what: "Restaurante vegano em Pipa",
    url: "https://www.coelhovegano.com.br/",
    image: "/cases/sites/coelho-vegano.webp",
  },
  {
    name: "Namastê Caramba",
    what: "Massagem terapêutica em Pipa",
    url: "https://www.namastecaramba.com.br/",
    image: "/cases/sites/namaste-caramba.webp",
  },
  {
    name: "Pipa Local",
    what: "Guia de turismo da Praia da Pipa",
    url: "https://www.pipalocal.com.br/",
    image: "/cases/sites/pipa-local.webp",
  },
  {
    name: "Hygge Café & Bar",
    what: "Café, restaurante e coworking em Pipa",
    url: "https://hyggecafe.com.br/",
    image: "/cases/sites/hygge-cafe.webp",
  },
];

export const headline = [
  { value: "+1.634%", label: "tráfego orgânico · Sociedade da Mesa" },
  { value: "+1.141%", label: "tráfego orgânico · Banco PAN" },
  { value: "+278%", label: "impressões · imobiliária em Pipa" },
  { value: "100+", label: "empresas com SEO local" },
];

export type CarouselItem = {
  href: string;
  name: string;
  logo?: string;
  logoDark?: boolean;
  icon?: "pin" | "browser";
  value: string;
  label: string;
};

export const caseCarousel: CarouselItem[] = [
  { href: "#ludmila-abreu", name: "Ludmila Abreu Imóveis", logo: "/cases/logos/ludmila-abreu.webp", value: "+278%", label: "impressões no Google" },
  { href: "#grupo-amazonas", name: "Grupo Amazonas", logo: "/cases/logos/grupo-amazonas.webp", value: "1,08 mi", label: "impressões no Google" },
  { href: "#sociedade-da-mesa", name: "Sociedade da Mesa", logo: "/cases/logos/chez-france.webp", logoDark: true, value: "+1.634%", label: "tráfego orgânico" },
  { href: "#banco-pan", name: "Banco PAN", logo: "/cases/logos/banco-pan.webp", value: "+1.141%", label: "tráfego orgânico" },
  { href: "#net-claro", name: "NET (Claro)", logo: "/cases/logos/net-claro.webp", value: "+200%", label: "ligações pelo site" },
  { href: "#casas-bahia", name: "Casas Bahia", logo: "/cases/logos/casas-bahia.webp", value: "Mobile", label: "conteúdo para o app" },
  { href: "#insper", name: "Insper", logo: "/cases/logos/insper.webp", value: "+157%", label: "tráfego com vídeos" },
  { href: "#loggi", name: "Loggi", logo: "/cases/logos/loggi.webp", value: "360°", label: "diagnóstico de SEO" },
  { href: "#seo-local", name: "SEO local", icon: "pin", value: "100+", label: "empresas atendidas" },
  { href: "#sites", name: "Sites criados", icon: "browser", value: "4", label: "sites no ar" },
];
