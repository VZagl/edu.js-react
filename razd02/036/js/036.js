'use strict';

{
  let str1 = 'some';
  let str2 = new String(str1);
  console.log('1', str1 ==  str2); // true
  console.log('2', str1 === str2); // false
  console.log('\ttypeof(str1)=', typeof(str1) ); // string
  console.log('\ttypeof(str2)=', typeof(str2) ); // object
  console.dir( str1 );
  console.dir( str2 );
  
  let arr = [1, 2, 3];
  console.dir( arr );
}

{
  const soldier = {
    name: '',
    // health: 500,
    armor: 100,
    sayHello: function () { console.log(`Hello, ${this.name}!`);}
  };
  
  /* лучше не делать так а задавать прототип на стадии создания объекта
  {
    const john = {
      name: 'John',
      health: 150
    };
    
    // присвоить прототип объекту:
    // устарело
    //john.__proto__ = soldier;
    // современная запись
    Object.setPrototypeOf(john, soldier);

    console.dir( john );
    john.sayHello();
  }
  */
  { // задаётся прототип на стадии создания объекта
    let john = Object.create(soldier);
    john.name = 'John';
    john.tt = 'tt value';
    console.dir( john );
    john.sayHello();

    let peter = Object.create(soldier, {name: {value:'Peter'}, tt:{value: 'tt value'}} );
    console.dir( peter );
    /* почему в браузере:

    для john:

    Object { name: "John", tt: "tt value" }
      name: "John"
      tt: "tt value"
      <prototype>: Object { name: "", armor: 100, sayHello: sayHello() }

    для peter:
    
    Object { … }
      name: "Peter"
      tt: "tt value"
      <prototype>: Object { name: "", armor: 100, sayHello: sayHello() }
    */
  }

  { // создаётся объект без прототипа (коллекция ключ:значение)
    let obj = Object.create(null);
    obj.name = 'from null';
    console.dir( obj );
  }
}