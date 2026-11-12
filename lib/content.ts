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
  group?: "principal" | "complementar";
  pillars?: boolean; // mostra os 5 pilares na página
};

/** Os 5 pilares que acompanhamos em todo projeto de SEO. */
export const pillars = [
  {
    name: "Visibilidade de conteúdo",
    text: "Páginas e artigos que fazem o site **ranquear com constância** e ganhar posição nas buscas que trazem cliente.",
    metrics: ["Cliques", "Impressões", "Posição média"],
  },
  {
    name: "Ajustes técnicos",
    text: "Código, rastreamento e indexação monitorados para o site ficar **saudável, seguro** e sem perder resultado por erro técnico.",
    metrics: ["Saúde do site", "Erros de indexação", "Segurança"],
  },
  {
    name: "Autoridade e reputação",
    text: "Como a marca aparece fora do site: **Reclame Aqui**, perfil da empresa no Google, avaliações e a qualidade dos backlinks.",
    metrics: ["Backlinks", "Links tóxicos", "Avaliações"],
  },
  {
    name: "Visibilidade em IA",
    text: "Quanto a sua marca é **mencionada e citada** pelo ChatGPT, Gemini, Perplexity e pelas respostas de IA do Google.",
    metrics: ["Páginas citadas", "Menções", "Citações"],
  },
  {
    name: "Experiência",
    text: "Velocidade, usabilidade, botões, cores e layout: o caminho para quem chega pelo Google **virar contato**.",
    metrics: ["Velocidade", "Usabilidade", "Conversão"],
  },
];

