import Header from "../header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <div className="mx-5 sm:mx-20 grid sticky top-0 justify-center z-10">
            <Header/>
        </div>
           
            <main className="">
                { children }
            </main>
        </>
    )
}