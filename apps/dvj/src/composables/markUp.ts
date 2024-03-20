import { JobPosting } from "../types";


/**
 * Removes all children nodes of a particular element
 * @param {Element} parentElement
 */
const removeChildren = (parentElement: Element) => {
        Array.from(parentElement.children).forEach(child => child.remove());
}


/** Provide a function that returns an element to be placed in the main element */
export function writeMainPage(element: () => Element): void;

/** Provides an element to be placed in the main element */
export function writeMainPage(element: Element): void;

export function writeMainPage(element: unknown) {
        console.log(element);
        const main = document.querySelector("main");
        if (!main) throw Error("No Parent Element Found")
        removeChildren(main)

        if (typeof element === "function") {
                const newElement = element()
                if (newElement instanceof Element) main.appendChild(newElement);
                else throw Error("The Function Does Not Return An Element")
        }
        else if (element instanceof Element) {
                main.appendChild(element)
        }
        else {
                throw Error("The Argument is not, or doesn't return an Element")
        }
}


/**
 * Setting Up The Global Components, that don't change from Page To Page
 */
export const setupListeners = () => {
        //Header
        const header = document.querySelector("header")! as HTMLElement;
        const buttons = header.querySelectorAll(".header-theme > button")! as NodeListOf<HTMLButtonElement>;
        buttons.forEach(button => {
                button.addEventListener("click", _ => {
                        switch (button.title) {
                                case "light theme":
                                        toggleTheme("light");
                                        break;
                                case "dark theme":
                                        toggleTheme("dark");
                                        break;
                                default:
                                        toggleTheme()
                                        break;
                        }
                })

        })

}









export const writeHomePage = (templateElement: HTMLTemplateElement, jobs: JobPosting[]) => {
        const template = templateElement.content.cloneNode(true)! as unknown as HTMLElement;
        const listElement = template.querySelector('.job-list')! as HTMLUListElement;
        const jobTemplate = document.querySelector('template#job-item')! as HTMLTemplateElement;

        console.log("home page5", listElement, template)

        jobs.forEach(job => {
                const template = jobTemplate.content.cloneNode(true)! as unknown as HTMLElement;
                template.querySelector('img')!.src = job.logo;
                console.log("home-page7", template, template.querySelector("img"))
                template.querySelector('.job-description > span:nth-child(1)')!.textContent = job.postedAt;
                template.querySelector('.job-description > span:nth-child(2)')!.textContent = job.contract;
                template.querySelector('.job-title')!.textContent = job.position;
                template.querySelector('.job-role')!.textContent = job.company;
                template.querySelector('.job-location')!.textContent = job.location;

                console.log(parentElement)
                parentElement.appendChild(template)

        })

        console.log("home page8", listElement, template)
        return template;
}
