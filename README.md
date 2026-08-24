# JL Consultoria Digital — Landing Page

Landing Page responsiva, minimalista e tecnológica para a JL Consultoria Digital.

## Estrutura

```text
JLConsultoriaDigital/
├── index.html
├── style.css
├── script.js
├── README.md
└── Imgs/
    ├── Logo - JL redonda.png
    ├── FAVICON_JL.png
    ├── IMG JL - Jessica Lisboa.jpg 
    └── IMG JL - Jessica e Leonardo.jpg
```

## Configuração rápida

EM `script.js` somente:

```js
const CONFIG = {
  companyName: "JL Consultoria Digital",
  whatsappLink: "WHATSAPP_LINK",
  instagramLink: "INSTAGRAM_LINK"
};
```

WhatsApp:

```js
whatsappLink: "https://wa.me/5524999610195"
```

Instagram:

```js
instagramLink: "https://www.instagram.com/jessicalisboa.digital/"
```

## Imagens

Os placeholders estão identificados no HTML.

Por:

- `IMG JL - Jessica Lisboa.jpg`
- `IMG JL - Jessica e Leonardo.jpg`
- `FAVICON e LOGO: Logo - JL redonda.png`

## Animações

A página utiliza `IntersectionObserver`.

Diferentemente de uma implementação que observa o elemento apenas uma vez, esta versão remove a classe de animação quando o elemento sai da área visível. Assim, a animação pode acontecer novamente quando o visitante sobe ou desce a página.

Também existe suporte a:

```css
@media (prefers-reduced-motion: reduce)
```

para reduzir as animações quando essa preferência estiver ativa no sistema do usuário.

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript puro
- Intersection Observer API
- CSS Grid/Flexbox
- Responsive Design
- Open Graph
- SEO básico
- Acessibilidade

## Publicação

GitHub Pages
