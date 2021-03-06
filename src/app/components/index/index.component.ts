import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { 
    this.auth.clearSession();
  }

  ngOnInit() {
    
  }

  loginSucess(statusLogin){
    if(statusLogin === true){
      window.location.href = '/dashboard';
    }
  }

  cadastrar(){
    this.router.navigate(['/cadastro'])
  }

}
