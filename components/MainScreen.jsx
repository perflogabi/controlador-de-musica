import ImportFiles from "./ImportFiles";
import MusicList from "./MusicList";

export default function MainScreen() {
    return (
        <section className="grow flex flex-row bg-indigo-950">
            <div className=" w-1/6 bg-sky-950">
                <ImportFiles />
            </div>
            <main className=" flex mt-10 w-full flex-row justify-center h-auto">
                <MusicList />
            </main>
        </section>
    )
}