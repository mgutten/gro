import firebase from 'firebase'

class User {

  save(data) {
    data.updatedAt = new Date().toLocaleString();
    firebase.database().ref(process.env.NODE_ENV + '/users/' + this.id()).set(data);
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
