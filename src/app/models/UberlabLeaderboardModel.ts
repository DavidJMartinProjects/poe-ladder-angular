export class UberlabLeaderboardModel {

  public rank: string;
  public character: string;
  public ascendancy: string;
  public time: string;
  public league: string;
  public leaderboard: string;

  constructor(rank:string, character:string, ascendancy:string, time:string, league:string, leaderboard:string) {
    this.rank = rank;
    this.character = character;
    this.ascendancy = ascendancy;
    this.time = time;
    this.league = league;
    this.leaderboard = leaderboard;
  }

}
