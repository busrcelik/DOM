const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// //Navigasyon

const navItems = document.querySelectorAll("nav a");
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

// Linklere `italic`
navItems.forEach((link) => {
  link.classList.add("italic");
});

//CTA Başlık ve Buton
const h1 = document.querySelector(".cta h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector(".cta button");
button.textContent = siteContent.cta.button;

// Ana İçerik - Top ve Bottom Content

const topContentHeaders = document.querySelectorAll(
  ".top-content .text-content h4"
);
topContentHeaders[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContentHeaders[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topContentParagraphs = document.querySelectorAll(
  ".top-content .text-content p"
);
topContentParagraphs[0].textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];
topContentParagraphs[1].textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContentHeaders = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContentHeaders[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContentHeaders[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContentHeaders[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContentParagraphs = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentParagraphs[0].textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];
bottomContentParagraphs[1].textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContentParagraphs[2].textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

//İletişim

const contactSection = document.querySelector(".contact");
contactSection.querySelector("h4").textContent =
  siteContent["iletisim"]["iletişim-h4"];
contactSection.querySelectorAll("p")[0].textContent =
  siteContent["iletisim"]["adres"];
contactSection.querySelectorAll("p")[1].textContent =
  siteContent["iletisim"]["telefon"];
contactSection.querySelectorAll("p")[2].textContent =
  siteContent["iletisim"]["email"];

//Footer

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent["footer"]["copyright"];
footerLink.setAttribute("href", "#");
footerLink.classList.add("bold");

//Resim Kaynakları

const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const accentImg = document.querySelector("#middle-img");
accentImg.src = siteContent.images["accent-img"];
