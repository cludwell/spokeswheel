import { special, amatic } from "@/app/fonts";
import SuccessMessage from "@/components/SuccessMessage";
export default function Success() {
  return (
    <div
      className={
        special.className +
        " p-4 sm:p-16 max-w-screen-xl min-h-[50vh] mx-auto leading-8 text-center"
      }
    >
      <SuccessMessage />
    </div>
  );
}
