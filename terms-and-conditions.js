// Toggle visibility for Account Responsibilities
document.getElementById("toggleResponsibilities").addEventListener("click", function() {
    var section = document.getElementById("responsibilitiesSection");
    if (section.style.display === "none") {
        section.style.display = "block";
        this.innerText = "Show Less";
    } else {
        section.style.display = "none";
        this.innerText = "Show More";
    }
});

// Toggle visibility for Adoption Process
document.getElementById("toggleAdoption").addEventListener("click", function() {
    var section = document.getElementById("adoptionSection");
    if (section.style.display === "none") {
        section.style.display = "block";
        this.innerText = "Show Less";
    } else {
        section.style.display = "none";
        this.innerText = "Show More";
    }
});

// Toggle visibility for Fees
document.getElementById("toggleFees").addEventListener("click", function() {
    var section = document.getElementById("feesSection");
    if (section.style.display === "none") {
        section.style.display = "block";
        this.innerText = "Show Less";
    } else {
        section.style.display = "none";
        this.innerText = "Show More";
    }
});

// Toggle visibility for Limitation of Liability
document.getElementById("toggleLiability").addEventListener("click", function() {
    var section = document.getElementById("liabilitySection");
    if (section.style.display === "none") {
        section.style.display = "block";
        this.innerText = "Show Less";
    } else {
        section.style.display = "none";
        this.innerText = "Show More";
    }
});

// Toggle visibility for Changes to Terms
document.getElementById("toggleChanges").addEventListener("click", function() {
    var section = document.getElementById("changesSection");
    if (section.style.display === "none") {
        section.style.display = "block";
        this.innerText = "Show Less";
    } else {
        section.style.display = "none";
        this.innerText = "Show More";
    }
});
