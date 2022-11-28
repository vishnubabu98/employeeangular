import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name=""
  designation=""
  salary=""
  company=""
  email=""
  comweb=""
  yop=""

  readValues=()=>
  {
    let data:any=
    {
    
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "company":this.company,
      "email":this.email,
      "comweb":this.comweb,
      "yop":this.yop
    }
  console.log(data)
}
}
