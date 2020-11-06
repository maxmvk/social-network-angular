import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ACTIVITY_MENU_ITEMS, CONNECT_MENU_ITEMS, MenuItems, PAIRS_MENU_ITEMS} from '../../utils/menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() public isSidenavOpen: boolean;
  @Output() public sidenavToggle: EventEmitter<any> = new EventEmitter();

  public connectMenus: MenuItems[] = CONNECT_MENU_ITEMS;
  public pairsMenus: MenuItems[] = PAIRS_MENU_ITEMS;
  public activityMenus: MenuItems[] = ACTIVITY_MENU_ITEMS;

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
