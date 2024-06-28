function submitForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Capture form data
    const formData = new FormData(document.getElementById('myForm'));

    // Create a new form element to submit data
    const tempForm = document.createElement('form');
    tempForm.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScGS6y3dCR4pNZ60XsvuiBUdIuu-5bdCgB0MJQ7gV0Akgtzng/formResponse';
    tempForm.method = 'POST';
    tempForm.target = 'hidden_iframe';

    // Append all form data to the new form
    for (const [name, value] of formData) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        tempForm.appendChild(input);
    }

    // Append the new form to the body and submit it
    document.body.appendChild(tempForm);
    tempForm.submit();

    // Show success message
    document.getElementById('form-container').innerHTML = '<h4>Thank you! Your message has been submitted.</h4>';

    // Remove the temporary form
    document.body.removeChild(tempForm);
}
