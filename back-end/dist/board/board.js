"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
const tile_1 = require("../tile/tile");
const ColumnIndexs = {
    ColumnA: "a",
    ColumnB: "b",
    ColumnC: "c",
    ColumnD: "d",
    ColumnE: "e",
    ColumnF: "f",
    ColumnG: "g",
    ColumnH: "h"
};
const RowIndexs = {
    Row1: "1",
    Row2: "2",
    Row3: "3",
    Row4: "4",
    Row5: "5",
    Row6: "6",
    Row7: "7",
    Row8: "8",
};
function generateTileIds() {
    const tilesArray = [];
    for (let columnKey in ColumnIndexs) {
        const columnArray = [];
        const columnIdValues = ColumnIndexs[columnKey];
        for (let rowKey in RowIndexs) {
            const rowIdValues = RowIndexs[rowKey];
            const tileId = `${columnIdValues}${rowIdValues}`;
            columnArray.push(tileId);
        }
        tilesArray.push(columnArray);
    }
    return tilesArray;
}
function generateTiles(tileIdList) {
    const tilesList = [];
    for (const arr of tileIdList) {
        const tiles = [];
        arr.map((tileId) => {
            tiles.push(new tile_1.Tile(tileId, tile_1.TileStatus.UNAVAILABLE, null));
        });
        tilesList.push(tiles);
    }
    return tilesList;
}
class ChessBoard {
    constructor() {
        this.tileIds = generateTileIds();
        this.tiles = generateTiles(this.getTileIds());
    }
    getTileIds() {
        return this.tileIds;
    }
    getTiles() {
        return this.tiles;
    }
}
exports.ChessBoard = ChessBoard;
const chessBoard = new ChessBoard();
console.log(chessBoard);
const test = 29;
console.log(test);
//# sourceMappingURL=board.js.map