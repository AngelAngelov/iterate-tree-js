# iterate-tree
small js function to iterate tree structure in pure JavaScript

### Basic usage
iterateTree(tree, 'prop', callback)

tree - a tree structure we want to iterate

prop - the name of the property where the children are stored

callback - function that is apply on each element of the tree

## Sample
# Using <script> tag 
{

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

	iterateTree(familyTree, 'descendants', function(person){
      console.log('Name: ', person.name, 'Age: ', person.age);
    });
  
}

## RequireJs
{

	define(['./iterateTree', 'json!familyTree.json'], function(iterator, tree){

		// Do your code ...

		iterator.iterateTree(tree, 'prop', callback);

		// Do your code ...

	})
	
}

## CommonJS
{

	module.import('./clone', './familyTree').then(function (iterator, tree) {

		// Do your code ...

		iterator.iterateTree(tree, 'prop', callback);

		// Do your code ...

	})
	
}