export const services: Service[] = [
  {
    slug: "consultoria-seo",
    group: "principal",
    pillars: true,
    photo: { src: "/fotos/pesquisa-no-google-notebook.webp", alt: "Notebook aberto na página do Google durante o planejamento de uma consultoria de SEO", position: "60% 50%" },
    name: "Consultoria de SEO personalizada",
    short: "Um **projeto de SEO sob medida**: começamos pelo diagnóstico e seguimos com um plano mensal feito para o seu mercado.",
    title: "Consultoria de SEO personalizada para aparecer no Google e nas IAs",
    metaDescription:
      "Consultoria de SEO personalizada: diagnóstico, setup inicial ou criação de site e plano mensal, acompanhando conteúdo, parte técnica, autoridade, visibilidade em IA e experiência.",
    intro:
      "Não vendemos pacote fechado. Cada projeto começa com uma **reunião de diagnóstico** para entender o seu mercado, os recursos que você já tem e onde estão as oportunidades. A partir disso montamos um **plano de SEO personalizado**, cobrado por hora, que acompanha os **5 pilares** que fazem uma empresa aparecer no Google e nas IAs.",
    forWho:
      "Empresas **nacionais e internacionais** que querem crescer no orgânico com constância, depender menos de anúncio e ter um time especialista cuidando do site. Costumamos trabalhar com **contratos de exclusividade**, para dedicar ao seu projeto a atenção que ele precisa.",
    deliverables: [
      "Reunião de diagnóstico para entender o negócio, o mercado e os recursos atuais",
      "Setup inicial de SEO no site que você já tem, ou criação de um site novo",
      "Otimização de todas as páginas a partir dos 5 pilares",
      "Plano mensal com 2 a 5 artigos, de acordo com o seu mercado",
      "Monitoramento técnico, de autoridade e de citações em IAs",
      "Relatórios de evolução com cliques, impressões e posicionamento",
    ],
    howItWorks: [
      { step: "Reunião de diagnóstico", text: "Conversamos sobre o seu negócio, a concorrência e os recursos que você já tem." },
      { step: "Proposta sob medida", text: "Montamos o projeto e as horas de acordo com o que o seu site precisa." },
      { step: "Setup ou criação de site", text: "Ajustamos todas as páginas do site atual ou criamos um site novo já otimizado." },
      { step: "Plano mensal", text: "Conteúdo, ajustes e monitoramento dos 5 pilares, com relatórios de evolução." },
    ],
    faq: [
      { q: "Quanto custa a consultoria de SEO?", a: "Cobramos **por hora** e montamos o projeto de acordo com o mercado, o tamanho do site e os recursos que você já tem. Por isso a primeira etapa é sempre uma **reunião de diagnóstico**: é nela que definimos o escopo e o investimento." },
      { q: "Em quanto tempo traz resultado?", a: "Ajustes técnicos e de páginas existentes costumam aparecer em semanas. Crescimento consistente de **tráfego orgânico** normalmente se consolida entre **4 e 8 meses**, dependendo da concorrência e do histórico do domínio." },
      { q: "Qual a diferença entre SEO e GEO?", a: "SEO trabalha para o seu site aparecer nos resultados do Google. GEO trabalha para a sua marca ser **citada nas respostas de IAs** como ChatGPT, Gemini e Perplexity. No nosso método, as duas frentes andam juntas e a visibilidade em IA é um dos 5 pilares que acompanhamos." },
      { q: "Vocês garantem primeira posição no Google ou nas IAs?", a: "Não. Ninguém controla os algoritmos, e quem promete posição garantida está vendendo o que não pode entregar. Garantimos **método, transparência e acompanhamento** de evolução real." },
      { q: "Preciso trocar de site?", a: "Na maioria dos casos, não. Fazemos o **setup inicial** no site que você já tem (WordPress, Wix, Shopify, Next.js e outros). Quando o site limita o crescimento, mostramos o porquê e propomos a criação de um novo." },
    ],
  },
  {
    slug: "setup-inicial-seo",
    group: "principal",
    pillars: true,
    photo: { src: "/fotos/consultoria-seo-notebook.webp", alt: "Mãos digitando no notebook durante o setup inicial de SEO de um site", position: "50% 45%" },
    name: "Setup inicial de SEO",
    short: "Diagnóstico completo e **otimização de todas as páginas** do seu site atual, a partir dos nossos 5 pilares.",
    title: "Setup inicial de SEO: diagnóstico e otimização completa do site",
    metaDescription:
      "Setup inicial de SEO: diagnóstico completo do site e otimização de todas as páginas em conteúdo, parte técnica, autoridade, visibilidade em IA e experiência.",
    intro:
      "Para quem já tem site, o projeto começa pelo **setup inicial**. Fazemos um diagnóstico completo e ajustamos **todas as páginas** para ficarem otimizadas nos 5 pilares: conteúdo, parte técnica, autoridade, visibilidade em IA e experiência. É a base que prepara o site para crescer com o plano mensal.",
    forWho:
      "Empresas que já têm um site, mas não aparecem bem no Google, perderam posições ou nunca tiveram um trabalho de SEO bem feito.",
    deliverables: [
      "Diagnóstico completo do site e da concorrência",
      "Pesquisa de palavras-chave e mapa das páginas prioritárias",
      "Otimização de títulos, descrições, textos e estrutura de todas as páginas",
      "Correções técnicas: rastreamento, indexação, velocidade e segurança",
      "Dados estruturados (Schema.org) e arquivo llms.txt para as IAs",
      "Auditoria de backlinks e da reputação da marca",
      "Configuração de Google Search Console e Google Analytics",
    ],
    howItWorks: [
      { step: "Diagnóstico", text: "Analisamos o site, a concorrência e como a marca aparece no Google e nas IAs." },
      { step: "Prioridades", text: "Organizamos o que corrigir primeiro, por impacto e esforço." },
      { step: "Otimização", text: "Ajustamos página por página, da parte técnica ao conteúdo." },
      { step: "Ponto de partida", text: "Registramos as métricas iniciais para medir a evolução no plano mensal." },
    ],
    faq: [
      { q: "Quanto tempo leva o setup inicial?", a: "Depende do tamanho do site e do estado em que ele está. Definimos o prazo e as horas na **reunião de diagnóstico**, antes de começar." },
      { q: "Preciso contratar o plano mensal depois?", a: "É o mais indicado, porque SEO precisa de **constância** para crescer. Mas o escopo é sempre combinado com você." },
    ],
  },
  {
    slug: "criacao-de-sites",
    group: "principal",
    photo: { src: "/fotos/isabella-e-paloma-em-pipa.webp", alt: "Isabella e Paloma trabalhando no notebook durante a criação de um site", position: "50% 70%" },
    name: "Criação de site",
    short: "Para quem vai **começar do zero**: um site rápido, bonito e pronto para aparecer no Google desde o primeiro dia.",
    title: "Criação de sites otimizados para SEO",
    metaDescription:
      "Criação de sites institucionais já otimizados para SEO, IAs e conversão, com estrutura técnica correta desde o primeiro dia.",
    intro:
      "Quando a empresa não tem site, ou o site atual limita o crescimento, o projeto começa pela **criação do site**. Ele já nasce otimizado nos 5 pilares: páginas pensadas a partir das buscas, código limpo, carregamento rápido, dados estruturados e caminhos claros para virar contato.",
    forWho:
      "Empresas sem site, com site desatualizado ou com um site bonito que não aparece em lugar nenhum.",
    deliverables: [
      "Arquitetura de páginas a partir da pesquisa de palavras-chave",
      "Design responsivo alinhado à identidade da marca",
      "Textos de páginas com foco em busca e conversão",
      "SEO técnico: metatags, sitemap, Schema.org e velocidade",
      "Integração com WhatsApp, formulários e Google Analytics",
      "Hospedagem moderna e de baixo custo, com domínio próprio",
    ],
    howItWorks: [
      { step: "Reunião de diagnóstico", text: "Entendemos o negócio, o público e como ele pesquisa." },
      { step: "Estrutura e textos", text: "Definimos páginas, hierarquia e conteúdo antes do visual." },
      { step: "Design e desenvolvimento", text: "Montamos o site com a sua identidade e revisamos juntos." },
      { step: "Publicação", text: "Configuramos domínio, Search Console e analytics e seguimos com o plano mensal." },
    ],
    faq: [
      { q: "Quanto tempo leva para o site ficar pronto?", a: "Um site institucional de uma a cinco páginas costuma levar de **duas a quatro semanas**, dependendo da agilidade nas aprovações e no envio de materiais." },
      { q: "Consigo editar o site depois?", a: "Sim. Escolhemos a tecnologia de acordo com quem vai manter o site e entregamos orientação para atualizações simples." },
    ],
  },
  {
    slug: "plano-mensal-de-seo",
    group: "principal",
    pillars: true,
    photo: { src: "/fotos/isa-trabalhando-na-praia.webp", alt: "Isabella escrevendo conteúdo no notebook à beira-mar", position: "50% 55%" },
    name: "Plano mensal de SEO",
    short: "Constância para crescer: **2 a 5 artigos por mês**, ajustes e acompanhamento dos 5 pilares.",
    title: "Plano mensal de SEO com produção de conteúdo",
    metaDescription:
      "Plano mensal de SEO: de 2 a 5 artigos por mês, ajustes técnicos e acompanhamento de cliques, impressões, autoridade e citações em IAs.",
    intro:
      "Depois do setup ou da criação do site, o crescimento vem da **constância**. No plano mensal produzimos conteúdo, fazemos ajustes e acompanhamos os 5 pilares todo mês. A quantidade de artigos, **de 2 a 5 por mês**, depende do seu mercado, dos seus recursos atuais e da nossa capacidade de entrega com qualidade.",
    forWho:
      "Empresas que querem crescer no orgânico mês a mês, com um time especialista cuidando do conteúdo e da saúde do site.",
    deliverables: [
      "Calendário editorial guiado por palavras-chave e perguntas reais",
      "De 2 a 5 artigos por mês, escritos e otimizados para SEO e IAs",
      "Atualização de páginas e conteúdos que perdem posição",
      "Monitoramento técnico, de autoridade e de citações em IAs",
      "Relatório de evolução com cliques, impressões e posicionamento",
    ],
    howItWorks: [
      { step: "Pauta", text: "Levantamos o que o seu público pesquisa e o que já existe no site." },
      { step: "Produção", text: "Escrevemos com briefing claro, revisão especializada e checklist de SEO." },
      { step: "Publicação", text: "Links internos, dados estruturados e otimização para as IAs." },
      { step: "Acompanhamento", text: "Medimos os 5 pilares e ajustamos a estratégia todo mês." },
    ],
    faq: [
      { q: "Quantos artigos por mês eu preciso?", a: "Depende da concorrência do seu mercado, dos recursos que você já tem e do momento do site. Normalmente trabalhamos de **2 a 5 artigos por mês** e definimos isso na **reunião de diagnóstico**." },
      { q: "Vocês usam IA para escrever?", a: "Usamos IA como ferramenta de pesquisa e apoio, mas todo conteúdo passa por estratégia, edição e **revisão humana especializada**." },
    ],
  },
  {
    slug: "gestao-local",
    group: "complementar",
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
    slug: "trafego-pago",
    group: "complementar",
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
    group: "complementar",
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
    metric: "+278%",
    label: "de impressões no Google",
    client: "Ludmila Abreu Imóveis",
    text: "Gestão de SEO do site de uma imobiliária em Praia da Pipa: entre maio e agosto de 2026, as impressões passaram de 41,5 mil para 157 mil.",
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
    a: "Analisa como o seu cliente pesquisa, onde a sua marca aparece hoje e o que impede o crescimento. Na Encantos Hub, isso vira um projeto personalizado que acompanha **5 pilares**: visibilidade de conteúdo, ajustes técnicos, autoridade e reputação, visibilidade em IA e experiência do site.",
  },
  {
    q: "O que é posicionamento digital?",
    a: "É o lugar que a sua marca ocupa quando alguém procura pelo que você vende: no Google, no mapa, nas redes e nas respostas das IAs. Um bom **posicionamento digital** junta **otimização de sites**, perfil da empresa no Google, conteúdo e reputação para a sua empresa ser encontrada e escolhida.",
  },
  {
    q: "Quanto custa uma consultoria de SEO?",
    a: "Cada projeto é **personalizado**. Cobramos **por hora** e montamos o escopo de acordo com o seu mercado, o tamanho do site e os recursos que você já tem. Por isso o primeiro passo é uma **reunião de diagnóstico**, onde definimos juntos o projeto e o investimento.",
  },
  {
    q: "Como é o plano mensal?",
    a: "Depois do **setup inicial** ou da **criação do site**, seguimos com um plano mensal: de **2 a 5 artigos por mês**, ajustes técnicos e acompanhamento de cliques, impressões, autoridade, citações em IAs e experiência do site.",
  },
  {
    q: "Vocês atendem só em Pipa?",
    a: "Não. Somos uma agência de SEO com base em Praia da Pipa (RN) e atendemos **empresas nacionais e internacionais** de forma remota, com reuniões por videochamada e contato pelo WhatsApp. Costumamos trabalhar com **contratos de exclusividade**.",
  },
];
