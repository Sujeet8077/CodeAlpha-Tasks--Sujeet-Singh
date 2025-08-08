const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let imageList = Array.from(images);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    currentIndex = index;
    showImage();
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage();
});

function showImage() {
  lightboxImg.src = imageList[currentIndex].src;
}

// Filtering
const filterButtons = document.querySelectorAll(".filters button");
const galleryItems = document.querySelectorAll(".gallery .image");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");
    galleryItems.forEach(item => {
      item.style.display = category === "all" || item.classList.contains(category)
        ? "block"
        : "none";
    });
  });
});
