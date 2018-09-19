import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CustomResult } from './shared/VO/CustomResult';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  query = '';
  keyUp = new Subject<string>();
  show = false;
  totalPages = 0;
  currentPage = 0;
  results = 0;
  timeInSeconds = 0;
  constructor(private _userService: UserService) {

    const observable = this.keyUp.pipe(
      debounceTime(500)).subscribe(x => {
        // console.log(x);
        this.query = x;
        this.getResult(0);
      });

  }

  ngOnInit() {
    // this.getResult(0);

  }

  getResult(pageNUm: number) {
    if (pageNUm > -1) {
    this.currentPage = pageNUm;
      this._userService.getSearchResults(this.query, pageNUm)
        .subscribe(data => {
          if (Object.keys(data['hits']).length) {
            this.show = true;
            const _items = data as CustomResult;
            this.results = _items.nbHits;
            this.timeInSeconds = _items.processingTimeMS /10;
            this.pagedItems = _items.hits;
            this.totalPages = _items.nbPages;
            this.setPage(pageNUm);
          } else {
            this.show = false;
          }
        });
    }
  }

  setPage(page: number) {
    // get pager object from service
    // this.pager = this._userService.getPager(this.pagedItems.length, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onSearchChange(searchValue: string) {
    // console.log(searchValue);
    this.query = searchValue;
  }
}
