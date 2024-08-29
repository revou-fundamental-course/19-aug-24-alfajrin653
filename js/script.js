// Menampilkan pesan selamat datang
document.addEventListener('DOMContentLoaded', function() {
    let name = prompt("Masukkan nama Anda:");
    document.getElementById('welcomeMessage').textContent = `Hi ${name}, Welcome To Website`;
});

// Validasi Formulir dan Menampilkan Hasil
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById('message').value;

    let result = `
        <p>Nama: ${name}</p>
        <p>Tanggal Lahir: ${dob}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Pesan: ${message}</p>
    `;

    document.getElementById('messageResult').innerHTML = result;
});
