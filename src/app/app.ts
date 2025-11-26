import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('doce-vitrine-app');
  protected authService = inject(AuthService);
  private router = inject(Router);
  private location = inject(Location);

  toggleUserSwitcher(): void {
    // Se já estiver na página de alternar usuário, volta para a anterior
    if (this.router.url === '/alternar-usuario') {
      this.location.back();
    } else {
      this.router.navigate(['/alternar-usuario']);
    }
  }
}

