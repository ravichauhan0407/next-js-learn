"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from  './main-header.module.css'

export const Navlink = ({href,children}:{href:string,children:React.ReactNode}) => {
  const path = usePathname();

  return (
      <Link href={href} className={path===href?classes.active:classes.link}>{children}</Link>
  )
}
