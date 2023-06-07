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

    this.service.select().subscribe(retorno => this.clients = retorno);

  }
  ngOnInit() {

    this.select();





  }

}
