import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  show() {
    this.loading = true;
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loading = false;
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

  isLoading() {
    return this.loading;
  }
}

export interface LoaderState {
  show: boolean;
}
