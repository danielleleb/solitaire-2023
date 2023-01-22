import { createContext, useContext } from "react";
import { IGame, IGameContext } from "../types";

export const GameContext = createContext<IGameContext>({} as IGameContext);

// const GameProvider = ({ children }) => {

// }

export const useGameContext = () => useContext(GameContext);
