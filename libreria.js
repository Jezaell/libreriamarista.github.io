let cuenta = document.querySelector(".cuenta");
let boton=document.querySelector(".entrar");
let botonhisto=document.querySelector(".histo");
cuenta.addEventListener("input", function() {
    const valor=cuenta.value;
    cuenta.value = cuenta.value.toUpperCase();
    if (valor.length >= 2) {
        const sc = valor[1].toUpperCase();
        if (sc=='M' || sc=='V' || sc=='N') {
            cuenta.setAttribute('maxlength', '9');
        } else {
            cuenta.setAttribute('maxlength', '10');
        }
    }else{
        cuenta.removeAttribute('maxlength');
    }
});
    
function encontrar(){
    const cuentain = document.querySelector('.cuenta').value;
    const estuen = basedatos.find(basedatos => basedatos.Cuenta === cuentain);
    if (estuen) {
        document.querySelector('.nombrea').innerText = `${estuen.NombreCompleto}`;
        document.querySelector('.cuentaa').innerText = `${estuen.Cuenta.slice(-2)}`;
        const valr=estuen.Cuenta; //Almacena la cuenta
        const sac = valr[1]; //Valor que almacena la letra de curso
        const sec=valr[0]; //Valor que almacena el numero curso en ciclo
        const saac=valr[4]; //Valor que almacena la seccion del curso
        const saaac=valr[5]; //Valor que almancena el numero de curso en diversificado
        if(sac==='M' && saac==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "A"`;
        }else if(sac==='M' && saac==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "B"`;
        }else if(sac==='M' && saac==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "C"`;
        }else if(sac==='V' && saac==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "A"`;
        }else if(sac==='V' && saac==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "B"`;
        }else if(sac==='V' && saac==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "C"`;
        }else if(sac==='N' && saac==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "A"`;
        }else if(sac==='N' && saac==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "B"`;
        }else if(sac==='N' && saac==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 3)} "C"`;
        }else if(sac==='B' && saaac==='1' && sec==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='A' && saaac==='1' && sec==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='I' && saaac==='1' && sec==='1'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='A' && saaac==='1' && sec==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='A' && saaac==='2' && sec==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "B"`;
        }else if(sac==='B' && saaac==='1' && sec==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='I' && saaac==='1' && sec==='2'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='A' && saaac==='1' && sec==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }else if(sac==='A' && saaac==='2' && sec==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "B"`;
        }else if(sac==='I' && saaac==='1' && sec==='3'){
            document.querySelector('.cursoa').innerText = `${estuen.Cuenta.slice(0, 4)} "A"`;
        }
    }else{
        alert("ESTUDIANTE NO ENCONTRADO");
    }
}
boton.addEventListener('click', function() {
    const cuentain = document.querySelector('.cuenta').value;
    const estuen = basedatos.find(basedatos => basedatos.Cuenta === cuentain);

    if (estuen) {
        const fechaHora = new Date().toLocaleString();
        const nombreCompleto = estuen.NombreCompleto;
        const cuenta = estuen.Cuenta;
        
        let tablaDatos = JSON.parse(localStorage.getItem('tablaEstudiantes')) || [];
        tablaDatos.push({
            fechaHora,
            nombreCompleto,
            cuenta
        });
        localStorage.setItem('tablaEstudiantes', JSON.stringify(tablaDatos));
        window.location.href = "libreria2.html";

        if(cuentain[1]=='M'){
            const libros=[
                { nombre: 'Cívica 7', imagen: 'civica/Civica7.jpg', link:'https://santillana.com.hn/' },//7mo libros
                { nombre: 'Español 7', imagen: 'español/Español7.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Matemáticas 7', imagen: 'matematicas/Matematicas.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Naturales 7', imagen: 'naturales/Naturales7.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Sociales 7', imagen: 'sociales/Sociales7.jpg', link:'https://santillana.com.hn/' },
            ]
            localStorage.setItem('libros', JSON.stringify(libros));

        }else if(cuentain[1]=='V'){
            const libros=[
                { nombre: 'Cívica 8', imagen: 'civica/Civica8.jpg' , link:'https://santillana.com.hn/'},//8vo libros
                { nombre: 'Español 8', imagen: 'español/Español8.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Matemáticas 8', imagen: 'matematicas/Matematicas8.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Naturales 8', imagen: 'naturales/Naturales8.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Sociales 8', imagen: 'sociales/Sociales8.jpg' , link:'https://santillana.com.hn/'}
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[1]=='N'){
            const libros=[
                { nombre: 'Cívica 9', imagen: 'civica/Civica9.jpg' , link:'https://santillana.com.hn/'},//9no libros
                { nombre: 'Español 9', imagen: 'español/Español9.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Matemáticas 9', imagen: 'matematicas/Matematicas9.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Naturales 9', imagen: 'naturales/Naturales9.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Sociales 9', imagen: 'sociales/Sociales9.jpg' , link:'https://santillana.com.hn/'}
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==1 && cuentain[1]=='I'){
            const libros=[
                { nombre: 'Español 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},//10BTP
                { nombre: 'Matemáticas 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Física 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Química 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Historia de Honduras 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Biología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Informatica 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Psicología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Sociología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==2 && cuentain[1]=='I'){
            const libros=[
                { nombre: 'Informática 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },//11BTP libros
                { nombre: 'Español 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Matemáticas 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Filosofía 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Analisis y Diseño 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Artistica 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Física 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==3 && cuentain[1]=='I'){
            const libros=[
                { nombre: 'Redes Informáticas 12', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },//12BTP libros
                { nombre: 'Mantenimiento y Reparación 12', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' }
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==1 && cuentain[1]=='A'){
            const libros=[
                { nombre: 'Language Workshop 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},//10AEB libros
                { nombre: 'Español 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Matemáticas 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Biología 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Química 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Física 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Historia de Honduras 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Informatica 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Emprendimiento 10', imagen: 'Libro.jpg' ,link:'https://santillana.com.hn/'},
                { nombre: 'Sociologia 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Psicologia 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'}
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==2 && cuentain[1]=='A'){
            const libros=[
                { nombre: 'Contabilidad 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/' },//11AEB libros
                { nombre: 'Español 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/' },
                { nombre: 'Matemáticas 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/' },
                { nombre: 'Business Comunication 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/' },
                { nombre: 'Business English 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/'},
                { nombre: 'Legislación 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/'},
                { nombre: 'Business English 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/'},
                { nombre: 'Filosofía 11', imagen: 'Libro.jpg',link:'https://santillana.com.hn/'}

            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==3 && cuentain[1]=='A'){
            const libros=[
                { nombre: 'Etica Corporativa 12', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },//12AEB libros
                { nombre: 'Apply 12', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Asistente Ejecutivo Empresarial 12', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Talento Humano 12', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Language 12', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'}
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else if(cuentain[0]==1 && cuentain[1]=='B'){
            const libros=[
                { nombre: 'Español 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},//10BCH
                { nombre: 'Matemáticas 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Física 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Química 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Historia de Honduras 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Biología 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Informatica 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Psicología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Sociología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'}
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }else{
            const libros=[
                { nombre: 'Antropología 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },//11BCH libros
                { nombre: 'Español 11', imagen: 'Libro.jpg', link:'https://santillana.com.hn/' },
                { nombre: 'Matemáticas 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Química 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Economía 11', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Biología 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Apre. Art. 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
                { nombre: 'Física 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Hist. U 10', imagen: 'Libro.jpg' , link:'https://santillana.com.hn/'},
                { nombre: 'Filosofía 10', imagen: 'Libro.jpg', link:'https://santillana.com.hn/'},
            ]
            localStorage.setItem('libros', JSON.stringify(libros));
        }
    } else if (cuentain === '') {
        alert("INGRESAR CUENTA");
    } else {
        alert("CUENTA NO VALIDA");
    }
    
});

cuenta.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        encontrar();
    }
});
let contra="Marcelino2024"
botonhisto.addEventListener('click', function(){
    let contrai=prompt("Pon contrasena: ");
    if(contra==contrai){
        window.location.href="historial.html";
    }else{
        alert("Contrasena incorrecta");
    }
})