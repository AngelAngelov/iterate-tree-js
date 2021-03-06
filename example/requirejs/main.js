define(['./iterateTree'], function(iterator) {
    var familyTree = {
        id: 1,
        name: 'John Doe',
        age: 83,
        descendants: [
          {
            id: 2,
            name: 'Lisa',
            age: 55,
            parentId: 1,
            descendants: [
              {
                id: 4,
                name: 'Jake',
                age: 30,
                parentId: 2,
                descendants: [
                  {
                    name: 'Tina',
                    age: 3,
                    parentId: 4,
                    descendants: []
                  }
                ]
              },
              {
                id: 5,
                name: 'Brian',
                age: 25,
                parentId: 2,
                descendants: []
              }
            ]
          },
          {
            id: 3,
            name: 'Tom',
            age: 52,
            parentId: 1,
            descendants: [
              {
                id: 6,
                name: 'Tim',
                age: 28,
                parentId: 3,
                descendants: [
                  {
                    id: 8,
                    name: 'Catrina',
                    age: 5,
                    parentId: 6,
                    descendants: []
                  }
                ]
              },
              {
                id: 7,
                name: 'Mery',
                age: 2,
                parentId: 3,
                descendants: []
              }
            ]
          }
        ]
      }
  
      iterator.iterateTree(familyTree, 'descendants', function(person){
        var list;
        if(person.parentId){
          list = document.querySelector('#person' + person.parentId);
        } else {
          list = document.querySelector('#root'); 
        }
        
        var newNode = document.createElement('li');
        newNode.textContent = 'Name: ' + person.name + ', Age: ' + person.age;
        list.appendChild(newNode);
  
        var newList = document.createElement('ul');
        newList.setAttribute('id', 'person' + person.id);
        list.appendChild(newList);
  
        console.log('Name: ', person.name, 'Age: ', person.age);
      })
});
