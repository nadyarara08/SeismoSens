// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from '../firebase-config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User 
} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async logout() {
    await signOut(auth);
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    return auth.currentUser;
  }
}