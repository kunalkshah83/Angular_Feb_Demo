import {NgModule} from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

//Components
import {FlashComponent} from './flash.component';
import {FlashDetailComponent} from './flash.detail.component';
import {FormsModule} from '@angular/forms';
import {MyUpperPipe} from './myupper.pipe';
import {MyAlertSearch} from './flash.alertsearch.pipe';

//Decorator
@NgModule({
  
    imports:[
        BrowserModule,
        FormsModule
    ],

    //all components & pipe
    declarations:[
        FlashComponent,
        FlashDetailComponent,
        MyUpperPipe,
        MyAlertSearch
    ],

    //first component
    bootstrap:[
            FlashComponent
    ],

    //all the services
    providers:[

    ]
})


export class FlashModule{

}