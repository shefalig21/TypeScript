//namespace:
//(a peice of code that it used to group inter-related data)
//A namespace in TypeScript is a way to organize and encapsulate code into logical groups, preventing name collisions between variables, functions, or classes. Namespaces are useful when dealing with large codebases where multiple modules or components may define variables or classes with the same name.

//When to Use a Namespace?
//Namespaces are useful when:
//1. You need to group related functionality together.
//2. You want to avoid global scope pollution and prevent naming conflicts.
//3. You're working in a legacy codebase that doesn't use ES modules.
//4. You prefer a simpler way to structure code without using modules.

//****  Note: 
// In modern TypeScript, ES modules (import/export) are the preferred way to manage code organization. 
// Namespaces are mostly used when working with older codebases or non-module environments like browser scripts.



/// <reference path="./Utils.ts"/>

namespace UsersUtils
{
    export class Users extends Parent{     //extending parent class
        getName()
        {
            return this.name;
        }
    }
}

let u1=new UsersUtils.Users();
u1.setName("tonyy");
console.log(u1.getName());