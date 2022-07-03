import {Component, NgZone, OnInit} from '@angular/core';
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../../services/common.service";
import {LoaderService} from "../../../services/loader.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Lightbox} from "ngx-lightbox";
import {CategoriesService} from "../../../protoServices/products/categories.service";
import {CategoryEntryRequest} from "../../../../proto/products/categories.pb";

@Component({
    selector: 'app-categories-create',
    templateUrl: './categories-create.component.html',
    styleUrls: ["../../../../assets/scss/items.scss"]
})
export class CategoriesCreateComponent implements OnInit {

    itemInputForm = new FormGroup({
        basic: new FormGroup({
            categoryName: new FormControl("", [Validators.required]),
        }),
    });


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
    }

    onSave() {
        const form = document.getElementsByClassName("needs-validation")[0] as HTMLFormElement;

        if (!form.checkValidity()) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        form.classList.add("was-validated");

        console.log(form.checkValidity());
        if (!form.checkValidity()) {
            window.scrollTo(0, 0);
            return;
        }

        if (this.itemInputForm.invalid) {
            window.scrollTo(0, 0);
            return;
        }

        const categoryEntryRequest = new CategoryEntryRequest();
        categoryEntryRequest.categoryName = this.itemInputForm.controls.basic.controls.categoryName.value?.toString();

        this.categoriesService
            .categoryEntry(categoryEntryRequest)
            .then((result) => {
                if (result) {
                    const modalTarget = document.getElementById("modalSaveComplete");
                    const modalSaveComplete = new Bootstrap.Modal(modalTarget);
                    modalSaveComplete.show();


                    if (modalTarget) {
                        modalTarget.addEventListener("hide.bs.modal", () => {
                            this.ngZone.run(() => {
                                setTimeout(() => {
                                    this.router.navigate(["/categories"]);
                                });
                            });
                        });
                    }
                }
            })
            .catch((err) => {
                try {
                    alert(err["statusMessage"]);
                } catch (e) {
                    alert(String(e));
                }
            })
            .finally(() => {
                this.itemInputForm.enable();
            });
    }

}
