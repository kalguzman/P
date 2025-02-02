const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById("yes-btn").addEventListener("click", () => {
    alert("Thank you for accepting the invitation. This is your official invitation to be my valentine's date. Make sure to bring this invitation on the day itself.

We had a very hectic semester, and I would like to make this break memorable and fun by spending a day together. (heart emoji)");
});
