import axios from "axios";

/*
[
  {
    "namabarang": "Abu batu",
    "category": "Material Alam",
    "subCategory": "Batu",
    "type": "Abu Batu",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Aluminium Foil 1.2x50 m",
    "category": "Atap",
    "subCategory": "Aluminium Foil",
    "type": "-",
    "merk": "-",
    "satuan": "roll",
    "ukuran": "1.2x50 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Lipat 10 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3005,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "10 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2005,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9056,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Atas Sliding Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Lipat 12 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3000,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "12 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2000,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9058,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ambang Bawah Sliding Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 37,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Anti Rayap (Imidachloripid)",
    "category": "Lain-Lain",
    "subCategory": "Anti Rayap",
    "type": "-",
    "merk": "-",
    "satuan": "m2",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Atap Lysaght Klip-lok Optimas (Colourbond)",
    "category": "Atap",
    "subCategory": "Klip-Lok Optima",
    "type": "Colourbond",
    "merk": "Lysaght",
    "satuan": "m2",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Bambu dia 7-9cm",
    "category": "Kayu",
    "subCategory": "Bambu",
    "type": "-",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "7-9 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Bata Merah Jumbo Kosin",
    "category": "Bata",
    "subCategory": "Bata Merah",
    "type": "-",
    "merk": "Kosin",
    "satuan": "pcs",
    "ukuran": "Jumbo",
    "proyek": "-"
  },
  {
    "namabarang": "Bata Merah Jumbo Prima Press",
    "category": "Bata",
    "subCategory": "Bata Merah",
    "type": "-",
    "merk": "Prima Press",
    "satuan": "pcs",
    "ukuran": "Jumbo",
    "proyek": "-"
  },
  {
    "namabarang": "Bata Ringan uk. 10x20x60 cm. Powerblock",
    "category": "Bata",
    "subCategory": "Bata Ringan",
    "type": "-",
    "merk": "Powerblock",
    "satuan": "pcs",
    "ukuran": "10x20x60 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Bata Ringan uk. 7.5x20x60 cm.  Powerblock",
    "category": "Bata",
    "subCategory": "Bata Ringan",
    "type": "-",
    "merk": "Powerblock",
    "satuan": "pcs",
    "ukuran": "7.5x20x60 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Batu kali",
    "category": "Material Alam",
    "subCategory": "Batu",
    "type": "Batu Kali",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Polos) dia. 10 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Polos",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "10 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Polos) dia. 12 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Polos",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "12 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Polos) dia. 6 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Polos",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "6 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Polos) dia. 8 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Polos",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "8 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Ulir) dia. 10 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Ulir",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "10 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Ulir) dia. 13 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Ulir",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "13 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Ulir) dia. 16 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Ulir",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "16 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Besi Beton (Ulir) dia. 19 mm",
    "category": "Besi",
    "subCategory": "Besi Beton",
    "type": "Ulir",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "19 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-100 (FA)",
    "category": "Beton",
    "subCategory": "K-100",
    "type": "FA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-100 (NFA)",
    "category": "Beton",
    "subCategory": "K-100",
    "type": "NFA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-175 (FA)",
    "category": "Beton",
    "subCategory": "K-175",
    "type": "FA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-175 (NFA)",
    "category": "Beton",
    "subCategory": "K-175",
    "type": "NFA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-225 (FA)",
    "category": "Beton",
    "subCategory": "K-225",
    "type": "FA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-225 (NFA)",
    "category": "Beton",
    "subCategory": "K-225",
    "type": "NFA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-250 (FA)",
    "category": "Beton",
    "subCategory": "K-250",
    "type": "FA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-250 (NFA)",
    "category": "Beton",
    "subCategory": "K-250",
    "type": "NFA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-300 (FA)",
    "category": "Beton",
    "subCategory": "K-300",
    "type": "FA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Beton Ready Mix K-300 (NFA)",
    "category": "Beton",
    "subCategory": "K-300",
    "type": "NFA",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Cat Carport Propan Tennokote TNK-1000 WA (5 kg)",
    "category": "Cat",
    "subCategory": "Carport",
    "type": "Tennokote TNK-1000 WA",
    "merk": "Propan",
    "satuan": "set",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60141,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Cetokan Z Skrup 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60558,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Clean Out ONDA 1 1/4inch",
    "category": "Acc Pipa",
    "subCategory": "Clean Out",
    "type": "-",
    "merk": "ONDA",
    "satuan": "pcs",
    "ukuran": "1 1/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Clean Out ONDA 4inch",
    "category": "Acc Pipa",
    "subCategory": "Clean Out",
    "type": "-",
    "merk": "ONDA",
    "satuan": "pcs",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Closet Duduk American Standard Granada Basic GR15CA",
    "category": "Sanitair",
    "subCategory": "Closet Duduk",
    "type": "GR15CA",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Closet Duduk INA C20",
    "category": "Sanitair",
    "subCategory": "Closet Duduk",
    "type": "C20",
    "merk": "INA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Closet Duduk TOTO CW421J/SW420JP",
    "category": "Sanitair",
    "subCategory": "Closet Duduk",
    "type": "CW421J",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Conwood Lap Siding BG. fin. Cat Propan Fiberkote 152x3050x11 mm",
    "category": "Acc Dinding",
    "subCategory": "Conwood",
    "type": "-",
    "merk": "Lap Siding BG",
    "satuan": "lbr",
    "ukuran": "152x3050x11 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1826,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Double 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1832,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Daun Casement Gunung 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1825,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Digital Printing",
    "category": "Lain-Lain",
    "subCategory": "Digital Printing",
    "type": "-",
    "merk": "-",
    "satuan": "m2",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Dolken",
    "category": "Kayu",
    "subCategory": "Dolken",
    "type": "-",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 504,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Doorjam 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2030,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Double Robe Hook TOTO TX704AES",
    "category": "Sanitair",
    "subCategory": "Double Robe",
    "type": "TX704AES",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Dv Elbow 90� Rucika 1 1/4inch",
    "category": "Acc Pipa",
    "subCategory": "Dv Elbow 90�",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "1 1/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Dv Elbow 90� Rucika 1/2inch",
    "category": "Acc Pipa",
    "subCategory": "Dv Elbow 90�",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Dv Elbow 90� Rucika 3/4inch",
    "category": "Acc Pipa",
    "subCategory": "Dv Elbow 90�",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Dv Elbow 90� Rucika 3inch",
    "category": "Acc Pipa",
    "subCategory": "Dv Elbow 90�",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Dv Elbow 90� Rucika 4inch",
    "category": "Acc Pipa",
    "subCategory": "Dv Elbow 90�",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Elbow Westpex Blue. L20",
    "category": "Acc Pipa",
    "subCategory": "Elbow",
    "type": "Blue",
    "merk": "Westpex",
    "satuan": "pcs",
    "ukuran": "L20",
    "proyek": "-"
  },
  {
    "namabarang": "Faucet Elbow Rucika 1/2inch",
    "category": "Acc Pipa",
    "subCategory": "Faucet Elbow",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Female Elbow Westpex Blue. L16-1/2 F",
    "category": "Acc Pipa",
    "subCategory": "Female Elbow",
    "type": "Blue",
    "merk": "Westpex",
    "satuan": "pcs",
    "ukuran": "L16-1/2 F",
    "proyek": "-"
  },
  {
    "namabarang": "Floor Drain INA FD10",
    "category": "Sanitair",
    "subCategory": "Floor Drain",
    "type": "FD10",
    "merk": "INA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Floor Drain Meridian FG-707",
    "category": "Sanitair",
    "subCategory": "Floor Drain",
    "type": "FG-707",
    "merk": "Merdian",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Floor Drain ONDA FLS 05 1-1",
    "category": "Sanitair",
    "subCategory": "Floor Drain",
    "type": "FLS 05 1-1",
    "merk": "ONDA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Floor Drain TOTO TX1AN",
    "category": "Sanitair",
    "subCategory": "Floor Drain",
    "type": "TX1AN",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Floor Drain TOTO TX1DB",
    "category": "Sanitair",
    "subCategory": "Floor Drain",
    "type": "TX1DB",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Gembok",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Gembok",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Genteng Beton Cisangkan Dual Slate",
    "category": "Atap",
    "subCategory": "Beton",
    "type": "Genteng",
    "merk": "Cisangkan",
    "satuan": "bh",
    "ukuran": "Duel Slate",
    "proyek": "-"
  },
  {
    "namabarang": "Genteng Metal t = 0.4 mm",
    "category": "Atap",
    "subCategory": "Metal",
    "type": "Genteng",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "0.4 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Casement 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1828,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Glass Spit Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2003,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Grab Bar Difabel",
    "category": "Sanitair",
    "subCategory": "Grab Bar",
    "type": "Difabel",
    "merk": "-",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Cermin t = 5 mm",
    "category": "Kaca",
    "subCategory": "Cermin",
    "type": "-",
    "merk": "Asahi",
    "satuan": "m2",
    "ukuran": "5 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Polos 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60429,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaca Mati M Skrup 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60559,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Karpet Talang; 0.9x60 m",
    "category": "Atap",
    "subCategory": "-",
    "type": "Karpet Talang",
    "merk": "-",
    "satuan": "roll",
    "ukuran": "0.9x60 m",
    "proyek": "-"
  },
  {
    "namabarang": "Kasa Waterproofing ex. AM 612 Reinforcing Mesh (10x1000 cm)",
    "category": "Lain-Lain",
    "subCategory": "Woterproofing",
    "type": "Roll",
    "merk": "AM 612",
    "satuan": "roll",
    "ukuran": "10x1000 Cm",
    "proyek": "-"
  },
  {
    "namabarang": "Kaso Borneo 4/6. P 4mtr",
    "category": "Kayu",
    "subCategory": "Kaso",
    "type": "Borneo",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "4 m",
    "proyek": "-"
  },
  {
    "namabarang": "Kaso Borneo 5/7. P 4mtr",
    "category": "Kayu",
    "subCategory": "Kaso",
    "type": "Borneo",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "4 m",
    "proyek": "-"
  },
  {
    "namabarang": "Kawat Ayakan",
    "category": "Besi",
    "subCategory": "Kawat",
    "type": "Ayakan",
    "merk": "-",
    "satuan": "roll",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kawat Beton",
    "category": "Besi",
    "subCategory": "Kawat",
    "type": "Bendrat",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kawat Duri",
    "category": "Besi",
    "subCategory": "Kawat",
    "type": "Duri",
    "merk": "-",
    "satuan": "m1",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Dinding ex. Habitat 25 x 50; Granada Maple",
    "category": "Keramik",
    "subCategory": "Dinding",
    "type": "Granada Maple",
    "merk": "Habitat",
    "satuan": "dus",
    "ukuran": "25x50",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Dinding ex. Mulia 20 x 25; Pastel Bisquit",
    "category": "Keramik",
    "subCategory": "Dinding",
    "type": "Pastel Bisquit",
    "merk": "Mulia",
    "satuan": "dus",
    "ukuran": "20x25",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Lantai ex. Habitat 25 x 25; Spark Canvas",
    "category": "Keramik",
    "subCategory": "Lantai",
    "type": "Spark Canvas",
    "merk": "Habitat",
    "satuan": "dus",
    "ukuran": "25x25",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Lantai ex. Mulia 20 x 20; Sandstone",
    "category": "Keramik",
    "subCategory": "Lantai",
    "type": "Sandstone",
    "merk": "Mulia",
    "satuan": "dus",
    "ukuran": "20x20",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Lantai ex. Mulia 40 x 40; Neo Oregon Ivory",
    "category": "Keramik",
    "subCategory": "Lantai",
    "type": "Neo Oregon Ivory",
    "merk": "Mulia",
    "satuan": "dus",
    "ukuran": "40x40",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Lantai ex. RomanGranit 60 x 60; Hardrock. d'Tasman Night",
    "category": "Keramik",
    "subCategory": "Lantai",
    "type": "Hardrock. d'Tasman Night",
    "merk": "RomanGranit",
    "satuan": "dus",
    "ukuran": "60x60",
    "proyek": "-"
  },
  {
    "namabarang": "Keramik Lantai ex. Sandimas 60 x 60; Lotus White",
    "category": "Keramik",
    "subCategory": "Lantai",
    "type": "Lotus White",
    "merk": "Sandimas",
    "satuan": "dus",
    "ukuran": "60x60",
    "proyek": "-"
  },
  {
    "namabarang": "Kerikil Beton",
    "category": "Material Alam",
    "subCategory": "Batu",
    "type": "Kerikil",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kertas HVS",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Kertas",
    "merk": "-",
    "satuan": "rim",
    "ukuran": "A4",
    "proyek": "-"
  },
  {
    "namabarang": "Kitchen Zink ex. Meridian; MB-5045",
    "category": "Sanitair",
    "subCategory": "Kitchen Zink",
    "type": "MB-5045",
    "merk": "Meridian",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Klem Pipa 3/4inch",
    "category": "Acc Pipa",
    "subCategory": "Klem Pipa",
    "type": "-",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Dinding ex. INA",
    "category": "Sanitair",
    "subCategory": "Kran Dinding",
    "type": "-",
    "merk": "INA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Dinding ex. Meridian; F-5102",
    "category": "Sanitair",
    "subCategory": "Kran Dinding",
    "type": "F-5102",
    "merk": "Meridian",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Dinding ex. ONDA; CLS01",
    "category": "Sanitair",
    "subCategory": "Kran Dinding",
    "type": "CLS01",
    "merk": "ONDA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Dinding ex. TOTO; T23B13",
    "category": "Sanitair",
    "subCategory": "Kran Dinding",
    "type": "T23B13",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Kitchen Zink ex. Meridian; F-6003",
    "category": "Sanitair",
    "subCategory": "Kran Kitchen",
    "type": "F-6003",
    "merk": "Meridian",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Kitchen Zink ex. Onda; V688CA",
    "category": "Sanitair",
    "subCategory": "Kran Kitchen",
    "type": "V688CA",
    "merk": "ONDA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Wastafel ex. American Standard; Winston Keran Pillar (Lever Handle)",
    "category": "Sanitair",
    "subCategory": "Kran Wastafel",
    "type": "Wiston Keran Pillar (Lever Handle)",
    "merk": "Amrican Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Wastafel ex. ONDA; Y-321C",
    "category": "Sanitair",
    "subCategory": "Kran Wastafel",
    "type": "Y-321C",
    "merk": "ONDA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Kran Wastafel ex. TOTO; TX109LD",
    "category": "Sanitair",
    "subCategory": "Kran Wastafel",
    "type": "TX109LD",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Label 103",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Sticker Label",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": 103,
    "proyek": "-"
  },
  {
    "namabarang": "Lakban Seng ex. Inaplas",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Lakban Seng",
    "merk": "Inaplas",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Lem Fox",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Lem Fox",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Lem Pipa ex. Isarplas (400 gr)",
    "category": "Acc Pipa",
    "subCategory": "Lem Pipa",
    "type": "-",
    "merk": "Isarplas",
    "satuan": "klg",
    "ukuran": "400 gr",
    "proyek": "-"
  },
  {
    "namabarang": "Listplank ex. Woodplank; Silicaboard; 200x4050x8 mm",
    "category": "Woodplank",
    "subCategory": "Listplank",
    "type": "-",
    "merk": "Silicaboard",
    "satuan": "lbr",
    "ukuran": "200x4050x8 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Listplank ex. Woodplank; Silicaboard; 300x4050x8 mm",
    "category": "Woodplank",
    "subCategory": "Listplank",
    "type": "-",
    "merk": "Silicaboard",
    "satuan": "lbr",
    "ukuran": "300x4050x8 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Map File",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Map File",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "A4",
    "proyek": "-"
  },
  {
    "namabarang": "Meni Besi",
    "category": "Lain-Lain",
    "subCategory": "Meni Besi",
    "type": "-",
    "merk": "-",
    "satuan": "ltr",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Minyak Bekisting",
    "category": "Lain-Lain",
    "subCategory": "Minyak Bekisting",
    "type": "-",
    "merk": "-",
    "satuan": "ltr",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "New Stop Valve S F54400-CHADYS",
    "category": "Sanitair",
    "subCategory": "Stop Valve S",
    "type": "F54400-CHADYS",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Nok Atas ex. Lysaght",
    "category": "Acc Atap",
    "subCategory": "Klip-Lok Optima",
    "type": "Nok Atas",
    "merk": "Lysaght",
    "satuan": "m1",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Nok Atas Genteng Beton ex. Cisangkan; Dual Slate",
    "category": "Acc Atap",
    "subCategory": "Beton",
    "type": "Nok Atas",
    "merk": "Cisangkan",
    "satuan": "bh",
    "ukuran": "Dual Slate",
    "proyek": "-"
  },
  {
    "namabarang": "Nok Genteng Metal",
    "category": "Acc Atap",
    "subCategory": "Metal",
    "type": "Nok Genteng",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Nok Samping Genteng Beton ex. Cisangkan; Dual Slate",
    "category": "Acc Atap",
    "subCategory": "Beton",
    "type": "Nok Samping",
    "merk": "Cisangkan",
    "satuan": "bh",
    "ukuran": "Dual Slate",
    "proyek": "-"
  },
  {
    "namabarang": "Nok Siku Genteng Beton ex. Cisangkan; Dual Slate",
    "category": "Acc Atap",
    "subCategory": "Beton",
    "type": "Nok Siku",
    "merk": "Cisangkan",
    "satuan": "bh",
    "ukuran": "Dual Slate",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Polos 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60428,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Openback Skrup 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 60560,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Ornamen GRC",
    "category": "Acc Dinding",
    "subCategory": "Ornamen",
    "type": "GRC",
    "merk": "-",
    "satuan": "m2",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Ornamen Pintu",
    "category": "Pintu",
    "subCategory": "Ornamen",
    "type": "-",
    "merk": "-",
    "satuan": "bh",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Overpal",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Overpal",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Paku 10",
    "category": "Paku",
    "subCategory": "Kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "10 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Paku 10 (23kg)",
    "category": "Paku",
    "subCategory": "kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "10 cm",
    "proyek": ""
  },
  {
    "namabarang": "Paku 5",
    "category": "Paku",
    "subCategory": "Kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "5 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Paku 5 (23kg)",
    "category": "Paku",
    "subCategory": "Kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "5 cm",
    "proyek": ""
  },
  {
    "namabarang": "Paku 7",
    "category": "Paku",
    "subCategory": "Kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "7 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Paku 7 (23kg)",
    "category": "Paku",
    "subCategory": "Kayu",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "7 cm",
    "proyek": ""
  },
  {
    "namabarang": "Paku Beton",
    "category": "Paku",
    "subCategory": "Beton",
    "type": "-",
    "merk": "-",
    "satuan": "dus",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Papan 2/20. P 4mtr",
    "category": "Kayu",
    "subCategory": "Papan",
    "type": "20-Feb",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "4 m",
    "proyek": "-"
  },
  {
    "namabarang": "Pasir Cilegon",
    "category": "Material Alam",
    "subCategory": "Pasir",
    "type": "Cilegon",
    "merk": 0,
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Pasir Rangkas",
    "category": "Material Alam",
    "subCategory": "Pasir",
    "type": "Rangkas",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "pasir uruk",
    "category": "Material Alam",
    "subCategory": "Pasir",
    "type": "Uruk",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Penjaga Jarak Bekisting / Spacer",
    "category": "Pintu",
    "subCategory": "Penjaga Jarak",
    "type": "Spacer",
    "merk": "-",
    "satuan": "bh",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Pintu PVC ex. Murico; 710x1960 mm. lengkap + accessories",
    "category": "Pintu",
    "subCategory": "PVC",
    "type": "Polos",
    "merk": "Murico",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Pintu PVC ex. Platindo. lengkap + accessories",
    "category": "Pintu",
    "subCategory": "PVC",
    "type": "Polos",
    "merk": "Platindo",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa ex. Westpex; Blue. 16 mm (50 mtr)",
    "category": "Pipa",
    "subCategory": "Pipa Selang",
    "type": "16 mm Blue",
    "merk": "Westpex",
    "satuan": "roll",
    "ukuran": "50 mtr",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa ex. Westpex; Blue. 20 mm (50 mtr)",
    "category": "Pipa",
    "subCategory": "Pipa Selang",
    "type": "20 mm Blue",
    "merk": "Westpex",
    "satuan": "roll",
    "ukuran": "50 mtr",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Galvanis 1 1/2inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Galvanis",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "1 1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Galvanis 3inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Galvanis",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Galvanis 4inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Galvanis",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Hitam 2inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Hitam",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Hitam 3inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Hitam",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa Hitam 4inch",
    "category": "Pipa",
    "subCategory": "Besi",
    "type": "Hitam",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Intilon 1/2inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Intilon",
    "satuan": "btg",
    "ukuran": "1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Intilon 1inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Intilon",
    "satuan": "btg",
    "ukuran": "1inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Intilon 3/4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Intilon",
    "satuan": "btg",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Pralon 1/2inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Pralon",
    "satuan": "btg",
    "ukuran": "1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Pralon 3/4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Pralon",
    "satuan": "btg",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 1 1/2inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "1 1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 1 1/4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "1 1/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 1inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "1inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 2inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 3/4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 3inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type AW Rucika 4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "AW",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type D Intilon 1 1/4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "D",
    "merk": "Intilon",
    "satuan": "btg",
    "ukuran": "1 1/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type D Intilon 3inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "D",
    "merk": "Intilon",
    "satuan": "btg",
    "ukuran": "3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type D Rucika 3inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "D",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pipa PVC type D Rucika 4inch",
    "category": "Pipa",
    "subCategory": "PVC",
    "type": "D",
    "merk": "Rucika",
    "satuan": "btg",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Plastik Cor; 2000x6300 mm",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Plastic cor",
    "merk": "-",
    "satuan": "roll",
    "ukuran": "2000x6300 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Plug Rucika 1/2inch",
    "category": "Acc Pipa",
    "subCategory": "Plug",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Pompa Air ex. Sanyo; PDH405JP",
    "category": "Pompa",
    "subCategory": "Air",
    "type": "PDH405JP",
    "merk": "Sanyo",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Pompa Submersible ex. Grunfos; 500 watt",
    "category": "Pompa",
    "subCategory": "Air",
    "type": "Submersible 500watt",
    "merk": "Grunfos",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Rantai Besi",
    "category": "Besi",
    "subCategory": "Rantai",
    "type": "-",
    "merk": "-",
    "satuan": "kg",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Atas Sliding Double Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 40,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Real Bawah Sliding Double Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 668,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Reducer Socket Rucika 1 1/4inch x 3inch",
    "category": "Acc Pipa",
    "subCategory": "Reducer Socket",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "1 1/4inch x 3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Reducer Socket Rucika 3/4inch x 1/2inch",
    "category": "Acc Pipa",
    "subCategory": "Reducer Socket",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "3/4 inch x 1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Reducer Socket Rucika 4inch x 3inch",
    "category": "Acc Pipa",
    "subCategory": "Reducer Socket",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "4inch x 3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Reducer Tee Rucika 3/4inch x 1/2inch",
    "category": "Acc Pipa",
    "subCategory": "Reducer Tee",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "3/4inch x 1/2inch",
    "proyek": "-"
  },
  {
    "namabarang": "Reducer Tee Rucika 4inch x 3inch",
    "category": "Acc Pipa",
    "subCategory": "Reducer Tee",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "4inch x 3inch",
    "proyek": "-"
  },
  {
    "namabarang": "Reducing Elbow ex. Westpex; Blue. T20-16",
    "category": "Acc Pipa",
    "subCategory": "Reducing Elbow",
    "type": "Blue",
    "merk": "Westpex",
    "satuan": "pcs",
    "ukuran": "T20-16",
    "proyek": "-"
  },
  {
    "namabarang": "Reducing Tee ex. Westpex; Blue. T20-16-20",
    "category": "Acc Pipa",
    "subCategory": "Reducing Tee",
    "type": "Blue",
    "merk": "Westpex",
    "satuan": "pcs",
    "ukuran": "T-20-16-20",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Double 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9102,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Atas Sliding Single 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9105,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Double 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9103,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Rel Bawah Sliding Single 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9106,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Residu",
    "category": "Alat Kerja",
    "subCategory": "-",
    "type": "Residu",
    "merk": "-",
    "satuan": "ltr",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Roda Castor + Bracket",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Roda Castor dan Bracket",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Roof Drain INA IF68C3",
    "category": "Acc Atap",
    "subCategory": "Roof Drain",
    "type": "IF68C3",
    "merk": "INA",
    "satuan": "bh",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Roof Drain ONDA",
    "category": "Acc Atap",
    "subCategory": "Roof Drain",
    "type": "-",
    "merk": "ONDA",
    "satuan": "bh",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Roofing CSK 3.5cm",
    "category": "Baut",
    "subCategory": "Roofing",
    "type": "CSK",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "3.5 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Roofing Karet Uk. 10cm",
    "category": "Baut",
    "subCategory": "Roofing",
    "type": "Karet",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "10 cm",
    "proyek": "-"
  },
  {
    "namabarang": "Seal Tape Onda 1/2 inch",
    "category": "Acc Pipa",
    "subCategory": "Seal Tape",
    "type": "-",
    "merk": "ONDA",
    "satuan": "bh",
    "ukuran": "2-Jan",
    "proyek": "-"
  },
  {
    "namabarang": "Semen Instan PRO-869 Plaster Finish Coat (40 kg). Powerbond",
    "category": "Semen",
    "subCategory": "Semen Instan",
    "type": "Pro-869",
    "merk": "Powerbond",
    "satuan": "sak",
    "ukuran": "40 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Semen Instan PRO-889 Thin Bed Mortar (40 kg). Powerbond",
    "category": "Semen",
    "subCategory": "Semen Instan",
    "type": "Pro-889",
    "merk": "Powerbond",
    "satuan": "sak",
    "ukuran": "40 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Semen Nat PRO-678 Tile Grout Unsanded (1 kg). Powerbond",
    "category": "Semen",
    "subCategory": "Semen Nat",
    "type": "Pro-678",
    "merk": "Powerbond",
    "satuan": "sak",
    "ukuran": "1 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Semen PC (40 kg). Merah Putih",
    "category": "Semen",
    "subCategory": "PC",
    "type": "-",
    "merk": "Merah Putih",
    "satuan": "sak",
    "ukuran": "40 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Semen PC (40 kg). Padang",
    "category": "Semen",
    "subCategory": "PC",
    "type": "-",
    "merk": "Padang",
    "satuan": "sak",
    "ukuran": "40 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Semen PC (40 kg). Rajawali",
    "category": "Semen",
    "subCategory": "PC",
    "type": "-",
    "merk": "Rajawali",
    "satuan": "sak",
    "ukuran": "40 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Seng Gelombang 80x180",
    "category": "Atap",
    "subCategory": "Seng",
    "type": "Gelombang",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank Induro BF-06 kapasitas 2145 L",
    "category": "Septictank",
    "subCategory": "-",
    "type": "BF-06",
    "merk": "Induro",
    "satuan": "unit",
    "ukuran": "2145 L",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank kapasitas 0.75 m3. Mitra Sarana",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Mitra Sarana",
    "satuan": "set",
    "ukuran": "0.75 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank kapasitas 0.75 m3. Toya Fiberglass",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Toya Fiberglass",
    "satuan": "set",
    "ukuran": "0.75 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank kapasitas 1 m3. Mitra Sarana",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Mitra Sarana",
    "satuan": "set",
    "ukuran": "1 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank kapasitas 1 m3. Toya Fiberglass",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Toya Fiberglass",
    "satuan": "set",
    "ukuran": "1 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank Toya Fiberglass kapasitas 0.75 m3",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Toya Fiberglass",
    "satuan": "unit",
    "ukuran": "0.75 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Septictank Toya Fiberglass kapasitas 1 m3",
    "category": "Septictank",
    "subCategory": "-",
    "type": "-",
    "merk": "Toya Fiberglass",
    "satuan": "unit",
    "ukuran": "1 m3",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set American Standard F063E012",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "F063E012",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set American Standard FF1-CN521H00000059",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "FF1-CN521H00000059",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set American Standard FFAST603",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "FFAST603",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set American Standard FFAST604-701500BF0",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "FFAST604-701500BF0",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set Meridian F1021C",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "F1021C",
    "merk": "Meridian",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set TOTO TX402SP",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "TX402SP",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Set TOTO TX423SN",
    "category": "Sanitair",
    "subCategory": "Shower Set",
    "type": "TX423SN",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Spray American Standard 404 F062H007",
    "category": "Sanitair",
    "subCategory": "Shower Spray",
    "type": "404 F062H007",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Spray American Standard 404 FFTP404-WTFB0",
    "category": "Sanitair",
    "subCategory": "Shower Spray",
    "type": "404 FFTP404-WTFB0",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Spray American Standard FFTP404-CHFB0",
    "category": "Sanitair",
    "subCategory": "Shower Spray",
    "type": "FFTP404-CHFB0",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Spray TOTO THX20NBPIV",
    "category": "Sanitair",
    "subCategory": "Shower Spray",
    "type": "THX20NBPIV",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Shower Spray TOTO TX403SB PIV",
    "category": "Sanitair",
    "subCategory": "Shower Spray",
    "type": "TX403SB PIV",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 3.5 cm 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5564,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Skoneng Pintu 5 cm 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 5565,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Soap Dispenser",
    "category": "Sanitair",
    "subCategory": "Soap Dispenser",
    "type": "-",
    "merk": "-",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Spidol",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Spidol",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Staples",
    "category": "Alat Kerja",
    "subCategory": "ATK",
    "type": "Staples",
    "merk": "-",
    "satuan": "pcs",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Sticker Sandblast",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Sticker Sandblast",
    "merk": "-",
    "satuan": "m2",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Duduk 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 1829,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Casement Tempel 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 8130,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Stoper Kaki 2 Karet 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3134,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tali Ijuk",
    "category": "Lain-Lain",
    "subCategory": "-",
    "type": "Tali Ijuk",
    "merk": "-",
    "satuan": "m3",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Tee Rucika 3/4inch",
    "category": "Acc Pipa",
    "subCategory": "Tee",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "3/4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Tee Rucika 4inch",
    "category": "Acc Pipa",
    "subCategory": "Tee",
    "type": "-",
    "merk": "Rucika",
    "satuan": "pcs",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Tee Westpex Blue. T20",
    "category": "Acc Pipa",
    "subCategory": "Tee",
    "type": "Blue",
    "merk": "Westpex",
    "satuan": "pcs",
    "ukuran": "T20",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 6 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Lipat 8 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4398,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Engsel Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2398,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9054,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kait Sliding Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 36,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 6 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Karet Pintu Lipat 8 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4001,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 6 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "6 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 5 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Btg",
    "ukuran": "8 cm x 5 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALCOMEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALEXINDO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "ALKO",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Kunci Polos Pintu Lipat 8 cm x 6 m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4002,
    "merk": "FORTA",
    "satuan": "Unit",
    "ukuran": "8 cm x 6 m",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Mohair Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2001,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Polos Pintu Swing 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 2002,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.30 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Double Sliding Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 39,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Double 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9104,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9108,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Samping Sliding Single Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 34,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 4.4m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 9055,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tiang Sliding Ek 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 35,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Triplek tebal 12 mm",
    "category": "Plywood",
    "subCategory": "Triplek",
    "type": "Tebal",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "12 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Triplek tebal 3 mm",
    "category": "Plywood",
    "subCategory": "Triplek",
    "type": "Tebal",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "3 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Triplek tebal 9 mm",
    "category": "Plywood",
    "subCategory": "Triplek",
    "type": "Tebal",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "9 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Got M/Infill 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 555,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 412,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup M 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 562,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 411,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Rata 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 561,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Window Wall 4inch (77.20) 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4895,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 415,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "3inch x 1.5inch x 1 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Tutup Z 4inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 554,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "4inch x 1.75inch x 1mm",
    "proyek": "-"
  },
  {
    "namabarang": "Urinoir INA U114N",
    "category": "Sanitair",
    "subCategory": "Urinoir",
    "type": "U114N",
    "merk": "INA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Urinoir TOTO U57M",
    "category": "Sanitair",
    "subCategory": "Urinoir",
    "type": "U57M",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Ushape uPVC. GL10 (6x10x2000 mm)",
    "category": "Acc Pipa",
    "subCategory": "PVC",
    "type": "Ushape GL10",
    "merk": "-",
    "satuan": "btg",
    "ukuran": "6x10x2000 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Wastafel Set American Standard Studio 45",
    "category": "Sanitair",
    "subCategory": "Wastafel Set",
    "type": "Studio 45",
    "merk": "American Standard",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Wastafel Set INA L10AG",
    "category": "Sanitair",
    "subCategory": "Wastafel Set",
    "type": "L10AG",
    "merk": "INA",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Wastafel Set TOTO L652D",
    "category": "Sanitair",
    "subCategory": "Wastafel Set",
    "type": "L65D",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Wastafel Set TOTO LW211CJ",
    "category": "Sanitair",
    "subCategory": "Wastafel Set",
    "type": "LW211CJ",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Wastafel Set TOTO LW640NCJ",
    "category": "Sanitair",
    "subCategory": "Wastafel Set",
    "type": "LW640NCJ",
    "merk": "TOTO",
    "satuan": "unit",
    "ukuran": "-",
    "proyek": "-"
  },
  {
    "namabarang": "Water Meter 4inch",
    "category": "Acc Pipa",
    "subCategory": "Water Meter",
    "type": "-",
    "merk": "-",
    "satuan": "bh",
    "ukuran": "4inch",
    "proyek": "-"
  },
  {
    "namabarang": "Water Tank Penguin TB200. 2000 L",
    "category": "Sanitair",
    "subCategory": "Water Tank",
    "type": "TB200",
    "merk": "Penguin",
    "satuan": "unit",
    "ukuran": "2000 L",
    "proyek": "-"
  },
  {
    "namabarang": "Waterproofing AM 100 Flexible Cementitious Waterproofing (25 kg)",
    "category": "Cat",
    "subCategory": "Waterproofing",
    "type": "AM 100",
    "merk": "Propan",
    "satuan": "set",
    "ukuran": "25 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Waterproofing AM 122 Cementitious Waterproofing (25 kg)",
    "category": "Cat",
    "subCategory": "Waterproofing",
    "type": "AM 122",
    "merk": "Propan",
    "satuan": "set",
    "ukuran": "25 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Waterproofing SikaTop 107 Seal ID (25 kg)",
    "category": "Cat",
    "subCategory": "Waterproofing",
    "type": "SikaTop 107",
    "merk": "Sika",
    "satuan": "set",
    "ukuran": "25 kg",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch (7 X 3 cm) 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 3893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 3inch 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 38933,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Coklat ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Coklat ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Coklat ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Coklat FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Gray FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Hitam ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Hitam ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Hitam ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Hitam FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Putih ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Putih ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Putih ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Putih FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Silver ALCOMEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALCOMEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Silver ALEXINDO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALEXINDO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Silver ALKO",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "ALKO",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Window Wall 4inch (101.60x44.45) 6m Silver FORTA",
    "category": "Kusen",
    "subCategory": "Aluminium",
    "type": 4893,
    "merk": "FORTA",
    "satuan": "btg",
    "ukuran": "1.05 mm",
    "proyek": "-"
  },
  {
    "namabarang": "Wiremesh M5",
    "category": "Besi",
    "subCategory": "Wiremesh",
    "type": "wire",
    "merk": "wire",
    "satuan": "lbr",
    "ukuran": "M5",
    "proyek": "-"
  },
  {
    "namabarang": "Wiremesh M6",
    "category": "Besi",
    "subCategory": "Wiremesh",
    "type": "-",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "M6",
    "proyek": "-"
  },
  {
    "namabarang": "Wiremesh M8",
    "category": "Besi",
    "subCategory": "Wiremesh",
    "type": "-",
    "merk": "-",
    "satuan": "lbr",
    "ukuran": "M8",
    "proyek": "-"
  }
]
*/

