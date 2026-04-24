import Key from "./Key";
/**
 * Keyboard's Row UI Component
 *
 * Creates keyboard row of key tiles for the keyboard display
 * encapsulated so I don't have to worry about it at other levels in the app

 * Props:
 * - letters: array of letters,
 * statuses: array of included, not included, not chosen

 */
export default function KeyboardRow({ letters, statuses }) {
    return (
        <div className="keyboard-row">
            {letters.map((letter) => (
                <Key
                    key={letter}
                    label={letter}
                    status={statuses[letter] || ""}
                />
            ))}
        </div>
    );
}