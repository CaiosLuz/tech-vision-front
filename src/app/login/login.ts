import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Supabase } from '../services/supabase';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form: any;
  
  constructor(private fb: FormBuilder, private supabase: Supabase) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  async onSubmit() {
    const { email, password } = this.form.value;
    if (!email || !password) return alert('Preencha todos os campos!');

    try {
      await this.supabase.signIn(email, password);
      alert('Login realizado com sucesso!');
    } catch (error: any) {
      alert('Erro: ' + error.mesage);
    }
  }
}