const API_HOST = "http://localhost:8080"; 
//const API_HOST = "https://dbsolution.herokuapp.com"

//master barang
async function createBarang(barang) {
    const response = await axios.post(API_HOST + "/api/masterBarang", barang);
  
    return response.data;
}

async function getAllMasterBarang(){
    const response = await axios.get(API_HOST + "/api/masterBarang");  

    return response.data;
}

async function updateMasterBarang(barang){
    const response = await axios.put(API_HOST + "/api/masterBarang/update", barang);

    return response.data;
}

async function checkMasterBarang(namabarang){
    const response = await axios.get(API_HOST + "/api/masterBarang/check", {params:{namabarang}});

    return response.data;
}

async function getMasterBarangByName(namabarang){
    const response = await axios.get(API_HOST + `/api/masterBarang/search/${namabarang}`);

    return response.data;
}

//barang masuk

// add 1 barang doang
async function addBarangMasuk(barang) {
    const response = await axios.post(API_HOST + "/api/barangMasuk/addBarangMasuk", barang);
  
    return response.data;
}
async function getSuratJalan(noSuratJalan1, noSuratJalan2){
    const response = await axios.get(API_HOST + "/api/barangMasuk/getSuratJalan", {params:{noSuratJalan1, noSuratJalan2}});

    return response.data;
}

