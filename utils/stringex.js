/**
 * 提取固定字符之间的字符串
 * @param  {String} prefix  前一个字符串，若未找到，则返回字符串空
 * @param  {String} postfix 前一个字符串，若未找到，则返回第一个条件之后所有字符串
 * @return {String}         截取的字符串
 */
String.prototype.subInner = function(prefix, postfix) {
    let result;
    prefix = prefix || "";
    postfix = postfix || "";

    if(this){
        let preIndex = this.indexOf(prefix);
        let poIndex = this.lastIndexOf(postfix);

        if(preIndex < 0 && poIndex < 0){
            result = "";
        }else{
            if(preIndex < 0){
                preIndex = 0;
            }else{
                preIndex += prefix.length;
            }
            if(poIndex < 0){
                poIndex = this.length;
            }

            result = this.substring(preIndex, poIndex);
        }
    }

    return result;
};
