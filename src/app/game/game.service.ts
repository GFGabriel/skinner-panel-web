import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GameState } from './game-state';


@Injectable()

export class GameService implements OnInit {
  private gameStatesUrl = 'https://skinner-panel-api.herokuapp.com/api/v1/gameStates';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getGameStates(): Promise<GameState[]> {
    return this.http.get(this.gameStatesUrl)
      .toPromise()
      .then(response => response.json().data as GameState[])
      .catch(this.handleError);
  };

  getGameState(): Promise<GameState> {
    const url = 'https://skinner-panel-api.herokuapp.com/api/v1/gameStates/1';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as GameState)
      .catch(this.handleError);
  }

  update(gameState: GameState): Promise<GameState> {
    const url = `${this.gameStatesUrl}/${gameState.id}`;
    return this.http
      .put(url, JSON.stringify(gameState), {headers: this.headers})
      .toPromise()
      .then(() => gameState)
      .catch(this.handleError);
  }

  create(name: string): Promise<GameState> {
    return this.http
      .post(this.gameStatesUrl, JSON.stringify({playerName: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as GameState)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.gameStatesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit(): void {
    console.log('initializing service!');
  }
}

