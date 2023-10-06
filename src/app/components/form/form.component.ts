import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  url:string='';
  method:string ='GET';
  jsonBody:string ='';
  response:any=null;

  constructor(private http: HttpClient) {}
  makeRequest() {
    const options = {
      body: this.jsonBody ? JSON.parse(this.jsonBody) : null
    };
    this.http.request(this.method, this.url, options).subscribe(
      (data) => {
        this.response = data;
      },
      (error) => {
        this.response = error;
      }
    );
  }
  resetForm() {
    // Esta función se llama cuando se hace clic en el botón "Restablecer Datos" para resetear el formulario
    this.url = '';
    this.method = '';
    this.jsonBody = '';
    this.response = null;
  }
}
