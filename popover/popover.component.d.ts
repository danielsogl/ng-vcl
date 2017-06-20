import { EventEmitter, ElementRef, SimpleChanges, OpaqueToken } from '@angular/core';
import { ObservableComponent } from "../core/index";
import { AnimationMetadata, AnimationFactory, AnimationBuilder } from "@angular/animations";
export declare type AttachmentX = 'left' | 'center' | 'right';
export declare const AttachmentX: {
    Left: AttachmentX;
    Center: AttachmentX;
    Right: AttachmentX;
};
export declare type AttachmentY = 'top' | 'center' | 'bottom';
export declare const AttachmentY: {
    Top: AttachmentY;
    Center: AttachmentY;
    Bottom: AttachmentY;
};
export declare enum PopoverState {
    visible = 0,
    hidden = 1,
    opening = 2,
    closing = 3,
}
export declare const POPOVER_ANIMATIONS: OpaqueToken;
export interface PopoverAnimationConfig {
    enter?: AnimationMetadata | AnimationMetadata[];
    leave?: AnimationMetadata | AnimationMetadata[];
}
export declare class PopoverComponent extends ObservableComponent {
    protected readonly me: ElementRef;
    private builder;
    private animations;
    private static readonly Tag;
    private tag;
    debug: false;
    target: string | any;
    targetX: AttachmentX;
    targetY: AttachmentY;
    attachmentX: AttachmentX;
    attachmentY: AttachmentY;
    visible: boolean;
    willClose: EventEmitter<any>;
    willOpen: EventEmitter<any>;
    state: PopoverState;
    readonly classHidden: boolean;
    readonly styleVisibility: string;
    private translateX;
    private translateY;
    readonly transform: string;
    enterAnimationFactory: AnimationFactory | undefined;
    leaveAnimationFactory: AnimationFactory | undefined;
    constructor(me: ElementRef, builder: AnimationBuilder, animations: PopoverAnimationConfig);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    open(): void;
    close(): void;
    toggle(): void;
    setTag(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onWindowResize(ev);
    private getTargetPosition();
    private getAttachmentPosition();
    reposition(): void;
}
