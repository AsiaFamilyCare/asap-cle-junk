const b = document.querySelector('.menu-btn');
const n = document.querySelector('#main-nav');

b.onclick = () => {
    n.classList.toggle('open');
};

document.querySelectorAll('#main-nav a').forEach(a => {
    a.onclick = () => {
        n.classList.remove('open');
    };
});

const l = document.getElementById('lightbox');
const im = l.querySelector('img');

document.querySelectorAll('.gallery-item').forEach(x => {
    x.onclick = () => {
        im.src = x.dataset.full;
        l.classList.add('open');
    };
});

function c() {
    l.classList.remove('open');
    im.src = '';
}

l.querySelector('.close-lightbox').onclick = c;

l.onclick = e => {
    if (e.target === l) {
        c();
    }
};

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        c();
    }
});
