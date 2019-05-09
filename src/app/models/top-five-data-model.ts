export class topFiveData {
    
    character: string;
    dead: string;
    depth: string;
    id: number;
    leagueDifficulty: string;
    leagueName: string;
    rank: string;
    theClass: string;
    timeStamp: string;
    
    constructor(
        character: string,
        dead: string,
        depth: string,
        id: number,
        leagueDifficulty: string,
        leagueName: string,
        rank: string,
        theClass: string,
        timeStamp: string
    ) {
        this.character = character;
        this.dead = dead;
        this.depth = depth;
        this.id = id;
        this.leagueDifficulty = leagueDifficulty;
        this.leagueName = leagueName;
        this.rank = rank;
        this.theClass = theClass;
        this.timeStamp = timeStamp;
    }

}