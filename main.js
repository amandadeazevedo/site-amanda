/* Amanda Azevedo · site portfólio
   Os cases, vídeos e sites ficam escritos direto no index.html.
   Aqui só tem o comportamento da página. */

const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
const alvos = document.querySelectorAll('.revelar');
if (reduz || !('IntersectionObserver' in window)) {
  alvos.forEach(el => el.classList.add('visivel'));
} else {
  const io = new IntersectionObserver(entradas => {
    entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visivel'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  alvos.forEach(el => io.observe(el));
}

/* ===== Índice dos cases: marca o capítulo que está na tela ===== */
const linksIndice = [...document.querySelectorAll('.indice a')];
const lista = document.querySelector('.indice__lista');
if ('IntersectionObserver' in window && linksIndice.length) {
  const caps = linksIndice.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const ioCap = new IntersectionObserver(entradas => {
    entradas.forEach(en => {
      if (!en.isIntersecting) return;
      linksIndice.forEach(a => {
        const ativo = a.getAttribute('href') === '#' + en.target.id;
        a.classList.toggle('is-ativo', ativo);
        if (ativo) {
          a.setAttribute('aria-current', 'true');
          // no celular o índice rola de lado: mantém o item ativo à vista
          lista.scrollTo({ left: a.offsetLeft - 16, behavior: reduz ? 'auto' : 'smooth' });
        } else {
          a.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  caps.forEach(c => ioCap.observe(c));
}

/* ===== Vídeos: tocam mudos quando aparecem, som no botão ===== */
const videos = [...document.querySelectorAll('.celular__video')];

function pararOutros(atual) {
  videos.forEach(v => {
    if (v === atual) return;
    if (!v.muted) {
      v.muted = true;
      const b = v.parentElement.querySelector('.celular__som');
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('aria-label', b.getAttribute('aria-label').replace('Desligar', 'Ligar'));
    }
  });
}

document.querySelectorAll('.celular__som').forEach(btn => {
  const v = btn.parentElement.querySelector('video');
  btn.addEventListener('click', () => {
    const ligar = v.muted;
    if (ligar) pararOutros(v);
    v.muted = !ligar;
    btn.setAttribute('aria-pressed', String(ligar));
    btn.setAttribute('aria-label', btn.getAttribute('aria-label').replace(ligar ? 'Ligar' : 'Desligar', ligar ? 'Desligar' : 'Ligar'));
    if (ligar) { v.currentTime = 0; v.play().catch(() => {}); }
  });
  // tocar no próprio vídeo também liga/desliga o som
  v.addEventListener('click', () => btn.click());
});

if (!reduz && 'IntersectionObserver' in window) {
  const ioVideo = new IntersectionObserver(entradas => {
    entradas.forEach(en => {
      const v = en.target;
      if (en.isIntersecting) { v.play().catch(() => {}); }
      else { v.pause(); }
    });
  }, { threshold: 0.45 });
  videos.forEach(v => ioVideo.observe(v));
} else {
  // sem animação automática: mostra os controles e a pessoa dá o play
  videos.forEach(v => { v.controls = true; });
}
