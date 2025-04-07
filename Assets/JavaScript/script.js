//Adicionar imagem no cadastro produto
const imageInput = document.getElementById("image-input");
const uploadBtn = document.getElementById("upload-btn");
const productImage = document.getElementById("product-image");

uploadBtn.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
        alert("Formato de imagem não suportado. Use JPG, PNG, GIF ou WebP.");
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        productImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
});
