export class LeaderboardModel {

  public rank: string;
  public rankDifference: string;
  public account: string;
  public character: string;
  public ascendancy: string;
  public league: string;
  public leaderboard: string;
  public level: string;
  public depth: string;
  public time: string;
  public timeFormatted : string;
  public experience: string;
  public experienceDifference: string;
  public progress: string;
  public online: string;
  public dead: string;

  constructor(rank:string, rankDifference: string, account:string, character:string, ascendancy:string, league:string, leaderboard:string, level:string, depth:string, time:string, timeFormatted:string, experience:string, experienceDifference: string, progress: string, online: string, dead: string) {
    this.rank = rank;
    this.rankDifference = rankDifference;
    this.account = account;
    this.character = character;
    this.ascendancy = ascendancy;
    this.league = league;
    this.leaderboard = leaderboard;
    this.level = level;
    this.depth = depth;
    this.time = time;
    this.timeFormatted = timeFormatted;
    this.experience = experience;
    this.experienceDifference = experienceDifference;
    this.progress = progress;
    this.online = online;
    this.dead = dead;
  }

}
