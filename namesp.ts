//namespace example:

//declaring namespace

namespace MathUtil{
    export function add(a:number,b:number):number
    {
        return a+b;

    }

    export function subtract(a:number,b:number):number{
        return a-b;
    }
}
//The export keyword makes the functions accessible outside the namespace.
//Without export, the functions would be private to the namespace.

//accessing namespace:
console.log(MathUtil.add(10,5));
console.log(MathUtil.subtract(10,5));

//Nested Namespace: 
// Namespaces can be nested for better organization.

namespace App{
    export namespace Utils{
        export function log(message:string):void{
            console.log(message);
        }
    }
}

App.Utils.log("Hello,Namespace!!!");


//Using Namespaces Across Multiple Files
//When using namespaces in different files, 
// you need to reference them using:  /// <reference path="filename.ts" />.

//Suppose file1: MathUtils.ts:

/*
namespace MathUtils{
    export function multiply(a:number,b:number):number{
        return a*b;
    }
}

file2: Main.ts:


/// <reference path="MathUtils.ts"/>

console.log(MathUtils.multiply(4,5));

*/

//Important: This method is mainly used when working without a module system. In modern development, import/export is preferred.

//Compiling Namespaces:
//To compile TypeScript files using namespaces, use:

//tsc --outFile output.js file1.ts file2.ts
// (This will generate a single JavaScript file containing the entire namespace.)

