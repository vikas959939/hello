import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @HostBinding('style.border') border:any;
  constructor(private er:ElementRef){
    // this.er.nativeElement.style.color = 'red';
    // this.er.nativeElement.style.backgroundColor='yellow';
  }

  @HostListener('mouseover') onHover(){
    this.er.nativeElement.style='border-radius','20px';
    this.er.nativeElement.style.width='450px';
    this.er.nativeElement.style.height='350px';
    this.er.nativeElement.style.transition='0.5s';
    this.er.nativeElement.style.overflow='hidden';
    // this.border='2px solid red';
  }

  @HostListener('mouseout') onMouseOut(){
    this.er.nativeElement.style.color='blue';
    this.er.nativeElement.style.width='400px';
    this.er.nativeElement.style.height='300px';
    this.er.nativeElement.style.transition='0.5s';
  }
}
