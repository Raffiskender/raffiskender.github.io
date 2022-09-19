function init(){
	window.addEventListener('scroll', handleResizeHeader)
}

function handleResizeHeader(){

	const headerImageContainer = document.querySelector('.header-image-container')
	const headerImage = document.querySelector('.header-image')
	const prezPerso = document.querySelector('.presentation-perso')
	const prezPro = document.querySelector('.presentation-pro')
	const sectionPresentation = document.querySelector('.presentation-perso')
	const headerText = document.querySelector('.header-work-designation')
	const headerName = document.querySelector('.header-name')
	const header2 = document.querySelector('.header')
	
	if (scrollY > 50){
		
		sectionPresentation.classList.add('presentation-perso-margin-add');
		headerImageContainer.classList.add('header-image-container-little');
		header2.classList.add('header-little');
		headerImage.classList.add('header-image-little');
		headerText.classList.add('hide-header-work-designation')
		headerName.classList.add('header-name-little')
		prezPerso.classList.add('presentation-perso-little')
		prezPro.classList.add('presentation-pro-little')
	}
	else{
		headerImageContainer.classList.remove('header-image-container-little');
		headerName.classList.remove('header-name-little')
		sectionPresentation.classList.remove('presentation-perso-margin-add');
		headerImage.classList.remove('header-image-little');
		header2.classList.remove('header-little');
		headerText.classList.remove('hide-header-work-designation')
		prezPerso.classList.remove('presentation-perso-little')
		prezPro.classList.remove('presentation-pro-little')
	}
}

document.addEventListener('DOMContentLoaded', init);