// add banyak barang sekaligus (yg dipake ini)
async function addBanyakBarangMasuk(barang) {
    const response = await axios.post(API_HOST + "/api/barangMasuk/addBanyak", barang);
  
    return response.data;
}

async function getAllBarangMasuk(){
    const response = await axios.get(API_HOST + "/api/barangMasuk/listBarangMasuk");

    return response.data;
}

async function getBarangMasukPO(namabarang){
    const response = await axios.get(API_HOST + "/api/barangMasuk/getPO", {params:{namabarang}});

    return response.data;
}

//barang sisa (gk pake)
async function addBarangSisa(barang) {
    const response = await axios.post(API_HOST + "/api/barangSisa/addbarangSisa", barang);
  
    return response.data;
}

async function getAllBarangSisa(){
    const response = await axios.get(API_HOST + "/api/barangSisa/listBarangSisa");

    return response.data;
}

/*async function getBarangMasukByName(namabarang){
    const response = await axios.get(API_HOST + "/api/barangMasuk/", namabarang);

    return response.data;
}
*/

//barang keluar
async function addBarangKeluar(barang) {
    const response = await axios.post(API_HOST + "/api/barangKeluar", barang);
  
    return response.data;
}

async function getAllBarangKeluar(){
    const response = await axios.get(API_HOST + "/api/barangKeluar");

    return response.data;
}

