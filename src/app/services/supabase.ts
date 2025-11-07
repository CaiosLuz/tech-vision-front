import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://oyagtdnhodtpmtpzrabh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YWd0ZG5ob2R0cG10cHpyYWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyOTI2ODAsImV4cCI6MjA3Nzg2ODY4MH0.iKVeJg9Yw2dMV9OXJN_EIkIFcHPlnp1gnLblLr_Vay0'
    );
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email, password
    });
    if (error) throw error;
    return data;
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password
    });
    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getUser() {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }
}
