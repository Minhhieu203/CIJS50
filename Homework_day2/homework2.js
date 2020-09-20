function checkTwoString(string1, string2) {
        let str1=[];
        let str2=[];
        for(let i = 0; i <= 26; i++)
        {
            str1[i] = 0;
            str2[i] = 0;
        }
        if(string1.length != string2.length)
        {
            return false;
        }
        else{
        for(let i = 0;i < str1.length; i++){
            str1[string1.charCodeAt(i) - 97]++;
            str2[string2.charCodeAt(i) - 97]++;
        }
        for(let i = 0; i <= 26; i++)
        {
            if(str1[i] != str2[i])
                return false;
        }
        return true;
        }
    }
console.log(checkTwoString('hanh', 'ahnh'));
console.log(checkTwoString('abxo', 'abxk'));
console.log(checkTwoString('abxds', 'abb'));