import { Amatic_SC, Special_Elite } from "next/font/google";

const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
export default function UpdateSuccessful() {
  return (
    <div
      className={
        special.className + " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh] "
      }
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          {`😊Data successfully updated!`}
        </h2>
        <p className="fade-in">{`Hooray!`}</p>

      </div>
    </div>
  );
}