import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfectionerService } from '../../services/confectioner.service';
import { Confectioner } from '../../models/user.model';

@Component({
  selector: 'app-confectioner-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confectioner-selector.html',
  styleUrls: ['./confectioner-selector.scss']
})
export class ConfectionerSelectorComponent implements OnInit {
  private confectionerService = inject(ConfectionerService);
  private router = inject(Router);

  confectioners: Confectioner[] = [];

  ngOnInit() {
    this.confectioners = this.confectionerService.getConfectioners();
  }

  selectConfectioner(confectionerId: number): void {
    this.confectionerService.selectConfectioner(confectionerId);
    this.router.navigate(['/home']);
  }
}
