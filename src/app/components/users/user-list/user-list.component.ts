import {Component, OnInit} from "@angular/core";
import {PagerService} from "../../../services/pager.service";
import {CommonService} from "../../../services/common.service";
import {FormControl, FormGroup} from "@angular/forms";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";
import {UsersService} from "../../../protoServices/products/users.service";
import {UsersListRequest} from "../../../../proto/products/users.pb";

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["../../../../assets/scss/users.scss"],
})
export class UserListComponent implements OnInit {
    offset: any;
    pager: any = {};
    users: any[] = [];

    searchForm = new FormGroup({
        basic: new FormGroup({
            userName: new FormControl(""),
        }),
    });

    constructor(private usersService: UsersService, private pagerService: PagerService, public commonService: CommonService) {
    }

    ngOnInit(): void {
        this.offset = 0;
        this.getUsers(this.offset);
    }

    getUsers(offset: number) {
        if (offset < 0) {
            return;
        }

        const usersListRequest = new UsersListRequest();
        const offsetValue = new googleProtobuf000.Int64Value();
        offsetValue.value = offset.toString();
        usersListRequest.offset = offsetValue;
        usersListRequest.keyWord = this.searchForm.controls.basic.controls.userName.value?.toString();

        this.usersService
            .usersList(usersListRequest)
            .then((result) => {
                if (result) {
                    const resultObj = result.toObject();
                    if (resultObj && resultObj.data) {
                        this.users = resultObj.data;
                        this.pager = this.pagerService.getPager(resultObj.data.length, Number(resultObj.total), this.offset + 1, 10);
                    }
                }
                console.log(this.pager);
            })
            .catch((err) => {
                try {
                    alert(err["statusMessage"]);
                } catch (e) {
                    alert(String(e));
                }
            });
    }
}
