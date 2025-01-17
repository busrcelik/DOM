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

//Navigasyon
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, index) => {
  const navKey = `nav-item-${index + 1}`;
  link.textContent = siteContent.nav[navKey];
});

//Logo
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", siteContent.images["logo-img"]);

//CTA Başlık ve Buton
const h1 = document.querySelector(".cta h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector(".cta button");
button.textContent = siteContent.cta.button;

// Ana İçerik - Top ve Bottom Content

const ozelliklerH4 = document.querySelector(".top-content .text-content h4");
ozelliklerH4.textContent = siteContent["ana-içerik"]["özellikler-h4"];

const ozelliklerP = document.querySelector(".top-content .text-content p");
ozelliklerP.textContent = siteContent["ana-içerik"]["özellikler-içerik"];

const hakkimizdaH4 = document.querySelectorAll(
  ".top-content .text-content h4"
)[1];
hakkimizdaH4.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const hakkimizdaP = document.querySelectorAll(
  ".top-content .text-content p"
)[1];
hakkimizdaP.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const servislerH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[0];
servislerH4.textContent = siteContent["ana-içerik"]["servisler-h4"];

const servislerP = document.querySelectorAll(
  ".bottom-content .text-content p"
)[0];
servislerP.textContent = siteContent["ana-içerik"]["servisler-içeriği"];

const ürünlerH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[1];
ürünlerH4.textContent = siteContent["ana-içerik"]["ürünler-h4"];

const ürünlerP = document.querySelectorAll(
  ".bottom-content .text-content p"
)[1];
ürünlerP.textContent = siteContent["ana içerik"]["ürünler-içeriği"];

const vizyonH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[2];
vizyonH4.textContent = siteContent["ana-içerik"]["vizyon-h4"];

const vizyonP = document.querySelectorAll(".bottom-content .text-content p")[2];
vizyonP.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//İletişim

const iletişimH4 = document.querySelector(".contact h4");
iletisimH4.textContent = siteContent.iletisim["iletişim-h4"];

const iletisimP = document.querySelectorAll(".contact p");
iletisimP[0].textContent = siteContent.iletisim.adres;
iletisimP[1].textContent = siteContent.iletisim.telefon;
iletisimP[2].textContent = siteContent.iletisim.email;

//Footer
const footerLink = document.querySelector("footer a");
