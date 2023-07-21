const burgDiv = document.querySelector('.burger-x');
const burger = document.querySelector('.burger');
const xx = document.querySelector('.xx');
const ul = document.querySelector('.menu');
const gridCont = document.querySelector('.grid-cont');


burgDiv.addEventListener('click', () => {

    ul.classList.toggle('active')
    burger.classList.toggle('none');
    xx.classList.toggle('show')

})



const cards = [
    {
        imgMobile: 'images/mobile/image-deep-earth.jpg',
        imgDesk: 'images/desktop/image-deep-earth.jpg',
        title: 'DEEP EARTH'

    },
    {
        imgMobile: 'images/mobile/image-night-arcade.jpg',
        imgDesk: 'images/desktop/image-night-arcade.jpg',
        title: 'NIGHT ARCADE',
    },
    {
        imgMobile: 'images/mobile/image-soccer-team.jpg',
        imgDesk: 'images/desktop/image-soccer-team.jpg',
        title: 'SOCCER TEAM VR',
    },
    {
        imgMobile: 'images/mobile/image-grid.jpg',
        imgDesk: 'images/desktop/image-grid.jpg',
        title: 'THE GRID',
    },
    {
        imgMobile: 'images/mobile/image-from-above.jpg',
        imgDesk: 'images/desktop/image-from-above.jpg',
        title: 'FROM UP ABOVE VR',
    },
    {
        imgMobile: 'images/mobile/image-pocket-borealis.jpg',
        imgDesk: 'images/desktop/image-pocket-borealis.jpg',
        title: 'POCKET BOREALIS',
    },
    {
        imgMobile: 'images/mobile/image-curiosity.jpg',
        imgDesk: 'images/desktop/image-curiosity.jpg',
        title: 'THE CURIOSITY',
    },
    {
        imgMobile: 'images/mobile/image-fisheye.jpg',
        imgDesk: 'images/desktop/image-fisheye.jpg',
        title: 'MAKE IT FISHEYE',
    },
];

function grid() {
    cards.map((i) => {

        let card = document.createElement('div');
        card.classList.add('card');

        gridCont.append(card);

        card.innerHTML = `
          <img class='grid-img' src=${i.imgMobile}>
          <img class='grid-img1' src=${i.imgDesk}>
          <h3>${i.title}<h3>
        `

    })

}

grid()



