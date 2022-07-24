let password = "12345678";

if (password.length > 12) {
  console.log("Güçlü şifre");
} else if (password.length >= 8) {
  console.log("Yeterli şifre");
} else {
  console.log("Şifreyi yeniden giriniz");
}
