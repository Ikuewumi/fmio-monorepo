import "@scss/index.scss";

const image = document.querySelector('.hero-picture > img')! as HTMLImageElement;
const source = document.querySelector('.hero-picture > source')! as HTMLSourceElement;
const carouselList = document.querySelectorAll('.hero-item')! as NodeListOf<HTMLLIElement>;
const carouselSize = carouselList.length;


const moveCarousel = (
	newSlide: number, 
	carouselList: NodeListOf<HTMLLIElement>, 
	image:HTMLImageElement, 
	source: HTMLSourceElement
) => {
	carouselList.forEach((carouselItem, index) => {
		carouselItem.classList.add('sr-only');
		carouselItem.setAttribute('inert', '')
		if (index === newSlide) {
			carouselItem.classList.remove('sr-only')
			carouselItem.removeAttribute('inert')
		}
	})

	const thumbnail = `/images/desktop-image-hero-${newSlide + 1}-small.jpg`
	const desktopImage = `/images/desktop-image-hero-${newSlide + 1}.jpg`
	const mobileImage = `/images/mobile-image-hero-${newSlide + 1}.jpg`
	source.srcset = desktopImage;	
	image.classList.remove("loaded");
	image.setAttribute('style', `--bg-img: url(${thumbnail});`)
	image.src = mobileImage;


	
}


const _settings = { index: 0 };
const settings = new Proxy(_settings, {
	set(target, p, newValue:number) {
	    if (p!=="index") throw Error("cannot set anything but the carousel index");
		moveCarousel(newValue, carouselList, image, source);
		return Reflect.set(target, p, newValue);	
	}
})


const navigateCarousel = (el: HTMLButtonElement) => {
	const isNextButton = el.title === "Next Feature";
	const nextIndex = isNextButton ? 
		(settings.index >= (carouselSize - 1) ? 0 : settings.index + 1):
		(settings.index <= 0 ? (carouselSize - 1) : settings.index - 1);

	settings.index = nextIndex
}


const loadImage = (el:HTMLImageElement) => {
	el.classList.add("loaded");
}


const setupPage = () => {
	const carouselContainer = document.querySelector('.hero > .hero-content')!;
	const buttons = document.querySelectorAll('.hero-nav > button')! as NodeListOf<HTMLButtonElement>;
	carouselContainer.classList.add('js-loaded');
	if (image.complete) {loadImage(image)}
	image.addEventListener("load", loadImage.bind(null, image))	
	buttons.forEach(button => {
		button.removeAttribute('disabled');
		button.addEventListener('click', navigateCarousel.bind(null, button))
	})

	settings.index = 0;
}



setupPage(); 
