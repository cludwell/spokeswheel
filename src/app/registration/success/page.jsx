import { special, amatic } from "@/app/fonts";
export default function Success() {
  return (
    <div
      className={
        special.className +
        " p-4 sm:p-16 max-w-screen-xl min-h-[50vh] mx-auto leading-8 text-center"
      }
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          {`✅We'll see you there!`}
        </h2>
        <p className="fade-in">{`Your registration is complete! We're looking forward to seeing you at the conference!`}</p>
      </div>
    </div>
  );
}
