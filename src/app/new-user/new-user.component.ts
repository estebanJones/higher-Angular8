import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  // J ETABLIES LE NOM ET LE TYPE DU FORMULAIRE
  // FORM GROUP EST UN ENSEMBLE DE FORM CONTROL
  userForm: FormGroup;

  // DANS LE CONSTRUCTOR FormBuilder à 
  // des methodes qui facilite la creation de forms
  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    // PERMET D INITIALISER LE FORM A LA CREATION DU COMPOSANT
    this.initForm()
  }

  initForm() {
    // CREER LE CONTROLE DES VALEURS DU FORM
    this.userForm = this.formBuilder.group({
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: ""
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['username'],
      formValue['firstname'],
      formValue['lastname'],
      formValue['password'],
      formValue['email'],
      Date.now()
    );

    console.log(newUser)
    this.userService.addUser(newUser);
    this.router.navigate(["/register"]);
    
  }






}
