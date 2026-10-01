import type { Chapter } from "./types";

export const capitulo2: Chapter = {
  slug: "inflamacao-aguda",
  number: "02",
  title: "Inflamação aguda",
  subtitle: "Resposta imediata a infecção e a lesão",
  readingMin: 32,
  date: "11/08/2026",
  sources: "Robbins & Cotran · aula",
  objectives: [
    "Definir inflamação e distinguir as formas aguda e crônica.",
    "Explicar a sequência: reconhecimento → mediadores → alteração vascular → recrutamento → eliminação → reparo.",
    "Relacionar os cinco sinais cardinais aos mecanismos vasculares e nervosos.",
    "Diferenciar transudato de exsudato e classificar os tipos de exsudato.",
    "Reconhecer os padrões morfológicos (abscesso, flegmão, empiema, úlcera, pseudomembrana, catarro) e os desfechos da inflamação aguda.",
  ],
  sections: [
    {
      id: "conceito",
      title: "Conceito e por que isso importa",
      blocks: [
        {
          type: "p",
          text: "Inflamação é a resposta do tecido vascularizado a infecções e a lesões. Recruta **células e moléculas de defesa** da circulação para o local em que são necessárias, com o fim de **eliminar o agente** e o tecido morto e, em seguida, preparar o reparo. É um processo **fisiológico** — sem ele não há cicatrização nem contenção de infecção. Quando desregulado, vira doença (sepse, autoimunidade, aterosclerose).",
        },
        {
          type: "p",
          text: "O sufixo **-ite** nomeia o órgão inflamado: apendicite, amigdalite, miocardite, artrite. O estímulo pode ser **microrganismo, tecido necrótico, trauma, químico ou imunológico**.",
        },
        {
          type: "callout",
          tone: "memo",
          title: "Uma frase de Robbins para gravar",
          text: "A inflamação serve para **destruir, diluir e isolar** o agente lesivo, e para **preparar o terreno** para a cicatrização. Os mesmos mecanismos que protegem também **podem lesar** o hospedeiro.",
        },
      ],
    },
    {
      id: "classificacao",
      title: "Como se classifica",
      blocks: [
        {
          type: "table",
          caption: "Aguda versus crônica — o esqueleto da disciplina",
          headers: ["", "Aguda", "Crônica"],
          rows: [
            ["Tempo", "Minutos a poucos dias", "Semanas, meses ou anos"],
            ["Célula dominante", "Neutrófilo", "Macrófago + linfócito"],
            ["Vasos", "Dilatação, permeabilidade, exsudato", "Angiogênese, às vezes fibrose"],
            ["Tecido", "Edema, pus, necrose liquefativa", "Tecido de granulação, fibrose, granuloma"],
            ["Desfecho", "Resolução, abscesso, cicatriz ou cronificação", "Cicatriz, perda funcional, persistência"],
          ],
        },
        {
          type: "ul",
          items: [
            "**Inespecífica** — o padrão histológico não denuncia o agente (a maioria das inflamações).",
            "**Granulomatosa** — padrão específico de crônica em que macrófagos se organizam em granuloma porque o invasor **não é erradicado** (tuberculose, corpo estranho).",
          ],
        },
        {
          type: "p",
          text: "A aguda **evolui para crônica** quando o estímulo persiste ou a resolução falha.",
        },
      ],
    },
    {
      id: "sequencia",
      title: "A sequência dos eventos",
      blocks: [
        {
          type: "p",
          text: "Células sentinela do tecido — **macrófago, célula dendrítica, mastócito** — reconhecem PAMPs/DAMPs (TLRs, inflamassoma). Liberam **aminas vasoativas e citocinas**. A microcirculação dilata e fica permeável; leucócitos (primeiro **neutrófilos**, depois **monócitos**) são recrutados; o edema se forma; o agente e o tecido morto são eliminados. Citocinas e fatores de crescimento então conduzem à **resolução** ou ao **reparo** (fibroblastos + matriz).",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p1_img1.jpg",
            alt: "Fluxograma da inflamação: estímulo, reconhecimento, mediadores, vasodilatação, recrutamento, eliminação, resolução ou reparo.",
            caption:
              "Figura 2.1 — Reprodução das reações ao estímulo. Do reconhecimento pelas sentinelas até a resolução ou o reparo por fibroblastos e matriz extracelular.",
          },
        },
        {
          type: "p",
          text: "**Causas clássicas da aguda:** infecções (bactérias, vírus, fungos, parasitas); lesões físicas (corte, trauma, cirurgia, queimadura); agentes químicos (ácidos, inalantes corrosivos); necrose tecidual; reações imunológicas (hipersensibilidade).",
        },
        {
          type: "ul",
          items: [
            "Exsudação de líquido, proteínas e **neutrófilos**.",
            "Edema intersticial.",
            "Congestão vascular e **hiperemia** do tecido.",
          ],
        },
      ],
    },
    {
      id: "sinais",
      title: "Sinais cardinais",
      blocks: [
        {
          type: "p",
          text: "Celsus descreveu quatro; Virchow acrescentou o quinto. Todos saem da **fase vascular** e da irritação nervosa:",
        },
        {
          type: "table",
          caption: "Os cinco sinais e o mecanismo",
          headers: ["Sinal", "Nome clássico", "Mecanismo"],
          rows: [
            ["Rubor", "Vermelhidão", "Hiperemia arterial / congestão — vasos dilatados, sangue aparente na superfície"],
            ["Calor", "Aumento da temperatura local", "Hiperemia traz sangue central, mais quente, para a pele"],
            ["Tumor", "Edema", "Exsudato (líquido + proteínas + células) no interstício"],
            ["Dor", "Dolor", "Bradykinina, PGE₂ e pressão do edema sensibilizam nociceptores"],
            ["Perda de função", "Functio laesa", "Dor, edema e destruição tecidual impedem o órgão de trabalhar"],
          ],
        },
        {
          type: "p",
          text: "O **calor e o rubor** andam juntos: a saída de líquido deixa o sangue intravascular mais viscoso, o fluxo **lentifica** (estase), hemácias se acumulam (congestão) e o tecido fica vermelho e quente. A **dor** é química (mediadores) e mecânica (distensão). A **perda de função** aparece nos casos mais intensos — um tendão inflamado não desliza; um alvéolo cheio de exsudato não troca gás.",
        },
      ],
    },
    {
      id: "fase-vascular",
      title: "Fase vascular",
      blocks: [
        {
          type: "p",
          text: "Começa em **segundos a minutos**. Arteríolas dilatam (histamina, NO, prostaciclina), o leito capilar se abre, o fluxo aumenta (hiperemia). Em seguida a **permeabilidade** da microvasculatura sobe: as células endoteliais se contraem e abrem fendas, principalmente em **vênulas pós-capilares**. Plasma sai; no vaso sobra um sangue mais concentrado, mais lento — a **estase**, que favorece a marginação dos leucócitos.",
        },
        {
          type: "h3",
          id: "permeabilidade",
          text: "Cinco mecanismos de extravasamento",
        },
        {
          type: "ul",
          items: [
            "**Retração endotelial** (histamina, bradicinina, leucotrienos) — rápida, transitória, vênulas. É o mecanismo clássico da aguda imediata.",
            "**Lesão endotelial direta** — queimadura, infecção grave, sepse, toxinas. Imediata e sustentada; acomete arteríolas, capilares e vênulas.",
            "**Lesão leucócito-dependente** — ROS e proteases dos neutrófilos aderidos ao endotélio (dano colateral).",
            "**Aumento da transcitose** — canais venulares (VEGF); o líquido atravessa a célula endotelial.",
            "**Angiogênese** — vasos novos do tecido de granulação já nascem permeáveis.",
          ],
        },
        {
          type: "callout",
          tone: "prova",
          title: "Onde acontece a retração endotelial?",
          text: "Nas **vênulas pós-capilares**. Capilares participam mais da lesão direta e da angiogênese. Essa topografia cai em prova.",
        },
      ],
    },
    {
      id: "migracao-leuco",
      title: "Migração dos leucócitos",
      blocks: [
        {
          type: "p",
          text: "Depois da estase, os leucócitos marginam, rolam (selectinas), aderem (integrinas/ICAM-1), atravessam o endotélio (**diapedese**) e seguem o gradiente de quimioatraentes (**quimiotaxia**). No tecido, fagocitam. Nas primeiras 6–24 h predominam **neutrófilos**; em 24–48 h entram **monócitos**, que se tornam macrófagos — mais longevos e responsáveis pela limpeza e pelo reparo.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p2_img1.jpg",
            alt: "Leucócitos marginando, aderindo e atravessando o endotélio em direção ao tecido inflamado.",
            caption:
              "Figura 2.2 — Recrutamento leucocitário. Ativação endotelial, adesão estável e migração através da parede do vaso até o foco, onde ocorre a fagocitose.",
          },
        },
      ],
    },
    {
      id: "mediadores",
      title: "Mediadores químicos",
      blocks: [
        {
          type: "p",
          text: "Após deixar o vaso, o leucócito **não anda ao acaso**: os quimioatraentes ligam-se a receptores **acoplados à proteína G** e reorganizam o citoesqueleto. Os mediadores nascem de células ou do plasma (fígado).",
        },
        {
          type: "table",
          caption: "Mapa mínimo de mediadores (alta incidência)",
          headers: ["Mediador", "Origem", "Efeito principal"],
          rows: [
            ["Histamina", "Mastócito, basófilo, plaqueta", "Vasodilatação e permeabilidade (retração endotelial)"],
            ["Bradicinina", "Cininas plasmáticas", "Dor + permeabilidade"],
            ["NO", "Endotélio, macrófago", "Vasodilatação; também microbicida"],
            ["PGE₂ / PGI₂", "COX no endotélio e leucócitos", "Dor, febre (PGE₂), vasodilatação"],
            ["LTB₄", "Leucócitos (lipoxigenase)", "Quimiotaxia potente de neutrófilos"],
            ["C3a, C5a", "Complemento", "Anafilatoxinas; C5a é quimioatraente"],
            ["IL-1, TNF", "Macrófagos sentinela", "Ativam endotélio, febre, reação de fase aguda"],
            ["IL-8 (CXCL8)", "Macrófagos, endotélio", "Quimiocina de neutrófilos"],
            ["IL-6", "Macrófagos, fígado (via)", "PCR, fibrinogênio, SAA (fase aguda)"],
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p2_img2.jpg",
            alt: "Fontes celulares e hepáticas de mediadores da inflamação.",
            caption:
              "Figura 2.3 — Mediadores celulares (histamina, citocinas, eicosanoides, PAF) e plasmáticos (complemento, cininas, coagulação). O fígado produz as proteínas de fase aguda sob estímulo de IL-6.",
          },
        },
        {
          type: "callout",
          tone: "clinica",
          title: "Onde os anti-inflamatórios atuam",
          text: "AINEs bloqueiam a **COX** (menos PGE₂ → menos dor e febre). Glicocorticoides reprimem a **fosfolipase A₂** e a transcrição de citocinas (efeito mais amplo). Anti-histamínicos H1 bloqueiam o receptor da histamina. Anticorpos anti-TNF revolucionaram as crônicas (artrite, Crohn) — mas isso já é o capítulo seguinte.",
        },
      ],
    },
    {
      id: "exsudato",
      title: "Exsudato versus transudato",
      blocks: [
        {
          type: "p",
          text: "**Exsudação** é o escape de líquido, proteínas e células através de um vaso **com permeabilidade aumentada**. Pode acumular-se no interstício (edema inflamatório) ou em cavidade (derrame). **Transudato** é um ultrafiltrado do plasma por **desequilíbrio de Starling** (↑ pressão hidrostática ou ↓ oncótica), **sem** aumento da permeabilidade e em geral **sem inflamação**.",
        },
        {
          type: "table",
          caption: "Valores de referência (corrigidos em relação à tabela da aula)",
          headers: ["", "Plasma", "Transudato", "Exsudato"],
          rows: [
            ["Proteínas", "6–8 g/dL", "Baixa, em geral < 2,5–3 g/dL", "Alta, em geral > 3 g/dL"],
            ["Tipos de proteína", "Todas", "Predomínio de albumina", "Todas (inclui fibrinogênio, Ig, complemento)"],
            ["Fibrina", "No plasma, solúvel", "Não forma malha", "Sim — pode coagular"],
            ["Células", "Sangue total", "Muito poucas", "Inflamatórias (neutrófilos, etc.)"],
            ["LDH / gravidade específica", "—", "Baixas", "Altas"],
            ["Mecanismo", "—", "Starling (insuficiência cardíaca, hipoalbuminemia)", "Permeabilidade inflamatória"],
          ],
        },
        {
          type: "callout",
          tone: "atencao",
          title: "Erro comum na tabela de aula",
          text: "Algumas anotações trazem transudato como “0 a 15 g/dL”. Esse teto **não é fisiológico** (o próprio plasma tem ~7 g/dL). Memorize: transudato **pobre em proteína** (<3 g/dL); exsudato **rico** (>3 g/dL). Em derrame pleural usa-se o **critério de Light** (relação proteína líquido/soro >0,5, LDH líquido/soro >0,6 ou LDH acima de 2/3 do limite sérico = exsudato).",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p3_img2.jpg",
            alt: "Esquema comparando vaso saudável, transudato por pressão hidrostática e exsudato por vasodilatação e fendas endoteliais.",
            caption:
              "Figura 2.4 — Do vaso íntegro ao transudato (desequilíbrio de pressões, endotélio fechado) e ao exsudato (fendas endoteliais, proteínas e células saindo).",
          },
        },
        {
          type: "h3",
          id: "tipos-exsudato",
          text: "Tipos de exsudato",
        },
        {
          type: "ul",
          items: [
            "**Seroso** — aquoso, pouca proteína, poucas células. Típico de queimadura, bolha, pleurite viral. Aspecto de água de pedra.",
            "**Fibrinoso** — rico em fibrinogênio que polimeriza em malha (aspecto de “pão com manteiga” nas serosas). Pericardite fibrinosa do reumático; pleurite. A organização da fibrina pode gerar aderências.",
            "**Purulento (supurativo)** — rico em **neutrófilos**, debris e microrganismos: o **pus**. Associa-se à **necrose liquefativa**. Bactérias piogênicas (estafilococo, estreptococo).",
            "**Hemorrágico** — muitos eritrócitos. Meningococcemia, rickéttsias, infarto hemorrágico, infecções virais graves.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p3_img1.jpg",
            alt: "Quatro aspectos macroscópicos: seroso, fibrinoso, purulento e hemorrágico.",
            caption:
              "Figura 2.5 — Classificação visual do exsudato. Seroso (aquoso), fibrinoso (malha esbranquiçada em serosa), purulento (pus) e hemorrágico (sangue).",
          },
        },
      ],
    },
    {
      id: "padroes",
      title: "Padrões morfológicos da inflamação aguda",
      blocks: [
        {
          type: "h3",
          id: "abscesso",
          text: "Abscesso",
        },
        {
          type: "p",
          text: "Acúmulo **focal e delimitado** de pus em tecido sólido, cavidade criada por **necrose liquefativa** e circundada por uma “parede” de tecido inflamatório que depois fibrosa. Exemplo clássico: abscesso pulmonar ou hepático. Drena mal para a circulação; muitas vezes exige **drenagem** além de antibiótico.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p3_img3.jpg",
            alt: "Corte de pulmão com cavidade de abscesso de paredes definidas.",
            caption:
              "Figura 2.6 — Abscesso. Coleção localizada de pus em órgão sólido (aqui, pulmão), com cavidade de necrose liquefativa.",
          },
        },
        {
          type: "h3",
          id: "flegmao",
          text: "Flegmão (fleimão)",
        },
        {
          type: "p",
          text: "Inflamação **purulenta difusa e não delimitada**, que se espalha pelos planos frouxos do tecido (celulite grave). Não forma cavidade única. Típico de estreptococo em subcutâneo; a perna/pé da figura de aula é o exemplo clínico.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p3_img5.jpg",
            alt: "Membro inferior com inflamação purulenta difusa e edema.",
            caption:
              "Figura 2.7 — Flegmão. Pus se disseminando livremente, sem a cápsula de um abscesso.",
          },
        },
        {
          type: "h3",
          id: "empiema",
          text: "Empiema",
        },
        {
          type: "p",
          text: "Pus **dentro de uma cavidade anatômica pré-existente** — pleura, vesícula biliar, seio paranasal, apêndice. Não é o tecido que “cava” o buraco: o espaço já existia. Empiema pleural é complicação temida da pneumonia.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p4_img1.jpg",
            alt: "Esquema de empiema pleural: pus entre as pleuras visceral e parietal.",
            caption:
              "Figura 2.8 — Empiema. Coleção purulenta em cavidade preexistente (pleura).",
          },
        },
        {
          type: "callout",
          tone: "prova",
          title: "Abscesso × flegmão × empiema",
          text: "**Abscesso** = pus **focal** em tecido sólido (cria cavidade). **Flegmão** = pus **difuso**, sem parede. **Empiema** = pus em **cavidade que já existia**. Se cair “pleura”, pense empiema; se cair “pulmão com cavidade”, abscesso.",
        },
        {
          type: "h3",
          id: "ulcera",
          text: "Úlcera",
        },
        {
          type: "p",
          text: "Escavação da superfície de um órgão ou mucosa pela destruição do epitélio e, frequentemente, do tecido subjacente. Estômago (péptica), duodeno, pele (decúbito), mucosa oral. O fundo mostra exsudato, tecido de granulação e, nas crônicas, fibrose.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p4_img2.jpg",
            alt: "Úlcera de mucosa com perda epitelial e fundo inflamado.",
            caption:
              "Figura 2.9 — Úlcera. Perda localizada de epitélio com escavação da superfície.",
          },
        },
        {
          type: "h3",
          id: "pseudo",
          text: "Inflamação pseudomembranosa",
        },
        {
          type: "p",
          text: "Placa ou **falsa membrana** sobre a mucosa, composta de **fibrina + epitélio necrótico + neutrófilos + bactérias**. Clássica da **colite por Clostridioides difficile** (após antibióticos de amplo espectro) e da **difteria** (membrana faríngea). A associação da aula entre exsudato fibrinoso e “uso indiscriminado de antibiótico” vale **especificamente** para a colite pseudomembranosa, não para toda inflamação fibrinosa de serosa.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p4_img3.jpg",
            alt: "Mucosa colônica recoberta por placas amareladas de pseudomembrana.",
            caption:
              "Figura 2.10 — Colite pseudomembranosa. Placas amarelo-esverdeadas de fibrina, necrose e neutrófilos aderidas à mucosa.",
          },
        },
        {
          type: "h3",
          id: "catarral",
          text: "Inflamação catarral",
        },
        {
          type: "p",
          text: "Exsudato **mucoso abundante**, produzido por glândulas da mucosa. Predomina no **trato respiratório** (resfriado comum, rinite, bronquite aguda). O “catarros” do dia a dia é este padrão.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/aguda_p4_img4.jpg",
            alt: "Criança com coriza abundante, ilustrando inflamação catarral.",
            caption:
              "Figura 2.11 — Padrão catarral. Produção intensa de muco no revestimento respiratório.",
          },
        },
      ],
    },
    {
      id: "evolucao",
      title: "Evolução, complicações, diagnóstico e tratamento",
      blocks: [
        {
          type: "p",
          text: "Quatro destinos possíveis da inflamação aguda:",
        },
        {
          type: "ol",
          items: [
            "**Resolução completa** — o estímulo some, o exsudato é reabsorvido, o tecido lábile/estável reconstitui a arquitetura. Ideal.",
            "**Cicatriz / fibrose** — houve destruição de estroma ou o tecido é permanente (miocárdio). Reparo por preenchimento.",
            "**Abscesso** — supuração delimitada; pode fistulizar ou persistir.",
            "**Cronicidade** — o agente permanece (úlcera péptica, infecção persistente, autoimunidade).",
          ],
        },
        {
          type: "h3",
          id: "complicacoes",
          text: "Complicações",
        },
        {
          type: "ul",
          items: [
            "**Dano tecidual** direto por proteases e ROS — base de doenças crônicas se reiterado.",
            "**Cicatrizes e aderências** — fibrose excessiva, restrição funcional (pericárdio, peritônio, válvulas).",
            "**Síndrome sistêmica / sepse** — quando mediadores (TNF, IL-1, IL-6) vazam para a circulação: febre, PCR/VHS altos, leucocitose, choque, disfunção de órgãos.",
          ],
        },
        {
          type: "h3",
          id: "dx-tx",
          text: "Diagnóstico e tratamento (visão de curso)",
        },
        {
          type: "ul",
          items: [
            "**Laboratório.** Hemograma (leucocitose com desvio à esquerda na bacteriana), **VHS** elevado, **PCR** alta — proteínas de fase aguda. Procalcitonina ajuda a separar infecção bacteriana.",
            "**Imagem.** Radiografia, ultrassom, TC, RM — localizam coleções (abscesso, empiema) e extensão.",
            "**Exame físico.** Calor, rubor, tumor, dor, flutuação (abscesso), limitação funcional.",
            "**Tratamento.** Tratar a causa (antibiótico, drenagem, retirada do corpo estranho). AINEs e gelo aliviam sintomas. Fisioterapia na recuperação. Cirurgia quando há tecido desvitalizado ou coleção que não drena.",
          ],
        },
        {
          type: "callout",
          tone: "memo",
          title: "Fechando o capítulo",
          text: "Aguda = **rápida, vascular, neutrofílica, exsudativa**. Se você souber (1) os sinais cardinais, (2) transudato × exsudato, (3) abscesso × flegmão × empiema e (4) os quatro destinos, já responde a maior parte das questões dessa aula.",
        },
      ],
    },
  ],
};
