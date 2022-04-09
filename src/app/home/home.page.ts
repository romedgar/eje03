import { Estudiante } from './../models/estudiante';
import { Component } from '@angular/core';
import { EstudianteService } from "../services/estudiante.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Estudiante[];

  constructor(private service:EstudianteService) {
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {

        const data = e.payload.doc.data() as Estudiante;
        const id = e.payload.doc.id;
        return {id, ...data};
    })
  });
}
}

