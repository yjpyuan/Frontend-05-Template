学习笔记
##String.fromCharCode(Math.random()*26+'a'.charCodeAt(0))
fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
String.fromCharCode(65,66,67) //"ABC"
charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
'hello'.charCodeAt(0)//104
'hello'.charCodeAt(-1)//NAN
'hello'.charCodeAt(6)//NAN

综上，String.fromCharCode(Math.random()*26+'a'.charCodeAt(0)) 就是返回一个指定Unicode 编码为
随机0-25加上a的Unicode 编码的字符所以就是a-z

##字典树 我感觉主要就是查询比较方便
 most2()  return wordArr 改造下就可以查询出现4次以上的元素有哪些
同理 
 most3()  return mostWordArr 返回ab开始的单词有哪些 都是什么
 randomWord 可以看做是一个业务方法 比如说 
 字典树感觉可以用来做数据分析，比如买东西，都买了什么，先后顺序就可以，算出来优先级，
 也可以算出来那些东西卖得好，出现了多少次

 2.KMP子串匹配的方法：


如何确定模？
比较目标字符串本身
若当前两个字符相同，则推进i,j   //++j, ++i; table[i] = j;
若当前两个字符不同，且j>0，则i保持不变，j跳回pattern前缀的上一个位置  //if (j > 0) {j = table[j];}
若当前两个字符不同，且j=0，则推进i //++i;

同理
匹配目标字符串在查找字符串位置
若当前两个字符相同，则推进i,j
若当前两个字符不同，且j>0，则i保持不变，j跳回pattern前缀的上一个位置
若当前两个字符不同，且j=0，则推进i

为什么确定模的时候， let i = 1, j = 0;？匹配目标字符串在查找字符串位置时，let i = 0,j = 0？
这是目标字符串本身的比较 let i = 0,j = 0; 就是pattern[0]比pattern[0]了；
匹配目标字符串在查找字符串位置时，pattern[0]于source[0]的比较

KMP算法的原理或者说主题思想就是降低暴力比较是的重复次数，
如何降低 就是通过对比目标字符串本身的重复性，从而确定回退比较的比较节点

##for循环的第二个是判断条件，
之前一直没这么写过，一直都是<xxx.length;这种，算是一个新的理解吧
    //pattern[i]不是*，只要不匹配source[i],并且也不是？ 直接返回false
    for (i = 0; pattern[i] !== '*'; i++) {
      if (pattern[i] !== source[i] && pattern[i] !== '?') {
        return false
      }
    }
    lastIndex=i;
##利用正则将？匹配为\\s\\S
let reg = new RegExp(subPattern.replace(/\?/g, '[\\s\\S]'), 'g');

   if(!reg.exec(source)){
        return false
      }
##使用带?的KMP算法完成正则部分的匹配

