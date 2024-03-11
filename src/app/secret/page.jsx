"use client"

import PleaseSignIn from "@/components/PleaseSignIn";
import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { useStore } from "@/store/ZustandProvider";
export default function Secret() {
    const {data: session, status: loading} = useSession();
    const {user} = useStore()
    useEffect(() => {
      const loadUsers = async () => {
        f
      }
    })
    if (user?.email != 'cludwell@gmail.com') return <PleaseSignIn />
    return (
        <div
        className={
          special.className + " p-16 max-w-screen-xl mx-auto leading-8"
        }
      >
        is this working
        </div>
    )
}
