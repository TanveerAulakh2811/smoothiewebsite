
function orderSmoothie() {
    // Get the form elements
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions)
                        .map(option => option.value)
                        .join(', ');
    const extras = document.getElementById('extras').value;

    // Validate that required fields are filled
    if (!size || !base || fruits.length === 0) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create smoothie description
    const smoothieDescription = `
        <h3>Your Smoothie Order</h3>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Base:</strong> ${base}</p>
        <p><strong>Fruits:</strong> ${fruits}</p>
        <p><strong>Extras:</strong> ${extras ? extras : 'None'}</p>
    `;

    // Output the description to the HTML
    document.getElementById('smoothie-description').innerHTML = smoothieDescription;
}
