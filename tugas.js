const readline = require('readline'); // Mengimpor modul readline untuk input/output

// Membuat antarmuka readline untuk input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const password = "123456"; // Password tetap untuk login
let orders = []; // Array untuk menyimpan pesanan
let nextId = 1; // ID unik untuk setiap pesanan

// Fungsi untuk menanyakan pertanyaan dan mendapatkan jawaban dari pengguna
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Fungsi untuk proses login
async function login() {
  let userPassword = await askQuestion('Masukkan password: '); // Meminta pengguna memasukkan password

  if (userPassword === password) { // Memeriksa apakah password benar
    console.log("Login berhasil!\n");
    showMenu(); // Menampilkan menu utama jika login berhasil
  } else {
    console.log("Password salah, coba lagi."); // Menampilkan pesan jika password salah
    rl.close(); // Menutup antarmuka readline
  }
}

// Fungsi untuk menampilkan menu utama
async function showMenu() {
  console.log("===== MENU UTAMA =====");
  console.log("1. Buat pesanan baru");
  console.log("2. Lihat semua pesanan");
  console.log("3. Perbarui pesanan");
  console.log("4. Hapus pesanan");
  console.log("5. Keluar");
  console.log("======================");

  const choice = await askQuestion('Pilih opsi: '); // Meminta pengguna memilih opsi
  handleMenu(choice); // Menangani pilihan menu
}

// Fungsi untuk menangani pilihan menu
async function handleMenu(choice) {
  switch (choice) {
    case '1':
      await createOrder(); // Memanggil fungsi untuk membuat pesanan baru
      break;
    case '2':
      readOrders(); // Memanggil fungsi untuk melihat semua pesanan
      break;
    case '3':
      await updateOrder(); // Memanggil fungsi untuk memperbarui pesanan
      break;
    case '4':
      await deleteOrder(); // Memanggil fungsi untuk menghapus pesanan
      break;
    case '5':
      console.log("Keluar dari aplikasi...");
      rl.close(); // Menutup antarmuka readline
      return;
    default:
      console.log("Pilihan tidak valid."); // Menampilkan pesan jika pilihan tidak valid
  }
  showMenu(); // Menampilkan menu utama lagi setelah menangani pilihan
}

// Fungsi untuk membuat pesanan baru
async function createOrder() {
  const customerName = await askQuestion('Masukkan nama pelanggan: '); // Meminta nama pelanggan
  const productName = await askQuestion('Masukkan nama produk: '); // Meminta nama produk
  const quantity = await askQuestion('Masukkan jumlah: '); // Meminta jumlah produk

  // Membuat objek pesanan baru
  const order = {
    id: nextId++, // Menetapkan ID unik
    customerName,
    productName,
    quantity
  };

  orders.push(order); // Menambahkan pesanan ke array orders
  console.log("Pesanan berhasil dibuat!"); // Menampilkan pesan sukses
}

// Fungsi untuk melihat semua pesanan
function readOrders() {
  console.log("Daftar Pesanan:");
  orders.forEach(order => {
    console.log(`ID: ${order.id}, Pelanggan: ${order.customerName}, Produk: ${order.productName}, Jumlah: ${order.quantity}`);
  });
}

// Fungsi untuk memperbarui pesanan
async function updateOrder() {
  const id = parseInt(await askQuestion('Masukkan ID pesanan yang ingin diperbarui: ')); // Meminta ID pesanan yang ingin diperbarui
  const order = orders.find(order => order.id === id); // Mencari pesanan berdasarkan ID

  if (order) {
    // Meminta data baru untuk pesanan
    order.customerName = await askQuestion(`Masukkan nama pelanggan baru (sebelumnya: ${order.customerName}): `);
    order.productName = await askQuestion(`Masukkan nama produk baru (sebelumnya: ${order.productName}): `);
    order.quantity = await askQuestion(`Masukkan jumlah baru (sebelumnya: ${order.quantity}): `);
    console.log("Pesanan berhasil diperbarui!"); // Menampilkan pesan sukses
  } else {
    console.log("Pesanan tidak ditemukan."); // Menampilkan pesan jika pesanan tidak ditemukan
  }
}

// Fungsi untuk menghapus pesanan
async function deleteOrder() {
  const id = parseInt(await askQuestion('Masukkan ID pesanan yang ingin dihapus: ')); // Meminta ID pesanan yang ingin dihapus
  const index = orders.findIndex(order => order.id === id); // Mencari indeks pesanan berdasarkan ID

  if (index !== -1) {
    orders.splice(index, 1); // Menghapus pesanan dari array
    console.log("Pesanan berhasil dihapus!"); // Menampilkan pesan sukses
  } else {
    console.log("Pesanan tidak ditemukan."); // Menampilkan pesan jika pesanan tidak ditemukan
  }
}

login(); // Memulai proses login
