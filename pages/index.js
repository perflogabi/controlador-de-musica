import BottomBar from "@/components/BottomBar";
import MainScreen from "@/components/MainScreen";

export default function Home() {
  return (
   <main className=" flex flex-col h-screen">
    <MainScreen />
    <BottomBar />
   </main>
  )
}
