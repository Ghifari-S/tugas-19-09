const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const password = "123456"; // Password tetap
let orders = []; // Array untuk menyimpan pesanan
let nextId = 1; // ID unik untuk setiap pesanan

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function login() { 
  let userPassword = await askQuestion('Masukkan password: ');

  if (userPassword === password) {
    console.log("Login berhasil!\n");
    showMenu();
  } else {
    console.log("Password salah, coba lagi.");
    rl.close();
  }
}

async function showMenu() {
  console.log("===== MENU UTAMA =====");
  console.log("1. Buat pesanan baru");
  console.log("2. Lihat semua pesanan");
  console.log("3. Perbarui pesanan");
  console.log("4. Hapus pesanan");
  console.log("5. Keluar");
  console.log("======================");

  const choice = await askQuestion('Pilih opsi: ');
  handleMenu(choice);
}

async function handleMenu(choice) {
  switch (choice) {
    case '1':
      await createOrder();
      break;
    case '2':
      readOrders();
      break;
    case '3':
      await updateOrder();
      break;
    case '4':
      await deleteOrder();
      break;
    case '5':
      console.log("Keluar dari aplikasi...");
      rl.close();
      return;
    default:
      console.log("Pilihan tidak valid.");
  }
  showMenu();
}

async function createOrder() {
  const customerName = await askQuestion('Masukkan nama pelanggan: ');
  const productName = await askQuestion('Masukkan nama produk: ');
  const quantity = await askQuestion('Masukkan jumlah: ');

  const order = {
    id: nextId++,
    customerName,
    productName,
    quantity
  };

  orders.push(order);
  console.log("Pesanan berhasil dibuat!");
}

function readOrders() {
  console.log("Daftar Pesanan:");
  orders.forEach(order => {
    console.log(`ID: ${order.id}, Pelanggan: ${order.customerName}, Produk: ${order.productName}, Jumlah: ${order.quantity}`);
  });
}

async function updateOrder() {
  const id = parseInt(await askQuestion('Masukkan ID pesanan yang ingin diperbarui: '));
  const order = orders.find(order => order.id === id);

  if (order) {
    order.customerName = await askQuestion(`Masukkan nama pelanggan baru (sebelumnya: ${order.customerName}): `);
    order.productName = await askQuestion(`Masukkan nama produk baru (sebelumnya: ${order.productName}): `);
    order.quantity = await askQuestion(`Masukkan jumlah baru (sebelumnya: ${order.quantity}): `);
    console.log("Pesanan berhasil diperbarui!");
  } else {
    console.log("Pesanan tidak ditemukan.");
  }
}

async function deleteOrder() {
  const id = parseInt(await askQuestion('Masukkan ID pesanan yang ingin dihapus: '));
  const index = orders.findIndex(order => order.id === id);

  if (index !== -1) {
    orders.splice(index, 1);
    console.log("Pesanan berhasil dihapus!");
  } else {
    console.log("Pesanan tidak ditemukan.");
  }
}

login();

// setelah kode node tigas.js akan muncul inputan agar masukkan pass
// jika salah akan relod dan tulis kode node kembai
// jika benar akan muncul teks login berhasil dan keluar 5 pilihan
// jika memilih no 1 maka harus input nama barang yg diinginkan dan jumlahnya
// jika pilih no 2