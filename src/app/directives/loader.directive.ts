import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonService } from "../services/common.service";

@Directive({
  selector: "[disableOnLoading]",
})
export class LoaderDirective implements OnInit, OnDestroy {
  @Input("disableOnLoading")
  type: string | undefined;
  subscription: Subscription | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef, private commonService: CommonService) {}

  ngOnInit() {
    this.subscription = this.commonService.loaderEmitter.subscribe((value) => {
      if (this.type) {
        switch (this.type) {
          case "span":
            if (value) {
              this.renderer.setAttribute(this.el.nativeElement, "disabled", "true");
            } else {
              this.renderer.removeAttribute(this.el.nativeElement, "disabled");
            }
            break;

          case "button":
            if (value) {
              this.renderer.setAttribute(this.el.nativeElement, "disabled", "true");
            } else {
              this.renderer.removeAttribute(this.el.nativeElement, "disabled");
            }
            break;
          case "input":
            if (value) {
              this.renderer.setAttribute(this.el.nativeElement, "disabled", "true");
            } else {
              this.renderer.removeAttribute(this.el.nativeElement, "disabled");
            }
            break;
          case "textarea":
            if (value) {
              this.renderer.setAttribute(this.el.nativeElement, "disabled", "true");
            } else {
              this.renderer.removeAttribute(this.el.nativeElement, "disabled");
            }
            break;
          case "a":
            if (value) {
              this.el.nativeElement.classList.add("disabled");
            } else {
              this.el.nativeElement.classList.remove("disabled");
            }
            break;
          case "div":
            if (value) {
              this.el.nativeElement.classList.add("disabled");
            } else {
              this.el.nativeElement.classList.remove("disabled");
            }
            break;
          case "li":
            if (value) {
              this.el.nativeElement.classList.add("disabled");
            } else {
              this.el.nativeElement.classList.remove("disabled");
            }
            break;
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
