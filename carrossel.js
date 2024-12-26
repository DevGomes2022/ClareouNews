const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const carrossel = document.querySelector('.carrossel');
    const itemWidth = carrossel.querySelector('li').offsetWidth + 20; // Largura de um item (com o espaçamento)

    prevButton.addEventListener('click', () => {
        carrossel.scrollBy({
            left: -itemWidth,  // Move para a esquerda
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        carrossel.scrollBy({
            left: itemWidth,  // Move para a direita
            behavior: 'smooth'
        });
    });