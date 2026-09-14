function startGD() {
    let topic = document.getElementById("topic").value;

    localStorage.setItem("topic", topic);

    window.location.href = "live.html";
}