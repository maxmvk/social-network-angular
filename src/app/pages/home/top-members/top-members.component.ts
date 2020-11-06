import { Component, OnInit } from '@angular/core';
import { MEMBERS_LIST_1, MEMBERS_LIST_2 } from '../../../utils/members-list';
import {Member} from '../../../models/member';

@Component({
  selector: 'app-top-members',
  templateUrl: './top-members.component.html',
  styleUrls: ['./top-members.component.scss']
})
export class TopMembersComponent implements OnInit {
  public membersList1: Member[] = MEMBERS_LIST_1;
  public membersList2: Member[] = MEMBERS_LIST_2;

  constructor() { }

  public ngOnInit(): void {
  }

}
