import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/modules/board.module';
import { Columns } from 'src/app/modules/Columns.module';



@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  constructor(){
    
  }
  ngOnInit(){}
  board:Board = new Board('Test board',[
    new Columns('Ideas',[
      'Learn Android Development',
      'Learn React Framework',
      'Learn AWS Cloud',
      'Learn Blockchain'
    ]),
    new Columns('Research',[
      'XML designing',
      'Connectivity to Firebase',
      'Ledger Understanding',
      'Data Analytics'
    ]),
    new Columns('ToDo',[
      'Get to work', 
      'Pick up groceries', 
      'Go home', 
      'Fall asleep'
      
    ]),
    new Columns('Done',[
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ]),



  ]);


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
