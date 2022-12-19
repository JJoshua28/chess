"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = exports.TileStatus = void 0;
var TileStatus;
(function (TileStatus) {
    TileStatus["AVAILABLE"] = "available";
    TileStatus["UNAVAILABLE"] = "unavailable";
})(TileStatus = exports.TileStatus || (exports.TileStatus = {}));
;
class Tile {
    constructor(id, status, pieceId = null) {
        this.id = id;
        this.status = status;
        this.pieceId = pieceId;
    }
    ;
    setStatus(newStatus) {
        if (this.status == newStatus)
            throw new Error(`${newStatus} is already the current status for tile ${this.id}`);
        this.status = newStatus;
    }
    ;
    getStatus() {
        return this.status;
    }
    ;
    setPieceId(newPieceId) {
        if (this.pieceId == newPieceId)
            throw new Error(`${newPieceId} is already the current pieceId for tile ${this.id}`);
        this.pieceId = newPieceId;
    }
    getPieceId() {
        return this.pieceId;
    }
    getId() {
        return this.id;
    }
}
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map