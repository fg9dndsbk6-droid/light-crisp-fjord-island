import type { Chapter } from "./types";

export const capitulo3: Chapter = {
  slug: "inflamacao-cronica",
  number: "03",
  title: "Inflamação crônica",
  subtitle: "Persistência, granuloma e fibrose",
  readingMin: 30,
  date: "18/08/2026",
  sources: "Aula · Robbins & Cotran",
  objectives: [
    "Listar causas e células da inflamação crônica.",
    "Explicar o ciclo de ativação mútua entre macrófago e linfócito T (IL-12, IFN-γ, TNF, IL-1).",
    "Descrever o tecido de granulação e o papel de TGF-β e PDGF na fibrose.",
    "Diferenciar granuloma epitelióide (imunológico) de granuloma de corpo estranho.",
    "Reconhecer células de Langhans, necrose caseosa e exemplos clínicos (TB, sarcoidose, Crohn, sutura).",
  ],
  sections: [
    {
      id: "conceito-cronica",
      title: "O que torna uma inflamação crônica",
      blocks: [
        {
          type: "p",
          text: "Inflamação crônica é uma resposta de **duração prolongada** (semanas a anos) em que **inflamação, lesão tecidual e tentativa de reparo convivem no mesmo campo**. Surge por infecção persistente (micobactéria, vírus, fungos, parasitas de erradicação difícil), por exposição contínua a tóxico (sílica, colesterol), por autoimunidade, ou simplesmente porque a **aguda não se resolveu**.",
        },
        {
          type: "p",
          text: "Três eixos operam juntos: (1) **marcadores genéticos** — transcrição persistente de genes inflamatórios; (2) **células** — macrófagos, linfócitos T e B, às vezes plasmócitos, eosinófilos, mastócitos; (3) **mediadores** — citocinas e quimiocinas que mantêm o recrutamento.",
        },
        {
          type: "h3",
          id: "histo-cronica",
          text: "Histologia em uma frase",
        },
        {
          type: "p",
          text: "Infiltrado de **macrófagos e linfócitos**, tecido de **granulação** (vasos novos + fibroblastos), e, com o tempo, **depósito excessivo de matriz** — a cicatriz que paga a conta da persistência com perda funcional.",
        },
        {
          type: "ul",
          items: [
            "**Neovascularização** — capilares novos para nutrir o reparo.",
            "**Fibrose** — colágeno demais no lugar do parênquima.",
            "**Classificação.** Específica (granulomatosa) versus inespecífica (o agente não se denuncia no H&E).",
          ],
        },
      ],
    },
    {
      id: "macrofagos",
      title: "O macrófago é a célula central",
      blocks: [
        {
          type: "p",
          text: "Monócitos sanguíneos originam a maior parte dos **macrófagos** do foco crônico. No tecido, a célula **aumenta de tamanho**, multiplica lisossomos, acelera o metabolismo e ganha capacidade fagocítica — vira macrófago ativado. A ativação é deflagrada por **linfócitos (IFN-γ)**, **endotoxinas (LPS)** e componentes da matriz. Sem um microambiente favorável, o monócito permanece “quieto”.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/cronica_p1_img1.jpg",
            alt: "Monócito saindo da medula, circulando e tornando-se macrófago ativado no tecido inflamado.",
            caption:
              "Figura 3.1 — Do monócito medular ao macrófago ativado. Aumento de tamanho, lisossomos e capacidade microbicida. TNF e outras citocinas pró-inflamatórias sustentam o ciclo.",
          },
        },
        {
          type: "p",
          text: "Há dois polos didáticos de ativação (na vida real é um espectro): **M1 (clássico)** — IFN-γ + LPS, microbicida, gera ROS/NO, secreta TNF, IL-1, IL-12, lesa tecido; **M2 (alternativo)** — IL-4/IL-13, repara, secreta TGF-β e IL-10, promove angiogênese e fibrose. A crônica oscila entre os dois: nunca termina de matar, nunca termina de cicatrizar.",
        },
      ],
    },
    {
      id: "ciclo-t",
      title: "O ciclo macrófago ↔ linfócito T",
      blocks: [
        {
          type: "p",
          text: "A cronicidade se autoalimenta. O macrófago apresenta antígeno ao T CD4 e secreta **IL-12** (e IL-18), empurrando o T para o perfil **Th1**. O Th1 devolve **IFN-γ**, o ativador clássico mais potente do macrófago, e também **TNF**, que recruta mais células. O macrófago, agora superativado, libera **TNF e IL-1**, continua apresentando antígeno, e o círculo se fecha. Enquanto o antígeno não some, o fogo não apaga.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/cronica_p2_img1.jpg",
            alt: "Diagrama da ativação recíproca entre linfócito T e macrófago via IL-12, IFN-γ, TNF e IL-1.",
            caption:
              "Figura 3.2 — Ativação mútua. Macrófago —IL-12→ T; T —IFN-γ→ macrófago. TNF e IL-1 sustentam o recrutamento e o dano tecidual da inflamação crônica.",
          },
        },
        {
          type: "ul",
          items: [
            "**Linfócito T** — mantém e amplifica o processo; CD8 lesa células infectadas; CD4 orquestra.",
            "**Linfócito B / plasmócito** — anticorpos (úteis em alguns focos; em outros, complexos imunes perpetuam a lesão, como no lúpus).",
            "**Macrófago** — fagocita, apresenta, lesa e, no polo M2, fibrosa.",
          ],
        },
        {
          type: "callout",
          tone: "prova",
          title: "A citocina que “liga” o macrófago clássico",
          text: "**IFN-γ**. Se a questão pede o mediador do T que potencializa o macrófago no granuloma da tuberculose, a resposta é interferon-gama. IL-12 é o que o macrófago usa para induzir o Th1. TNF mantém a estrutura do granuloma (anti-TNF pode **disseminar TB latente**).",
        },
      ],
    },
    {
      id: "histo-exemplos",
      title: "Como isso se parece na lâmina",
      blocks: [
        {
          type: "p",
          text: "O infiltrado crônico é **mononuclear** (macrófagos, linfócitos, plasmócitos), não o mar de neutrófilos da aguda. Em mucosas, ocupa a lâmina própria. Vasos novos e fibroblastos denunciam que o reparo já começou — mesmo com o agente ainda presente.",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/cronica_p2_img2.jpg",
            alt: "Quatro fotomicrografias de inflamação crônica em diferentes órgãos.",
            caption:
              "Figura 3.3 — Padrões histológicos. (1, 3) infiltrados mononucleares densos; (2) mucosa respiratória (bronquite/sinusite crônica); (4) mucosa gástrica com células inflamatórias na lâmina própria (gastrite crônica).",
          },
        },
      ],
    },
    {
      id: "reparo-fibrose",
      title: "Reparo na crônica: granulação e fibrose",
      blocks: [
        {
          type: "p",
          text: "Enquanto a inflamação persiste, o tecido tenta fechar o buraco. Quatro tempos didáticos:",
        },
        {
          type: "ol",
          items: [
            "**Proliferação** — fibroblastos e células endoteliais entram em ciclo.",
            "**Tecido de granulação** — tecido jovem, vermelho e granuloso a olho nu: capilares novos, fibroblastos ativos, leucócitos residuais. É o “canteiro de obras”.",
            "**Deposição de matriz** — colágeno e proteoglicanos estruturam o defeito. **TGF-β** e **PDGF** (em grande parte dos macrófagos M2) são os grandes indutores de fibrose. TGF-β estimula colágeno e **inibe metaloproteinases** (menos degradação).",
            "**Remodelamento** — o colágeno se reorganiza, a cicatriz retrai, o parênquima perdido não volta. Resultado: **cicatriz + perda funcional**.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/figures/cronica_p3_img1.jpg",
            alt: "Fases do reparo crônico da proliferação celular até a cicatriz com perda funcional, com destaque para TGF-β e PDGF.",
            caption:
              "Figura 3.4 — Da proliferação ao desfecho fibrótico. TGF-β e PDGF dos macrófagos M2 são os motores da fibrose.",
          },
        },
        {
          type: "h3",
          id: "doencas",
          text: "Doenças-modelo",
        },
        {
          type: "ul",
          items: [
            "**Artrite reumatoide** — autoimune; sinóvia vira pannus (tecido de granulação) que erode cartilagem e osso.",
            "**Asma crônica** — inflamação persistente das vias aéreas (eosinófilos, Th2) com hiper-reatividade e broncoconstrição; remodelamento (músculo, muco, fibrose subepitelial).",
            "**Doença de Crohn** — inflamação transmural, descontínua, do tubo digestivo; granulomas não caseosos em uma fração dos casos.",
          ],
        },
        {
          type: "p",
          text: "**Manejo.** AINEs para sintoma; **corticosteroides** e **imunossupressores / biológicos** (anti-TNF, anti-IL-6, etc.) para a doença de fundo; fisioterapia e mudanças de estilo de vida (exercício, dieta) como adjuvantes. Tratar a causa quando ela for removível (infecção, tóxico).",
        },
      ],
    },
    {
      id: "granulomatosa",
      title: "Inflamação granulomatosa",
      blocks: [
        {
          type: "p",
          text: "Padrão de crônica definido por **coleções organizadas de macrófagos ativados** (células epitelióides), com ou sem **células gigantes multinucleadas**, cercadas por linfócitos. É a estratégia do sistema imune quando o agente é **difícil de digerir**: constrói um “muro” em volta. Aparece em infecções (tuberculose, hanseníase, fungos, schistosoma), em sarcoidose, na reação a corpo estranho (fio de sutura, talco, silicone, tinta de tatuagem) e em algumas idiopáticas (Crohn).",
        },
        {
          type: "figure",
          figure: {
            src: "/figures/cronica_p4_img1.jpg",
            alt: "Granuloma na pleura de paciente com tuberculose.",
            caption:
              "Figura 3.5 — Granuloma pleural em tuberculose. A TB pode semear granulomas em praticamente qualquer órgão.",
          },
        },
        {
          type: "p",
          text: "A **morfologia varia**: uns têm **necrose central** (clássico da TB — caseosa, macroscopia de queijo cottage); outros são **não necrosantes** (sarcoidose, corpo estranho, muitos Crohn). Há pouca vascularização no centro — o granuloma é uma estrutura densa de macrófagos ao redor do agente.",
        },
        {
          type: "h3",
          id: "tipo-epiteloide",
          text: "Granuloma epitelióide (imunológico)",
        },
        {
          type: "p",
          text: "Desencadeado por resposta **Th1**. Macrófagos sob IFN-γ tornam-se **células epitelióides** (citoplasma eosinófilo abundante, pouco fagocítico, muito secretor) e fundem-se em **células gigantes de Langhans** — núcleos alinhados na **periferia**, em ferradura. Linfócitos formam um halo. **Necrose caseosa** central é típica de TB e de algumas micoses profundas. Exemplos: **tuberculose, hanseníase, sarcoidose, micoses profundas**.",
        },
        {
          type: "figures",
          figures: [
            {
              src: "/figures/cronica_p4_img2.jpg",
              alt: "Granuloma tuberculoso com necrose central, células epitelióides e gigantes de Langhans.",
              caption:
                "Figura 3.6 — Granuloma tuberculoso típico: necrose central circundada por células gigantes de Langhans, epitelióides e linfócitos.",
            },
            {
              src: "/figures/cronica_p4_img3.jpg",
              alt: "Célula gigante de Langhans com núcleos em ferradura na periferia.",
              caption:
                "Figura 3.7 — Célula gigante de Langhans. Núcleos organizados na periferia do citoplasma (ferradura).",
            },
          ],
        },
        {
          type: "h3",
          id: "tipo-corpo",
          text: "Granuloma de corpo estranho",
        },
        {
          type: "p",
          text: "Provocado por material **inerte** que **não ativa de forma clássica** o linfócito T (fio de algodão/sutura, talco, amido de luva, silicone, pigmento de tatuagem). Macrófagos envolvem a partícula; as células gigantes têm **núcleos desorganizados**, espalhados pelo citoplasma (gigante de corpo estranho). **Não há necrose central**. Em luz polarizada, talco e sutura costumam brilhar.",
        },
        {
          type: "figures",
          figures: [
            {
              src: "/figures/cronica_p5_img1.jpg",
              alt: "Granuloma de corpo estranho com material acellular envolvido por macrófagos.",
              caption:
                "Figura 3.8 — Granuloma de corpo estranho. Material inerte no centro, macrófagos e gigantes sem necrose caseosa.",
            },
            {
              src: "/figures/cronica_p5_img2.jpg",
              alt: "Outro campo histológico de reação a corpo estranho.",
              caption:
                "Figura 3.9 — Reação a corpo estranho. Núcleos das gigantes distribuídos de modo irregular no citoplasma.",
            },
          ],
        },
        {
          type: "table",
          caption: "Os dois granulomas lado a lado",
          headers: ["", "Epitelióide / imunológico", "Corpo estranho"],
          rows: [
            ["Estímulo", "Antígeno persistente (TB, fungo, sarcoide)", "Partícula inerte"],
            ["T", "Th1 essencial (IFN-γ)", "Pouco ou nenhum"],
            ["Gigante", "Langhans (núcleos periféricos)", "Corpo estranho (núcleos bagunçados)"],
            ["Necrose", "Caseosa frequente (TB)", "Ausente"],
            ["Exemplos", "TB, hanseníase, sarcoidose, micoses", "Sutura, talco, silicone, tatuagem"],
          ],
        },
        {
          type: "callout",
          tone: "atencao",
          title: "Sarcoidose e Crohn",
          text: "Têm granulomas **não caseosos** e causa ainda parcialmente desconhecida. Na sarcoidose, granulomas “nus” (pouco halo linfocítico) em pulmão e linfonodo; no Crohn, granulomas na parede intestinal. Sempre **excluir TB** antes de imunossuprimir.",
        },
      ],
    },
    {
      id: "sintese-3",
      title: "Síntese do capítulo",
      blocks: [
        {
          type: "ul",
          items: [
            "Crônica = **mononucleares + reparo simultâneo**. Célula-chave: macrófago. Motor: ciclo IL-12 / IFN-γ / TNF.",
            "TGF-β e PDGF = fibrose. Tecido de granulação é o intermediário vascularizado.",
            "Granuloma é muro de macrófagos epitelióides. Langhans + caseum = pense TB. Gigante bagunçada sem necrose = corpo estranho.",
            "Anti-TNF desmonta granuloma — rastrear tuberculose latente.",
          ],
        },
      ],
    },
  ],
};
