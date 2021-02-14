import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(contact: any[], searchText: string): unknown {
    if(searchText){
      searchText = searchText.toLowerCase();
      let filteredContact = contact.filter(con=>con.username.toLowerCase().includes(searchText));
      return filteredContact;
    }
    return contact;
  }

}
