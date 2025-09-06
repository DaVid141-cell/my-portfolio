import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu";

export default function NavMenu () {
    return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <button>Home</button>
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <button>About</button>
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <button>Projects</button>
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <button>Contact</button>
            </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    )
}