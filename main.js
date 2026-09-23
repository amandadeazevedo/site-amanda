/* ===== Cases do portfólio =====
   Pra adicionar um case novo, copie um bloco e ajuste os campos.
   "categorias" define em quais filtros ele aparece: social, marca, redacao, comunicacao.
   "resultados" é opcional. Deixe [] se ainda não tiver números.
*/
const CASES = [
  {
    id: 'smartsave',
    cliente: 'SmartSave',
    segmento: 'Mercado financeiro · Fundos imobiliários',
    tipo: 'Social media e tom de voz',
    categorias: ['social', 'marca'],
    destaque: true,
    capa: 'case-mercado2.webp',
    imagens: ['case-mercado2.webp', 'case-linkedin.webp'],
    resumo: 'Uma startup de fundos imobiliários querendo falar de investimento com quem nunca investiu.',
    contexto: 'A SmartSave nasceu pra democratizar o investimento em fundos imobiliários. O desafio era explicar um assunto técnico sem assustar quem está começando e sem perder a confiança de quem já entende do mercado.',
    fiz: 'Criei conteúdo pra Instagram e LinkedIn, cuidei da manutenção do tom de voz da marca e desdobrei esse discurso em peças educativas, institucionais e de marca.',
    estrategia: 'Transformar tema técnico em conversa. A linguagem ficou mais clara e reconhecível em todos os pontos de contato, com a educação financeira puxando a proximidade e o rigor sustentando a confiança.',
    entregas: ['Planejamento e criação de conteúdo', 'Guia e manutenção do tom de voz', 'Posts educativos e institucionais', 'Conteúdo de LinkedIn pra lideranças'],
    resultados: []
  },
  {
    id: 'park',
    cliente: 'ParkShopping Jacarepaguá',
    segmento: 'Varejo · Shopping center',
    tipo: 'Direção de conteúdo pro TikTok',
    categorias: ['social'],
    destaque: true,
    capa: 'case-shopping.webp',
    imagens: ['case-shopping.webp'],
    resumo: 'Como fazer um shopping ser assunto no TikTok sem virar vitrine.',
    contexto: 'O Park queria fortalecer a presença no TikTok e se aproximar do público que vive o shopping no dia a dia.',
    fiz: 'Criei o direcionamento de conteúdo da conta, com pesquisa de referências, leitura de tendências e definição de pautas pensadas pra engajamento e conexão com o público.',
    estrategia: 'Sair do óbvio. Em vez de mostrar o shopping, os conteúdos partem da experiência real de quem vive o Park, usando trends e assuntos do momento pra colocar a marca na conversa que o público já está tendo.',
    entregas: ['Direcionamento de conteúdo', 'Pesquisa de referências e tendências', 'Pautas e roteiros pra vídeo curto', 'Interação com a comunidade'],
    resultados: []
  },
  {
    id: 'valore',
    cliente: 'Valore',
    segmento: 'Mercado de capitais',
    tipo: 'Social media e posicionamento',
    categorias: ['social', 'marca'],
    destaque: true,
    capa: 'case-mercado1.webp',
    imagens: ['case-mercado1.webp'],
    resumo: 'Construir reputação pra uma empresa que estava chegando no mercado.',
    contexto: 'A Valore estava em fase de entrada e posicionamento no mercado de capitais. Precisava ser reconhecida, ganhar autoridade e consolidar uma reputação institucional num setor que vive de confiança.',
    fiz: 'Desenvolvi conteúdos estratégicos pras redes, com linha editorial, textos e direção das peças.',
    estrategia: 'Autoridade com personalidade. Conteúdo que mostra repertório e visão de mercado com uma estética própria, pra marca ser lembrada além do nome.',
    entregas: ['Linha editorial', 'Copy pra posts e carrosséis', 'Conteúdo institucional'],
    resultados: []
  },
  {
    id: 'linkedin',
    cliente: 'Empresas e lideranças',
    segmento: 'Mercado financeiro e imobiliário',
    tipo: 'Estratégia de LinkedIn',
    categorias: ['marca', 'redacao'],
    capa: 'case-linkedin.webp',
    imagens: ['case-linkedin.webp'],
    resumo: 'Traduzir a visão de líderes e empresas em textos que parecem ter sido escritos por eles.',
    contexto: 'Empresas e executivos do mercado financeiro e imobiliário queriam construir autoridade no LinkedIn sem soar como mais um post motivacional da timeline.',
    fiz: 'Defini temas, desenvolvi narrativas e adaptei a linguagem pra cada perfil, institucional ou pessoal, cuidando da clareza e do valor de cada texto.',
    estrategia: 'Cada porta-voz tem um jeito de falar. O trabalho começa entendendo esse jeito e termina num texto que equilibra profundidade, clareza e identidade.',
    entregas: ['Definição de pautas', 'Narrativas por porta-voz', 'Textos pra perfis pessoais e institucionais'],
    resultados: []
  },
  {
    id: 'comunicacao-interna',
    cliente: 'Escritório de advocacia',
    segmento: 'Jurídico',
    tipo: 'Comunicação interna',
    categorias: ['comunicacao', 'redacao'],
    capa: 'case-comunicacao.webp',
    imagens: ['case-comunicacao.webp'],
    resumo: 'Newsletter, campanha e convite que as pessoas leem de verdade.',
    contexto: 'Um escritório de advocacia precisava organizar a comunicação com os colaboradores e dar mais vida às ações internas e datas sazonais.',
    fiz: 'Escrevi textos pra newsletters, convites, cartilhas, campanhas sazonais e peças de apoio às ações internas.',
    estrategia: 'Clareza primeiro. Mensagens organizadas, fáceis de ler e com a linguagem ajustada a cada formato, pra informação virar vínculo com quem trabalha ali.',
    entregas: ['Newsletters internas', 'Campanhas sazonais', 'Convites e cartilhas', 'Endomarketing'],
    resultados: []
  },
  {
    id: 'blog',
    cliente: 'Viva o Condomínio',
    segmento: 'Condomínios · Serviços',
    tipo: 'Redação pra blog, SEO e GEO',
    categorias: ['redacao'],
    capa: 'case-blog.webp',
    imagens: ['case-blog.webp'],
    resumo: 'Artigos reescritos pra serem encontrados e lidos até o fim.',
    contexto: 'Os artigos precisavam performar melhor na busca orgânica e nas respostas de IA, com leitura mais fácil e sem perder autoridade.',
    fiz: 'Produzi, revisei e reestruturei artigos com foco em SEO, GEO, escaneabilidade e intenção de busca.',
    estrategia: 'Escrever pra quem lê e pra quem busca ao mesmo tempo. Estrutura clara, linguagem próxima do público e cada artigo respondendo a uma pergunta real.',
    entregas: ['Artigos novos', 'Revisão e reestruturação de posts', 'Otimização pra SEO e GEO'],
    resultados: []
  },
  {
    id: 'autoral',
    cliente: 'Textos autorais',
    segmento: 'Cultura, artes e comunicação',
    tipo: 'Escrita autoral',
    categorias: ['redacao'],
    capa: 'case-autoral.webp',
    imagens: ['case-autoral.webp'],
    resumo: 'Onde eu escrevo sobre o que me tira o sono, de Stanislavski a dramaturgia brasileira.',
    contexto: 'Escrever sobre o que me interessa é meu treino. É onde testo formatos, construo repertório e afino argumento.',
    fiz: 'Textos sobre comunicação, cultura, artes, comportamento e teatro, com pesquisa e opinião.',
    estrategia: 'Todo texto defende um ponto e explica o porquê. Se não provoca uma reflexão, volta pra gaveta.',
    entregas: ['Artigos', 'Ensaios curtos', 'Conteúdo pra redes'],
    resultados: []
  },
  {
    id: 'site',
    cliente: 'Coffee Latte',
    segmento: 'Projeto acadêmico · Cafeteria',
    tipo: 'Site e identidade verbal',
    categorias: ['marca', 'redacao'],
    capa: 'case-site.webp',
    imagens: ['case-site.webp'],
    resumo: 'Uma marca inteira inventada do zero, da arquitetura do site à última frase.',
    contexto: 'Projeto acadêmico pra criar o site de uma cafeteria fictícia, do planejamento à redação.',
    fiz: 'Planejei a estrutura e a arquitetura de informação, criei a identidade verbal e escrevi todos os textos do site.',
    estrategia: 'Uma marca fictícia com voz de marca real. Cada página tem um objetivo e um texto que conduz a pessoa até ele.',
    entregas: ['Arquitetura de informação', 'Identidade verbal', 'Redação de todas as páginas'],
    resultados: []
  },
  {
    id: 'academico',
    cliente: 'Produção acadêmica',
    segmento: 'Comunicação',
    tipo: 'Pesquisa e escrita',
    categorias: ['redacao', 'comunicacao'],
    capa: 'case-academico.webp',
    imagens: ['case-academico.webp'],
    resumo: 'Pesquisa em comunicação com artigo publicado em revista científica.',
    contexto: 'A pesquisa acadêmica é onde aprendi a sustentar uma ideia com método.',
    fiz: 'Produzi artigos com abordagem crítica, embasamento teórico e rigor metodológico. Um deles foi publicado em revista científica.',
    estrategia: 'Argumento bem construído convence em qualquer formato, seja artigo, carrossel ou proposta.',
    entregas: ['Artigos acadêmicos', 'Pesquisa teórica'],
    resultados: ['Artigo publicado em revista científica']
  }
];

