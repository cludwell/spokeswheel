export default function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        {`✅We'll see you there!`}
      </h2>
      <p className="fade-in">{`Your registration is complete! We're looking forward to seeing you at the conference!`}</p>
    </div>
  );
}
