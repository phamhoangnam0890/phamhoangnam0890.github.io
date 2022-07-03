import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../services/common.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-common-nav',
    templateUrl: './common-nav.component.html',
})
export class CommonNavComponent implements OnInit {
    itemsFlg: boolean = false;
    env = environment;
    userName: any;
    private _el: HTMLElement;

    constructor(el: ElementRef, private router: Router, public commonService: CommonService) {
        this._el = el.nativeElement;
    }

    ngOnInit(): void {
        this.userName = this.commonService.getUserName();

        if (this.router.url.includes('/items')) {
            this.itemsFlg = true;
            this.changeFlg(1);
        }

        const active = this._el.getElementsByClassName('active');
        // console.log(active[0]);

        const localFlgs = JSON.parse(<string>localStorage.getItem('shopManageClient'));

        if (localFlgs && localFlgs['itemsFlg']) {
            this.itemsFlg = true;
        }
    }

    
    logOut() {
        this.commonService.cookieDelete();
        this.router.navigate(['/login']);
    }

    changeFlg(type: number) {
        // if (type == 1) {
        //   this.itemsFlg = true;
        // }

        const data = {itemsFlg: this.itemsFlg};
        localStorage.setItem('shopManageClient', JSON.stringify(data));
    }
}
