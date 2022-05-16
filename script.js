const animations = {
    init : function() {

        const bouttonLanguette = document.querySelector('.theme-bar--languette');
        bouttonLanguette.addEventListener('click', animations.themeChoicesAppear);
        const bouttonThemeNightOrDay = document.querySelector('.theme-color-nightOrDay');
        bouttonThemeNightOrDay.addEventListener('click', animations.themeSwitch);
        const bouttonThemeColor = document.querySelectorAll('.theme-color');

        for (const currentButton of bouttonThemeColor){
            currentButton.addEventListener('click', animations.changeThemeColor);
        }
    },

    themeChoicesAppear : function(event) {
        const bareChoices = document.querySelector('.theme-bar--choices');
        bareChoices.classList.toggle("hide");
        const bouttonLanguette = document.querySelector('.theme-bar--languette');
        bouttonLanguette.classList.toggle("theme-bar--languette-ouverte")
    },

    themeSwitch : function(event){
        clickedButton = event.currentTarget;

        if (clickedButton.classList == 'theme-color-nightOrDay theme-light'){
            clickedButton.classList.remove("theme-light");
            clickedButton.classList.add("theme-dark");
        
            document.querySelector('body').classList.add("dark");
        }
        else {
            clickedButton.classList.remove("theme-dark");
            clickedButton.classList.add("theme-light");
            
            document.querySelector('body').classList.remove('dark');
        }

    },

    changeThemeColor : function(event){

        clickedButton = event.currentTarget;

        document.querySelector('body').classList.remove('green', 'blue', 'red', 'violet', 'f0f');

        if (clickedButton.classList.value == 'theme-color blue'){
            document.querySelector('body').classList.add('blue');
        }
        else if (clickedButton.classList.value == 'theme-color red'){
            document.querySelector('body').classList.add('red');
        }
        else if (clickedButton.classList.value == 'theme-color green'){
            document.querySelector('body').classList.add('green');
        }
        else if (clickedButton.classList.value == 'theme-color violet'){
            document.querySelector('body').classList.add('violet');
        }
        else {
            document.querySelector('body').classList.add('f0f');
        }
    },
};

document.addEventListener('DOMContentLoaded', animations.init)