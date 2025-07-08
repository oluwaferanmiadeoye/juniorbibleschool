document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded successfully');

  function nextStep(step) {
    console.log('nextStep called with step:', step);

    if (step < 1 || step > 5) {
      console.error('Invalid step number:', step);
      return;
    }
        
    const formSteps = document.querySelectorAll('.form-step');
    if (!formSteps.length) {
      console.error('No elements with class "form-step" found');
      return;
    }
    formSteps.forEach((stepEl) => {
      stepEl.classList.remove('active');
    });

    const targetStep = document.getElementById(`step-${step}`);
    if (!targetStep) {
      console.error(`Element with ID "step-${step}" not found`);
      return;
    }
    targetStep.classList.add('active');

    const stepNumbers = document.querySelectorAll('.step-number');
    if (!stepNumbers.length) {
      console.error('No elements with class "step-number" found');
      return;
    }
    stepNumbers.forEach((num) => {
      num.classList.remove('active');
    });
    const targetStepNumber = document.querySelector(`.step-number[data-step="${step}"]`);
    if (!targetStepNumber) {
      console.error(`Element with data-step="${step}" not found`);
      return;
    }
    targetStepNumber.classList.add('active');

    // Update all step headers to reflect current step
    const stepHeaders = document.querySelectorAll('.step-one-of h3');
    stepHeaders.forEach(header => {
      header.textContent = `STEP ${step} OF 5`;
    });

    // Update button states for all steps
    const allBackButtons = document.querySelectorAll('.back-button');
    const allNextButtons = document.querySelectorAll('.next-button');
    
    allBackButtons.forEach(btn => btn.disabled = step === 1);
    allNextButtons.forEach(btn => {
      btn.innerHTML = step === 5 ? 'Continue to payment<i class="fa-solid fa-arrow-right"></i>' : 'Next <i class="fa-solid fa-arrow-right"></i>';
    });
  }

  function prevStep(step) {
    console.log('prevStep called with step:', step);
    nextStep(step);
  }

  // Add event listeners to all next buttons
  const nextButtons = document.querySelectorAll('.next-button');
  nextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentStep = index + 1;
      if (currentStep < 5) {
        nextStep(currentStep + 1);
      }
    });
  });

  // Add event listeners to all back buttons
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentStep = index + 1;
      if (currentStep > 1) {
        prevStep(currentStep - 1);
      }
    });
  });

  // Handle form submission
  const signupForm = document.getElementById('signup-form');
  if (!signupForm) {
    console.error('Form with ID "signup-form" not found');
    return;
  }
  
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted');
    alert('Form submitted successfully!');
    nextStep(1);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const ageBoxes = document.querySelectorAll('.age-box');
  const hiddenInput = document.getElementById('age-group');
  
  ageBoxes.forEach(box => {
    box.addEventListener('click', function() {
      // Remove selected class from all boxes
      ageBoxes.forEach(b => b.classList.remove('selected'));
      
      // Add selected class to clicked box
      this.classList.add('selected');
      
      // Update hidden input value
      const value = this.getAttribute('data-value');
      hiddenInput.value = value;
      
      console.log('Selected age group:', value);
    });
  });
});