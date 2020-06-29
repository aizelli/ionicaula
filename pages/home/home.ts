import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public username: string = "";
  public password: string = "";

  public loginForm: FormGroup;
  
  public config = {
    estaLogando: true,
    acao: 'Login',
    mudancaAcao: 'Criar Conta'
  };

  private nomeControl = new FormControl('', [Validators.required]);

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public formBuild: FormBuilder
    ) {

  }

ngOnInit():void{
  this.criarForm();
}

  public Logar(){
    let alert = this.alertCtrl.create({
      title: "Olá!",
      subTitle: "Usuário: " + this.username + "Senha: " + this.password,
      buttons: ["OK"]
    });
    alert.present();
  }

  private criarForm(): void{
    this.loginForm = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public enviando(): void{
    console.log("Usuário", this.loginForm.value)
  } 

  public mudancaDeAcao(): void{
    this.config.estaLogando = !this.config.estaLogando;
    const {estaLogando} = this.config;
    this.config.acao = estaLogando ? 'Login' : 'Cadastrar';
    this.config.mudancaAcao = estaLogando ? 'Criar conta' : 'Já tenho uma conta';    
    estaLogando ? this.loginForm.addControl('nome', this.nomeControl) :
                  this.loginForm.removeControl('nome');
  }
}


