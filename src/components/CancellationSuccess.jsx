import { amatic } from "../app/fonts";
export default function CancellationSuccess() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-4xl sm:text-5xl fade-in"}>
          {`😟We hope to see you next year!`}
        </h2>
        <p className="fade-in">{`It's not us... its....`}</p>
      </div>
    </>
  );
}
