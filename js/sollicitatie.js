const form = document.getElementById("sollicitatieForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            naam: document.getElementById("naam").value,
            leeftijd: document.getElementById("leeftijd").value,
            functie: document.getElementById("functie").value,
            ervaring: document.getElementById("ervaring").value,
            pluspunten: document.getElementById("pluspunten").value,
            minpunten: document.getElementById("minpunten").value,
            motivatie: document.getElementById("motivatie").value
        };

        const response = await fetch("https://orange-rain-97cf.sing4hope.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Sollicitatie verzonden!");
            form.reset();
        } else {
            alert("Er ging iets mis.");
        }
    });
}
