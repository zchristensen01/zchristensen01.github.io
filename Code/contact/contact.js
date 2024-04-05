document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event triggered");

    if ("Notification" in window) {    
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                new Notification("Welcome", {
                    body: "Please do not insert any personal information below. It is purely satirical."
                });
            }
        });
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const ssn = document.getElementById("SSN").value;
        const ccn = document.getElementById("CCN").value;
        const expDate = document.getElementById("expDate").value;
        const cvc = document.getElementById("CVC").value;
        const optIn = document.getElementById("optIn").checked;

        const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
        const ccnPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvcPattern = /^\d{3}$/;

        if (!name || !email || !message || !ssn || !ccn || !expDate || !cvc) {
            alert("Please fill in all required fields.");
            return false;
        }
        if (!ssnPattern.test(ssn)) {
            alert("Please enter a valid Social Security Number (XXX-XX-XXXX).");
            return false;
        }
        if (!ccnPattern.test(ccn)) {
            alert("Please enter a valid Credit Card Number (XXXX-XXXX-XXXX-XXXX).");
            return false;
        }
        if (!expDatePattern.test(expDate)) {
            alert("Please enter a valid Expiry Date (MM/YY).");
            return false;
        }
        if (!cvcPattern.test(cvc)) {
            alert("Please enter a valid CVC (3 digits).");
            return false;
        }
        if (!optIn) {
            alert("Please opt-in to receive emails.");
            return false;
        }

        return true;
    }
});
