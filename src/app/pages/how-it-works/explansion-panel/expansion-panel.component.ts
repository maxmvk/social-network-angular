import {Component, Input} from '@angular/core';
import {Expansion} from '../../../models/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {

  @Input() public expansion: Expansion = new Expansion();
  @Input() public count: number;

  public showHiddenContent(id): void {
    const arrow = document.getElementById(`arrow${id}`);
    const name = document.getElementById(`name${id}`);
    const content = document.getElementById(`content${id}`);
    const isChecked = arrow.classList.contains('arrow-checked');
    arrow.classList.toggle('arrow-checked');
    name.classList.toggle('name-checked');
    if (isChecked) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
}
