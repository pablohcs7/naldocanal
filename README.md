# Nal do Canal — Landing Page

Site estático de apresentação inspirado no universo do **Nal do Canal**, com foco em humor, memes, resenha e chamadas para acompanhar o canal nas redes.

## Estrutura

- `index.html`: markup principal da landing page.
- `styles.css`: identidade visual, responsividade e componentes.
- `script.js`: interações dos botões de reação do mural de memes.
- `assets/images/`: imagens anexadas pelo usuário convertidas para SVG textual com imagem embutida, evitando arquivos binários no PR.
- `.github/workflows/deploy-pages.yml`: deploy automático para GitHub Pages.
- `.nojekyll`: impede que o GitHub Pages processe o site com Jekyll.

## Como rodar localmente

Como o projeto é estático, qualquer servidor HTTP simples funciona:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## Testes

```bash
npm test
```

O comando executa `node --check script.js` para validar a sintaxe do JavaScript.

## Publicação no GitHub Pages

O deploy está configurado via GitHub Actions e será executado automaticamente em pushes para a branch `main`.

Antes do primeiro deploy, confirme no GitHub:

1. Acesse **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions** como source.
3. Faça merge/push na branch `main`.
4. Acompanhe a execução em **Actions → Deploy static site to GitHub Pages**.

## O que ainda pode ser adicionado depois

- Domínio customizado via arquivo `CNAME`, caso o projeto tenha um domínio próprio.
- Métricas/analytics, se for necessário acompanhar visitas.
- `robots.txt` e `sitemap.xml`, se a página virar site público oficial.
