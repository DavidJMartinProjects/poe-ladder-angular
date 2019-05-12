export class RaceTo100LeaderboardModel {

  public rank: string;
  public character: string;
  public ascendancy: string;
  public level: string;
  public league: string;
  public leaderboard: string;

  constructor(rank:string, character:string, ascendancy:string, level:string, league:string, leaderboard:string) {
    this.rank = rank;
    this.character = character;
    this.ascendancy = ascendancy;
    this.level = level;
    this.league = league;
    this.leaderboard = leaderboard;
  }

}
