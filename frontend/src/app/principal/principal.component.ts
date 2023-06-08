import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //objeto tipo client

  client = new Client();


  btnRegister: boolean = true;

  clients: Client[] = [];

  constructor(private service: ClientService) { }


  select(): void {
    this.service.select().subscribe(retorno => this.clients = retorno);

  }

  register(): void {
    this.service.register(this.client)
      .subscribe(retorno => { this.clients.push(retorno); });

  }


  ngOnInit() {

    this.select();


  }

}
