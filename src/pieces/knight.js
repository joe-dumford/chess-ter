import Piece from './piece.js';

export default class Knight extends Piece {
     // Creating a constructor for player. Determining if it is the first or second player and assigning appropriate piece image
    constructor(player) {
        super(player, (player === 1 ? "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_nlt45.svg" : "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_ndt45.svg"));
    }

    isMovePossible(src, dest) {
        return (src - 17 === dest ||
            src - 10 === dest ||
            src + 6 === dest ||
            src + 15 === dest ||
            src - 15 === dest ||
            src - 6 === dest ||
            src + 10 === dest ||
            src + 17 === dest);
    }

    // Return an empty array because Knights can move over (jump) other pieces
    getSrcToPath() {
        return [];
    }
}