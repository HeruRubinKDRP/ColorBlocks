/* simple encapsulation of the tile element, this will make it easier to manage upstream.
This way this component is responsible for ONe thing - rendering the tile related text and conditional color
*/

export default function Tile({ letter = "", status = "" }) {
    return <div className={`tile ${status}`.trim()}>{letter}</div>;
}