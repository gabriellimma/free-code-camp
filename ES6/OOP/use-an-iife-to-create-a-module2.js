// mixin
function pagesMixin(obj) {
  obj.pages = "";
  obj.getPages = function() {
    return console.log(this.pages);
  }
  obj.setPages = function(pageCount) {
    return this.pages = pageCount;
  }
}

function nameMixin(obj) {
  obj.name = "";
  obj.getName = function() {
    return console.log(this.name);
  }
  obj.setName = function(name) {
    return this.name = name;
  }
}

//creating contructors
function Book() {}
function Magazine() {}

//instantiate objects
const book = new Book();
const magazine = new Magazine();

//appplying the mixin to the instances of Book and Magazine


//defining values of the instances




let pagesNamesMixin = (function() {
  return {
    pagesMixin: function(obj) {
      obj.pages = "";
      obj.getPages = function() {
        return console.log(this.pages);
      }
      obj.setPages = function(pageCount) {
        return this.pages = pageCount;
      }
    },
    nameMixin: function(obj) {
      obj.name = "";
      obj.getName = function() {
        return console.log(this.name);
      }
      obj.setName = function(name) {
        return this.name = name;
      }
    }
  }
})()

pagesNamesMixin.nameMixin(book)
pagesNamesMixin.pagesMixin(book)
pagesNamesMixin.nameMixin(magazine)
pagesNamesMixin.pagesMixin(magazine)

book.setName("Casa amarela")
book.setPages(200)
magazine.setName("Time")
magazine.setPages(80)

console.log(book)
console.log(magazine)

let IIFE = (function() {
  return console.log("iniciando")
})()