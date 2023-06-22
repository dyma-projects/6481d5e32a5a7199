import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  public color = "";

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('window:keydown', ['$event']) handleKeyDown($event) {
    switch ($event.key) {
      case "ArrowDown":
        this.color = "red";
        break;
      case "ArrowUp":
        this.color = "green";
        break;
      case "ArrowLeft":
        this.color = "orange";
        break;
      case "ArrowRight":
        this.color = "blue";
        break;
      default:
        this.color = "black";
    }
    this.el.nativeElement.style.color = this.color; // Update the color of the element
  }
}
