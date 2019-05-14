export class DelveLeaderboardModel {

  public rank: string;
  public character: string;
  public ascendancy: string;
  public depth: string;
  public league: string;
  public leaderboard: string;
  public account: string;

  constructor(rank:string, character:string, ascendancy:string, depth:string, league:string, leaderboard:string, account:string) {
    this.rank = rank;
    this.character = character;
    this.account = account;
    this.ascendancy = ascendancy;
    this.depth = depth;
    this.league = league;
    this.leaderboard = leaderboard;
  }

}
