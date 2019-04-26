import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quinta-pagina',
  templateUrl: './quinta-pagina.component.html',
  styleUrls: ['./quinta-pagina.component.css']
})
export class QuintaPaginaComponent implements OnInit {
  options: FormGroup;
  constructor(fb: FormBuilder, private ngZone: NgZone) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
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
