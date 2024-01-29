import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
 // Row Data: The data to be displayed.
 rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines & controls grid columns.
colDefs: ColDef[] = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
];


public baselinesummary = [
  {
    "JPNUM": "RL-326388",
    "DESCRIPTION": "Monthly Condition Monitoring",
    "pm_running": "0.5",
    "Schedule_Down": "7",
    "Total_Hr": "7",
    "Labor_Hrs": "3",
    "Labor_Cost": "7",
    "Part_Cost": "3",
    "Total_Cost": "35",
    "TOTAL":"55"
  },
  {
    "JPNUM": "RL-326388",
    "DESCRIPTION": "Monthly Condition Monitoring",
    "pm_running": "0.5",
    "Schedule_Down": "7",
    "Total_Hr": "7",
    "Labor_Hrs": "3",
    "Labor_Cost": "7",
    "Part_Cost": "3",
    "Total_Cost": "35",
    "TOTAL":"55"
    
  },
  {
    "JPNUM": "RL-326388",
    "DESCRIPTION": "Monthly Condition Monitoring",
    "pm_running": "0.5",
    "Schedule_Down": "7",
    "Total_Hr": "7",
    "Labor_Hrs": "3",
    "Labor_Cost": "7",
    "Part_Cost": "3",
    "Total_Cost": "35",
    "TOTAL":"55"
    
  }
]


list_question = [
  { 'que': "what is HTML?", 'ans': "Html is hyper text Markup Language", 'id': 1 },
  { 'que': "what is CSS?", 'ans': "cascading style sheet", 'id': 2 },
  { 'que': "what is JS?", 'ans': "scripting language", 'id': 3 },
  { 'que': "what is Angulr?", 'ans': "single page application", 'id': 4 },
  { 'que': "what is Talwind?", 'ans': "Updated css", 'id': 5 }
];
  selctedQue: any;
  newItemEvent: any;
  inputEvent: any;
  myInput: any;
  inputValue: any;


// seleteQuestion(question){
//   this.selectedQue =  question.que;
//   this.selectedAns = question.ans;
// } 

seleteQuestion(qid: any) {
  this.selctedQue = qid;
}

visible1: boolean = false;
visible2: boolean = false;
visible3: boolean = false;
openAccordian(status: number) {
  // this.visible = !this.visible
  if (status == 1) {
    this.visible1 = true;
    this.visible2 = false;
    this.visible3 = false;
  }
  else if (status == 2) {
    this.visible1 = false;
    this.visible2 = true;
    this.visible3 = false;
  }
  else if (status == 3) {
    this.visible1 = false;
    this.visible2 = false;
    this.visible3 = true;
  }
}

public windowTop = 0;
  public windowLeft = 0;
  public opened = true;
  public isDraggable = false;

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
  // addItem(value: string) {
  //   this.items.push(value);
  // }
  // items = ['item1', 'item2', 'item3', 'item4'];

  inpVal:any;
  count:number = 0;
  tableData: any[] = [];
  editedData:any;
  editMode:boolean =false;
  addValue(inputValue: string): void {
    debugger
    this.count = this.count + 1;
    this.tableData.push(inputValue);

    // if (inputValue !== '') {debb
    //   this.tableData.push(inputValue);
    // }
       this.inputValue = "";
    
  }
  removeItem(index:any) {debugger
    this.tableData.splice(index,1);
    this.count = this.tableData.length;

  }

  savedIndex :any;
  editData(index:any){
    debugger
    this.editMode = true;
    // this.inputValue = dataItem.this.tableData;
    this.savedIndex =index;
    this.inputValue = this.tableData[index];
    console.log(index);
  }
  updatevalue(){
    debugger
    this.tableData[this.savedIndex] = this.inputValue;
    this.tableData = Object.assign([], this.tableData);

  }
  // editFieldValue(index) {
  //   this.newAttribute = this.fieldArray[index];
  //  }

  name = 'Angular';
  enableEdit = false;
  enableEditIndex = null;
  backendData = [{
    "name": 'Target',
    "value": '100',
    "description": 'abc'
  },
  {
    "name": 'Size',
    "value": '20',
    "description": 'def'
  },
  {
    "name": 'Industry',
    "value": '40',
    "description": 'ghi'
  }]

  // enableEditMethod(e :any, i:any) {
  //   this.enableEdit = true;
  //   this.enableEditIndex = i;
  //   console.log(i, e);
  // }

  imgdata = [{
    "images": '../../assets/img/images_1.jpg', 
  },
  {
    "images": '../../assets/img/images_2.jpg',  
  },
  {
  "images": '../../assets/img/images_3.jpg', 
  }]
  changeImages(imgdata:any){
    this.imgdata = imgdata;

}
activeState = 'Draft';

  states = [
    'Draft',
    'Planned',
    'Started',
    'Suspended',
    'Ended',
  ]

  setStateAsActive(state:any) {
    this.activeState = state;
  }
}