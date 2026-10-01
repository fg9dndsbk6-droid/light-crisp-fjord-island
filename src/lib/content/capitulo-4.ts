import type { Chapter } from "./types";

export const capitulo4: Chapter = {
  slug: "regeneracao-cicatrizacao",
  number: "04",
  title: "Regeneração e cicatrização",
  subtitle: "Como o tecido reconstitui ou preenche o que foi perdido",
  readingMin: 32,
  date: "25/08/2026",
  sources: "Aula · Robbins & Cotran",
  objectives: [
    "Classificar os tecidos em lábeis, estáveis e permanentes e prever o tipo de reparo.",
    "Explicar por que o fígado regenera ou vira cirrose conforme a matriz esteja íntegra ou não.",
    "Contrastar cicatrização por primeira e por segunda intenção, com a cronologia das fases.",
    "Descrever angiogênese e o papel de TGF-β, vitamina C e metaloproteinases.",
    "Diferenciar cicatriz hipertrófica de queloide e listar fatores locais e sistêmicos que atrasam o reparo.",
  ],
  sections: [
    {
      id: "reparo",
      title: "Reparo: dois caminhos",
      blocks: [
        {
          type: "p",
          text: "Reparo tecidual é o conjunto de processos que **restabelece a homeostase** depois da lesão. Há dois desfechos:",
        },
        {
          type: "ul",
          items: [
            "**Regeneração** — as células perdidas são substituídas por **células iguais às originais**; a arquitetura volta. É o resultado mais favorável.",
            "**Cicatrização (fibrose / cicatriz)** — o defeito é preenchido por **colágeno**. Há reconstituição da continuidade, não da função especializada.",
          ],
        },
        {
          type: "p",
          text: "O caminho escolhido depende do **tipo de célula**, da **intensidade da lesão** e, sobretudo, da **integridade da matriz extracelular e da membrana basal**.",
        },
      ],
    },
    {
      id: "tipos-celula",
      title: "Células lábeis, estáveis e permanentes",
      blocks: [
        {
          type: "table",
          caption: "Capacidade proliferativa e consequência para o reparo",
          headers: ["Tipo", "Comportamento", "Exemplos", "Reparo típico"],
          rows: [
            ["**Lábeis**", "Divisão contínua; há células-tronco que repondo o que descamou", "Epiderme, mucosas, medula óssea, trato GI", "Regeneração fácil se o estroma restar"],
            ["**Estáveis (quiescentes)**", "Estão em G0, mas **podem** voltar ao ciclo", "Hepatócito, rim (túbulo), pâncreas, endotélio, fibroblasto", "Regeneração se a matriz estiver preservada; senão, fibrose"],
            ["**Permanentes**", "Não se dividem (ou quase)", "Neurônio, músculo cardíaco, (em grande parte) esquelético", "Cicatriz; perda funcional definitiva"],
          ],
        },
        {
          type: "p",
          text: "A proliferação é controlada pelo **ciclo celular** e estimulada por **fatores de crescimento** e pelas interações célula–MEC (integrinas). Células-tronco fazem **divisão assimétrica**: uma filha permanece no nicho, a outra diferencia-se.",
        },
        {
          type: "callout",
          tone: "prova",
          title: "Infarto do miocárdio",
          text: "Cardiomiócito é célula **permanente**. O infarto não “regenera músculo”: vira **cicatriz branca**. A área fibrosa não contrai — daí a insuficiência e o remodelamento ventricular. Quase o oposto do fígado, que é estável e pode repor até ~90% da massa se o arcabouço restar.",
        },
      ],
    },
    {
      id: "figado",
      title: "O exemplo clássico: fígado",
      blocks: [
        {
          type: "p",
          text: "Se você resseca um segmento hepático (hepatectomia parcial), os hepatócitos remanescentes saem de G0 e **recompõem a massa** — até cerca de **90%** pode ser restaurada. O gatilho são citocinas (IL-6 dos células de Kupffer) e fatores de crescimento (HGF, TGF-α, EGF) produzidos em resposta à perda de massa e à inflamação.",
        },
        {
          type: "p",
          text: "Mas o desfecho **depende do tipo de lesão**. Se o **arcabouço conjuntivo / reticulina** permanece, a arquitetura lobular volta: **regeneração verdadeira**. Se a lesão destrói também o estroma (hepatite crônica, álcool, esteato-hepatite reiterada), o fígado “repara” por **fibrose**, que, quando difusa e nodular, é a **cirrose** — parênquima regenerado **preso em nódulos** sem a vascularização original, com hipertensão portal.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p1_img1.jpg",
            alt: "Comparação entre lesão só de hepatócitos (regeneração) e lesão de células mais matriz (reparo por cicatriz).",
            caption:
              "Figura 4.1 — Regeneração versus cicatriz no fígado. Matriz intacta: os hepatócitos reocupam o lóbulo. Matriz destruída: deposição de conjuntivo e distorção da arquitetura.",
          },
        },
        {
          type: "figures",
          figures: [
            {
              src: "/figures/regen_p2_img1.jpg",
              alt: "Fluxograma do destino da lesão: resolução, regeneração ou cicatrização.",
              caption:
                "Figura 4.2 — Árvore de decisão do reparo. Intensidade da lesão, tipo de tecido e persistência da inflamação determinam regeneração ou fibrose.",
            },
            {
              src: "/figures/regen_p3_img2.jpg",
              alt: "Fígado cirrótico macroscopicamente nodular e histologia com nódulos de regeneração cercados por septos.",
              caption:
                "Figura 4.3 — Cirrose hepática. Aspecto endurecido e nodular; nódulos de regeneração presos por septos fibrosos. A massa celular volta; a arquitetura, não.",
            },
          ],
        },
      ],
    },
    {
      id: "depende",
      title: "Do que a regeneração depende",
      blocks: [
        {
          type: "ul",
          items: [
            "Do **tipo de tecido** (lábil/estável/permanente).",
            "Da **intensidade** da lesão (discreta × destrutiva).",
            "Da **manutenção da estrutura prévia** (membrana basal, reticulina, nicho de células-tronco).",
            "Da conversa entre **matriz, integrinas e células inflamatórias**.",
          ],
        },
        {
          type: "p",
          text: "Células parenquimatosas ligam-se à MEC por **integrinas**. Essas proteínas fazem duas coisas: **ancoram** a célula ao colágeno/fibronectina e **transmitem sinais** da matriz para o núcleo (proliferação, diferenciação, migração). Macrófagos, atraídos nesse contexto, removem o agente e o tecido morto e secretam fatores de crescimento para as células que vão proliferar. Sem essa limpeza, o canteiro não arranca.",
        },
        {
          type: "p",
          text: "Exemplos de regeneração bem-sucedida: pequenos furúnculos após drenagem, mucosa intestinal, fígado com estroma íntegro, túbulos renais após necrose tubular aguda (a membrana basal do túbulo guiou o epitélio de volta).",
        },
        {
          type: "h3",
          id: "mb",
          text: "A membrana basal decide muita coisa",
        },
        {
          type: "p",
          text: "Se a **membrana basal** permanece, o epitélio regenera sobre um trilho e a arquitetura volta. Se ela é destruída, as células novas não encontram o endereço — proliferam de forma desorganizada e o defeito é preenchido por cicatriz. Essa é a diferença entre uma erosão (só epitélio) e uma úlcera (epitélio + basal + estroma).",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p2_img2.jpg",
            alt: "Epitélio regenerando sobre membrana basal preservada versus falha de arquitetura quando a basal é destruída.",
            caption:
              "Figura 4.4 — Membrana basal preservada: as células novas reconstroem o epitélio. Membrana basal lesada: o caminho da cicatriz se abre.",
          },
        },
      ],
    },
    {
      id: "intencoes",
      title: "Cicatrização por primeira e por segunda intenção",
      blocks: [
        {
          type: "p",
          text: "A pele é o modelo clássico. A diferença é a **quantidade de tecido perdido** e, portanto, a quantidade de granulação e de colágeno que será necessária.",
        },
        {
          type: "table",
          caption: "Primeira versus segunda intenção",
          headers: ["", "Primeira intenção (primeira cicatrização)", "Segunda intenção"],
          rows: [
            ["Ferida", "Incisão cirúrgica, bordas aproximadas", "Grande perda de tecido, bordas afastadas, úlcera"],
            ["Inflamação", "Pouca", "Muita"],
            ["Tecido de granulação", "Escasso", "Abundante"],
            ["Fibrose residual", "Linha fina", "Cicatriz irregular, possível perda funcional"],
            ["Contração", "Mínima", "Importante (miofibroblastos)"],
            ["Macroscopia", "Fica vermelha (vasos) e depois esbranquiçada", "Leito granuloso, cicatriz larga"],
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p3_img1.jpg",
            alt: "Cortes seriados comparando cicatrização por primeira intenção (incisão) e por segunda intenção (ferida aberta) em 24 horas, 3 a 7 dias e semanas.",
            caption:
              "Figura 4.5 — Cronologia. Primeira intenção: coágulo e neutrófilos em 24 h; macrófagos, mitoses e pouca granulação em 3–7 dias; linha de colágeno em semanas. Segunda intenção: mesmo roteiro, em escala maior, com contração da ferida.",
          },
        },
        {
          type: "h3",
          id: "cronologia",
          text: "Cronologia para memorizar (primeira intenção)",
        },
        {
          type: "ul",
          items: [
            "**0–24 h.** Coágulo de fibrina fecha o espaço; **neutrófilos** entram; queratinócitos das bordas começam a migrar sob a crosta.",
            "**Dia 3.** Neutrófilos são substituídos por **macrófagos**; tecido de granulação invade; fibroblastos produzem colágeno ainda frouxo (tipo III).",
            "**Dia 5.** Epiderme em geral já recobriu a incisão; neovasos no auge (ferida vermelha); colágeno mais evidente.",
            "**Semanas.** Colágeno se acumula e se alinha; vasos regridem (cicatriz esbranquiça); resistência à tração sobe.",
            "**Meses (até 1 ano).** Remodelamento: colágeno **III → I**; ligações cruzadas. A resistência chega a ~70–80% da pele original — **nunca 100%**.",
          ],
        },
        {
          type: "p",
          text: "Na **segunda intenção**, o mesmo filme roda com mais inflamação, mais granulação, mais tempo e **contração** (miofibroblastos puxam as bordas). Uma deiscência de sutura (os pontos cedem e a ferida se abre) converte um reparo de primeira em segunda intenção.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p4_img2.jpg",
            alt: "Ferida cirúrgica aberta após deiscência dos pontos, cicatrizando por segunda intenção.",
            caption:
              "Figura 4.6 — Deiscência. A ferida que deveria fechar por primeira intenção reabre e passa a granuloso de segunda intenção, com bordas afastadas.",
          },
        },
      ],
    },
    {
      id: "fases",
      title: "Fases da cicatrização",
      blocks: [
        {
          type: "p",
          text: "Independentemente da “intenção”, o reparo cutâneo atravessa três fases que se sobrepõem:",
        },
        {
          type: "ol",
          items: [
            "**Inflamatória (limpeza).** Vasodilatação, exsudato, neutrófilos depois macrófagos removem micróbios e debris. Forma-se a crosta. Sem essa fase a ferida não fecha — mas se ela se arrasta (corpo estranho, infecção), o reparo trava.",
            "**Proliferativa.** Angiogênese, fibroplasia, **reepitelização**. Tecido de granulação preenche o leito.",
            "**Remodelamento (a partir de ~21 dias, até um ano).** Reorganização do colágeno, regressão vascular, aumento da resistência à tração, contração.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p4_img1.jpg",
            alt: "Gráfico das fases da cicatrização: inflamação, tecido de granulação, contração e remodelamento ao longo dos dias.",
            caption:
              "Figura 4.7 — Sobreposição temporal. A inflamação vem primeiro; o tecido de granulação culmina na primeira semana; contração e acúmulo/remodelamento de colágeno se estendem por semanas a meses (eixo em escala logarítmica).",
          },
        },
      ],
    },
    {
      id: "angio-fibro",
      title: "Angiogênese, fibroblasto e matriz",
      blocks: [
        {
          type: "p",
          text: "**Angiogênese** é o nascimento de vasos a partir de vasos preexistentes (sprouting), comandado sobretudo pelo **VEGF**. Passos:",
        },
        {
          type: "ol",
          items: [
            "Vasodilatação pelo **óxido nítrico** e aumento de permeabilidade (VEGF).",
            "Separação dos **pericitos** e degradação da membrana basal (MMPs).",
            "Migração de células endoteliais em direção ao estímulo.",
            "Proliferação endotelial.",
            "Remodelação em tubos, recrutamento de pericitos e deposição de nova basal.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/regen_p3_img3.jpg",
            alt: "Etapas da angiogênese a partir de um vaso quiescente até a formação de um novo capilar.",
            caption:
              "Figura 4.8 — Angiogênese. Do vaso quiescente à brotação: VEGF, NO, desprendimento de pericitos, migração e proliferação endotelial, tubo novo.",
          },
        },
        {
          type: "p",
          text: "**Fibrogênese.** O **TGF-β** é a citocina mais importante para síntese e depósito de conjuntivo no tecido de granulação. Ele: (1) chama e multiplica fibroblastos; (2) aumenta colágeno e fibronectina; (3) **diminui a degradação** da MEC ao inibir metaloproteinases e induzir TIMPs. PDGF e FGF colaboram. Miofibroblastos (fibroblastos com actina de músculo liso) **contraem** a ferida.",
        },
        {
          type: "callout",
          tone: "clinica",
          title: "Vitamina C e escorbuto",
          text: "A hidroxilação da prolina e da lisina do colágeno — passo obrigatório para a hélice estável e para as ligações cruzadas — **depende de vitamina C**. No escorbuto as feridas **não cicatrizam**, dentes amolecem, há sangramento gengival e hematomas. Em prova: cicatrização ruim + dieta sem frutas/vegetais = vitamina C.",
        },
        {
          type: "p",
          text: "Outros cofatores: **zinco** (metaloproteinases), **cobre**, proteína e energia adequados, oxigênio tecidual. A maturação troca colágeno III (jovem, da granulação) por colágeno I (resistente).",
        },
      ],
    },
    {
      id: "fatores",
      title: "O que atrasa ou desvia a cicatrização",
      blocks: [
        {
          type: "table",
          caption: "Fatores locais versus sistêmicos",
          headers: ["Locais (no leito da ferida)", "Sistêmicos (no paciente)"],
          rows: [
            ["Infecção persistente", "Idade avançada"],
            ["Corpo estranho (lasca, sutura, pedra) — enquanto estiver lá, inflama e não fecha", "Desnutrição (proteína, vit. C, zinco)"],
            ["Isquemia / hipóxia, radiação", "Diabetes mellitus (microvasos, imunidade)"],
            ["Necrose, hematoma", "Corticoides (inibem TGF-β e macrófagos)"],
            ["Tensão excessiva nas bordas; obesidade (pele sob tração)", "Doenças crônicas, neoplasias, quimioterapia"],
          ],
        },
        {
          type: "p",
          text: "Regra prática: **primeiro tire o que não deveria estar lá** (corpo estranho, pus, tecido morto, tensão), depois ofereça o que falta (sangue, oxigênio, nutriente, controle glicêmico).",
        },
      ],
    },
    {
      id: "complicacoes-cic",
      title: "Complicações da cicatrização",
      blocks: [
        {
          type: "p",
          text: "Além da deiscência, da infecção e da hérnia incisional, duas lesões de **excesso de colágeno** caem em prova:",
        },
        {
          type: "table",
          caption: "Cicatriz hipertrófica versus queloide",
          headers: ["", "Hipertrófica", "Queloide"],
          rows: [
            ["Limites", "Respeita a área da ferida", "Ultrapassa as bordas (aspecto tumoral)"],
            ["Evolução", "Pode **regredir** em meses a anos", "Não regride; recidiva após ressecção isolada"],
            ["Predileção", "Qualquer pessoa; áreas de tensão", "Predomínio em pele negra; lóbulo da orelha, pré-esterno, ombro"],
            ["Histologia", "Colágeno mais organizado", "Feixes hialinos grossos de colágeno, poucos anexos"],
            ["Tratamento", "Corticoide intralesional, pressão, laser; muitas vezes observa", "Corticoide, silicone, crioterapia, cirurgia **associada** a adjuvante (senão volta)"],
          ],
        },
        {
          type: "figures",
          figures: [
            {
              src: "/figures/regen_p5_img1.jpg",
              alt: "Queloide clínico e histologia com feixes espessos de colágeno.",
              caption:
                "Figura 4.9 — Queloide. Massa que excede a cicatriz original; à direita, colágeno hialino denso.",
            },
            {
              src: "/figures/regen_p5_img2.jpg",
              alt: "Queloide no lóbulo da orelha após piercing.",
              caption:
                "Figura 4.10 — Queloide de lóbulo — sítio clássico após piercing.",
            },
          ],
        },
        {
          type: "p",
          text: "No **miocárdio**, a cicatriz do infarto é o desfecho esperado (tecido permanente): faixa branca no ventrículo esquerdo, ápice e músculos papilares, substituindo o músculo perdido. Não é “complicação” no sentido de queloide — é o único reparo disponível, com o custo da função.",
        },
      ],
    },
    {
      id: "avancos",
      title: "Avanços terapêuticos (visão panorâmica)",
      blocks: [
        {
          type: "ul",
          items: [
            "**Células-tronco** — potencial de regenerar tecidos com pouca reserva proliferativa; ainda em translação clínica seletiva.",
            "**Fatores de crescimento** (PDGF, VEGF, EGF) em géis e curativos — estimulam proliferação e angiogênese em úlceras crônicas.",
            "**Engenharia de tecidos** — scaffolds biodegradáveis que oferecem arquitetura tridimensional para as células do hospedeiro.",
            "**Matriz dérmica acelular** — remove células do doador, preserva o estroma para guiar a regeneração (queimados, feridas complexas).",
          ],
        },
        {
          type: "callout",
          tone: "memo",
          title: "Fechando a apostila",
          text: "Leucócito chega → inflamação aguda tenta resolver → se não resolve, cronifica e/ou granuloma → o reparo ou **regenera** (matriz viva, célula capaz) ou **fibrosa** (TGF-β, cicatriz). Quase toda a patologia geral deste bloco cabe nessa frase.",
        },
      ],
    },
  ],
};
