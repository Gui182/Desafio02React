import { createContext, ReactNode, useEffect, useState } from "react";

interface SelectedGenreContext {
    children: ReactNode
}

interface SelectedGenreContextData {
    selectedGenreId: number;
    setSelectedGenreId: (id: number) => void
}

export const SelectedGenreContext = createContext<SelectedGenreContextData>(
    {} as SelectedGenreContextData
)

export function SelectedGenreProvider({ children }: SelectedGenreContext) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

     return (
        <SelectedGenreContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
            {children}
        </SelectedGenreContext.Provider>
    )
}

