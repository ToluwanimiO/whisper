import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageFilter'
})
export class MessageFilterPipe implements PipeTransform {

  transform(message:any[], searchText:string): unknown {
    if(searchText){
      console.log(searchText);
      console.log(message);
      searchText = searchText.toLowerCase();
      let filteredMsg = message.filter(msg=>msg.message.toLowerCase().includes(searchText))
      return filteredMsg;
    }  

    return message;
  }

}
