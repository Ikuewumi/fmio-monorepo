import "./styles/index.scss";



// Navigation
const header = document.querySelector('header')!;
const body = document.querySelector('body')! as HTMLBodyElement;
const openBtn = header.querySelector('button[title="open menu"]')! as HTMLButtonElement;
const closeBtn = header.querySelector('button[title="close menu"]')! as HTMLButtonElement;
const nav = header.querySelector('.nav-container')! as HTMLElement;
const media = window.matchMedia('(max-width: 50rem)');







const openMobileNav = () => {
	openBtn.setAttribute('aria-expanded', 'true');
	nav.removeAttribute('inert')
	closeBtn.focus()
	if (media.matches) body.classList.add('nav-open');
	
}


const closeMobileNav = () => {
	openBtn.setAttribute('aria-expanded', 'false');
	nav.setAttribute('inert', '')
	openBtn.focus()
	body.classList.remove('nav-open')
}



const setupNav = (e:any) => {
	if (e.matches) {
		nav.setAttribute('inert', '');
	}

	else {
		nav.removeAttribute('inert');
		body.classList.remove('nav-open');
	}

}


setupNav(media)

media.addEventListener('change', setupNav)
openBtn.addEventListener('click', openMobileNav)
closeBtn.addEventListener('click', closeMobileNav)
