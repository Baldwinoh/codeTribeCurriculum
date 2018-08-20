import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourcesProvider } from './../../providers/cources/cources';
import { HomePage } from './../home/home';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
lessons:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private CourceProvider: CourcesProvider) {
    this.lessons=navParams.get('data');
  }

  

}
