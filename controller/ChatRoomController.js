function ChatRoom(name, id, owner) {
  this.name = name;
  this.id = id;
  this.owner = owner;
  this.people = [];
  this.peopleLimit = 4;
  this.status = "available";
  this.private = false;
};

ChatRoom.prototype.addPerson = function(personID) {
  if (this.status === "available") {
    this.people.push(personID);
  }
};

ChatRoom.prototype.removePerson = function(person) {
  var personIndex = -1;
  for(var i = 0; i < this.people.length; i++){
    if(this.people[i].id === person.id){
      personIndex = i;
      break;
    }
  }
  this.people.remove(personIndex);
};

ChatRoom.prototype.getPerson = function(personID) {
  var person = null;
  for(var i = 0; i < this.people.length; i++) {
    if(this.people[i].id == personID) {
      person = this.people[i];
      break;
    }
  }
  return person;
};

ChatRoom.prototype.isAvailable = function() {
  return this.available === "available";
};

ChatRoom.prototype.isPrivate = function() {
  return this.private;
};

module.exports ={ 'ChatRoom': new ChatRoom()};
