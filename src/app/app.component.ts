import { ConvidadoService } from './convidado.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  convidados = [{nome: 'wesley', quantidadeDeAcompanhantes: 1}, {nome: 'Jonathan', quantidadeDeAcompanhantes: 2}];

  constructor(private convidadoService: ConvidadoService) {

  }

  ngOnInit() {
    this.listar();
  }

  listar(): void {
    this.convidadoService.listar().then(dados => this.convidados = dados);
  }
}
