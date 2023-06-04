import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  btnRegister: boolean = true;

  clients: Client[] = [];

  constructor(private service: ClientService) { }

  select(): void {

    //this.service.select().subscribe(returnn=> this.clients=returnn);

    this.service.select().subscribe(returno => this.clients = returno);

  }
  ngOnInit() {

    this.select();





  }

}
