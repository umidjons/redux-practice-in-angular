import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Map } from 'immutable';

import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select(s => s.get('counter')) counter;

  constructor(private ngRedux: NgRedux<Map<string, any>>) { }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
