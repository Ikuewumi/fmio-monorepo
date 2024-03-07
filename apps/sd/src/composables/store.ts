import { atom } from "nanostores";

const LS_THEME = 'theme'
export const allThemes = ['dark', 'light'] as const;
export type Theme = typeof allThemes[number]

const ls = localStorage.getItem(LS_THEME) as Theme;
const localStorageTheme = (allThemes.includes(ls)) ? ls : allThemes[0];

export const $systemTheme = atom(localStorageTheme);
$systemTheme.subscribe(theme => {
	const root = document.querySelector('html');
	root?.setAttribute('data-theme', theme)
	localStorage.setItem(LS_THEME, theme);
})

export const getNextTheme = (themes: readonly string[], theme: string) => {
	const index = themes.findIndex(theme_ => theme_ === theme)
	if (index === -1) throw Error('invalid theme found');
	const nextTheme = index >= (themes.length - 1) ? 0 : (index + 1);
	return themes[nextTheme];
}

