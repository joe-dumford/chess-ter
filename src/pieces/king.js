import Piece from './piece.js';

export default class King extends Piece {
     // Creating a constructor for player. Determining if it is the first or second player and assigning appropriate piece image
    constructor(player) {
        super(player, (player === 1 ? "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_klt45.svg" : "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_kdt45.svg"));
    }

    isMovePossible(src, dest) {
        return (src - 9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 === dest ||
            src + 9 === dest ||
            src + 8 === dest ||
            src + 7 === dest ||
            src - 1 === dest);
    }

    getSrcToDestPath(src, dest) {
        return [];
    }
}