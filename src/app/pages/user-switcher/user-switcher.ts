import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConfectionerService } from '../../services/confectioner.service';
import { UserType } from '../../models/user.model';

@Component({
  selector: 'app-user-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-switcher.html',
  styleUrls: ['./user-switcher.scss']
})
export class UserSwitcherComponent {
  private router = inject(Router);
  private confectionerService = inject(ConfectionerService);
  authService = inject(AuthService);

  switchUser(type: UserType): void {
    if (type === 'confectioner') {
      const selectedConfectioner = this.confectionerService.selectedConfectioner();
      if (selectedConfectioner) {
        this.authService.setUser(type, selectedConfectioner.id);
      } else {
        this.authService.setUser(type);
      }
    } else {
      this.authService.setUser(type);
    }
    
    this.router.navigate(['/home']);
  }
}

