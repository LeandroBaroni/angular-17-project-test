import { Injectable, WritableSignal, signal } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class signalUserService {
  user: WritableSignal<User> = signal<User>({
    id: '',
    name: '',
    email: ''
  });

  uploadUser (user: User){
    this.user.update(() => user);
  }

  setUser (user: User){
    this.user.set(user);
  }
}
