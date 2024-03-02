import Image from "next/image";
import WagonWheel from "./components/WagonWheel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button class="btn btn-primary">One</button>
      <button class="btn btn-secondary">Two</button>
      <button class="btn btn-accent btn-outline">Three</button>{" "}
      <div className=" w-40">
        <WagonWheel />
      </div>
    </main>
  );
}
