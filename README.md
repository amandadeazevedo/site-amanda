# Site · Amanda Azevedo

Site portfólio estático (HTML, CSS e JS puros). Não precisa de build: é só subir a pasta inteira pra qualquer hospedagem (Hostinger, GitHub Pages, Netlify, Vercel).

## Estrutura
Tudo fica na pasta principal (assim dá pra atualizar pelo site do GitHub arrastando arquivos).
- `index.html` · todas as seções (hero, sobre, trabalhos, clientes, contato)
- `style.css` · visual, com as cores e fontes do Manual de Marca v1
- `main.js` · **lista de cases** (topo do arquivo), filtros, modal e menu mobile
- `amanda-*.webp` fotos · `case-*.webp` peças dos cases · demais `.webp` elementos gráficos
- `.woff2` · Caveat Brush, Poppins e Manrope hospedadas no próprio site

## Como editar
- **Novo case:** copie um bloco dentro de `CASES` em `main.js`, troque os textos e as imagens (coloque a imagem em `case-`).
- **Resultados:** preencha o campo `resultados: ['...']` do case. Se ficar vazio, a caixinha não aparece.
- **Contatos:** e-mail, WhatsApp, LinkedIn e Instagram ficam na seção `<!-- CONTATO -->` do `index.html`.
- **Clientes:** seção `<!-- CLIENTES -->` em `index.html`.

## Ver no computador
Abra `index.html` no navegador. Se as imagens dos cases não aparecerem, rode `python -m http.server` na pasta e acesse `http://localhost:8000`.
