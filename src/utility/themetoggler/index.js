import { useEffect } from "react"

export const useThemetoggler = (theme, state) => {
    useEffect(() => {
        const savedtheme = localStorage.getItem("savedtheme");
        if (!theme) {
            console.log("no theme");
            state(savedtheme)
        }
        else {
            console.log("theme");
            state(theme)
            localStorage.setItem("savedtheme", theme)
        }
    }, [state, theme])
}