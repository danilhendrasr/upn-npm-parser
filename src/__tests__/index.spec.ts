import { parseNpm } from "../index"

test("Should throw an error given an npm that contained letters", () => {
  function parse() {
    parseNpm("19a81010016")
  }
  expect(parse).toThrowError("NPM tidak valid")
})

test("Should throw an error given an incorrect-length npm", () => {
  function parse() {
    parseNpm("1908101")
  }
  expect(parse).toThrowError("NPM tidak valid")
})

test("Should throw an error given an incorrect angkatan", () => {
  function parse() {
    parseNpm("05081010016")
  }
  expect(parse).toThrowError("Angkatan tidak valid")
})

test("Should throw an error given an incorrect kode prodi", () => {
  function parse() {
    parseNpm("19181010016")
  }
  expect(parse).toThrowError("Program studi tidak ditemukan")
})

test("Should return proper object given a correct npm in string", () => {
  expect(parseNpm("19081010016")).toEqual({
    angkatan: "2019",
    prodi: {
      kode: "081",
      nama: "Informatika",
    },
    unknownVariable: "01",
    idMahasiswa: "0016",
  })
})

test("Should return proper object given a correct npm in number", () => {
  expect(parseNpm(19081010016)).toEqual({
    angkatan: "2019",
    prodi: {
      kode: "081",
      nama: "Informatika",
    },
    unknownVariable: "01",
    idMahasiswa: "0016",
  })
})
