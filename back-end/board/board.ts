
const ColumnIndexs =  {
    ColumnA: "a",
    ColumnB: "b",
    ColumnC: "c",
    ColumnD: "d",
    ColumnE: "e",
    ColumnF: "f",
    ColumnG: "g",
    ColumnH: "h"
} as const;

type ColumnIds = typeof ColumnIndexs [keyof typeof ColumnIndexs];

const RowIndexs = {
    Row1: "1",
    Row2: "2",
    Row3: "3",
    Row4: "4",
    Row5: "5",
    Row6: "6",
    Row7: "7",
    Row8: "8",
} as const;

type RowIds = typeof RowIndexs [keyof typeof RowIndexs];
  
//I need to address this
export type TileIdsType = `${ColumnIds}${RowIds}`; 

export interface BoardBluePrint {
    //readonly tiles: TileBlueprint[][];
    readonly tileIds: TileIdsType[][]; 
    getTileIds: () => TileIdsType[][];
}

function generateTileIds(): TileIdsType[][] {
    const tilesArray: TileIdsType[][] = []   
    for (let columnKey in ColumnIndexs) {
        const columnArray: TileIdsType[] = []
        const columnIdValues: ColumnIds = ColumnIndexs[columnKey as keyof typeof ColumnIndexs];
        for (let rowKey in RowIndexs) {
            const rowIdValues: RowIds = RowIndexs[rowKey as keyof typeof RowIndexs];
            const tileId = `${columnIdValues}${rowIdValues}` as TileIdsType;
            columnArray.push(tileId);
        }
        tilesArray.push(columnArray); 
    }
    return tilesArray;
}



export class ChessBoard implements BoardBluePrint {
    readonly tileIds: TileIdsType[][] = generateTileIds();
    //readonly tiles: TileBlueprint[][] = generateTiles(this.getTileIds()
    constructor() {}
    getTileIds(): TileIdsType[][] {
        return this.tileIds;
    }
}    

const chessBoard = new ChessBoard();
console.log(chessBoard);
const test:number  = 29;
console.log(test);