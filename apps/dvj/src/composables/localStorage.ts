
const themes = ["light", "auto", "dark"] as const;
const LS_NAME = "settings:theme";
export type Theme = typeof themes[number];

const startup = () => {
        const theme = localStorage.getItem(LS_NAME)! as Theme;
        if (!themes.includes(theme)) localStorage.setItem(LS_NAME, $theme.get())
        else $theme.set(theme)
}


startup()





$theme.subscribe(theme => {
        const html = document.querySelector("html");
        html?.setAttribute("data-theme", theme)
        localStorage.setItem(LS_NAME, theme)
})


export const toggleTheme = (theme?:Theme) => {
        if (theme && themes.includes(theme)) {
                $theme.set(theme)
        }

        else {
                const oldTheme = $theme.get();
                const newIndex = (themes.findIndex(t => t === oldTheme)) + 1;
                const newThemeIndex = newIndex > (themes.length - 1) ? 0 : newIndex; 
                $theme.set(themes[newThemeIndex] ?? "auto")
        }
}
