import { Injectable } from '@angular/core';
import { Firestore, serverTimestamp } from '@angular/fire/firestore';
import { FirebaseAbstract } from '@burand/angular/firestore';
import { FirestoreCollecionName } from '../configs/firestore-collection-name';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepository extends FirebaseAbstract<User> {
  constructor(protected override firestore: Firestore) {
    super(firestore, FirestoreCollecionName.USERS);
  }

  setLastAccess(userId: string) {
    return this.update({
      id: userId,
      lastAccess: serverTimestamp()
    });
  }

  getByEmail(email: string) {
    return this.getWhere('email', '==', email);
  }
}
