
document.getElementById('submit').addEventListener('click', volume_sphere);

function volume_sphere() {
    const radiusInput = document.getElementById('radius').value;
    const volumeOutput = document.getElementById('volume');

    // Convert input to a number
    const radius = parseFloat(radiusInput);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'NaN';
        return;
    }

    // Calculate the volume using the formula: V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    volumeOutput.value = volume.toFixed(4);
}

//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
