import type { Chapter } from "./types";

export const capitulo1: Chapter = {
  slug: "leucocitos-plaquetas",
  number: "01",
  title: "Leucócitos e plaquetas",
  subtitle: "Elementos figurados da defesa e da hemostasia",
  readingMin: 35,
  date: "11/08/2026",
  sources: "Ross (Histologia) · Robbins & Cotran (Patologia) · aula",
  objectives: [
    "Classificar os leucócitos em granulócitos e agranulócitos e reconhecer cada linhagem no esfregaço.",
    "Explicar a sequência da migração leucocitária (marginação, rolamento, adesão, diapedese e quimiotaxia).",
    "Relacionar os tipos de grânulos do neutrófilo e do eosinófilo com suas funções.",
    "Distinguir imunidade inata e adaptativa a partir de monócitos, macrófagos e linfócitos.",
    "Descrever a estrutura da plaqueta e as etapas da hemostasia primária e secundária.",
  ],
  sections: [
    {
      id: "introducao",
      title: "O que são os leucócitos",
      blocks: [
        {
          type: "p",
          text: "Leucócitos são os **glóbulos brancos** do sangue: células nucleadas da defesa do hospedeiro. Diferentemente das hemácias, eles usam a circulação como **via de transporte**, não como habitat definitivo. Sua ação principal ocorre nos **tecidos**, para onde migram quando há infecção, necrose ou outro insulto.",
        },
        {
          type: "p",
          text: "Eles se classificam pela presença ou ausência de **grânulos específicos** no citoplasma (coloração de Romanowsky / hematoxilina-eosina):",
        },
        {
          type: "table",
          caption: "Classificação funcional dos leucócitos circulantes",
          headers: ["Grupo", "Células", "Núcleo", "Grânulos específicos", "Papel principal"],
          rows: [
            ["Granulócitos", "Neutrófilos, eosinófilos, basófilos", "Segmentado / bilobado / em S", "Sim", "Resposta inata rápida"],
            ["Agranulócitos", "Linfócitos e monócitos", "Redondo ou em rim", "Não (só azurófilos)", "Imunidade adaptativa e macrófagos"],
          ],
        },
        {
          type: "callout",
          tone: "memo",
          title: "Para memorizar o diferencial típico",
          text: "**Nunca Deixe Meu Exame Baixar** — Neutrófilos 60–70%, Linfócitos 20–40%, Monócitos 2–8%, Eosinófilos 1–4%, Basófilos <1%. Esses percentuais são do sangue periférico do adulto; no recém-nascido o padrão é diferente (linfócitos relativamente mais numerosos).",
        },
      ],
    },
    {
      id: "dinamica",
      title: "Dinâmica celular e diapedese",
      blocks: [
        {
          type: "p",
          text: "Na microcirculação, os leucócitos tendem a ocupar a **região central da luz** (fluxo axial), enquanto as hemácias formam uma coluna mais rápida. Quando o endotélio é ativado por citocinas e histamina, os leucócitos são **convocados** para a periferia do vaso (**marginação**) e abandonam a corrente para o tecido conjuntivo.",
        },
        {
          type: "p",
          text: "**Diapedese** é a migração dos leucócitos da luz vascular para o interstício, atravessando as junções entre células **endoteliais**. No tecido, a célula ganha plasticidade: pode adquirir ou perder lóbulos nucleares conforme se deforma para passar por espaços estreitos. Ali a ação é mais efetiva — fagocitose, degranulação e sinalização.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p1_img1.jpg",
            alt: "Esquema da diapedese: leucócito saindo da corrente sanguínea, atravessando o endotélio e alcançando o tecido conjuntivo.",
            caption:
              "Figura 1.1 — Diapedese. O leucócito deixa a corrente, atravessa o endotélio e entra no tecido conjuntivo, onde atua contra o agente agressor.",
          },
        },
        {
          type: "callout",
          tone: "atencao",
          title: "Pegadinha de prova",
          text: "A passagem ocorre entre células **endoteliais** (vaso), não epiteliais. Histamina e heparina dos **mastócitos** do tecido conjuntivo aumentam a permeabilidade e facilitam a transmigração; a molécula de adesão clássica da diapedese é o **PECAM-1 (CD31)**.",
        },
      ],
    },
    {
      id: "neutrofilos",
      title: "Neutrófilos",
      blocks: [
        {
          type: "p",
          text: "O neutrófilo (polimorfonuclear, PMN) é o leucócito mais abundante e a **primeira linha celular** contra bactérias piogênicas e contra o tecido necrótico. Vive poucas horas na circulação (cerca de 5–20 h) e 1–2 dias no tecido; depois morre por apoptose e é removido por macrófagos — o pus é, em grande parte, **neutrófilos mortos + debris + líquido**.",
        },
        {
          type: "table",
          caption: "Cartão de identidade do neutrófilo",
          headers: ["Característica", "Descrição"],
          rows: [
            ["Prevalência", "60–70% dos leucócitos circulantes"],
            ["Núcleo", "Multilobulado, 3–5 lóbulos unidos por pontes finas de cromatina"],
            ["Cromatina", "Heterocromatina densa e bem definida (núcleo “maduro”)"],
            ["Citoplasma", "Granulações finas, tonalidade salmão / rosa no HE"],
            ["Função", "Fagocitose e morte de bactérias; inflamação aguda"],
            ["Mobilidade", "Migração rápida por diapedese para o foco infectado"],
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p1_img2.jpg",
            alt: "Esfregaço sanguíneo com hemácias e dois neutrófilos de núcleo segmentado.",
            caption:
              "Figura 1.2 — Esfregaço de sangue periférico. Neutrófilos maduros com núcleo segmentado (3–5 lóbulos) em meio a hemácias. O citoplasma pálido-salmão contém grânulos específicos finos.",
          },
        },
        {
          type: "h3",
          id: "barr",
          text: "Morfologia nuclear e corpúsculo de Barr",
        },
        {
          type: "p",
          text: "O núcleo do neutrófilo maduro é **segmentado**. Um aumento do número de lóbulos (hipersegmentação, ≥6) sugere deficiência de B12/folato. O oposto — núcleo em bastão (banda) ou mielócito circulante — é o **desvio à esquerda**, típico de infecção bacteriana aguda.",
        },
        {
          type: "p",
          text: "O **corpúsculo de Barr** (cromatina sexual) é um apêndice nuclear em forma de **baqueta de tambor** (*drumstick*). Representa o **cromossomo X inativado** (hipótese de Lyon) e está presente em indivíduos com **dois cromossomos X** (mulheres 46,XX e algumas aneuploidias). Serve, historicamente, para determinação do sexo cromossômico em esfregaços.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p2_img1.jpg",
            alt: "Dois neutrófilos, um deles com apêndice nuclear em baqueta de tambor (corpúsculo de Barr).",
            caption:
              "Figura 1.3 — Neutrófilos com morfologia nuclear típica. À direita, apêndice em baqueta de tambor: corpúsculo de Barr (cromatina sexual).",
          },
        },
        {
          type: "h3",
          id: "migracao",
          text: "Migração neutrofílica — as quatro etapas",
        },
        {
          type: "ol",
          items: [
            "**Marginação e rolamento.** O fluxo lento (estase) e as selectinas levam o neutrófilo para a periferia. **P-selectina** e **E-selectina** no endotélio ligam-se a ligandos sialilados (PSGL-1) no leucócito — adesão frouxa, a célula “rola”.",
            "**Adesão firme.** Integrinas do neutrófilo (LFA-1, Mac-1) são ativadas por quimiocinas e ligam-se a **ICAM-1** (e VCAM-1) no endotélio. Sem essa etapa, o leucócito não para (deficiência de adesão leucocitária, LAD).",
            "**Diapedese / transmigração.** O neutrófilo passa **entre** as células endoteliais (via PECAM-1) e atravessa a membrana basal com ajuda de proteases. Histamina e heparina dos mastócitos abrem junções e aumentam o extravasamento.",
            "**Quimiotaxia.** No tecido, o neutrófilo segue o gradiente de fatores quimioatraentes: fragmentos bacterianos (fMLP), C5a, LTB4, IL-8 (CXCL8). Os receptores acoplados à proteína G orientam o citoesqueleto para o foco.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p2_img2.jpg",
            alt: "Esquema das quatro etapas da migração leucocitária: rolamento, adesão, diapedese e quimiotaxia.",
            caption:
              "Figura 1.4 — Sequência clássica da extração leucocitária. Selectinas no rolamento; integrinas/ICAM-1 na adesão firme; passagem pelo endotélio; orientação por quimioatraentes no tecido.",
          },
        },
        {
          type: "h3",
          id: "granulos-n",
          text: "Tipos de grânulos",
        },
        {
          type: "p",
          text: "O arsenal do neutrófilo está empacotado em três famílias de grânulos, formados em momentos diferentes da granulopoese (os azurófilos nascem primeiro, ainda no promielócito):",
        },
        {
          type: "table",
          caption: "Grânulos do neutrófilo e o que eles fazem",
          headers: ["Grânulo", "Também chamado", "Conteúdo-chave", "Função"],
          rows: [
            ["Azurófilos", "Primários / lisossomos", "Mieloperoxidase (MPO), defensinas, catepsina G, elastase, lisozima", "Morte microbiana; as proteases também **digerem matriz** — daí o dano colateral da inflamação"],
            ["Específicos", "Secundários", "Lactoferrina, lisozima, colagenase tipo IV, NADPH oxidase (componentes)", "Combate bacteriano dirigido; sequestro de ferro (lactoferrina)"],
            ["Terciários", "Gelatinase", "Gelatinases, catepsinas, glicoproteínas", "Ajudam a **migrar** degradando a membrana basal"],
          ],
        },
        {
          type: "callout",
          tone: "clinica",
          title: "Correlação clínica",
          text: "A **mieloperoxidase** gera HOCl (ácido hipocloroso) no sistema H₂O₂–MPO–haleto, o principal oxidante bactericida do neutrófilo. Na doença granulomatosa crônica falta a NADPH oxidase: não se forma o burst oxidativo, e há abscessos e granulomas por catalase-positivos. A elastase e a colagenase explicam por que a inflamação aguda **destrói tecido** enquanto mata o micróbio.",
        },
        {
          type: "h3",
          id: "fagocitose",
          text: "No tecido: fagocitose",
        },
        {
          type: "p",
          text: "O neutrófilo reconhece o microrganismo opsonizado por **IgG (receptor Fc)** e por **C3b (CR1/CR3)**. Forma-se o **fagossomo**, que se funde aos grânulos (degranulação intracelular). Dentro do vacúolo atuam enzimas bactericidas, lisozima, lactoferrina e defensinas, além das espécies reativas de oxigênio e nitrogênio (H₂O₂, HOCl, NO). O microrganismo morre; parte da matriz vizinha também — o preço da defesa inata.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p2_img3.jpg",
            alt: "Etapas da fagocitose: reconhecimento, engolfamento, fusão granular, digestão e eliminação.",
            caption:
              "Figura 1.5 — Fagocitose. Reconhecimento (Fc e complemento) → engolfamento → fusão dos grânulos azurófilos e específicos → digestão enzimática e oxidativa → eliminação. Enzimas lisossomais, lactoferrina, defensinas e o burst oxidativo (H₂O₂, HOCl) cooperam.",
          },
        },
        {
          type: "callout",
          tone: "prova",
          title: "Alta incidência em prova",
          text: "Neutrófilo = inflamação **aguda** + bactéria piogênica. Eosinófilo = parasita helmíntico + alergia. Linfócito/macrófago = inflamação **crônica**. Se a questão mostra núcleo segmentado e citoplasma rosa, é neutrófilo; se o núcleo é bilobado e os grânulos são grossos e vermelhos, é eosinófilo.",
        },
      ],
    },
    {
      id: "eosinofilos",
      title: "Eosinófilos",
      blocks: [
        {
          type: "p",
          text: "Células **peculiares** no esfregaço: grânulos **acidófilos, grosseiros e refringentes**, núcleo **bilobado** unido por uma ponte de cromatina, citoplasma brilhante. Circulam em pequena fração (1–4%) e se concentram em mucosas (trato GI, respiratório). Duas missões clássicas: **defesa antiparasitária** (helmintos) e **modulação da alergia**.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p3_img1.jpg",
            alt: "Esfregaço sanguíneo com eosinófilo de núcleo bilobado e grânulos vermelho-alaranjados.",
            caption:
              "Figura 1.6 — Eosinófilo em sangue periférico. Núcleo bilobado e grânulos específicos grandes, corados de vermelho-laranja (eosina). Compare com as hemácias ao redor.",
          },
        },
        {
          type: "h3",
          id: "ultra-eos",
          text: "Ultraestrutura dos grânulos",
        },
        {
          type: "p",
          text: "Ao microscópio eletrônico, o grânulo específico tem um **corpo cristaloide internamente denso** (responsável pela refratilidade na óptica) e uma **matriz externa** menos densa. Quatro proteínas catiônicas dominam:",
        },
        {
          type: "ol",
          items: [
            "**MBP (proteína básica principal)** — está **dentro do cristaloide**; é a principal responsável pela **acidofilia** do grânulo. Abre poros na cutícula de helmintos.",
            "**ECP (proteína catiônica do eosinófilo)** — na matriz; também porogênica e tóxica para parasitas e para o epitélio do hospedeiro (asma).",
            "**EPO (peroxidase do eosinófilo)** — na matriz; gera oxidantes.",
            "**EDN (neurotoxina derivada do eosinófilo)** — na matriz; ribonuclease com efeito sobre nervos (daí o nome).",
          ],
        },
        {
          type: "p",
          text: "A matriz ainda contém **histaminase** e outras hidrolases. Isso importa para a função reguladora: o eosinófilo não só ataca o verme, também **inativa histamina** e ajuda a controlar a intensidade da resposta alérgica.",
        },
        {
          type: "h3",
          id: "funcoes-eos",
          text: "Três funções para levar para a prova",
        },
        {
          type: "ul",
          items: [
            "**Antiparasitária.** MBP + ECP perfuram a película do helminto e permitem a entrada de oxidantes. Helmintos são grandes demais para fagocitose clássica: o eosinófilo faz **citotoxicidade extracelular**.",
            "**Modulação imunológica / alergia.** Fagocita complexos antígeno–anticorpo e participa da inflamação tipo I (asma, rinite). O excesso de MBP/ECP **lesa o epitélio brônquico**.",
            "**Regulação inflamatória.** Secreção de histaminase e outras moléculas anti-inflamatórias; controla, em parte, o que mastócitos e basófilos iniciaram.",
          ],
        },
        {
          type: "callout",
          tone: "clinica",
          title: "Quando a eosinofilia sobe",
          text: "Pense em **NAACP**: Neoplasias (linfoma de Hodgkin), Alergia/asma, Addisons (insuficiência adrenal), Colagenoses/vasculites (Churg-Strauss / EGPA), Parasitas. Cristais de Charcot-Leyden (galectina-10) aparecem no escarro de asmáticos — restos de eosinófilos.",
        },
      ],
    },
    {
      id: "basofilos",
      title: "Basófilos e reações de hipersensibilidade",
      blocks: [
        {
          type: "p",
          text: "O basófilo é o leucócito mais raro (<1%). No esfregaço, os grânulos **basófilos (azul-púrpura)** são grosseiros e frequentemente **recobrem o núcleo**, que tem forma de **S** ou está irregularmente lobulado. Os grânulos contêm **histamina, heparina, fator quimiotático de eosinófilos e proteases neutras** — o mesmo “kit” inflamatório dos mastócitos teciduais.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p3_img2.jpg",
            alt: "Ilustração de um basófilo com núcleo irregular e grânulos azul-escuros densos.",
            caption:
              "Figura 1.7 — Basófilo. Núcleo irregular (em “S”) e grânulos metacromáticos densos, ricos em histamina e heparina.",
          },
        },
        {
          type: "callout",
          tone: "atencao",
          title: "Basófilo não “vira” mastócito",
          text: "Anotações de aula às vezes dizem que o basófilo circulante é imaturo e, no tecido, torna-se mastócito. **Isso está desatualizado.** Basófilos e mastócitos compartilham mediadores e o receptor de IgE (FcεRI), mas são **linhagens distintas**: o mastócito amadurece no tecido a partir de um precursor medular próprio; o basófilo já chega maduro no sangue e não se transforma em mastócito (Abbas; Ross; Robbins). Use essa distinção — é pegadinha clássica.",
        },
        {
          type: "p",
          text: "**Reação de hipersensibilidade imediata (tipo I).** Em um indivíduo sensibilizado, IgE já está ligada ao FcεRI na superfície de mastócitos (tecido) e basófilos (sangue). Na reexposição, o alérgeno **ponteia** duas IgE, dispara o influxo de cálcio e a **degranulação**: histamina (vasodilatação, prurido, broncoespasmo), heparina, proteases e, minutos depois, mediadores lipídicos (leucotrienos, PAF). Eosinófilos são recrutados pelo ECF e IL-5.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p3_img3.jpg",
            alt: "Quatro etapas da degranulação do basófilo mediada por IgE.",
            caption:
              "Figura 1.8 — Degranulação na hipersensibilidade imediata. 1) Basófilo com IgE na superfície. 2) Antígeno faz a ligação cruzada. 3) Liberação dos grânulos. 4) Mediadores (histamina, heparina, leucotrienos). Exemplos: alergia alimentar grave, picada de inseto, fármacos.",
          },
        },
      ],
    },
    {
      id: "monocitos",
      title: "Monócitos e apresentação de antígeno",
      blocks: [
        {
          type: "p",
          text: "Monócitos são as **maiores células do sangue periférico** (12–20 μm), núcleo em rim ou ferradura, citoplasma azul-acinzentado com vacuólos finos. Circulam **1 a 3 dias** e, por diapedese, entram nos tecidos, onde se diferenciam em **macrófagos** ou **células dendríticas**. O destino funcional depende do **microambiente** do órgão (Kupffer no fígado, micróglia no SNC, macrófagos alveolares, osteoclastos no osso).",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p4_img1.jpg",
            alt: "Monócito circulante diferenciando-se em macrófago tecidual ou célula dendrítica.",
            caption:
              "Figura 1.9 — Destino do monócito. Após a diapedese, diferencia-se em macrófago tecidual (fagócito profissional e reparo) ou em célula dendrítica (apresentação de antígeno aos linfócitos T).",
          },
        },
        {
          type: "p",
          text: "Eles **conectam a imunidade inata à adaptativa**. O microrganismo é fagocitado, digerido em lisossomos, e peptídeos são carregados no **MHC de classe II** até a superfície. O linfócito T CD4 reconhece o complexo, recebe a segunda sinalização (B7–CD28) e se ativa — início da resposta específica.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p4_img2.jpg",
            alt: "Cascata de fagocitose, processamento no lisossomo, apresentação via MHC II e ativação do linfócito T.",
            caption:
              "Figura 1.10 — Apresentação de antígeno. Fagocitose → processamento lisossomal → MHC II na superfície → reconhecimento pelo TCR do T CD4 + coestimulação → resposta imune específica.",
          },
        },
      ],
    },
    {
      id: "linfocitos",
      title: "Linfócitos, memória e clínica",
      blocks: [
        {
          type: "p",
          text: "Linfócitos são agranulócitos de núcleo redondo e citoplasma escasso. Morfologicamente parecem semelhantes no esfregaço comum, mas são **três exércitos** distintos:",
        },
        {
          type: "table",
          caption: "Subpopulações linfocitárias",
          headers: ["Célula", "Imunidade", "Mecanismo", "Produto / efeito"],
          rows: [
            ["Linfócito T", "Celular", "Reconhece antígeno no MHC; destrói células infectadas ou ajuda outras células", "Citotoxicidade (CD8), citocinas (CD4)"],
            ["Linfócito B", "Humoral", "Diferencia-se em **plasmócito**", "Anticorpos que neutralizam agentes extracelulares"],
            ["NK", "Inata", "Citotoxicidade natural (sem MHC prévio)", "Mata células sem MHC I ou opsonizadas por IgG (ADCC)"],
          ],
        },
        {
          type: "h3",
          id: "memoria",
          text: "Células naive, efetoras e de memória",
        },
        {
          type: "p",
          text: "A célula **naive** (virgem) encontra o antígeno em órgão linfoide, sofre **expansão clonal** e gera dois destinos: **efetoras** (combate imediato) e **memória** (resposta futura rápida). A **resposta primária** é mais lenta (dias); a **secundária**, na reexposição, é mais intensa, de maior afinidade e duradoura — a base da vacinação.",
        },
        {
          type: "p",
          text: "Nos tecidos, o infiltrado linfocitário marca **inflamação crônica** (em contraste com o neutrófilo da aguda).",
        },
        {
          type: "h3",
          id: "mono-inf",
          text: "Mononucleose infecciosa",
        },
        {
          type: "p",
          text: "Infecção pelo **vírus Epstein-Barr (EBV)**, que infecta linfócitos B (receptor CD21). Os linfócitos T CD8 reativos aparecem no sangue como **células atípicas de Downey**: maiores que o normal, citoplasma abundante, cromatina menos condensada, às vezes “abraçando” hemácias. Há linfocitose, febre, faringite, adenomegalia e anticorpos heterófilos (Monospot) e específicos duradouros.",
        },
        {
          type: "h3",
          id: "linfomas",
          text: "Linfomas — mapa mínimo",
        },
        {
          type: "table",
          caption: "Hodgkin versus não-Hodgkin (visão de curso)",
          headers: ["", "Hodgkin (~25%)", "Não-Hodgkin (~75%)"],
          rows: [
            ["Célula característica", "**Reed-Sternberg** (CD15+, CD30+, origina-se de B)", "Predomínio de linhagem B (também T/NK)"],
            ["Idade", "Dois picos: jovens e 50–60 anos", "Mais heterogêneo; aumenta com a idade"],
            ["Disseminação", "Ordenada, de linfonodo a linfonodo", "Irregular, pode saltar cadeias"],
            ["Comportamento", "Estadiamento de Ann Arbor é central", "Grau baixo ou alto; muitos subtipos"],
          ],
        },
        {
          type: "callout",
          tone: "prova",
          title: "Reed-Sternberg",
          text: "Célula grande, **binucleada** (olho de coruja), nucléolos eosinófilos proeminentes. Encontrá-la no linfonodo = linfoma de Hodgkin clássico até prova em contrário. O EBV está associado a um subconjunto dos casos.",
        },
      ],
    },
    {
      id: "plaquetas",
      title: "Plaquetas",
      blocks: [
        {
          type: "p",
          text: "Plaquetas (trombócitos) são **fragmentos anucleados** de **megacariócitos** da medula óssea, delimitados por membrana, com citoplasma e organelas. Circulam 7–10 dias. A função é manter a **hemostasia** e a **integridade vascular**: no dano endotelial elas aderem, agregam e oferecem a superfície para a cascata da coagulação, formando o tampão que impede o extravasamento.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p5_img1.jpg",
            alt: "Megacariócito liberando plaquetas.",
            caption:
              "Figura 1.11 — Trombopoese. O megacariócito politploide emite proplaquetas que se fragmentam em plaquetas. Plaquetas senescentes ou danificadas são removidas por macrófagos, especialmente no baço e por células de Kupffer no fígado.",
          },
        },
        {
          type: "h3",
          id: "hialomero",
          text: "Hialômero e granulômero",
        },
        {
          type: "p",
          text: "Na microscopia, a plaqueta em repouso é um disco. Dois territórios se destacam:",
        },
        {
          type: "ul",
          items: [
            "**Hialômero** — zona periférica clara. Função **estrutural e mecânica**: o anel de microtúbulos preserva a forma discoide; actina e miosina permitem a contração, a emissão de **pseudópodes** e a retração do coágulo (gasto de ATP). O **sistema canalicular aberto** (invaginações de membrana) aumenta a área de superfície e serve de via de exocitose.",
            "**Granulômero** — zona central densa. Armazena o conteúdo secretório e organelas (mitocôndrias, glicogênio). Os **grânulos alfa** (fibrinogênio, vWF, fatores de coagulação, PDGF, trombospondina) atuam na agregação e no reparo inicial. Os **grânulos delta (densos)** (ADP, ATP, Ca²⁺, serotonina, histamina) promovem agregação e vasoconstrição.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p5_img2.jpg",
            alt: "Corte esquemático da plaqueta mostrando hialômero periférico e granulômero central.",
            caption:
              "Figura 1.12 — Arquitetura funcional da plaqueta. Hialômero (citoesqueleto, sistema canalicular) à periferia; granulômero (grânulos alfa, delta, mitocôndrias, sistema tubular denso) no centro.",
          },
        },
        {
          type: "p",
          text: "O **sistema tubular denso** origina-se do retículo do megacariócito e **armazena Ca²⁺**, essencial para a ativação. O anel de microtúbulos dá estabilidade; as proteínas contráteis retraem o coágulo.",
        },
        {
          type: "table",
          caption: "Grânulos plaquetários",
          headers: ["Grânulo", "Conteúdo", "Papel"],
          rows: [
            ["Alfa", "Fibrinogênio, vWF, trombospondina, PDGF, fatores de coagulação", "Agregação, reparo vascular, fase inicial da cicatrização"],
            ["Delta (densos)", "ADP, ATP, Ca²⁺, serotonina, histamina", "Recrutamento de mais plaquetas e vasoconstrição"],
            ["Lambda (lisossomos)", "Hidrolases, catepsinas, fosfatases", "Lise e remodelamento / remoção do coágulo"],
          ],
        },
        {
          type: "h3",
          id: "hemostasia-prim",
          text: "Hemostasia primária — o tampão plaquetário",
        },
        {
          type: "ol",
          items: [
            "**Lesão endotelial.** Expõe o colágeno subendotelial e libera **fator de von Willebrand (vWF)**.",
            "**Adesão.** O vWF funciona como ponte entre o colágeno e o receptor **GPIb** da plaqueta.",
            "**Ativação e secreção.** A plaqueta muda de forma (esférica, com pseudópodes) e libera ADP, tromboxano A₂ e trombospondina.",
            "**Agregação.** O **GPIIb/IIIa** (integrina αIIbβ3) liga fibrinogênio, que ponteia plaquetas vizinhas. Forma-se o **tampão primário**, ainda frouxo.",
          ],
        },
        {
          type: "callout",
          tone: "clinica",
          title: "Fármacos e doenças que “apontam” para a primária",
          text: "Bernard-Soulier: defeito de **GPIb** (adesão). Glanzmann: defeito de **GPIIb/IIIa** (agregação). von Willebrand: falta/disfunção do **vWF**. Aspirina inibe irreversivelmente a COX-1 e o **TXA₂**. Clopidogrel bloqueia o receptor P2Y12 do ADP. Abciximabe bloqueia GPIIb/IIIa.",
        },
        {
          type: "h3",
          id: "hemostasia-sec",
          text: "Hemostasia secundária — a malha de fibrina",
        },
        {
          type: "p",
          text: "A cascata enzimática transforma o tampão frouxo em **coágulo estável**:",
        },
        {
          type: "ol",
          items: [
            "**Ativação.** O **fator tecidual** (via extrínseca) exposto na lesão inicia a sequência proteolítica (hoje se ensina o modelo celular: iniciação, amplificação, propagação).",
            "**Trombina.** A cascata converte protrombina (II) em **trombina** (IIa), a enzima central.",
            "**Fibrina.** A trombina cliva o **fibrinogênio** solúvel em monômeros de fibrina, que polimerizam. O fator XIII (ativado pela trombina) **cruza as fibras**.",
            "**Coágulo final.** A malha de fibrina entrelaça-se ao tampão, aprisiona hemácias e, pela retração plaquetária, aproxima as bordas do vaso até a cicatrização.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/leuco_p6_img1.jpg",
            alt: "Diagrama da hemostasia primária (tampão plaquetário) e secundária (malha de fibrina) até o coágulo estável.",
            caption:
              "Figura 1.13 — Hemostasia primária e secundária. Da lesão endotelial ao tampão plaquetário; da cascata da coagulação ao coágulo de fibrina estável.",
          },
        },
      ],
    },
    {
      id: "sintese-1",
      title: "Síntese do capítulo",
      blocks: [
        {
          type: "ul",
          items: [
            "Leucócitos viajam no sangue e **trabalham no tecido** — a diapedese é o portal da inflamação.",
            "Neutrófilo = aguda bacteriana; eosinófilo = helminto/alergia; basófilo/mastócito = histamina e tipo I; monócito = macrófago + ponte para o T; linfócito = crônica e memória.",
            "A inflamação mata o invasor **e** a matriz: elastase, colagenase e oxidantes explicam o dano colateral.",
            "A plaqueta é um fragmento de megacariócito com hialômero (forma/contração) e granulômero (secreção). Primária = tampão; secundária = fibrina.",
          ],
        },
      ],
    },
  ],
};
