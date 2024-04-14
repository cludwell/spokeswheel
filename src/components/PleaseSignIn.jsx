import { amatic, special } from "../app/fonts";

export default function PleaseSignIn() {
  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh] "
      }
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-4xl sm:text-5xl fade-in"}>
          {`😣 Please sign in!`}
        </h2>
        <p className="fade-in">{`How are we gonna track who's coming?!`}</p>
      </div>
    </div>
  );
}
