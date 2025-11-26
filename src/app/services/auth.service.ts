import { Injectable, signal, inject } from '@angular/core';
import { User, UserType } from '../models/user.model';
import { ConfectionerService } from './confectioner.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  private confectionerService = inject(ConfectionerService);
  
  // Expõe o signal como readonly
  currentUser = this.currentUserSignal.asReadonly();

  constructor() {
    // Carrega o usuário do localStorage ao iniciar
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSignal.set(JSON.parse(savedUser));
    } else {
      // Define usuário padrão como cliente
      this.setUser('customer');
    }
  }

  setUser(type: UserType, confectionerId?: number): void {
    let userId = type === 'customer' ? 1 : 2;
    let userName = type === 'customer' ? 'Cliente' : 'Confeiteiro';
    
    // Se for confeiteiro e tiver um confeiteiro selecionado, usar esse ID
    if (type === 'confectioner') {
      const selectedConfectioner = this.confectionerService.selectedConfectioner();
      if (selectedConfectioner) {
        userId = selectedConfectioner.id;
        userName = selectedConfectioner.name;
      } else if (confectionerId) {
        userId = confectionerId;
      }
    }
    
    const user: User = {
      id: userId,
      name: userName,
      type: type
    };
    this.currentUserSignal.set(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  isConfectioner(): boolean {
    return this.currentUserSignal()?.type === 'confectioner';
  }

  isCustomer(): boolean {
    return this.currentUserSignal()?.type === 'customer';
  }

  getCurrentUserType(): UserType | null {
    return this.currentUserSignal()?.type || null;
  }
  
  getCurrentConfectionerId(): number | null {
    const user = this.currentUserSignal();
    if (user?.type === 'confectioner') {
      return user.id;
    }
    return null;
  }
}
