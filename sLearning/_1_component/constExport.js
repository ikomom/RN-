/**
 *导出常量或者变量
 */

export var name = '小够';
//批量导出
var age = 19;
const like = '足球';
export {age, like};

export function sum(a, b){
    return a + b;
}