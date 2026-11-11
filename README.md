# Site · Amanda Azevedo

Site portfólio estático (HTML, CSS e JS puros), no ar em https://amandaazevedosm.com.br pelo GitHub Pages (repositório `amandadeazevedo/site-amanda`). Não precisa de build.

## Estrutura
Tudo fica na pasta principal (dá pra atualizar pelo site do GitHub arrastando arquivos).
- `index.html` · todas as seções: hero, sobre, cases, vídeos, sites, clientes e contato
- `style.css` · visual, com as cores e fontes do Manual de Marca v1
- `main.js` · menu, vídeos (tocam mudos quando aparecem, botão de som), índice dos cases
- `amanda-*.webp` fotos · `case-*.webp` peças dos cases · `site-*.webp` prints dos sites · `video-*.mp4` vídeos (com capa `video-*.webp`)
- `.woff2` · Caveat Brush, Poppins e Manrope hospedadas no próprio site

## Como editar
- **Case novo (capítulo):** em `index.html`, copie um bloco `<article class="cap">` dentro de `<!-- CASES -->`, troque número, textos e imagem. Use `cap--inverso` pra alternar o lado da imagem e `cap__midia--rosa` ou `cap__midia--lilas` pra cor do fundo. Adicione o link no `<nav class="indice">`.
- **Trabalho menor:** copie um `<li>` de `<!-- OUTROS TRABALHOS -->`.
- **Vídeo novo:** comprima pra 720×1280 (MP4 H.264, uns 5 a 10 MB), salve como `video-nome.mp4` + capa `video-nome.webp`, e copie um `<li class="video">` em `<!-- VÍDEOS -->`.
- **Site novo:** print 1440×900 salvo como `site-nome.webp` (960px de largura) e copie um `<li>` em `<!-- SITES -->`.
- **Contatos:** seção `<!-- CONTATO -->`. **Clientes:** seção `<!-- CLIENTES -->`.

## Versão 3 (nov/2026)
- Cases viraram capítulos numerados com índice fixo, no estilo do site da Laura Moro.
- Nova seção de vídeos: MK no evento da OAB (aftermovie, captação e edição), RMSA 13 anos (captação e edição), SmartSave (edição e motion).
- Nova seção de sites: Laura Moro, Beatriz Piovenzan, Igor Nascimento Pinturas, Giullia Pimentel.
- Case "Escritório de advocacia" passou a citar a RMSA pelo nome e ganhou o vídeo dos 13 anos.
