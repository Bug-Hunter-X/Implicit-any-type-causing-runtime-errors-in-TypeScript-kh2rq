# Implicit any type causing runtime errors in TypeScript
This repository demonstrates a common error in TypeScript where implicit 'any' types can lead to runtime errors that are not caught during compilation.  The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file demonstrates how to fix the problem. 

## Problem
TypeScript's flexibility with type inference can sometimes result in unexpected behavior. If you're not careful with your type definitions, TypeScript might infer `any` type in certain places, which effectively disables type checking for that part of your code.  This can lead to runtime errors when you attempt operations that aren't type-safe.

## Solution
The solution is to ensure that your types are explicitly defined and that type checking is enforced throughout your code.  You can achieve this by specifying the type of every variable and function parameter.