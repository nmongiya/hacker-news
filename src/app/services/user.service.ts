import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _httpClient?: HttpClient) { }

  getSearchResults(query: string, pageNumber: number) {
    return this._httpClient.get(`http://hn.algolia.com/api/v1/search?query=${query}&page=${pageNumber}`);

  }


}
