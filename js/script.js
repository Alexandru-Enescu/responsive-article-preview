const shareBtn = document.getElementById("share-btn");
const closeBtn = document.getElementById("close-btn");
const figure = document.getElementById("figure");
const footer = document.getElementById("footer");

shareBtn.addEventListener("click", () => {
    figure.style.display = "none";
    footer.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    figure.style.display = "flex";
    footer.style.display = "none"
})

function toggleShareBlock() {
    const shareBlock = document.getElementById("share-container");
    const toggleBtn = document.getElementById("toggle-btn");

    if(shareBlock.classList.contains("lg:flex")) {
        shareBlock.classList.remove("lg:flex");
        toggleBtn.classList.add("bg-[#ecf2f8]");
        toggleBtn.classList.remove("bg-[#9eafc2]");
    } else {
        shareBlock.classList.add("lg:flex");
        toggleBtn.classList.remove("bg-[#ecf2f8]");
        toggleBtn.classList.add("bg-[#9eafc2]");
    }
}