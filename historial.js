const tablaDatos = JSON.parse(localStorage.getItem('tablaEstudiantes')) || [];
        const tbody = document.querySelector('#tabla-estudiantes tbody');
        tablaDatos.forEach(estuen => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${estuen.fechaHora}</td>
                <td>${estuen.nombreCompleto}</td>
                <td>${estuen.cuenta}</td>
            `;
            tbody.appendChild(fila);
        });
let borrar=document.querySelector('.borrar');
borrar.addEventListener('click', function(){
            localStorage.removeItem('tablaEstudiantes');
            const tbody = document.querySelector('#tabla-estudiantes tbody');
            tbody.innerHTML = '';
});