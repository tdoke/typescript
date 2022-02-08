#type definition files
1] if u are using a js library inside typescript code and there are no types in that js library
2] check for that js library types in definately typed library (@types/)
3] eg to find types for lib faker , search @types/faker on npm js
4] if it exists install it.
5] typedefinition file eg index.d.ts
6] avoid default exports , ts community standered
7] put typescript in devDependencies
8] to generate ts compiler config file user command, tsc --init
9] to run ts compiler in watch mode tsc -w, automcompile .ts file to .js, when changed
10] to compile and run ts file use ts-node filename.ts.
11] to get function or class reusability in ts
/** 
 * 1] write implementations (classess or functions), where objects implement a particular type,interface, generic
 * 2] write classes implementing those types, interfaces, generics
 * 3] execute implementations by passsing objects to them created from classes written in step 2]
 * this is called as coding to interface, write ur implementation first, identify interfaces from it,
   create those interfaces, write classes,types that implement those interfaces, refactor ur implementation to use objects of those classes
*/
