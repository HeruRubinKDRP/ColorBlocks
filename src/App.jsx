import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const config = {
    tilesPerColumn: 3,
    useObjectLabel: false,
};

const tiles = [
    { label: "Start", color: "salmon" },
    { label: "Forest", color: "green" },
    { label: "Treasure", color: "gold" },
    { label: "Trap", color: "black" },
    { label: "Path", color: "green" },
    { label: "Key", color: "gold" },
    { label: "Enemy", color: "salmon" },
    { label: "Door", color: "black" },
    { label: "Goal", color: "gold" },
];

function App() {
    const gridSize = config.tilesPerColumn;

    const handleTileClick = (tileNumber) => {
        alert(`Tile number: ${tileNumber}`);
    };

    return (
        <main className="app">
            <div
                className="gameGrid"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
            >
                {tiles.map((tile, index) => {
                    const tileNumber = index + 1;
                    const displayText = config.useObjectLabel
                        ? tile.label
                        : tileNumber;

                    return (
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

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

export default App;