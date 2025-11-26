import { Injectable, signal } from '@angular/core';
import { Confectioner } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ConfectionerService {
  private confectioners: Confectioner[] = [
    {
      id: 1,
      name: 'Doces da Maria',
      description: 'Especialista em bolos caseiros e doces tradicionais brasileiros',
      specialty: 'Bolos e Tortas',
      avatar: '👩‍🍳',
      phone: '(11) 98765-4321',
      email: 'maria@docesdamaria.com.br'
    },
    {
      id: 2,
      name: 'Confeitaria Estrela',
      description: 'Doces finos e personalizados para festas e eventos especiais',
      specialty: 'Doces Finos',
      avatar: '⭐',
      phone: '(11) 97654-3210',
      email: 'contato@estrela.com.br'
    }
  ];

  private selectedConfectionerSignal = signal<Confectioner | null>(null);
  selectedConfectioner = this.selectedConfectionerSignal.asReadonly();

  constructor() {
    // Carrega o confeiteiro selecionado do localStorage
    const saved = localStorage.getItem('selectedConfectioner');
    if (saved) {
      const confectionerId = JSON.parse(saved);
      const confectioner = this.confectioners.find(c => c.id === confectionerId);
      if (confectioner) {
        this.selectedConfectionerSignal.set(confectioner);
      }
    }
  }

  getConfectioners(): Confectioner[] {
    return this.confectioners;
  }

  selectConfectioner(confectionerId: number): void {
    const confectioner = this.confectioners.find(c => c.id === confectionerId);
    if (confectioner) {
      this.selectedConfectionerSignal.set(confectioner);
      localStorage.setItem('selectedConfectioner', JSON.stringify(confectionerId));
    }
  }

  clearSelection(): void {
    this.selectedConfectionerSignal.set(null);
    localStorage.removeItem('selectedConfectioner');
  }

  getSelectedConfectionerId(): number | null {
    return this.selectedConfectionerSignal()?.id || null;
  }
}
