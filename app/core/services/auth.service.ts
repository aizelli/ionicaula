import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angular/fire/auth";
import {auth} from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {

    private logarComEmail:({email, senha}): Promise<auth.UserCredential>{
      return this.afAuth.auth.signInWithEmailPassword(email, senha);
    }

    private cadastrarComEmail({email, senha, nome}): Promise<auth.UserCredential>{
      return this.afAuth.auth
                  .createUserWithEmailAndPassword(email, senha)
                  .then(credentials => 
                      credentials.user
                           .updateProfile({displayName: nome, photoURL: null})
                           .then(() => credentials)
                   );
    }
  }
}
