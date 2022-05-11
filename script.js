const animations = {
    init : function() {

        const bouttonLanguette = document.querySelector('.theme-bar--languette');
        bouttonLanguette.addEventListener('click', animations.themeChoicesAppear);
        //const bareChoices = document.querySelector('.theme-bar--choices');
        //bareChoices.addEventListener('click', animations.themeChoicesAppear);
    },

    themeChoicesAppear : function(event) {
        const bareChoices = document.querySelector('.theme-bar--choices');
        bareChoices.classList.toggle("hide");
        //const bouttonLanguette = document.querySelector('.theme-bar--languette');
        //bouttonLanguette.classList.toggle("hide")
    }

};

document.addEventListener('DOMContentLoaded', animations.init)