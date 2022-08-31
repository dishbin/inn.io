import './Main.css';
import Lobby from "../../lobby/lobby/Lobby";
import GameDrawer from "../game-drawer/game-drawer/GameDrawer";
import MetaDrawer from "../meta-drawer/meta-drawer/MetaDrawer";

export default function Main({ socket, state, setState, isLoggedIn, setIsLoggedIn }) {
    return(
        <div className="Main">
            <GameDrawer />
            <Lobby />
            <MetaDrawer />
        </div>
    );
}