//inventory
//hanya ini yg dipake
async function getInventory(){
    const response = await axios.get(API_HOST + "/api/inventory/seeInventory");

    return response.data;
}

// yg inventory ini udh gk pake
async function getinventoryVPCA(){
    const response = await axios.get(API_HOST + "/api/inventory/vanyaParkClusterAzura");

    return response.data;
}


async function getinventoryKKC(){
    const response = await axios.get(API_HOST + "/api/inventory/kantorKeluarahanCilenggang");

    return response.data;
}


async function getinventoryGL(){
    const response = await axios.get(API_HOST + "/api/inventory/gudangLengkong");

    return response.data;
}


async function getinventoryGS(){
    const response = await axios.get(API_HOST + "/api/inventory/gudangSerpong");

    return response.data;
}

async function getinventoryKCN(){
    const response = await axios.get(API_HOST + "/api/inventory/kanaparkClusterNobu");

    return response.data;
}

async function getinventorySLA16(){
    const response = await axios.get(API_HOST + "/api/inventory/serpongLagoonA16");

    return response.data;
}

async function getinventoryGC(){
    const response = await axios.get(API_HOST + "/api/inventory/gateCluster");

    return response.data;
}

async function newInventory(barang){
    const response = await axios.post(API_HOST + "/api/inventory/", barang);

    return response.data;
}

