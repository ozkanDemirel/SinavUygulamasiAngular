import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/common/models/user.service';
  
  @Component({
    selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  })
  export class UserComponent implements OnInit {
    content?: string;
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getUserBoard().subscribe({
        next: data => {
          this.content = data;
        },
        error: err => {
          if (err.error) {
            try {
              const res = JSON.parse(err.error);
              this.content = res.message;
            } catch {
              this.content = `Hata: ${err.status} - ${err.statusText}`;
            }
          } else {
            this.content = `Hata: ${err.status}`;
          }
        }
      });
    }
  }