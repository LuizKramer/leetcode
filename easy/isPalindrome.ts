function isPalindrome(x: number): boolean {
    const str = x.toString();
    let aux = str.length -1;
    for(let i = 0; i < str.length/2; i++){
        if(str[i] != str[aux]){
            return false;
        }
        aux--;
    }
    console.log(str[0]);
    return true;
};

