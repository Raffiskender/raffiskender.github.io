const animations = {
    init : function() {

        const bouttonLanguette = document.querySelector('.theme-bar--languette');
        bouttonLanguette.addEventListener('click', animations.themeChoicesAppear);
        const bouttonThemeLight = document.querySelector('.theme-light');
        const bouttonThemeDark = document.querySelector('.theme-dark');
        bouttonThemeLight.addEventListener('click', animations.themeSwitch);
        bouttonThemeDark.addEventListener('click', animations.themeSwitch);
        // bouttonLanguette.classList.toggle("theme-bar--languette-ouverte")
        
    },

    themeChoicesAppear : function(event) {
        const bareChoices = document.querySelector('.theme-bar--choices');
        bareChoices.classList.toggle("hide");
        const bouttonLanguette = document.querySelector('.theme-bar--languette');
        bouttonLanguette.classList.toggle("theme-bar--languette-ouverte")
    },

    themeSwitch : function(event){
        clickedButton = event.currentTarget;
        console.log('Dans la fonction');

        if (clickedButton.classList == 'theme-color theme-light'){
            clickedButton.classList.remove("theme-light");
            clickedButton.classList.add("theme-dark");
            document.querySelector('body').classList.add('dark');
        }
        else {
            clickedButton.classList.remove("theme-dark");
            clickedButton.classList.add("theme-light");
            document.querySelector('body').classList.remove('dark');

        }

    }

};

document.addEventListener('DOMContentLoaded', animations.init)