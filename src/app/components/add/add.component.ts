import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myformControl: FormControl = new FormControl();
  options: any;
  filteredOptions: Observable<string[]>;

  constructor() {
    this.options = [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight'
    ];
  }

  ngOnInit() {

    // this.filteredOptions = this.myformControl.valueChanges
    //   .pipe(
    //     startWith(),
    //     map(val => this.filter(val))
    //   );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
}
