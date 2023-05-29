import { ReactNode } from "react"
import { HeaderStyle } from "./style"

interface headerProps{
    children: ReactNode
}

export const HeaderPage = ({children}: headerProps) => {
    
    return (
        <HeaderStyle>
            {children}
        </HeaderStyle>
    )
}