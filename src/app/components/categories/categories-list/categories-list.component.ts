import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoaderService} from "../../../services/loader.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PagerService} from "../../../services/pager.service";
import {CommonService} from "../../../services/common.service";
import {CategoriesService} from "../../../protoServices/products/categories.service";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";
import {CategoriesListRequest} from "../../../../proto/products/categories.pb";

@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ["../../../../assets/scss/items.scss"]
    ,
})
export class CategoriesListComponent implements OnInit {

    offset: any;
    pager: any = {};
    categories: any;

    constructor(private categoriesService: CategoriesService, private loaderService: LoaderService, private route: ActivatedRoute, private location: Location, private pagerService: PagerService, public commonService: CommonService) {
    }


    ngOnInit(): void {

        this.getCategories(1, null);
    }

    getCategories(page: any, input: any) {
        if (page < 1) {
            return;
        }

        this.offset = page - 1;

        const offsetValue = new googleProtobuf000.Int64Value();
        offsetValue.value = this.offset;
        const categoriesListRequest = new CategoriesListRequest();
        categoriesListRequest.offset = offsetValue;
        this.categoriesService
            .categoriesList(categoriesListRequest)
            .then((result: any) => {
                if (result) {

                    this.categories = result.toObject();
                    console.log(this.categories);
                    this.pager = this.pagerService.getPager(this.categories.data.length, Number(this.categories.total), Number(this.offset) + 1, 50); // or whatever
                }
            })
            .catch((err: any) => {
                console.log(err);
                try {
                    alert(err["statusMessage"]);
                } catch (e) {
                    alert(String(e));
                }
            });
    }

}