async function findInventory(namabarang, proyek){
    const response = await axios.get(API_HOST + "/api/inventory/find", {params:{namabarang, proyek}});

    return response.data;
}

async function findInventoryVPCA(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findVanyaParkClusterAzura", {params:{namabarang}});

    return response.data;
}

async function findInventoryKKC(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findKantorKelurahanCilenggang", {params:{namabarang}});

    return response.data;
}
async function findInventoryGS(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findGudangSerpong", {params:{namabarang}});

    return response.data;
}
async function findInventoryGL(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findGudangLengkong", {params:{namabarang}});

    return response.data;
}
async function findInventoryKCN(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findKanaparkClusterNobu", {params:{namabarang}});

    return response.data;
}
async function findInventoryGC(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findGateCluster", {params:{namabarang}});

    return response.data;
}async function findInventorySLA16(namabarang){
    const response = await axios.get(API_HOST + "/api/inventory/findSerpongLagoonA16", {params:{namabarang}});

    return response.data;
}
async function inventoryMasuk(barang){
    const response = await axios.put(API_HOST + "/api/inventory/inventoryMasuk", barang);

    return response.data;
}

async function inventoryKeluar(barang){
    const response = await axios.put(API_HOST + "/api/inventory/inventoryKeluar", barang);

    return response.data;
}

