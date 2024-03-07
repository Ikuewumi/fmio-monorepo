import { useStore } from "@nanostores/solid";
import { Theme } from "../composables/store";

 const Header = () => {
	const theme = useStore($systemTheme);

	const toggleTheme = () => {
		const nextTheme = getNextTheme(allThemes, theme());
		$systemTheme.set(nextTheme as Theme);
	}

	return (
		<header class="header">
			<div class="header-heading">
				 <h1>Social Media Dashboard</h1>
				 <p>Total Followers: 23,0004</p>
			</div>


			<button class="header-theme" onclick={toggleTheme}>
				<span>{getNextTheme(allThemes, theme())} Mode</span>
				<span class="header-theme-toggle" role="presentation"></span>
			</button>
		</header>
	) 	
}

export default Header;
