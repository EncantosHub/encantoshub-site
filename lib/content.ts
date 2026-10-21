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
  facts?: { label: string; value: string; note: string }[];
  photo?: { src: string; alt: string; position?: string };
};

export const services: Service[] = [
  {
    slug: "consultoria-seo",
    photo: { src: "/fotos/pesquisa-no-google-notebook.webp", alt: "Notebook aberto na página do Google durante o planejamento de uma consultoria de SEO", position: "60% 50%" },
    name: "Consultoria de SEO",
    short: "Para o seu site **aparecer nas pesquisas do Google** e ser citado pelo **ChatGPT, Gemini** e outras IAs.",
    title: "Consultoria de SEO e otimização de sites para aparecer no Google e nas IAs",
    metaDescription:
      "Consultoria de SEO e GEO: otimização de sites, conteúdo e autoridade para sua empresa aparecer nas pesquisas do Google e ser citada pelo ChatGPT, Gemini e Perplexity.",
    intro:
      "Hoje o cliente pesquisa no Google e também pergunta para uma IA. Na nossa **consultoria de SEO** cuidamos das duas frentes juntas (SEO e GEO): a **otimização de sites** na parte técnica, as páginas que precisam ranquear, conteúdos que respondem com clareza e a autoridade que faz o Google e as IAs reconhecerem e recomendarem a sua marca.",
    forWho:
      "Empresas com site próprio, de pequenos negócios a grandes marcas, que querem **depender menos de anúncio**, crescer no orgânico e garantir que, quando alguém pede uma recomendação a uma IA no seu segmento ou na sua cidade, o seu nome apareça.",
    deliverables: [
      "Diagnóstico técnico completo: rastreamento, indexação, velocidade e Core Web Vitals",
      "Pesquisa de palavras-chave e mapa de intenção de busca",
      "Mapeamento de como as IAs descrevem sua marca e seus concorrentes hoje",
      "Otimização on-page de páginas de serviço, categorias e produtos",
      "Conteúdos em formato de resposta: perguntas, comparações, dados e definições",
      "Dados estruturados (Schema.org), arquivo llms.txt e consistência da marca em toda a web",
      "Link building, presença em fontes confiáveis e auditoria de backlinks tóxicos",
      "Configuração de Google Search Console e GA4, com acompanhamento de posições e citações em IAs",
      "Relatório mensal com o que foi feito, o que mudou e o próximo passo",
    ],
    howItWorks: [
      { step: "Diagnóstico", text: "Auditamos o site, a concorrência e o que as IAs dizem sobre a sua marca hoje." },
      { step: "Plano semestral", text: "Priorizamos as ações por impacto e esforço, com metas claras para cada trimestre." },
      { step: "Execução contínua", text: "Técnica, conteúdo, dados estruturados e links andando juntos, com reuniões de alinhamento." },
      { step: "Medição", text: "Impressões, cliques, posições, conversões e menções nas IAs acompanhados todo mês." },
    ],
    faq: [
      { q: "Qual a diferença entre SEO e GEO?", a: "SEO trabalha para o seu site aparecer nos resultados do Google. GEO (Generative Engine Optimization) trabalha para a sua marca ser citada e recomendada nas respostas de IAs como **ChatGPT, Gemini**, Perplexity e as AI Overviews do Google. Os dois se complementam: as IAs se apoiam muito no que já ranqueia bem e em fontes confiáveis." },
      { q: "Em quanto tempo traz resultado?", a: "Ajustes técnicos e de páginas existentes costumam aparecer em semanas. Crescimento consistente de **tráfego orgânico** normalmente se consolida entre **4 e 8 meses**, dependendo da concorrência e do histórico do domínio." },
      { q: "Vocês garantem primeira posição no Google ou nas IAs?", a: "Não. Ninguém controla os algoritmos, e quem promete posição garantida está vendendo o que não pode entregar. Garantimos **método, transparência e acompanhamento** de evolução real." },
      { q: "Dá para medir resultado de GEO?", a: "Sim, com monitoramento de menções nas principais IAs, tráfego de referência vindo delas e presença nas AI Overviews do Google." },
      { q: "Preciso trocar de site?", a: "Na maioria dos casos, não. Trabalhamos com WordPress, Wix, Shopify, Next.js e outras plataformas. Quando o site limita o crescimento, mostramos o porquê e as alternativas." },
    ],
  },
  {
    slug: "gestao-local",
    photo: { src: "/fotos/isabella-e-paloma-em-pipa.webp", alt: "Isabella e Paloma trabalhando nas falésias de Praia da Pipa", position: "50% 70%" },
    name: "Perfil da empresa no Google",
    short: "Sua empresa no topo do mapa quando alguém procura o que você vende perto de você.",
    title: "Consultoria de posicionamento no Google para negócios locais",
    metaDescription:
      "Gestão de presença local: Perfil da Empresa no Google (Google Meu Negócio), avaliações, Google Maps, TripAdvisor, Waze, Bing e Apple Maps para negócios regionais.",
    intro:
      "Para restaurantes, pousadas, clínicas, imobiliárias e comércios, **o cliente decide no mapa**. Nossa consultoria de posicionamento no Google cuida do **perfil da empresa no Google**, das avaliações e de todos os canais onde as pessoas procuram negócios perto delas.",
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
      { q: "Vocês atendem negócios fora de Pipa?", a: "Sim. Nascemos em Pipa, mas atendemos negócios locais em **todo o Brasil**, de forma remota." },
    ],
  },
  {
    slug: "criacao-de-sites",
    photo: { src: "/fotos/consultoria-seo-notebook.webp", alt: "Mãos digitando no notebook durante a criação e otimização de um site", position: "50% 45%" },
    name: "Criação de sites",
    short: "Criação e **otimização de sites** rápidos, bonitos e pensados para ranquear e converter.",
    title: "Criação e otimização de sites para SEO",
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
    photo: { src: "/fotos/isa-trabalhando-na-praia.webp", alt: "Isabella escrevendo conteúdo no notebook à beira-mar", position: "50% 55%" },
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
      { q: "Vocês usam IA para escrever?", a: "Usamos IA como ferramenta de pesquisa e apoio, mas todo conteúdo passa por estratégia, edição e **revisão humana especializada**." },
    ],
  },
  {
    slug: "trafego-pago",
    photo: { src: "/fotos/pesquisa-no-google-notebook.webp", alt: "Notebook com o Google aberto e caderno com o planejamento de campanhas", position: "70% 50%" },
    name: "Tráfego pago com parceiros",
    short: "Anúncios no Google e nas redes quando a estratégia pede velocidade.",
    title: "Tráfego pago integrado à estratégia de SEO",
    metaDescription:
      "Gestão de tráfego pago em Google Ads e Meta Ads com parceiros especializados, integrada à estratégia orgânica de SEO e presença local.",
    intro:
      "Nem todo resultado pode esperar o orgânico. Quando a estratégia pede velocidade, acionamos **parceiros especializados** em Google Ads e Meta Ads e coordenamos tudo para que anúncio e orgânico trabalhem juntos, sem disputar o mesmo clique.",
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
  {
    slug: "consultoria",
    name: "Consultoria estratégica",
    short: "Uma **sessão avulsa de 1h30** para tirar dúvidas e sair com um **plano de ação** para o seu negócio.",
    title: "Consultoria estratégica de marketing digital e SEO",
    metaDescription:
      "Sessão avulsa e online de 1h30 com especialista em SEO: diagnóstico pontual do site, respostas às suas dúvidas e plano de ação imediato.",
    intro:
      "Sessões avulsas de SEO e marketing digital para empreendedores. Ideal para quem busca orientação prática e personalizada antes de contratar um plano de gestão contínua: direcionamento rápido, feito para o seu negócio.",
    forWho:
      "Empreendedores e gestores que precisam de orientação rápida e estratégica para resolver dúvidas pontuais sobre SEO e presença digital. Se depois da sessão você quiser um acompanhamento de longo prazo, apresentamos o plano de gestão que faz sentido para o seu momento.",
    deliverables: [
      "Sessão de 1h30 online, pelo Google Meet",
      "Diagnóstico pontual do seu site",
      "Resolução de dúvidas técnicas",
      "Plano de ação imediato",
      "Gravação da sessão",
      "Material de apoio por e-mail",
    ],
    facts: [
      { label: "Investimento", value: "R$ 300", note: "por sessão" },
      { label: "Duração", value: "1h30", note: "sessão online" },
    ],
    howItWorks: [
      { step: "Agendamento", text: "Você conta um pouco do negócio e das dúvidas, e marcamos o melhor horário." },
      { step: "Auditoria inicial", text: "Antes da conversa, analisamos o site e a presença digital da sua marca." },
      { step: "Sessão de 1h30", text: "Respondemos às dúvidas e mostramos as prioridades, com exemplos no seu próprio site." },
      { step: "Próximos passos", text: "Você recebe a gravação, o material de apoio e um plano de ação para colocar em prática." },
    ],
    faq: [
      { q: "Preciso contratar um plano depois da sessão?", a: "Não. A consultoria é avulsa e **sem compromisso**. Se depois da primeira sessão você quiser, pode contratar um **plano estratégico anual**, mas isso só é definido depois da conversa inicial." },
      { q: "A sessão é presencial?", a: "É online, pelo **Google Meet**, e você recebe a **gravação** para rever quando quiser." },
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
    photo: "/fotos/isabella-brilha.webp",
    role: "Cofundadora, especialista em SEO",
    bio: "Formada em Rádio, TV e Internet, trabalha com marketing digital **desde 2016** e é **especialista em SEO e presença digital**. Já atuou em projetos para marcas como NET, Banco PAN, Loggi e Insper. Conhece Pipa desde 2021, onde apoia empresas locais e projetos sociais.",
  },
  {
    name: "Paloma Nogueira",
    photo: "/fotos/paloma-nogueira.webp",
    role: "Cofundadora, estrategista digital",
    bio: "Técnica de Qualidade Digital e consultora de visibilidade online com **mais de 10 anos de experiência**. Cuida para que cada negócio esteja presente, correto e bem avaliado nos canais certos, além de ter um olhar especialista para **design e experiência do usuário**.",
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
  {
    q: "Como aparecer nas pesquisas do Google?",
    a: "Comece pelo gratuito: crie e mantenha atualizado o **perfil da empresa no Google** (antigo Google Meu Negócio), com fotos, horário e avaliações. Depois, tenha um site com páginas que respondem ao que o seu cliente pesquisa. É isso que uma **consultoria SEO** organiza: o que fazer primeiro, em que ordem e como medir.",
  },
  {
    q: "Dá para aparecer no Google de graça?",
    a: "Sim. O **perfil da empresa no Google** e o **tráfego orgânico** do site não custam nada por clique, ao contrário dos anúncios. O investimento está no trabalho de otimização, e o resultado continua mesmo quando você para de pagar mídia.",
  },
  {
    q: "O que faz uma consultoria SEO?",
    a: "Analisa como o seu cliente pesquisa, onde a sua marca aparece hoje e o que está impedindo o crescimento. A partir disso, corrige a parte técnica do site, ajusta páginas e conteúdos e acompanha os resultados todo mês. Também trabalhamos o GEO, para sua empresa ser citada pelo **ChatGPT, Gemini** e outras IAs.",
  },
  {
    q: "O que é posicionamento digital?",
    a: "É o lugar que a sua marca ocupa quando alguém procura pelo que você vende: no Google, no mapa, nas redes e nas respostas das IAs. Um bom **posicionamento digital** junta **otimização de sites**, perfil da empresa no Google, conteúdo e reputação para a sua empresa ser encontrada e escolhida.",
  },
  {
    q: "Qual a diferença entre consultoria estratégica e gestão contínua?",
    a: "A consultoria estratégica é uma **sessão avulsa de 1h30** para tirar dúvidas e sair com um **plano de ação**. A gestão contínua é o acompanhamento mês a mês, em que a agência executa o plano com você.",
  },
  {
    q: "Vocês atendem só em Pipa?",
    a: "Não. Somos uma agência de marketing com base em Praia da Pipa (RN) e atendemos empresas de **todo o Brasil** de forma remota, pelo WhatsApp e por videochamada.",
  },
];