//history
async function getHistory(){
    const response = await axios.get(API_HOST + "/api/history/list");

    return response.data;
}

async function addHistory(barang){
    const response = await axios.post(API_HOST + "/api/history/addHistory", barang);

    return response.data;
}

//user
async function getUser(ID, password){
    const response = await axios.get(API_HOST + "/api/users/login", {params: {ID, password}});

    return response.data;
}
/*async function getUser(user){
    const response = await axios.get(API_HOST + "/api/user/login", user);

    return response.data;
}*/
async function register(user){
    const response = await axios.post(API_HOST + "/api/users", user);

    return response.data;
}

async function userList(){
    const response = await axios.get(API_HOST + "/api/users");

    return response.data;
}

async function updateUser(user){
    const response = await axios.put(API_HOST + "/api/users/", user);
    return response.data;
}

//purchasing
async function seeAllPurchasing(){
    const response = await axios.get(API_HOST + "/api/purchasing");

    return response.data;
}

async function addPurchasing(barang){
    const response = await axios.post(API_HOST + "/api/purchasing", barang);

    return response.data;
}
async function getKodePO(){
    const response = await axios.get(API_HOST + "/api/purchasing/getPO");

    return response.data;
}


async function getInfo(barang){
    const response = await axios.get(API_HOST + "/api/purchasing/getInfo", barang);

    return response.data;
}

