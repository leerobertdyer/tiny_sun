import { Song } from "@/components/BeforeAndAfterPlayer/BeforeAndAfterPlayer";
import { useState } from "react";

export default function Services() {
    const [trumpetSongs, setTrumpetSongs] = useState<Song[]>([]);

    return (
        <>
        <h1>Trumpets</h1>
        <h2>Mixing</h2>
        <h3>Full Production</h3>
        </>
    )
}