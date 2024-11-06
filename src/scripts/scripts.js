document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (name === '' || email === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); // Evita el envío del formulario si los campos están vacíos
        } else {
            alert('¡Formulario enviado correctamente!');
            // Aquí puedes permitir que el formulario se envíe quitando event.preventDefault()
        }
    });
});
