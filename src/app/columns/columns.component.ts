import { Component, OnInit } from '@angular/core';
import { ColumnData } from '../column-data';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent  {
  content1:string = `Joan of Arc is a patron saint of France, honored as a defender of the French nation for her role in the siege of Orléans and her insistence on the coronation of Charles VII of France during the Hundred Year's  War.`;
  columns: ColumnData[] = [
    { title: 'Column 1', content: this.content1 },
    { title: 'Column 2', content: 'Content for Column 2' },
    {  title: 'Column 3', content: 'Content for Column 3' }
  ];
  constructor() { }



}
