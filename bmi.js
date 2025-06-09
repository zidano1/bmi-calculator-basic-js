let nama = "M.Yazid Zaidan"
let tahunKelahiran = "2003"
let beratBadan = "84"
let tinggiBadan = "172"

let usia = 2025 - tahunKelahiran;
let tinggiMeter = tinggiBadan/100;
let bmi = beratBadan/tinggiMeter**2;

let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus";
    } else if (bmi < 25) {
        kategori = "Normal";
        } else if (bmi < 30) {
            kategori = "Overweight";
            } else {
                kategori = "Obesitas";
                }

let pesan = "";
if (bmi < 18.5) {
    pesan = "Makan yang banyak ya"
    } else if (bmi < 25) {
        pesan = "Pertahankan!!";
        } else if (bmi < 30) {
            pesan = "Yok Olahraga dan Makan Teratur";
            } else {
                pesan = "Mangan Bae, Gerak BLOK!";
                }

console.log(`Hai, ${nama}. kamu sekarang berusia ${usia} tahun.`);
console.log( `kamu memiliki ${kategori} dengan BMI : ${bmi}` );
console.log(pesan);


