"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" alt="AI Generator Logo" width={37} height={37}  className="object-contain"/>
            <p className="logo-text">
                AI Generator
            </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {
                isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn">
                            Create Post
                        </Link>
                        <button
                        type="button"
                        className="outline_btn"
                        onClick={signOut}
                        >
                            Sign Out
                        </button>

                        <Link href='/profile'>
                            <Image src="/assets/images/logo.svg" alt="Profile" width={37} height={37}  className="rounded-full"/>
                        </Link>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
        
    </nav>
  )
}

export default Nav