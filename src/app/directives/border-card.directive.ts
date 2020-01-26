import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    // prefixer les directives afin deviter les conflits entre librairies..etc
    // pas de ng en prefixe
    // faire du kamelCase
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {


    private defaultHeight: number = 220;
    private defaultWidth: number = 100;


    constructor(private el: ElementRef){
        this.setBorder(255, 255, 255, 6);
        this.setHeightAndWidth(this.defaultHeight, this.defaultWidth);
    }

    @Input("pkmnBorderCard") borderColor: string;

    // Equivaut à addEventListenner en Javascript
    @HostListener('mouseenter') onMouseEnter() {
        // COLOR RED
        this.setBorder(255, 128, 128, 6);
    }

    @HostListener("mouseleave") onMouseLeave() {
        // COLOR WHHITE
        this.setBorder(255, 255, 255, 6);
    }

    private setBorder(r:number, g:number, b:number, a: number) {
        const border = `rgb(${r}, ${g}, ${b}, .${a})`;
        this.el.nativeElement.style.border = `4px solid ${border}`;
    }

    private setHeightAndWidth(height: number, width: number) {
        const sizeHeight = height + "px";
        const sizeWidth = width + "%";
        this.el.nativeElement.style.height = sizeHeight;
        this.el.nativeElement.style.width = sizeWidth;
    }

    
}