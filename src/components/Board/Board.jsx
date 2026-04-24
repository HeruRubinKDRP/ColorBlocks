import Row from "./Row.jsx";
import { ROWS } from "../../logic/wordle.js";
/**
 * Board UI Component
 *
 * Creates the game board from a series of rows
 * rows manage individual tile.
 *
 * Props:
 * - guesses: array of accumulated guesses the user has made so far
 * - answer: string expected for the andwer to the puzzle
 */
export default function Board({ guesses, answer }) {
    return (
        <section className="board">
            {Array.from({ length: ROWS }, (_, i) => (
                <Row key={i} guess={guesses[i] || ""} answer={answer} />
            ))}
        </section>
    );
}