
document.addEventListener("DOMContentLoaded", () => {
    const mobileWidthMediaQuery = window.matchMedia('(max-width: 1024px)');
    checkWidthMediaQuery(mobileWidthMediaQuery);
});

function checkWidthMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        console.log('width more then 1024px');
        document.querySelector('.layer-10').classList.add('layer-10_animated');
    } else {
        addMousemoveEventListener();
    }
}

// checkWidthMediaQuery(mobileWidthMediaQuery);

function addMousemoveEventListener() {
    document.addEventListener('mousemove', e => {
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
            `
        })
    })
}