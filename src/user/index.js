import firebase from 'firebase';
import store from '../store.js';

class User {

  firebaseUrl() {
    return process.env.NODE_ENV + '/users/' + this.id()
  }

  save(data) {
    data.updatedAt = new Date().toLocaleString();
    firebase.database().ref(this.firebaseUrl()).set(data);
  }

  fetch() {
    return firebase.database().ref(this.firebaseUrl()).once('value').then(function(snapshot) {

      let data = snapshot.val();

      if (snapshot.val()) {
        // User already exists w/ data, populate to store
        for (var key in data) {

          if (data.hasOwnProperty(key)) {

            store.dispatch({
              type: 'SET_USER',
              key: key,
              value: data[key]
            });

          }
        }
      }
    });
  }

  id() {
    if (!this.userId) {
      let id = this.getIdFromStorage();

      if (!id)
        id = this.generateId();

      this.saveId(id);

      this.userId = id;
    }

    return this.userId;
  }

  getIdFromStorage() {
    return localStorage.getItem('user_id');
  }

  saveId(id) {
    localStorage.setItem('user_id', id);
  }

  generateId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}

export default new User();
