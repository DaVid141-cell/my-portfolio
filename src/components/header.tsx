import NavMenu from "./ui/nav-menu";

export default function Header () {
    return (
        <header className="w-100 p-4 flex font-medium justify-around items-center gap-200 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl">
            <NavMenu/>
        </header>
    )
}