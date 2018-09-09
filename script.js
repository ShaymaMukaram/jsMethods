const arraylist = ["name", "class"];
class ArrayList {
  constructor() {
    this.arraylist = arraylist.concat();
  }
  pushingEle(element) {
    return this.arraylist.push(element);
  }
  popingEle(element2) {
    return this.arraylist.pop(element2);
  }
  unshifiting(element3) {
    return this.arraylist.unshift(element3);
  }
  concatingEL() {
    return this.arraylist.concat("example", "nature");
  }
  filterMethod() {
    const result = arraylist.filter(func => func.length > 3);
    console.log(result);
  }

  mapMethod() {
    const res = arraylist.map(function(add) {
      return add * add;
    });
    console.log(res);
  }
  ForOf() {
    for (const item of arraylist) {
      console.log(item);
    }
  }
  ForIn() {
    for (const key in arraylist) {
      console.log(arraylist[key]);
    }
  }

  findMethod() {
    var found = arraylist.find(function(elements) {
      return elements === "name";
    });
    console.log(found);
  }
  reduce() {
    var addingindex = arraylist.reduce(function(all, name) {
      if (name in all) {
        all[name]++;
      } else {
        all[name] = 2;
      }
      return all;
    }, {});
    console.log(addingindex);
  }
}
let array = new ArrayList();
console.log(array.reduce());
console.log(array);
