import axios from "axios";

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

async function getNamaMasterBarang(){
    const response = await axios.get(API_HOST + "/api/masterBarang/seeNamaBarang");  

    return response.data;
}

async function updateMasterBarang(barang){
    const response = await axios.put(API_HOST + "/api/masterBarang/update", barang);

    return response.data;
}

// utk cek master barang ada ato gk
async function checkMasterBarang(namabarang){
    const response = await axios.get(API_HOST + "/api/masterBarang/check", {params:{namabarang}});

    return response.data;
}
// untuk pilih master barang berdasarkan PK (tapi mau ganti ke kode barang)
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

async function getAllBarangMasuk(barang){
    const response = await axios.post(API_HOST + "/api/barangMasuk/listBarangMasuk", barang);

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

//barang keluar
async function addBarangKeluar(barang) {
    const response = await axios.post(API_HOST + "/api/barangKeluar", barang);
  
    return response.data;
}

async function getAllBarangKeluar(barang){
    const response = await axios.post(API_HOST + "/api/barangKeluar", barang);

    return response.data;
}

//inventory
//hanya ini yg dipake
async function getInventory(barang){
    const response = await axios.post(API_HOST + "/api/inventory/seeInventory", barang);

    return response.data;
}

async function newInventory(barang){
    const response = await axios.post(API_HOST + "/api/inventory/", barang);

    return response.data;
}

async function findInventory(namabarang, proyek){
    const response = await axios.post(API_HOST + "/api/inventory/find", {params:{namabarang, proyek}});

    return response.data;
}

async function inventoryMasuk(barang){
    const response = await axios.post(API_HOST + "/api/inventory/inventoryMasuk", barang);

    return response.data;
}

async function inventoryKeluar(barang){
    const response = await axios.post(API_HOST + "/api/inventory/inventoryKeluar", barang);

    return response.data;
}

//user
async function getUser(ID, password){
    const response = await axios.get(API_HOST + "/api/users/login", {params: {ID, password}});

    return response.data;
}
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

//activity (kyk log history, klo ada yg add, edit, delete bakalan kecatet)
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

//gk pake dulu
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
    createBarang, getAllMasterBarang, getMasterBarangByName, checkMasterBarang, updateMasterBarang, getNamaMasterBarang,
    addBarangMasuk, getAllBarangMasuk, addBarangSisa,getAllBarangSisa, getBarangMasukPO, addBanyakBarangMasuk, getSuratJalan,
    addBarangKeluar, getAllBarangKeluar,
    getInventory,
    inventoryKeluar, inventoryMasuk, newInventory, 
    findInventory,
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
