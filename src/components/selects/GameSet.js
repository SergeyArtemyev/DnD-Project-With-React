import React from "react";

const GameSet = () => {
  return (
    <>
      <li>
        <select name="gameSet" className="browser-default">
          <option value="none">- Choose a Gaming Set -</option>
          <option value="Dice Set">Dice Set</option>
          <option value="Dragonchess Set">Dragonchess Set</option>
          <option value="Playing Card Set">Playing Card Set</option>
          <option value="Three-Dragon Ante Set">Three-Dragon Ante Set</option>
        </select>
      </li>
    </>
  );
};

export default GameSet;
