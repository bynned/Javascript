window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    
	let height = parseInt(document
			.querySelector("#height").value);
	let mass = parseInt(document
			.querySelector("#mass").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (mass === "" || isNaN(mass))
		result.innerHTML = "Provide a valid mass!";

	else {

		let bmi = (mass / ((height * height)
							/ 10000)).toFixed(2);

		if (bmi < 16) result.innerHTML =
			`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Severe Thinness`;

		else if (bmi >= 16.01 && bmi < 17)
			result.innerHTML =
				`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Moderate Thinness`;

        else if (bmi >= 17.01 && bmi < 18.5)
		    result.innerHTML =
		        `BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Mild Thinness`;

        else if (bmi >= 18.6 && bmi < 25)
			result.innerHTML =
				`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Normal`;

        else if (bmi >= 25.01 && bmi < 30)
			result.innerHTML =
				`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Overweight`;

        else if (bmi >= 30.01 && bmi < 35)
			result.innerHTML =
				`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Obese Class I`;

        else if (bmi >= 35.01 && bmi < 40)
			result.innerHTML =
				`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Obese Class II`;
        
		else result.innerHTML =
			`BMI: <span>${bmi}</span> kg/m<sup>2</sup> = Obese Class III`;
	}
}