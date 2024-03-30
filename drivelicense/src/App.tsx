import React from "react";

const App: React.FC = () => {
    const calculateAgeAndVerifyAptitude = () => {
    const currentYearInput = document.getElementById("currentYear") as HTMLInputElement;
    const YearBirthInput = document.getElementById("YearBirth") as HTMLInputElement;
    const resultsElement = document.getElementById("results");

    if (currentYearInput && YearBirthInput && resultsElement) {
        const currentYear = parseInt (currentYearInput.value);
        const YearBirth = parseInt(YearBirthInput.value);


        //Calculate age
        const age = currentYear - YearBirth;

        //Determine elegibility for driver's license
        const status = age >= 18 ? "READY TO GET A DRIVE'S LICENSE" : "NOT ABLE TO GET A DRIVE'S LICENSE";

        //Update results
        resultsElement.innerHTML = `
        <p>________________________________STATUS________________________________________</p>
        <p>Age: ${age} Years Old</p>
        <p>${status}</p>
        <p>_________________________________________________________________________________</p>
        `;
        }
    };
    calculateAgeAndVerifyAptitude();
    return null; // React Components must return a single JSX element, but this app will handle the logic outside of the component
};

export default App;
