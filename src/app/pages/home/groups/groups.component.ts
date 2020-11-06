import { Component, OnInit } from '@angular/core';
import { GROUPS_LIST } from '../../../utils/groups-list';
import {Group} from '../../../models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public groupsList: Group[] = GROUPS_LIST;

  constructor() { }

  public ngOnInit(): void {
  }

}
