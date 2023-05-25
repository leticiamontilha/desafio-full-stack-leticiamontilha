import { ReactNode } from "react";
import { ContainerStyle } from "./style";

export interface iContainerProps{
    children: ReactNode;
}

export const Container = ({children}: iContainerProps) => {
    return (
        <ContainerStyle>
        {children}
        </ContainerStyle>
    )
}