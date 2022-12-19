"use strict";
exports.__esModule = true;
exports.Tile = exports.TileStatus = void 0;
var TileStatus;
(function (TileStatus) {
    TileStatus["AVAILABLE"] = "available";
    TileStatus["UNAVAILABLE"] = "unavailable";
})(TileStatus = exports.TileStatus || (exports.TileStatus = {}));
;
var Tile = /** @class */ (function () {
    function Tile(id, status, pieceId) {
        if (pieceId === void 0) { pieceId = null; }
        this.id = id;
        this.status = status;
        this.pieceId = pieceId;
    }
    ;
    Tile.prototype.setStatus = function (newStatus) {
        if (this.status == newStatus)
            throw new Error(newStatus + " is already the current status for tile " + this.id);
        this.status = newStatus;
    };
    ;
    Tile.prototype.getStatus = function () {
        return this.status;
    };
    ;
    Tile.prototype.setPieceId = function (newPieceId) {
        if (this.pieceId == newPieceId)
            throw new Error(newPieceId + " is already the current pieceId for tile " + this.id);
        this.pieceId = newPieceId;
    };
    Tile.prototype.getPieceId = function () {
        return this.pieceId;
    };
    Tile.prototype.getId = function () {
        return this.id;
    };
    return Tile;
}());
exports.Tile = Tile;
