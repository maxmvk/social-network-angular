import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Numbers} from 'src/app/models/numbers';

export enum CounterType {
  ONLINE = 'online',
  TOTAL = 'total',
  WOMAN = 'woman',
  MAN = 'man',
}

const COUNTER_TIMEOUT = 1000;
const EVENT_SCROLL = 'scroll';
const INTEGRATION_DIVIDER = 500;

@Component({
  selector: 'app-find-pair',
  templateUrl: './find-pair.component.html',
  styleUrls: ['./find-pair.component.scss']
})

export class FindPairComponent implements OnInit, OnDestroy {

  @ViewChild('numbersMeasure') public elementView: ElementRef;

  public showCountingAnimation = true;
  public count: Numbers = new Numbers();

  public ngOnInit(): void {
    window.addEventListener(EVENT_SCROLL, this.scroll, true);
  }

  public ngOnDestroy(): void {
    window.removeEventListener(EVENT_SCROLL, this.scroll, true);
  }

  public startCounter(start: number, end: number, key: string): void {
    if (start > end) {
      this.count[key] = end;
    } else {
      this.count[key] = start;
      setTimeout(() => this.startCounter(start + (Math.ceil(end / INTEGRATION_DIVIDER)), end, key), COUNTER_TIMEOUT / end);
    }
  }

  public scroll = (): void => {
    if (this.showCountingAnimation) {
      if (this.checkWindowHeight()) {
        this.startCounter(0, 41, CounterType.TOTAL);
        this.startCounter(0, 184, CounterType.ONLINE);
        this.startCounter(0, 95, CounterType.WOMAN);
        this.startCounter(0, 89, CounterType.MAN);
        this.showCountingAnimation = false;
      }
    } else {
      return;
    }
  }

  private checkWindowHeight(): boolean {
    const elementHeight = this.elementView.nativeElement.getBoundingClientRect().height / 2
      + this.elementView.nativeElement.getBoundingClientRect().top;
    return elementHeight < window.innerHeight;
  }
}
