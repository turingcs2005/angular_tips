import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, ConnectionPositionPair} from '@angular/cdk/overlay';
import { Tooltip1Component } from './portals/tooltip1/tooltip1.component';

@Component({
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss']
})
export class OverlayDemoComponent implements OnInit {

  @ViewChild('markdown') markdown: ElementRef<HTMLSpanElement> ;
  componentPortal: ComponentPortal<Tooltip1Component>;
  overlayRef: OverlayRef = this.overlay.create(null);

  constructor(
    private overlay: Overlay
  ) { }

  ngOnInit(): void {
  }

  display() {
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.markdown).withPositions([
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
      ),
    ]);
    // .withPush(false);  - CDK can force push the overlay on screen if neither of the preferred positions fits.

    this.componentPortal = new ComponentPortal(Tooltip1Component);
    this.overlayRef = this.overlay.create({
      height: '400px',
      width: '600px',
      positionStrategy,
      hasBackdrop: false,
    });
    this.overlayRef.attach(this.componentPortal);
  }

}
