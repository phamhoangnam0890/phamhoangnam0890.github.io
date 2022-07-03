import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {NgZone} from "@angular/core";
import {UsersService} from "../../../protoServices/products/users.service";
import {UserInfoRequest} from "../../../../proto/products/users.pb";
import {CommonService} from "../../../services/common.service";

@Component({
    selector: "app-user-info",
    templateUrl: "./user-info.component.html",
    styleUrls: ["../../../../assets/scss/users.scss"],
})
export class UserInfoComponent implements OnInit {
    userId: any;
    userData: any;

    constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone,
                public commonService: CommonService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.userId = params.get("userId");
            if (this.userId) {

                const userInfoRequest = new UserInfoRequest();
                userInfoRequest.userId = this.userId;
                this.usersService.userInfo(userInfoRequest).then(result => {

                    if (result) {
                        this.userData = result.toObject();
                    }
                    console.log(this.userData);
                }).catch(err => {
                    try {
                        alert(err['statusMessage'])
                    } catch (e: any) {
                        alert(e.toString());
                    }
                });
            }
        });
    }
}
