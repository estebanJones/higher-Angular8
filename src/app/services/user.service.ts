import { User } from '../models/user.model';
import { Subject } from 'rxjs';


export class UserService {

constructor(){}
    // Tableau de user qui contiendra les users
    private users: User[] = [];
    // Permettra de s'abonner aux ajouts du user
    userSubject = new Subject<User[]>();

    emitUsers() {
        // je vais creer une copie du tableau 
        // et l'envoyer aux observateur
        this.userSubject.next(this.users.slice());
    }


    addUser(user: User) {
        // Je push user dans le tableau
        this.users.push(user);
        // Et j'envoie la copie aux observateurs
        this.emitUsers();
    }


}