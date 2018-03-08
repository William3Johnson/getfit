import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-ionix-supreme-adaptogens',
  templateUrl: 'ionix-supreme-adaptogens.html',
})
export class IonixSupremeAdaptogensPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
