export const Util = {
    /**
     * 获取url或者自定义的hash字符串中的参数信息
     *
     * @method $.getParameter
     * @param {String} name 不传name则直接返回整个参数对象
     * @param {String} param 转成对象的hash字符串
     * @param {Boolean} [unfilter:false] 不进行参数XSS安全过滤
     * @param {Boolean} [undecode:false]] 不进行自动解码
     * @return {String|Object} 获取到的参数值或者由所有参数组成完整对象
    */
    getParameter: function(name,param,unfilter,undecode){
        var obj = {},tmp,
            str = typeof param == "string" ? param : location.search.replace("?","");

        var arr = str.split("&");
        if(arr.length > 0){
            for(var i = 0,l=arr.length ;i<l;i++){
                try{
                    if(/(.*?)=(.*)/.test(arr[i])){
                        tmp = undecode ? RegExp.$2 : decodeURIComponent(RegExp.$2);
                        obj[RegExp.$1] = unfilter ? tmp : this.filterScript(tmp);
                    }
                }catch(e){}
            }
        }
        return name ? obj[name] : obj;
    },

    /**
     * 过滤XSS的非法字符
     *
     * @method $.filterScript
     * @param {String} str 需要进行过滤的字符串
    */
    filterScript: function(str){
        var text = document.createTextNode(str),
            parser = document.createElement("div"),
            value = "";

        parser.appendChild(text);

        value = parser.innerHTML;

        text = null; parser = null;

        return value;
    },
}