//activity
async function getAllActivity(){
    const response = await axios.get(API_HOST + "/api/activity/getActivity");

    return response.data;
}

async function seeAllActivity(){
    const response = await axios.get(API_HOST + "/api/activity");

    return response.data;
}

async function addActivityMasuk(activity){
    const response = await axios.post(API_HOST + "/api/activity/addActivityMasuk", activity);

    return response.data
}

async function addActivityKeluar(activity){
    const response = await axios.post(API_HOST + "/api/activity/addActivityKeluar", activity);

    return response.data
}

async function addActivitySisa(activity){
    const response = await axios.post(API_HOST + "/api/activity/addActivitySisa", activity);

    return response.data
}

async function addActivityPurchasing(activity){
    const response = await axios.post(API_HOST + "/api/activity/addActivityPurchasing", activity);

    return response.data
}

async function addActivityAsset(activity){
    const response = await axios.post(API_HOST + "/api/activity/addActivityAsset", activity);

    return response.data
}

//supplier
async function addSupplier(supplier){
    const response = await axios.post(API_HOST + "/api/supplier", supplier);

    return response.data
}


async function getAllSupplier(){
    const response = await axios.get(API_HOST + "/api/supplier");

    return response.data
}

async function selectSupplier(namaSupplier){
    const response = await axios.get(API_HOST + "/api/supplier/select", {params: {namaSupplier}});

    return response.data;
}

