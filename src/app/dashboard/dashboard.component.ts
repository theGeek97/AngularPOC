import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

data :any[];
intervalData: any[];
currentDueData;any;
totalDues;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
   this.http.get('assets/data.json').subscribe(res=>{
     this.currentDueData=res["CurrentDuesData"][0].CurrentDues;
     this.intervalData=res["CurrentDuesData"][1].IntervalData;
      this.data=res["InvoiceData"];
      this.totalDues=this.calculateTotalDues();
  });
  }

  calculateTotalDues(){
    let sum=0;
    this.intervalData.forEach(item=>{
      sum+=parseInt(item.OverDue);

    });
    return sum;
  }

  download(){
    alert("Your Document Download functionaltiy")
  }

}
