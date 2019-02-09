import { Pipe,PipeTransform  } from "@angular/core";
import { detailModel } from './flash.detail.model';

@Pipe({
    name:"alertSearch"
})

export class MyAlertSearch implements PipeTransform{
    transform(value: detailModel[], userInput:string) {
        userInput = userInput ? userInput.toLowerCase() : null;

        return userInput ? value.filter((alertData : detailModel) => 
                            (alertData.alertID.toLowerCase().indexOf(userInput) !== -1 || 
                            alertData.walletProvider.toLowerCase().indexOf(userInput) !== -1)) : value;
    }
    
}