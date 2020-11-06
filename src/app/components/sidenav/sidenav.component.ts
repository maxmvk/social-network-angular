import {Component, Output, EventEmitter} from '@angular/core';
import {CONNECT_MENU_ITEMS, PAIRS_MENU_ITEMS, ACTIVITY_MENU_ITEMS} from 'src/app/utils/menu-items';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() public sidenavClose: EventEmitter<any> = new EventEmitter();

  public connectMenus: Array<object> = CONNECT_MENU_ITEMS;
  public pairsMenus: Array<object> = PAIRS_MENU_ITEMS;
  public activityMenus: Array<object> = ACTIVITY_MENU_ITEMS;


  public onSidenavClose(): void {
    this.sidenavClose.emit();
  }

}
