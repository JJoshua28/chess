"use strict";
exports.__esModule = true;
exports.ChessBoard = void 0;
var ColumnIndexs = {
    ColumnA: "a",
    ColumnB: "b",
    ColumnC: "c",
    ColumnD: "d",
    ColumnE: "e",
    ColumnF: "f",
    ColumnG: "g",
    ColumnH: "h"
};
var RowIndexs = {
    Row1: "1",
    Row2: "2",
    Row3: "3",
    Row4: "4",
    Row5: "5",
    Row6: "6",
    Row7: "7",
    Row8: "8"
};
function generateTileIds() {
    var tilesArray = [];
    for (var columnKey in ColumnIndexs) {
        var columnArray = [];
        var columnIdValues = ColumnIndexs[columnKey];
        for (var rowKey in RowIndexs) {
            var rowIdValues = RowIndexs[rowKey];
            var tileId = "" + columnIdValues + rowIdValues;
            columnArray.push(tileId);
        }
        tilesArray.push(columnArray);
    }
    return tilesArray;
}
var ChessBoard = /** @class */ (function () {
    //readonly tiles: TileBlueprint[][] = generateTiles(this.getTileIds()
    function ChessBoard() {
        this.tileIds = generateTileIds();
    }
    ChessBoard.prototype.getTileIds = function () {
        return this.tileIds;
    };
    return ChessBoard;
}());
exports.ChessBoard = ChessBoard;
var chessBoard = new ChessBoard();
console.log(chessBoard);
var test = 29;
console.log(test);
