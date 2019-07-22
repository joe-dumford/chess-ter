import Piece from './piece';

export default class Rook extends Piece {
    // Creating a constructor for player. Determining if it is the first or second player and assigning appropriate piece image
    constructor(player) {
        super(player, (player === 1 ? "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_rlt45.svg" : "https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_rdt45.svg"));
    }

    isMovepossible(src, dest) {
        let mod = src % 8;
        let diff = 8 - mod;
        return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
    }

    getSrcToDestPath(src, dest) {
        let path = [],
            pathStart, pathEnd, incrementBy;
        if (src > des) {
            pathStart = dest;
            pathEnd = src;
        } else {
            pathStart = src;
            pathEnd = dest;
        }
        if (Math.abs(src - dest) % 8 === 0) {
            incrementBy = 8;
            pathStart += 8;
        } else {
            incrementBy = 1;
            pathStart += 1;
        }

        for (let i = pathStart; i < pathEnd; i += incrementBy) {
            path.push(i);
        }
        return path;
    }
}