const ROTULOS = { social: 'Social media', marca: 'Marca e posicionamento', redacao: 'Redação', comunicacao: 'Comunicação' };

/* ===== Grade de cases ===== */
const grade = document.getElementById('grade');
let visiveis = CASES.slice();

function cardHTML(c, i) {
  return `
    <li class="card ${c.destaque ? 'card--destaque' : ''}" style="--i:${i}">
      <button class="card__botao" data-id="${c.id}" aria-label="Ver case ${c.cliente}">
        <span class="card__imagem"><img src="${c.capa}" alt="" loading="lazy"></span>
        <span class="card__info">
          <span class="card__segmento">${c.segmento}</span>
          <span class="card__cliente">${c.cliente}</span>
          <span class="card__resumo">${c.resumo}</span>
          <span class="card__tipo">${c.tipo}<span class="card__seta" aria-hidden="true">→</span></span>
        </span>
      </button>
    </li>`;
}

function renderGrade(filtro) {
  visiveis = filtro === 'todos' ? CASES.slice() : CASES.filter(c => c.categorias.includes(filtro));
  grade.innerHTML = visiveis.map(cardHTML).join('');
  grade.classList.toggle('grade--filtrada', filtro !== 'todos');
}
renderGrade('todos');

document.querySelectorAll('.filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro').forEach(b => { b.classList.remove('is-ativo'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('is-ativo'); btn.setAttribute('aria-pressed', 'true');
    renderGrade(btn.dataset.filtro);
  });
});

