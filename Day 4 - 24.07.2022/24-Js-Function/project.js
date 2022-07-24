function hello() {
  console.log("Hello");
}

// hello();
// hello();
// hello();

// fonksiyonlara parametre gönderme

const canboz = function (ad = "Can", soyad = "BOZ") {
  // Default parametre
  console.log(`Ad Soyad ${ad} ${soyad}`);
};

canboz();
canboz("Selim", "AKIN");

// function expression
const kareAlani = function (kenar) {
  return kenar ** 2;
};

let sonuc = kareAlani(6);
console.log(sonuc);

// arrow functions
// const kareAlanim = (kenar) => {
//   return kenar ** 2;
// };

const kareAlanim = (kenar) => kenar ** 2;
console.log(kareAlanim(7));

const donus = () => "Selim";
console.log(donus());

const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));

const urunSatisArrow = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatisArrow([10, 20, 30], 0.25));
