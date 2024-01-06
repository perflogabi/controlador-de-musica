import ControlMusic from "./ControlMusic";
import PlayListIcon from "./icons/PlayListIcon";

export default function BottomBar() {
    return (
        <>
            <nav className=" fixed bottom-0 pt-4 w-full h-20 bg-blue-950 flex justify-center">
                <ControlMusic />
            </nav>
            <div>
                <PlayListIcon />
            </div>
        </>
    )
}