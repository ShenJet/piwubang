// 
const randomstr = len => {
    let res = ''
    let source = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] ;
    for(let i=0;i<len;i++){
        res += source[Math.floor(Math.random()*source.length)]
    }
    return res
}
export default randomstr