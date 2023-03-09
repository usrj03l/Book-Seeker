import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

import {
  getFirestore,
  setDoc,
  doc
} from '@firebase/firestore';

import {
  Firestore,
  collection,
  addDoc,
  query,
  where,
  collectionData,
  getDocs,
  onSnapshot,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDataService } from './book-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: any
  username:string=''
  userData!: Observable<any>
  bookExists!: Promise<boolean>
  db: any = getFirestore()

  constructor(private auth: Auth, private router: Router, private firestore: Firestore, private api: BookDataService) { }

  signIn(creds: any) {
    signInWithEmailAndPassword(this.auth, creds.email, creds.password)
      .then(() => {
        this.userId = this.auth.currentUser?.uid
        this.getUser().then((data)=> this.username = data.name)
        this.router.navigate(['Home'])
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  signup(data: any) {
    let userDetails = {}

    createUserWithEmailAndPassword(this.auth, data.email, data.password)
      .then(() => {
        this.userId = this.auth.currentUser?.uid
        userDetails = {
          uid: this.userId,
          name: data.name,
          email: data.email
        }
        const docRef = doc(this.db, "users", this.userId)
        this.addUser(docRef, userDetails)
        this.router.navigate(['Home'])
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  logOut() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate([''])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  async addUser(docRef: any, values: any) {
    await setDoc(docRef, values)
  }

  async getUser(): Promise<any> {
    try {
      const docSnap = await getDoc(doc(this.db, "users", this.userId));
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("Document does not exist")
      }
    } catch (error) {
      console.log(error)
    }
  }

  addBook(bookDetails: any) {
    const docRef = collection(this.firestore, "bookshelves", this.userId, "myBookshelf")
    this.bookExists = this.checkBookExists(docRef, bookDetails.isbn)
    this.bookExists.then((exists) => {
      if (exists) {
        this.api.fAlert('This book is already in the book shelf')
      } else {
        this.insertData(docRef, bookDetails)
      }
    })

  }

  async checkBookExists(docRef: any, isbn: any) {
    const dQuery = query(docRef, where('isbn', '==', isbn))
    const querySnap = await getDocs(dQuery)

    if (querySnap.empty) {
      return false
    } else {
      return true
    }
  }

  viewMyBookshelf(): Observable<any> {
    const collectionInstance = collection(this.firestore, "bookshelves", this.userId, "myBookshelf")
    this.userData = collectionData(collectionInstance, { idField: 'id' })
    return this.userData

  }

  deleteMyBookshelf(id: any) {
    const docRef = doc(this.firestore, "bookshelves", this.userId, "myBookshelf", id)
    deleteDoc(docRef)
  }

  insertData(docRef: any, values: any) {
    addDoc(docRef, values)
      .then(() => {
        // this.api.sAlert('Sucess')
      })
      .catch((err) => alert(err.message))
  }


  addDialogue(details: any) {
    const docRef = collection(this.firestore, "dialogues")
    this.insertData(docRef, details)
  }

  addDialInfo(id:any , msg:any) {
    const docRef = collection(this.firestore, "dialogues",id,"messages")
    this.insertData(docRef, msg)
  }

  viewDialogues(): Observable<any> {
    const collectionInstance = collection(this.firestore, "dialogues")
    this.userData = collectionData(collectionInstance, { idField: 'id' })
    return this.userData
  }

  viewMessages(id:any): Observable<any> {
    const collectionInstance = collection(this.firestore, "dialogues",id,"messages")
    this.userData = collectionData(collectionInstance, { idField: 'id' })
    return this.userData
  }

  async viewDialInfo(id: any): Promise<any> {
    try {
      const docSnap = await getDoc(doc(this.db, "dialogues", id));
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("Document does not exist")
      }
    } catch (error) {
      console.log(error)
    }
  }


  deleteDialogue(id: any) {
    const docRef = doc(this.firestore, "dialogues", id)
    deleteDoc(docRef)
  }
}