/* ===== Modal do case ===== */
const modal = document.getElementById('case');
const corpo = document.getElementById('case-corpo');
const contador = document.getElementById('case-contador');
let atual = 0;

function lista(itens) { return `<ul>${itens.map(t => `<li>${t}</li>`).join('')}</ul>`; }

function abrirCase(index) {
  atual = (index + visiveis.length) % visiveis.length;
  const c = visiveis[atual];
  contador.textContent = `${String(atual + 1).padStart(2, '0')} / ${String(visiveis.length).padStart(2, '0')}`;
  corpo.innerHTML = `
    <header class="case__cabeca">
      <p class="eyebrow">${c.categorias.map(k => ROTULOS[k]).join(' · ')}</p>
      <h2 id="case-titulo" class="case__titulo">${c.cliente}</h2>
      <p class="case__resumo">${c.resumo}</p>
      <dl class="case__ficha">
        <div><dt>Segmento</dt><dd>${c.segmento}</dd></div>
        <div><dt>Projeto</dt><dd>${c.tipo}</dd></div>
      </dl>
    </header>
    <div class="case__galeria">${c.imagens.map(src => `<img src="${src}" alt="Peças do projeto ${c.cliente}" loading="lazy">`).join('')}</div>
    <div class="case__blocos">
      <section><h3>Contexto</h3><p>${c.contexto}</p></section>
      <section><h3>O que eu fiz</h3><p>${c.fiz}</p></section>
      <section><h3>Estratégia</h3><p>${c.estrategia}</p></section>
      <section><h3>Entregas</h3>${lista(c.entregas)}</section>
      ${c.resultados.length ? `<section class="case__resultados"><h3>Resultados</h3>${lista(c.resultados)}</section>` : ''}
    </div>`;
  corpo.scrollTop = 0;
  if (!modal.open) { modal.showModal(); document.body.classList.add('travado'); }
}

grade.addEventListener('click', e => {
  const b = e.target.closest('.card__botao');
  if (b) abrirCase(visiveis.findIndex(c => c.id === b.dataset.id));
});
document.getElementById('case-fechar').addEventListener('click', () => modal.close());
document.getElementById('case-anterior').addEventListener('click', () => abrirCase(atual - 1));
document.getElementById('case-proximo').addEventListener('click', () => abrirCase(atual + 1));
modal.addEventListener('close', () => document.body.classList.remove('travado'));
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
modal.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') abrirCase(atual + 1);
  if (e.key === 'ArrowLeft') abrirCase(atual - 1);
});

/* ===== Menu mobile ===== */
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu-mobile');
function setMenu(aberto) {
  toggle.setAttribute('aria-expanded', String(aberto));
  toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  menu.hidden = !aberto;
  document.body.classList.toggle('menu-aberto', aberto);
}
toggle.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ===== Nav com fundo ao rolar ===== */
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('nav--rolada', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* ===== Revelar ao rolar (sutil) ===== */
const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const alvos = document.querySelectorAll('.revelar');
if (reduz || !('IntersectionObserver' in window)) {
  alvos.forEach(el => el.classList.add('visivel'));
} else {
  const io = new IntersectionObserver(entradas => {
    entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visivel'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  alvos.forEach(el => io.observe(el));
}

/* Links de redes ainda sem usuário: esconde até serem preenchidos */
document.querySelectorAll('[data-pendente]').forEach(a => {
  if (a.href.includes('SEU-USUARIO')) a.closest('li').hidden = true;
});
