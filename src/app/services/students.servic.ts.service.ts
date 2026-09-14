import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicTsService {

   private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7024/api/Student';

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  public getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  public createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  public updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/Update/`, student);
  }

  public deleteStudent(student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/Delete`, student);
  }
}
