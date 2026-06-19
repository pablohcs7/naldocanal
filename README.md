# Nal do Canal — Landing Page

Site estático de apresentação inspirado no universo do **Nal do Canal**, com foco em humor, memes, resenha e chamadas para acompanhar o canal nas redes.

## Estrutura

- `index.html`: markup principal da landing page.
- `styles.css`: identidade visual, responsividade e componentes.
- `script.js`: interações dos botões de reação do mural de memes.
- `.github/workflows/deploy-pages.yml`: deploy automático para GitHub Pages.
- `.nojekyll`: impede que o GitHub Pages processe o site com Jekyll.

## Como rodar localmente

Como o projeto é estático, qualquer servidor HTTP simples funciona:

```bash
python3 -m http.server 8000