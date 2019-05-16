export class LeaderboardModel {

  public rank: string;
  public account: string;
  public character: string;
  public ascendancy: string;
  public league: string;
  public leaderboard: string;
  public level: string;
  public depth: string;
  public time: string;
  public experience: string;
  public progress: string;

  constructor(rank:string, account:string, character:string, ascendancy:string, league:string, leaderboard:string, level:string, depth:string, time:string, experience:string, progress: string) {
    this.rank = rank;
    this.account = account;
    this.character = character;
    this.ascendancy = ascendancy;
    this.league = league;
    this.leaderboard = leaderboard;
    this.level = level;
    this.depth = depth;
    this.time = time;
    this.experience = experience;
    this.progress = progress;
  }

}
