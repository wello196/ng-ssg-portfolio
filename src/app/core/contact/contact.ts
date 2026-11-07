import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { LoadingSpinner } from '../../shared/loading-spinner/loading-spinner';

@Component({
  imports: [ReactiveFormsModule, LoadingSpinner],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private http = inject(HttpClient);
  private formBuilder=inject(FormBuilder).nonNullable;
  form = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    inquiry_type: [''],
    message: ['',Validators.required],
  })

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get inquiry_type() { return this.form.get('inquiry_type'); }
  get message() { return this.form.get('message'); }

  globalMessage = signal('');

  isLoading = signal(false);

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    return this.http.post('https://formbold.com/s/9m5B2',this.form.value).pipe(delay(1000)).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.globalMessage.set('Message sent successfully');
        this.form.reset();
      },
      error: (error) => {
        this.isLoading.set(false);
        this.globalMessage.set(error.message);
      }
    })
  }

}
