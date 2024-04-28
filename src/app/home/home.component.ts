import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private elRef: ElementRef, private renderer:Renderer2){}
  scrollToElement(elementId: string): void {
    const element = this.elRef.nativeElement.querySelector('#' + elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}
}