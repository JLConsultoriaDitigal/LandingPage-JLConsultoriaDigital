/* ============================================================
   JL CONSULTORIA DIGITAL
   script.js

   Área de configuração central:
   Links abaixo e todos os botões da página estão conectados 
   automaticamente.
   ============================================================ */

const CONFIG = {
  companyName: "JL Consultoria Digital",

  // ==========================================================
  // WHATSAPP
  // ==========================================================
  whatsappLink: "https://wa.me/5524999610195",

  // ==========================================================
  // INSTAGRAM
  // ==========================================================
  instagramLink: "https://www.instagram.com/jessicalisboa.digital/",

  // ==========================================================
};

/* ============================================================
   Aplicação dos links centralizados
   ============================================================ */
document.querySelectorAll("[data-whatsapp]").forEach((element) => {
  element.href = CONFIG.whatsappLink;

  // Evita abrir um placeholder acidentalmente.
  if (CONFIG.whatsappLink.includes("_AQUI")) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showConfigNotice("WhatsApp");
    });
  }
});

document.querySelectorAll("[data-instagram]").forEach((element) => {
  element.href = CONFIG.instagramLink;

  if (CONFIG.instagramLink.includes("_AQUI")) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showConfigNotice("Instagram");
    });
  }
});

/* Mensagem temporária para lembrar de configurar os links */
function showConfigNotice(type) {
  const oldNotice = document.querySelector(".config-notice");
  if (oldNotice) oldNotice.remove();

  const notice = document.createElement("div");
  notice.className = "config-notice";
  notice.textContent = `Configure o link do ${type} no arquivo script.js.`;

  Object.assign(notice.style, {
    position: "fixed",
    zIndex: "2000",
    left: "50%",
    bottom: "25px",
    transform: "translateX(-50%)",
    padding: "13px 18px",
    border: "1px solid #444",
    borderRadius: "999px",
    color: "#fff",
    background: "#080808",
    boxShadow: "0 15px 40px rgba(0,0,0,.3)",
    fontSize: ".75rem",
    fontFamily: "Inter, sans-serif"
  });

  document.body.appendChild(notice);

  setTimeout(() => {
    notice.style.opacity = "0";
    notice.style.transition = "opacity .3s ease";

    setTimeout(() => notice.remove(), 300);
  }, 2500);
}

/* ============================================================
   Menu mobile
   ============================================================ */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  menuToggle?.classList.remove("active");
  navMenu?.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Abrir menu");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* Fecha o menu com ESC */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

/* ============================================================
   Cabeçalho muda de aparência ao rolar
   ============================================================ */
const header = document.querySelector(".site-header");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* ============================================================
   Intersection Observer
   ============================================================ */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // Remove a classe quando sai da área visível.
          // Repetir a animação ao retornar.
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  // Para quem prefere menos movimento, tudo fica visível.
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

/* ============================================================
   Parallax muito leve do Hero
   ------------------------------------------------------------
   Desativado para dispositivos pequenos e para usuários que
   preferem redução de movimento.
   ============================================================ */
const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && !prefersReducedMotion && window.innerWidth > 820) {
  window.addEventListener(
    "mousemove",
    (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;

      heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    },
    { passive: true }
  );
}

/* ============================================================
   Ano automático no rodapé
   ============================================================ */
const footerYear = document.querySelector(".footer-bottom span");
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} JL Consultoria Digital. Todos os direitos reservados.`;
}

/* ============================================================
   Tratamento básico de imagens futuras
   ============================================================ */
document.querySelectorAll("img").forEach((img) => {
  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
});

/* ============================================================
   Log útil durante o desenvolvimento
   ============================================================ */
console.info(
  `${CONFIG.companyName}: Landing Page carregada com sucesso.`
);
