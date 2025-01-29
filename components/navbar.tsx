"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";

function Navbar() {
  return (
    <div className="top-0 sticky z-50 flex justify-between items-center p-5 px-10">
      {/* <Link href="/">
        <p className="text-2xl font-bold">Rediet AI</p>
      </Link> */}
    </div>
  );
}

export default Navbar;
