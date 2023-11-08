//capturando el data-theme del css
let themeGet = window.localStorage.getItem('data-theme');

// if (themeGet) {
//     document.firstElementChild.setAttribute('data-theme', themeGet);
// }

//función a ejecutar posterior a la carga de la página
window.onload = () => {

    let theme = document.querySelectorAll('input[name="theme"]');
    console.log(themeGet);
    if (themeGet) {

        theme[0].checked = themeGet == 'dark' ? true : false;
        theme[1].checked = themeGet == 'light' ? true : false;
        theme[2].checked = themeGet == 'purple' ? true : false;

    }
    for (let i = 0; i <= theme.length - 1; i++) {
        theme[i].addEventListener('change', function () {
            document.firstElementChild.setAttribute('data-theme', theme[i].value);
            localStorage.setItem('data-theme', theme[i].value);
        });

    }
}