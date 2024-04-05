const defaultBtn = document.getElementById('defaultBtn');
const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');

defaultBtn.addEventListener('click', function() {
    changeColorScheme('default-mode');
});

darkBtn.addEventListener('click', function() {
    changeColorScheme('dark-mode');
});

lightBtn.addEventListener('click', function() {
    changeColorScheme('light-mode');
});


function changeColorScheme(scheme) {
    const body = document.body;

    body.classList.remove('default-mode', 'dark-mode', 'light-mode');

    body.classList.add(scheme);
}