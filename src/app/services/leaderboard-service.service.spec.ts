import { TestBed } from '@angular/core/testing';

import { LeaderboardServiceService } from './leaderboard-service.service';

describe('LeaderboardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderboardServiceService = TestBed.get(LeaderboardServiceService);
    expect(service).toBeTruthy();
  });
});
