import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Forms} from './../forms'
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name: string ='';
  email: string = '';
  telefone: string = '';
  mensagem: string ='';

  nameAlert: string = "nome invalido";
  nameSucess: string = " Campo preenchido com sucesso";
  emailAlert: string = "email invalido";
  emailSucess: string = "E-mail correto";
  telefoneAlert: string = "telefone invalido";
  telefoneSucess: string = "Telefone valido";

  mensagemAlert: string = "Mensagem invalida";
  mensagemSucess: string = "Mensagem correta";

  constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
        'name': ['', Validators.required],
        'email': ['', Validators.required],
        'mensagem': ['', Validators.required],


      });
   }

   addPost(post){
     this.name = post.name;
     this.email = post.email;
     this.mensagem = post.mensagem;
   }

  ngOnInit() {
     this.rForm.get('name').valueChanges.subscribe(
      (name) => {
        if (name.length < 3){
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.nameAlert = "Nome precisa ter no minimo 3 digitos";
        }else{
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity({onlySelf: true, emitEvent: false});
    }); 

     this.rForm.get('email').valueChanges.subscribe(
      (email) => {
        if (email.length < 10){
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(10)]);
          this.emailAlert = "E-mail esta invalido";
        }else{
          this.rForm.get('email').setValidators(Validators.required);
        }
        this.rForm.get('email').updateValueAndValidity({onlySelf: true, emitEvent: false});
    });

  }

}

