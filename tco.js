const tco = (func) => function (...args){
    const self = (...nextArgs) => {
        args = nextArgs;
    } 
    let result = undefined;
    while(! result){
        result = func(self, ...args)
    }
    return result
}

export default tco
