import Board from "./components/Board/Board.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import { buildLetterStatuses } from "./logic/wordle";
import Title from "./components/Title/Title.jsx";

// for now I'm using a static set of answers and guesses to test the game
const ANSWER = "moody";
const GUESSES = ["might", "flood", "stray"];

export default function App() {
    /*
    this is function that returns the set of guesses and their qualities so we can render the
    keyboard display showing all the letters the player has already guessed
    */
    const letterStatuses = buildLetterStatuses(GUESSES, ANSWER);

    return (
        <main className="app">
            <Title />

            {/*for now rendering the static guesses and answer for testing purposes and */}
            {/*to let player know the game isn't fully functiopnal*/}
            <p className="subtitle">
                Static phase: guesses “might”, “flood”, “stray” against “moody”
            </p>

            {/*now at an app level I can declaratively manage the various elements of the game*/}
            {/*that's the whole point of React, I don't need to worry about stuff that is irrelevant*/}
            {/*at this level of the app, I abstracted that away*/}
            <Board guesses={GUESSES} answer={ANSWER} />
            <Keyboard statuses={letterStatuses} />
        </main>
    );
}