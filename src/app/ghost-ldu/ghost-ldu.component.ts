import { Component, OnInit,  ViewChild, NgZone } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-ghost-ldu',
  templateUrl: './ghost-ldu.component.html',
  styleUrls: ['./ghost-ldu.component.css']
})
export class GhostLDUComponent implements OnInit {
  constructor(private ngZone: NgZone) {}
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'email', 'telefono'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
}
export interface PeriodicElement {
  numero: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, nombre: '', apellido: '', email: '', telefono: 1},

]