async function updateSupplier(supplier){
    const response = await axios.put(API_HOST + "/api/supplier", supplier);

    return response.data;
}

//proyek
async function seeAllProyek(){
    const response = await axios.get(API_HOST + "/api/proyek");

    return response.data;
}

//ini utk budget bukan outstanding!
async function addOutstanding(barang){
    const response = await axios.post(API_HOST + "/api/outstanding", barang);

    return response.data;
}

async function seeAllOutstanding(){
    const response = await axios.get(API_HOST + "/api/outstanding");

    return response.data;
}

async function selectOutstanding(barang){
    const response = await axios.get(API_HOST + "/api/outstanding/select", barang);

    return response.data;
}

async function updateOutstanding(barang){
    const response = await axios.put(API_HOST + "/api/outstanding/update", barang);

    return response.data;
}

//asset
async function addAsset(asset){
    const response = await axios.post(API_HOST + "/api/asset", asset);

    return response.data;
}

async function seeAllAsset(){
    const response = await axios.get(API_HOST + "/api/asset");

    return response.data;
}

async function findAsset(nomor){
    const response = await axios.get(API_HOST + "/api/asset/find", {params:{nomor}});

    return response.data;
}

async function updateAsset(asset){
    const response = await axios.put(API_HOST + "/api/asset/update", asset);

    return response.data;
}

//satuan
async function getAllSatuan(){
    const response = await axios.get(API_HOST + "/api/satuan");

    return response.data;
}

//saving data locally
function setSelectedProyek(proyek){
    sessionStorage.setItem("proyek", proyek);
}

function getSelectedProyek(){
    return sessionStorage.getItem("proyek");
}

function setIsLogin(){
    sessionStorage.setItem("user", true);
}

function setLogOut(){
    sessionStorage.clear();
}

function setUserName(username){
    sessionStorage.setItem("username", username );
}

function getUserName() {
    return JSON.parse(sessionStorage.getItem("username"));
}

function getLogin(){
    return sessionStorage.getItem("user");
}

function setRole(role){
    sessionStorage.setItem("role", role);
}

function getRole(){
    return sessionStorage.getItem("role");
}

//RAP
async function getAllRAP(){
    const response = await axios.get(API_HOST + "/api/RAP");  

    return response.data;
}

async function addRAP(barang){
    const response = await axios.post(API_HOST + "/api/RAP", barang);  

    return response.data;
}

export{
    createBarang, getAllMasterBarang, getMasterBarangByName, checkMasterBarang, updateMasterBarang,
    addBarangMasuk, getAllBarangMasuk, addBarangSisa,getAllBarangSisa, getBarangMasukPO, addBanyakBarangMasuk, getSuratJalan,
    addBarangKeluar, getAllBarangKeluar,
    getinventoryVPCA, getinventoryKKC, getinventoryGC, getinventoryGL, getinventoryGS, getinventoryKCN, getinventorySLA16, getInventory,
    inventoryKeluar, inventoryMasuk, newInventory, 
    findInventoryKKC, findInventoryVPCA, findInventoryGC, findInventoryGL, findInventoryGS, findInventoryKCN, findInventorySLA16, findInventory,
    getHistory, addHistory,
    getUser, register, userList, setUserName, getUserName, updateUser,
    seeAllPurchasing, addPurchasing, getKodePO, getInfo,
    setIsLogin, getLogin, setLogOut, setRole, getRole,
    getAllActivity, seeAllActivity, addActivityKeluar, addActivityMasuk, addActivitySisa, addActivityAsset, addActivityPurchasing,
    seeAllProyek, setSelectedProyek, getSelectedProyek,
    addSupplier, getAllSupplier, selectSupplier, updateSupplier,
    seeAllOutstanding, addOutstanding, selectOutstanding, updateOutstanding,
    addAsset, seeAllAsset, findAsset, updateAsset,
    getAllSatuan,
    getAllRAP, addRAP
}  
