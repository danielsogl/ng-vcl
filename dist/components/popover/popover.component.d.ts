import { EventEmitter, ElementRef } from '@angular/core';
import { OverlayManagerService, OverlayManagedComponent } from '../../services/overlayManager.service';
export declare class PopoverComponent implements OverlayManagedComponent {
    private overlayManger;
    private myElement;
    private opening;
    target: string;
    style: string;
    class: string;
    zIndex: number;
    private coverZIndex;
    targetAttachment: string;
    attachment: string;
    open: boolean;
    layer: boolean;
    openChange: EventEmitter<boolean>;
    zIndexManaged: boolean;
    expandManaged: boolean;
    constructor(overlayManger: OverlayManagerService, myElement: ElementRef);
    close(): void;
    onClick(event: any): void;
    ngOnChanges(changes: any): void;
}
