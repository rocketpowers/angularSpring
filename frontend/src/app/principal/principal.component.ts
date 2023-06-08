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


  //variavel visibilidade
  table: boolean = true;



  clients: Client[] = [];

  constructor(private service: ClientService) { }


  select(): void {
    this.service.select().subscribe(retorno => this.clients = retorno);

  }

  register(): void {
    this.service.register(this.client)
      .subscribe(retorno => {
        this.clients.push(retorno);
        this.client = new Client();
        alert('client register sucessfull')
      });

  }


  selectClient(position: number): void {

    this.client = this.clients[position];

    this.btnRegister = false;

    this.table = false;



  }

  ngOnInit() {

    this.select();


  }

}
