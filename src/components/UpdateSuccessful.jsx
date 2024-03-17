import { amatic, special } from "../app/fonts";

export default function UpdateSuccessful() {
  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh] "
      }
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          {`😊Data successfully updated!`}
        </h2>
        <p className="fade-in">{`Hooray!`}</p>
      </div>
    </div>
  );
}
