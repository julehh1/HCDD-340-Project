const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#homeCity");
const styleInput = document.querySelector("#travelStyle");
const title = document.querySelector("#profileTitle");
const status = document.querySelector("#status");
const saveBtn = document.querySelector("#saveProfile");
const clearBtn = document.querySelector("#clearProfile");

const updateTitle = (name) => {
    if (name) {
        title.textContent = `Welcome back, ${name}`;
    } else {
        title.textContent = "Manage your account";
    }
};

const saveProfile = () => {
    const profile = {
        name: nameInput.value,
        homeCity: cityInput.value,
        travelStyle: styleInput.value
    };

    localStorage.setItem("profile", JSON.stringify(profile));
    updateTitle(profile.name);
    status.textContent = "Profile saved!";
};

const loadProfile = () => {
    const saved = localStorage.getItem("profile");

    if (saved !== null) {
        const profile = JSON.parse(saved);
        nameInput.value = profile.name;
        cityInput.value = profile.homeCity;
        styleInput.value = profile.travelStyle;
        updateTitle(profile.name);
    }
};

const clearProfile = () => {
    localStorage.removeItem("profile");
    nameInput.value = "";
    cityInput.value = "";
    styleInput.value = "adventure";
    updateTitle("");
    status.textContent = "Profile cleared.";
};

saveBtn.addEventListener("click", saveProfile);
clearBtn.addEventListener("click", clearProfile);

loadProfile();