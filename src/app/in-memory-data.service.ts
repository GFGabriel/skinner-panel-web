import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const gameStates = [
      {
        id: 1,
        playerName: 'Geohen',
        gasLevel: 100,
        ventAmount: .01,
        seconds: 0,
        resources: 0,
        filterCost: 10,
        filtersOwned: 0,
        autoOwned: 0,
        autoCost: 50,
        increasedBy: 0,
        secondGame: false,
        thirdGame: false,
        fourthGame: false,
      },
      {
        id: 2,
        playerName: 'MXC Romano',
        gasLevel: 40,
        ventAmount: .04,
        seconds: 0,
        resources: 0,
        filterCost: 10,
        filtersOwned: 0,
        autoOwned: 0,
        autoCost: 50,
        increasedBy: 0,
        secondGame: true,
        thirdGame: false,
        fourthGame: false,
      },
    ];
    return {gameStates};
  }
}
