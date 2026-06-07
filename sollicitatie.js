const form = document.getElementById("sollicitatieForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const naam = document.getElementById("naam").value;
        const functie = document.getElementById("functie").value;
        const motivatie = document.getElementById("motivatie").value;

        try {
            const response = await fetch(
                "https://orange-rain-97cf.sing4hope.workers.dev/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        naam,
                        functie,
                        motivatie
                    })
                }
            );

            if (response.ok) {
                alert("✅ Sollicitatie succesvol verzonden!");
                form.reset();
            } else {
                alert("❌ Er ging iets mis bij het verzenden.");
                console.error(await response.text());
            }
        } catch (error) {
            alert("❌ Kan geen verbinding maken met de server.");
            console.error(error);
        }
    });
}
