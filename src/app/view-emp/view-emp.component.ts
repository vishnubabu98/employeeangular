import { Component } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {
  data:any= [
    {
      "name":"vishnu",
      "designation":"software engineer trainee",
      "salary":25000,
      "company":"NeST"
  
    },
    {
      "name":"vivek",
      "designation":"Tester",
      "salary":25000,
      "company":"UST"
  
    },
    {
      "name":"Jibu",
      "designation":"System Engineer",
      "salary":25000,
      "company":"TCS"
  
    },
    {
      "name":"Abhijith",
      "designation":"Network Engineer",
      "salary":25000,
      "company":"Orion"
  
    },
    {
      "name":"Shayi",
      "designation":"software engineer",
      "salary":65000,
      "company":"Google"
  
    },
    {
      "name":"Anu",
      "designation":"software Engineer",
      "salary":65000,
      "company":"PITS"
  
    }
  ]

}
