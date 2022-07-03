import {Component, NgZone, OnInit} from '@angular/core';
import {CategoryInfoRequest} from "../../../../proto/products/categories.pb";
import {CommonService} from "../../../services/common.service";
import {LoaderService} from "../../../services/loader.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Lightbox} from "ngx-lightbox";
import {CategoriesService} from "../../../protoServices/products/categories.service";

@Component({
    selector: 'app-categories-info',
    templateUrl: './categories-info.component.html',
    styleUrls: ["../../../../assets/scss/items.scss"]
})
export class CategoriesInfoComponent implements OnInit {

    categoryId: any;
    categoryName: any;

    constructor(
        public commonService: CommonService,
        public loaderService: LoaderService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private router: Router,
        private ngZone: NgZone,
        private lightbox: Lightbox,
        private categoriesService: CategoriesService
    ) {
    }

    ngOnInit(): void {

        this.route.paramMap.subscribe((params) => {

            // @ts-ignore
            this.categoryId = params.get("categoryId");
            console.log(this.categoryId);
            if (this.categoryId) {

                const categoryInfoRequest = new CategoryInfoRequest();
                categoryInfoRequest.categoryId = this.categoryId;
                this.categoriesService.categoryInfo(categoryInfoRequest).then(result => {
                    if (result && result.toObject()) {
                        this.categoryName = result.toObject().categoryName;
                    }
                }).catch(err => {
                    try {
                        alert(err["statusMessage"]);
                    } catch (e) {
                        alert(String(e));
                    }
                });
            }
        });
    }
}
