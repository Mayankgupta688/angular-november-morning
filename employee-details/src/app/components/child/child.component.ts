import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() headerContent: string;

  ngOnInit() {
    if(!this.headerContent) {
      this.headerContent = "Sample Text Initially...."
    }
  }

  updateData() {
    this.headerContent = "kajgfasj";
  }
}
