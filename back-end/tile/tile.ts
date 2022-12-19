import { TileIdsType } from "../board/board";

export enum TileStatus {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable"
}

export interface TileBlueprint {
    readonly id:TileIdsType,
    setPieceId(id: string | null): void;
    getPieceId(): null | string;
    setStatus(newStatus: TileStatus): void;
    getId: ()=> TileIdsType;
    getStatus(): TileStatus;
    returnComponent?:() => HTMLDivElement;
};

export class Tile implements TileBlueprint{
    constructor(
        readonly id:TileIdsType,
        private status: TileStatus,
        private pieceId: string | null = null
    ) {};
    setStatus(newStatus: TileStatus) {
        if(this.status == newStatus) throw new Error(`${newStatus} is already the current status for tile ${this.id}`);
        this.status = newStatus; 
    };
    getStatus(): TileStatus {
        return this.status;
    };
    setPieceId(newPieceId: TileStatus) {
        if(this.pieceId == newPieceId) throw new Error(`${newPieceId} is already the current pieceId for tile ${this.id}`);
        this.pieceId = newPieceId; 
    }
    getPieceId(): string| null {
        return this.pieceId;
    }
    getId ():TileIdsType {
        return this.id;
    }
}



