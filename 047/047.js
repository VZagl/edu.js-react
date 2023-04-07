'use strict';

const students =  {
  js: [
    {name: 'John',  progress: 100},
    {name: 'Ivan',  progress: 60 },
  ],
  html: {
    basic: [
      {name: 'Peter',  progress: 20 },
      {name: 'Ann'  ,  progress: 18 },
    ],
    pro: [
      {name: 'Sam',  progress: 10 },
    ],
    // some: {name: 'some',  progress: 20 }
  }
};

console.log( 'avg progress=', getProgress(students) );

function getProgress(_data) {
  let totalCount = 0;
  let totalProgress = 0;
  
  calcProgress(_data);
  console.log( `totalCount=${totalCount},  totalProgress=${totalProgress}` );
  return totalProgress / totalCount;

  function calcProgress(_data) {
    if ( typeof(_data) == 'object') {
      if ( Object.hasOwn(_data, 'progress') ) {
        totalCount += 1;
        totalProgress += _data.progress;
      } else {
        Object.values(_data).forEach( (v) => calcProgress(v) );
      }
    }
  }

}
