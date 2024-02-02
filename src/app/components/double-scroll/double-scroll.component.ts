import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-double-scroll',
  standalone: true,
  imports: [],
  templateUrl: './double-scroll.component.html',
  styleUrl: './double-scroll.component.scss'
})
export class DoubleScrollComponent implements AfterViewInit {
  @ViewChild('wrapper1') wrapper1: ElementRef<any>;
  @ViewChild('wrapper2') wrapper2: ElementRef<any>;

  @ViewChild('div1') div1: ElementRef<any>;
  @ViewChild('div2') div2: ElementRef<any>;

  private renderer = inject(Renderer2);
  private cdRef = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();

    this.renderer.setStyle(this.div1.nativeElement, 'width', this.div2.nativeElement.clientWidth + 'px');

    this.wrapper1.nativeElement.onscroll = (e: any) =>
      this.wrapper2.nativeElement.scroll((e.target as HTMLElement).scrollLeft, 0);
    this.wrapper2.nativeElement.onscroll = (e: any) =>
      this.wrapper1.nativeElement.scroll((e.target as HTMLElement).scrollLeft, 0);
  }
}
