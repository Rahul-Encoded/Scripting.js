let passwordHistory = []; // Array to store generated passwords

function genPwd() {
    const lwr = "abcdefghijklmnopqrstuvwxyz";
    const cap = lwr.toUpperCase();
    const num = "1234567890";
    const sym = "!@#$%^&*()_-+=";

    const lengthpwd = Number(document.getElementById("length").value);
    const inclwr = document.getElementById("inclwr").checked;
    const inccap = document.getElementById("inccap").checked;
    const incnum = document.getElementById("incnum").checked;
    const incsym = document.getElementById("incsym").checked;

    let allowedchars = "";
    let pwd = "";

    allowedchars += inclwr ? lwr : "";
    allowedchars += inccap ? cap : "";
    allowedchars += incnum ? num : "";
    allowedchars += incsym ? sym : "";

    if (lengthpwd < 1) {
        alert("PASSWORD LENGTH MUST BE AT LEAST 1!");
        return;
    }

    if (allowedchars.length === 0) {
        alert("AT LEAST 1 SET OF CHARACTERS NEEDS TO BE SELECTED!");
        return;
    }

    for (let i = 0; i < lengthpwd; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        pwd += allowedchars[randomIndex];
    }

    // Store the generated password in the history
    passwordHistory.push(pwd);

    const generatedPwd = document.getElementById("pwd");
    generatedPwd.innerHTML = `Generated password: ${pwd} <button type="button" id="copyBtn">📋</button>`;

    // Attach the copy event listener to the new button
    document.getElementById("copyBtn").onclick = function() {
        copyToClipboard(pwd);
    };

    // Optionally, display the password history
    displayPasswordHistory();
}

function copyToClipboard(password) {
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy: " + err);
    });
}

function displayPasswordHistory() {
    const historyContainer = document.getElementById("passwordHistory");

    if (!historyContainer) {
        const newDiv = document.createElement("div");
        newDiv.id = "passwordHistory";
        document.body.appendChild(newDiv);
    }

    const historyList = passwordHistory.map((pwd, index) => `<p>${index + 1}: ${pwd}</p>`).join("");
    document.getElementById("passwordHistory").innerHTML = `<h3>Password History:</h3>${historyList}`;
}
