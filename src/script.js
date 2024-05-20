const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();

// modal pop up
// Tambahkan fungsi untuk membuka pop-up
function openModal(img) {
  const modal = document.getElementById("myModal");
  const fullImg = document.getElementById("fullImg");

  // Tampilkan pop-up
  modal.style.display = "block";
  // Set gambar di dalam pop-up sesuai dengan gambar yang diklik
  fullImg.src = img.src;
  // Batasi scrollbar halaman agar tidak digulir saat pop-up terbuka
  document.body.style.overflow = "hidden";
}

// Dapatkan elemen tombol close
const closeBtn = document.querySelector(".close");

// Tambahkan event listener untuk tombol close
closeBtn.addEventListener("click", function () {
  // Sembunyikan pop-up
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  // Kembalikan scrollbar halaman
  document.body.style.overflow = "auto";
});

// Dapatkan elemen latar belakang hitam (modal)
const modal = document.getElementById("myModal");

// Tambahkan event listener untuk menutup pop-up saat mengklik latar belakang hitam
modal.addEventListener("click", function (event) {
  // Periksa apakah yang diklik adalah latar belakang hitam
  if (event.target === modal) {
    // Sembunyikan pop-up
    modal.style.display = "none";
    // Kembalikan scrollbar halaman
    document.body.style.overflow = "auto";
  }
});
