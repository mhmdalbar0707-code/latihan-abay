const nama = "Siti Nur Fadilah"
let usia = 3

let biodata = document.getElementById(`biodata`)
console.log(biodata)

function generatebiodata() {
    let generasi

    if (usia >= 10 && usia < 18) {
        generasi = `Generasi remaja`
    }
    else if (usia >= 18 && usia < 30) {
        generasi = `Generasi dewasa`
    }
    else if (usia >= 30) {
        generasi = `Generasi tua`
    }
    else if (usia < 10 && usia >= 2) {
        generasi = `Generasi anak-anak`
    }
    else {
        generasi = `Generasi bayi`
    }
    return biodata.innerHTML = generasi
    }

    console.log(nama)
    console.log(usia)

    generatebiodata()