import { Component } from '@angular/core';
import { detailModel } from './flash.detail.model';


@Component({
    selector:'flash-detail',
    templateUrl:'./flash.detail.html'
})


export class FlashDetailComponent{
   
    managerSummaryTitle:string="Manager Summary";
    alertCheck:any=false;
    filterBy:String="Data Filter";
    searchData:String="";
    alertObj:detailModel[] = [
        {
            'alertID':"MWD12IO59",
            'date':"01/01/2019 7:30 AM EST",
            'amount':100.10,
            'walletProvider':"Samsung Pay",
            'chipId':"CHIP01234234KL"
        },
        {
            'alertID':"MWDKO345",
            'date':"01/01/2019 7:30 AM EST",
            'amount':10.10,
            'walletProvider':"Fitbit Pay",
            'chipId':"CHIP01234334KL"
        },
        {
            'alertID':"MWDLO365",
            'date':"01/07/2019 7:30 AM EST",
            'amount':40.10,
            'walletProvider':"Fitbit Pay",
            'chipId':"CHIP01234334KL"
        }
    ]

    selectCheckBox():void{
      this.alertCheck = true;
    }
}