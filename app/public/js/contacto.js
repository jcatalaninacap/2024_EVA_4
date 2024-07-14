    // Función para validar el correo electrónico y verificar el dominio contra una lista
    function validarEmail(correo) {
        // Expresión regular para validar un correo electrónico
        const regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        // Lista de dominios válidos
        const dominiosValidos = ["gmail.com", "inacapmail.cl", "hotmail.com", "live.com"];
        // Verifica si el correo cumple con la estructura básica
        if (regex.test(correo)) {
            // Obtiene el dominio del correo ingresado
            const dominioCorreo = correo.split('@')[1];
            // Verifica si el dominio del correo está en la lista de dominios válidos
            if (dominiosValidos.includes(dominioCorreo)) {
                return true;
            } else {
                alert("El dominio del correo no está en la lista de dominios permitidos.");
                limpiarFormulario();
                return false;
            }
        } else {
            alert("El formato del correo no es válido.");
            limpiarFormulario();
            return false;
        }
    }

        // Función para limpiar el formulario
        function limpiarFormulario() {
            document.getElementById('nombre').value = ''; // Limpia el campo de correo
            document.getElementById('correo').value = ''; // Limpia el campo de correo
    
        }