
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

dunno: any;

  constructor(
    public alertController: AlertController,
    private Astorage: Storage
    ) {
  }

ngOnInit() {
 this.Astorage.get('Hob').then((val) => {
    //console.log(val, typeof(val));
    if (val) {
      this.dunno = val;
    } else {
      this.dunno = ['Loibl ist voll cute'];
    }
    console.log(typeof(this.dunno), this.dunno);
  });

  }



  async OpenBox() {
    let feld = this.dunno;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Neue Aktivität',
      subHeader: 'Bitte geben Sie den Namen der neuen Aktivität ein',
      inputs: [
        {
          name: 'NewAct',
          type: 'text',
          placeholder: 'bspw. Dota Auto Chess'
        }],
        buttons: [
          {
            text: 'Abbrechen',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: data => {
              feld.push(data.NewAct)
              this.Astorage.set('Hob', feld);
              console.log('Confirm Ok', this.Astorage.get('Hob'));
            }
          }
        ]
    });

    await alert.present();
}
}
