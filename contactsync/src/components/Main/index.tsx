import React from "react"
import { MainStyle } from "./style"

interface iMainProps{
    children: React.ReactNode;
}

export const MainPage = ({children}: iMainProps) => {
    return (
        <MainStyle>
            {children}
        </MainStyle>
    )
}