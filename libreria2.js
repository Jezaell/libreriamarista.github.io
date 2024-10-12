const libros = JSON.parse(localStorage.getItem('libros'));  
console.log(libros);
const bookCards = document.querySelectorAll('.book-card');
const imgs=document.querySelector('img');
libros.forEach((libro, index) => {
    if (bookCards[index]) {
        const imgElement = bookCards[index].querySelector('img');
        const h3Element = bookCards[index].querySelector('h3');
        const aElement = bookCards[index].querySelector('a');
        imgElement.src = libro.imagen; 
        h3Element.textContent = libro.nombre;
        aElement.href=libro.link
    }
});
bookCards.forEach(bookCard => {
    const imgElement = bookCard.querySelector('img');
    if (!imgElement.getAttribute('src') || imgElement.getAttribute('src').trim() === "") {
        bookCard.remove();
    }
});