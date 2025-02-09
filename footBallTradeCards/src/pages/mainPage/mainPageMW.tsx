import {  useState } from "react";
import { Hero } from "../../model/Hero";

export function useMainPageMW() {
    const [heros, setHeros] = useState<Hero[]>([]);

async function fetchAllHeros() {
    try {
        console.log("Starting fetch...");  // להוסיף
        const response = await fetch("http://localhost:3000/api/heroes/fetch-heros", {
            method: "GET",
            credentials: "include"
        });
        
        
        if (!response.ok) {
            throw new Error("Failed to fetch players");
        }

        const data = await response.json();
        const {heros} =data;
        console.log("Data received:", data);  // להוסיף
        setHeros(heros);
    } catch (error) {
        console.error("Error fetching players:", error);
    }
}

    // מסירים את ה-useEffect מכאן - אין צורך בו

    return { heros, fetchAllHeros };
}