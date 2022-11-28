import { Component } from '@angular/core';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  empcode=""

  readValues=()=>
  {
    let data:any=
    {
      "empcode":this.empcode
    }
    console.log(data)
  }
}
