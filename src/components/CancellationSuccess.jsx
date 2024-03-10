import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
export default function CancellationSuccess() {
  console.log('CANCEL SUCCESS ===========================')

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          {`😟We hope to see you next year!`}
        </h2>
        <p className="fade-in">{`It's not us... its....`}</p>
      </div>
    </>
  );
}
