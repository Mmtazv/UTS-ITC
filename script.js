// ===== DATA ARTIKEL =====
const articles = [
    {
        title: "Pengereman Kendaraan Melalui Suara",
        summary: "Artikel ini membahas teknologi pengereman kendaraan berbasis suara yang memungkinkan pengemudi mengontrol rem dengan perintah suara. Inovasi ini menawarkan solusi keselamatan, namun menghadapi tantangan seperti gangguan suara. Dengan kecerdasan buatan dan teknologi canggih, pengereman suara berpotensi menjadi fitur kendaraan masa depan.",
        pdf: "article/Pengereman Kendaraan Melalui Suara.pdf" // Path ke file PDF
    },
    {
        title: "STUNTCHECK",
        summary: "Artikel ini membahas StuntCheck, alat deteksi stunting berbasis teknologi yang mempercepat pengecekan status gizi anak. Dengan mengukur berat dan tinggi badan, alat ini menganalisis data dalam waktu 15-20 detik untuk mendeteksi stunting. StuntCheck bertujuan meningkatkan efisiensi, mempercepat deteksi dini, dan memperluas akses pemeriksaan di daerah kurang terlayani, mendukung upaya pencegahan stunting di Indonesia.",
        pdf: "article/STUNTCHECK.pdf" // Path ke file PDF
    },
    {
        title: "Saran Artikel",
        summary: "Isi artikel mu di sini bisa buka contact me jika ingin menaruh artikelmu di sini",
        pdf: "." // Path ke file PDF
    }
];

// ===== MENAMBAHKAN ARTIKEL KE HALAMAN =====
const articleList = document.getElementById("article-list");

articles.forEach(article => {
    const articleItem = document.createElement("div");
    articleItem.classList.add("article-item");

    // Membuat HTML untuk artikel
    articleItem.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <a href="${article.pdf}" target="_blank">Baca PDF</a>
    `;

    articleList.appendChild(articleItem);
});
