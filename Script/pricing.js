const firstname = document.querySelector("#fname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const planSelect = document.querySelector("#planSelect");

const freePlanSelectionDiv = document.querySelector(".freePlanSelection");
const projectNameFree = document.querySelector("#projectNameFree");
const requestFree = document.querySelector("#sendRequestFreePlan");
// requestFree.disabled = true;
// requestFree.style.cursor = 'not-allowed';

const freePlanDisabled = [firstname, lastname, email, planSelect, projectNameFree];

const annualPlanDiv = document.querySelector(".annualPlanSelection");
const projectNameAnnual = document.querySelector("#projectNameAnnual");
const customDesignSelect = document.querySelector("#customDesign");
const hostingSelect = document.querySelector("#hosting");
const estimatedTimeSelect = document.querySelector("#est");
const requestAnnual = document.querySelector("#sendRequestAnnualPlan");
// requestAnnual.disabled = true;
// requestAnnual.style.cursor = 'not-allowed';

const annualPlanDisabled = [firstname, lastname, email, planSelect, projectNameAnnual, customDesignSelect, hostingSelect, estimatedTimeSelect];
// annualPlanDisabled.forEach((e) => {
//     e.disabled = true;
//     e.style.filter = 'opacity(0.5)';
//     requestAnnual.disabled = true;
//     requestAnnual.style.filter = 'opacity(0.8)';
//     requestAnnual.style.cursor = 'not-allowed';
// })

const invalidName = document.querySelector("#invalidName");
const invalidLastname = document.querySelector("#invalidLastname");
const invalidEmail = document.querySelector("#invalidEmail");
invalidName.style.display = 'none';
invalidLastname.style.display = 'none';
invalidEmail.style.display = 'none';

const validateProjectNameFree = document.querySelector("#validateProjectNameFree");
const validateProjectName = document.querySelector("#validateProjectName");
const validateDesign = document.querySelector("#validateDesign");
const validateHosting = document.querySelector("#validateHosting");
const validateEst = document.querySelector("#validateEst");
validateProjectNameFree.style.display = "none";
validateProjectName.style.display = 'none';
validateDesign.style.display = 'none';
validateHosting.style.display = 'none';
validateEst.style.display = 'none';

const loader = document.querySelector(".loaderDiv");
loader.style.display = 'none';
const modalBtn = document.querySelector(".modal-btn");

function freePlanDisabledFunction() {
    freePlanDisabled.forEach((e) => {
        e.disabled = true;
        e.style.filter = 'opacity(0.5)';
        requestFree.disabled = true;
        requestFree.style.filter = 'opacity(0.8)';
        requestFree.style.cursor = 'not-allowed';
        setTimeout(function() {
            modalBtn.checked = false;
        }, 3000);
    })
}

function annualPlanDisabledFunction() {
    annualPlanDisabled.forEach((e) => {
        e.disabled = true;
        e.style.filter = 'opacity(0.5)';
        requestAnnual.disabled = true;
        requestAnnual.style.filter = 'opacity(0.8)';
        requestAnnual.style.cursor = 'not-allowed';
        setTimeout(function() {
            modalBtn.checked = false;
        }, 3000);
    })
}

function validateFirstName() {
    return firstname.value.length >= 3;
}


function validateLastName() {
    return lastname.value.length >= 3;
}


function validateEmail() {
    return email.value.length >= 13;
}

function validateProjectNameFreeFn() {
    return projectNameFree.value.length >= 3;
}

function validateProjectNameFreeInput() {
    return projectNameAnnual.value.length >= 3;
}


function validateCustomDesign() {
    const selectedOption = customDesignSelect.value;
    return selectedOption === "yes" || selectedOption === "no";
}

function validateHostingFn() {
    const selectedOption = hostingSelect.value;
    return selectedOption === "yes" || selectedOption === "no";
}

function validateEstimatedTime() {
    const selectedOption = estimatedTimeSelect.value;
    return selectedOption === "3-5" || selectedOption === "5-8" || selectedOption === "8 and higher";
}

function validateProjectNameFunction() {
    const selectedOption = planSelect.value;
    if (selectedOption === "free" || selectedOption === "free-pay-as-you-go") {
        return projectNameFree.value.length >= 3;
    } else if (selectedOption === "annualPlan" || selectedOption === "annualPlanPremium") {
        return projectNameAnnual.value.length >= 3;
    }
    return false;
}

function validateInputs() {
    const isFirstnameValid = validateFirstName();
    const isLastnameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isProjectNameValid = validateProjectNameFunction();

    invalidName.style.display = isFirstnameValid ? "none" : "block";
    invalidLastname.style.display = isLastnameValid ? "none" : "block";
    invalidEmail.style.display = isEmailValid ? "none" : "block";

    if (planSelect.value === "free" || planSelect.value === "free-pay-as-you-go") {
        validateProjectNameFree.style.display = isProjectNameValid ? "none" : "block";
        validateProjectName.style.display = "none";
        return isFirstnameValid && isLastnameValid && isEmailValid && isProjectNameValid;
    } else if (planSelect.value === "annualPlan" || planSelect.value === "annualPlanPremium") {
        const isCustomDesignValid = validateCustomDesign();
        const isHostingValid = validateHostingFn();
        const isEstimatedTimeValid = validateEstimatedTime();

        validateProjectName.style.display = isProjectNameValid ? "none" : "block";
        validateProjectNameFree.style.display = "none";
        validateDesign.style.display = isCustomDesignValid ? "none" : "block";
        validateHosting.style.display = isHostingValid ? "none" : "block";
        validateEst.style.display = isEstimatedTimeValid ? "none" : "block";

        return isFirstnameValid && isLastnameValid && isEmailValid && isProjectNameValid &&
            isCustomDesignValid && isHostingValid && isEstimatedTimeValid;
    }

    return false;
}

requestFree.addEventListener("click", function(event) {
    event.preventDefault();
    const isValid = validateInputs();
    const notificationSuccess = document.querySelector(".notification");
    const xIcon = document.querySelector(".notification .fa");

    if (isValid) {
        const formData = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            planSelect: planSelect.value,
            projectNameFree: projectNameFree.value,
            projectNameAnnual: "",
            customDesignSelect: customDesignSelect.value,
            hostingSelect: hostingSelect.value,
            estimatedTimeSelect: estimatedTimeSelect.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        loader.style.display = 'block';
        setTimeout(function() {
            notificationSuccess.style.animation = 'noti 4s forwards alternate ease-in';
        }, 4000);
        notificationSuccess.style.animation = '';
        xIcon.addEventListener("click", function() {
            notificationSuccess.style.display = 'none';
        })
        freePlanDisabledFunction();
    } else {
        console.log("Fail");
    }
});

requestAnnual.addEventListener("click", function(event) {
    event.preventDefault();
    const isValid = validateInputs();
    const notificationSuccess = document.querySelector(".notification");
    const xIcon = document.querySelector(".notification .fa");
    if (isValid) {
        const formData = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            planSelect: planSelect.value,
            projectNameFree: "",
            projectNameAnnual: projectNameAnnual.value,
            customDesignSelect: customDesignSelect.value,
            hostingSelect: hostingSelect.value,
            estimatedTimeSelect: estimatedTimeSelect.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        loader.style.display = 'block';
        setTimeout(function() {
            notificationSuccess.style.animation = 'noti 4s forwards alternate ease-in';
        }, 4000);
        notificationSuccess.style.animation = '';
        xIcon.addEventListener("click", function() {
            notificationSuccess.style.display = 'none';
        })
        annualPlanDisabledFunction();
    } else {
        console.log("Fail");
    }
});

planSelect.addEventListener("change", function() {
    const selectedOption = planSelect.value;
    if (selectedOption === "free" || selectedOption === "free-pay-as-you-go") {
        freePlanSelectionDiv.style.display = "flex";
        annualPlanDiv.style.display = "none";
    } else if (selectedOption === "annualPlan" || selectedOption === "annualPlanPremium") {
        annualPlanDiv.style.display = "flex";
        freePlanSelectionDiv.style.display = "none";
    }

    validateProjectNameFree.style.display = "none";
    validateProjectName.style.display = "none";
});

customDesignSelect.addEventListener("change", function() {
    const selectedOption = customDesignSelect.value;
    if (selectedOption === "yes") {
        console.log("Working with custom design");
    } else if (selectedOption === "no") {
        console.log("No custom design selected");
    }
});

hostingSelect.addEventListener("change", function() {
    const selectedOption = hostingSelect.value;
    if (selectedOption === "yes") {
        console.log("Hosting required");
    } else if (selectedOption === "no") {
        console.log("No hosting required");
    }
});

estimatedTimeSelect.addEventListener("change", function() {
    const selectedOption = estimatedTimeSelect.value;
    console.log("Estimated time selected:", selectedOption);
});