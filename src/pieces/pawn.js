import Piece from './piece';

export default class Pawn extends Piece {
    // Creating a constructor for player. Determining if it is the first or second player and assigning appropriate piece image.
    //Also setting Initial Position since Pawns can move two spaces on first move.
    constructor(player) {
        super(player, (player === 1 ? "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_plt45.svg" : "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_pdt45.svg"));
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }

    isMovePossible(src, dest, isDestEnemyOccupied) {

        if (this.player === 1) {
            if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {
                return true;
            }
        }
        return false;
    }

    // Returns an array of one if pawn moves two steps - otherwise returns an empty array.
    getSrcToDestPath(src, dest) {
        if (dest === src - 16) {
            return [src - 8];
        } else if (dest === src + 16) {
            return [src + 8];
        }
        return [];
    }
}