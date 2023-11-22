
function darkMode() {
    const element = document.body;
    var btn = document.getElementById('btn');
    element.classList.toggle('dark-mode');
    if(element.classList.contains('dark-mode'))
    btn.innerHTML= '☀️';
    else
    btn.innerHTML= '🌙'
}