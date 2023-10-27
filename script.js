document.addEventListener('DOMContentLoaded', function () {
    const lightSwitch = document.getElementById('lightSwitch');
    const thermostatControl = document.getElementById('thermostatControl');

    lightSwitch.addEventListener('click', function () {
        if (lightSwitch.textContent === 'Turn On') {
            lightSwitch.textContent = 'Turn Off';
        } else {
            lightSwitch.textContent = 'Turn On';
        }
    });

    thermostatControl.addEventListener('input', function () {
        console.log('Thermostat set to ' + thermostatControl.value);
        // You would typically send this value to a server or a device for control.
    });
});
