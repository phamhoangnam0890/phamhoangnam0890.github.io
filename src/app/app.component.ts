import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, fromEvent } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <ngx-loading-bar [color]="'#fecd33'" [includeSpinner]="true" [diameter]="'2'" [height]="'4'"></ngx-loading-bar>
  `,
})

// '#EBD41F'
export class AppComponent implements OnInit {
  ngOnInit(): void {
    handleOnlineChange(navigator.onLine);
    fromEvent(window, "online").subscribe(() => handleOnlineChange(true));
    fromEvent(window, "offline").subscribe(() => handleOnlineChange(false));
  }
}

export const onlineSubject = new BehaviorSubject<boolean>(true);
const handleOnlineChange = (online: boolean) => {
  if (online !== onlineSubject.getValue()) {
    onlineSubject.next(online);
    localStorage.removeItem("Public-IP");
  }
};
