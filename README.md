# A Dead Simple Tail Call Optimisation Function for JavaScript


```js
import tco from 'tco.js'

const my_optimized_function = tco(
  (self, ... other arguments ...) =>{
      return done ? result : self(...) // recursion is called via the self argument
   }
 )
 ```
