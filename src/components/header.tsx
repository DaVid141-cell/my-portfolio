import NavMenu from "./ui/nav-menu";

export default function Header () {
    return (
        <header className=" p-4 flex justify-around items-center gap-200">
            <div>
            <h2 className="text-3xl text-light-red font-bold font-red">David</h2>
            </div>
            <NavMenu/>
        </header>
    )
}