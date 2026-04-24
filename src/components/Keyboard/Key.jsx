
/**
 * Keyboard's Key UI Component
 *
 * Creates keyboard key tile for the keyboard display
 * encapsulated so I don't have to worry about it at other levels in the app
 * individual key, rendered on the guess board. this keeps the responsibilites for the individual key
 *
 * Props:
 * - label: the letter to display,

 */

export default function Key({ label, status = "" }) {
    return (
        <div className={`key ${status}`.trim()}>
            {label}
        </div>
    );
}