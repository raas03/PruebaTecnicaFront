import { Component, inject } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentsServicTsService } from '../../../services/students.servic.ts.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students.component.ts',
  imports: [CommonModule, FormsModule],
  templateUrl: './students.component.ts.component.html',
  styleUrl: './students.component.ts.component.css'
})
export class StudentsComponentTsComponent {

  private studentService = inject(StudentsServicTsService);

  public students: Student[] = [];

  public student: Student = this.emptyStudent();

  public editando = false;

  public mostrarModal = false;

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error obteniendo estudiantes:', error);
      }
    });
  }

  public guardar(): void {

    if (!this.student.name ||
        !this.student.lastName ||
        !this.student.enrollMent) {

      alert('Complete todos los campos');
      return;
    }

    if (this.editando) {

      this.studentService
        .updateStudent(this.student.id, this.student)
        .subscribe({
          next: () => {
            alert('Estudiante actualizado');
            this.cerrarModal();
            this.getStudents();
          },
          error: (error) => {
            console.error(error);
            alert('Error actualizando estudiante');
          }
        });

    } else {

      const nuevoStudent: Student = {
        ...this.student,
        id: 0
      };

      this.studentService
        .createStudent(nuevoStudent)
        .subscribe({
          next: () => {
            alert('Estudiante creado');
            this.cerrarModal();
            this.getStudents();
          },
          error: (error) => {
            console.error(error);
            alert('Error creando estudiante');
          }
        });
    }
  }

  public editar(student: Student): void {
    this.mostrarModal = true;
    this.editando = true;
    this.student = {
      ...student
    };
  }

  public eliminar(student: Student): void {

    if (!confirm('¿Está seguro que desea eliminar este estudiante?')) {
      return;
    }

    this.studentService.deleteStudent(student).subscribe({
      next: () => {
        alert('Estudiante eliminado');
        this.getStudents();
      },
      error: (error) => {
        console.error(error);
        alert('Error eliminando estudiante');
      }
    });
  }

  public cambiarEstado(student: Student): void {

    const estudianteActualizado = {
      ...student,
      estado: !student.estado
    };

    this.studentService
      .updateStudent(student.id, estudianteActualizado)
      .subscribe({
        next: () => {
          student.estado = !student.estado;
        },
        error: (error) => {
          console.error(error);
          alert('Error cambiando el estado');
        }
      });
  }

  public cancelar(): void {
    this.student = this.emptyStudent();
    this.editando = false;
  }

  private emptyStudent(): Student {
    return {
      id: 0,
      personaId: 0,
      name: '',
      lastName: '',
      enrollMent: '',
      estado: false
    };
  }

  public nuevo(): void {

    this.editando = false;

    this.student = {
      id: 0,
      personaId: 0,
      name: '',
      lastName: '',
      enrollMent: '',
      estado: false
    };

    this.mostrarModal = true;
  }

  public cerrarModal(): void {
    this.mostrarModal = false;
  }
}


