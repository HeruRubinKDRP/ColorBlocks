import Tile from "./Tile.jsx";
import { COLS, scoreGuess } from "../../logic/wordle.js";


/* row component manages the tiles components rendering, this way upstream we can have a very simple declarative
representation of the row.
so this way the row is responsible for one thing - making rows
*/
export default function Row({ guess = "", answer }) {
    const score = guess ? scoreGuess(guess, answer) : [];

    return (
        <div className="row">
            {Array.from({ length: COLS }, (_, i) => (
                <Tile key={i} letter={guess[i] || ""} status={score[i] || ""} />
            ))}
        </div>
    );
}