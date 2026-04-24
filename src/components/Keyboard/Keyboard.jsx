import KeyboardRow from "./KeyboardRow.jsx";
import { KEYBOARD_ROWS } from "../../logic/wordle";
/**
 * Keyboard UI Component
 *
 * Creates keyboard-like display (doesn't function like keyboard)
 * helps user to see the letters available vs guessed correct/wrong
 * manages rows, roows manage individual keys/tiles
 *
 * Props:
 * - statuses: array of letters and their status

 */
export default function Keyboard({ statuses }) {
    return (
        <section className="keyboard">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
                <KeyboardRow
                    key={rowIndex}
                    letters={row}
                    statuses={statuses}
                />
            ))}
        </section>
    );
}