const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById("yes-btn").addEventListener("click", () => {
    alert("Yay! ❤️ Can't wait for Valentine's Day with you!");
});
