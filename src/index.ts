type ParseResult = {
  angkatan: string
  prodi: {
    kode: string
    nama: string
  }
  unknownVariable: string
  idMahasiswa: string
}

const prodiList: Record<string, string> = {
  "041": "Ilmu Administrasi Negara/Publik",
  "042": "Ilmu Administrasi Niaga/Bisnis",
  "043": "Ilmu Komunikasi",
  "044": "Hubungan Internasional",
  "045": "Pariwisata",
  "011": "Ekonomi Pembangunan",
  "012": "Manajemen",
  "013": "Akuntansi",
  "071": "Ilmu Hukum",
  "025": "Agroteknologi",
  "024": "Agribisnis",
  "083": "Sains Data",
  "082": "Sistem Informasi",
  "051": "Arsitektur",
  "081": "Informatika",
  "032": "Teknik Industri",
  "031": "Teknik Kimia",
  "034": "Teknik Lingkungan",
  "036": "Teknik Mesin",
  "033": "Teknologi Pangan",
  "035": "Teknik Sipil",
  "052": "Desain Komunikasi Visual",
}

function parseNpm(NPM: string | number): ParseResult {
  let npm = NPM
  if (typeof npm === "number") npm = String(NPM)

  const npmInNumber = Number(npm)
  const npmLengthIsWrong = npm.length !== 11
  const npmContainsLetter = isNaN(npmInNumber)

  if (npmLengthIsWrong || npmContainsLetter) {
    throwError("NPM tidak valid")
  }

  const thisYear = Number(new Date().getFullYear().toString().slice(2, 4))
  const tenYearsAgo = thisYear - 10

  const angkatanFromInput = Number(npm.slice(0, 2))
  const fromTheFuture = angkatanFromInput > thisYear
  const aDinosaur = angkatanFromInput < tenYearsAgo

  if (fromTheFuture || aDinosaur) {
    throwError("Angkatan tidak valid")
  }

  const angkatan = `20${angkatanFromInput}`

  const kodeProdi = npm.slice(2, 5)
  const kodeProdiExists = Object.keys(prodiList).includes(kodeProdi)

  if (!kodeProdiExists) {
    throwError("Program studi tidak ditemukan")
  }

  const prodi = {
    kode: kodeProdi,
    nama: prodiList[kodeProdi],
  }

  const unknownVariable = npm.slice(5, 7)
  const idMahasiswa = npm.slice(7)

  return {
    angkatan,
    prodi,
    unknownVariable,
    idMahasiswa,
  }
}

function throwError(msg: string) {
  throw new Error(msg)
}

export { parseNpm }
