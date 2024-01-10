interface Romans {
    I: number,
    V: number,
    X: number,
    L: number,
    C: number,
    D: number,
    M: number,
}


function romanToInt(s: string): number {

    const romans : Romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }


    let res:number = 0;
    for(let i=0; i < s.length; i++){
        const key = s[i] as keyof Romans
        const nextKey = s[i+1] as keyof Romans

        if(key == "I" && (nextKey== "V" || nextKey== "X")){
            res += romans[nextKey ] - romans[key]  
            i++;
        }
        else if(key == "X" && (nextKey== "L" || nextKey== "C")){
            res += romans[nextKey ] - romans[key]  
            i++;
        }
        else if(key == "C" && (nextKey== "D" || nextKey== "M")){
            res += romans[nextKey ] - romans[key]  
            i++;
        }
        else{
            res += romans[key];
        }
    }
    return res;
};

console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));