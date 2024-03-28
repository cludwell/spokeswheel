import { special, amatic } from "@/app/fonts"
export default function ErrorPage() {
    return (
        <div
        className={
          special.className + " p-4 sm:p-16 max-w-screen-xl min-h-[50vh] mx-auto leading-8 text-center"
        }
      >
        <h1 className={`${amatic.className} text-5xl`}>404: Bad Credentials 😔</h1>
        <p className={`${special.className} my-12`}>Did you forget your email or password?</p>
        </div>
    )
}
