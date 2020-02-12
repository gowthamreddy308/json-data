import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-jsondatatable',
  templateUrl: './jsondatatable.component.html',
  styleUrls: ['./jsondatatable.component.css']
})
export class JsondatatableComponent implements OnInit {
  public states=[]

  constructor( private httpservice:HttpClient) {
    
   }
  

  ngOnInit() {
  
    this.httpservice.get('../assets/data.json').subscribe(data=>
      {
        
        this.states.push(data);
        console.log(this.states);
      })
  }

}
