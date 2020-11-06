import {Component, OnInit} from '@angular/core';
import {EXPANSION_LIST} from '../../utils/expansion-list';
import {Expansion} from '../../models/expansion';
import {Router} from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  public expansions: Expansion[] = EXPANSION_LIST;

  constructor(private _router: Router) {
  }

  public ngOnInit(): void {

  }

}
