// Here we are keeping the players and icon image link (black pawn, white rook) info. These both come from specialized subclasses like Pawn or Rook.

export default class Piece {
    constructor(player, iconUrl){
      this.player = player;
      this.style = {backgroundImage: "url('"+iconUrl+"')"};
    }
  }
  