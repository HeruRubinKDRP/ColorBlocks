import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const config = {
    tilesPerColumn: 3,
    useObjectLabel: false,
};

const tiles = [
    { label: "Start", color: "salmon" },
    { label: "Forest", color: "gold" },
    { label: "Treasure", color: "black" },
    { label: "Trap", color: "gold" },
    { label: "Path", color: "black" },
    { label: "Key", color: "blue" },
    { label: "Enemy", color: "black" },
    { label: "Door", color: "blue" },
    { label: "Goal", color: "salmon" },
];

function App() {
    const gridSize = config.tilesPerColumn;

    /* ===== - - - EVENT
     we can handle events easily in React, just declare an  instance of the method and we can call it from
     an element on a mouse or keyboard event
    */

    const handleTileClick = (tileNumber) => {
        /*
        * when I instanced the tile this also created an instance of the method
        * with its unique numerical for that tile in the function so I can call
        * this function and trigger the altert with that tile's unique numbber
        * */
        alert(`Tile number: ${tileNumber}`);

    };

    return (
        <main className="app">
            {/*using css grid, because then the layout logic is kept in css, we can flip or reverse the layout in css
            in practice when making the fully fledged game so this way is simpler to code and bonus if I
             change my mind or get new reqirements it's very easy to change the layouts, I also added a config
             so if I needed to make this into a wordle board then i just need to change the config*/}
            <div
                className="gameGrid"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
            >
                {/*this structure will give the most flexibility for placing tiles for different game modes or animations etc*/}
                {/*but since the digram in the requirements has the numbers from top to bottom I can just flip them with css*/}
                {tiles.map((tile, index) => {
                    const tileNumber = index + 1;
                    /*
                    * display text or the sequence number - for most games we'd probably want a letter or word
                    * this way I can switch it over depending on the game rules
                    * */


                    const displayText = config.useObjectLabel
                        ? tile.label
                        : tileNumber;
// establish event right on the interactive element
                    return (
                        /*
                        * construct the class name based on the color value in the tiles data object
                        // display text is optional based on config const useObjectLabel,
                        * this way we can easily switch between showing the tile number or the label
                        * without changing the data structure or the rendering logic
                        * */
                        <button
                            key={index}
                            className={`tile tile-${tile.color}`}
                            onClick={() => handleTileClick(tileNumber)}
                        >
                            {displayText}
                        </button>
                    );
                })}
            </div>
        </main>
    );
}


// this should be done in a separate file for separation of concerns but assignment requires just App.jsx
const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

export default App;