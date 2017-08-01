export default {
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

        if(!str){
            str = location.href.split("?")[1];
        }

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

    /**
     * Get params from Url
     */
    getParamsFromUrl:function () {
        var result = {};
        var fistPart = decodeURI(location.search);
        var hashPart = decodeURI(location.hash);

        var paramsStr = fistPart.split("?");
        var hashParas = hashPart.split("?");

        paramsStr.push(hashParas[1]);

        if (paramsStr != null) {
            for (var i = 0; i < paramsStr.length; i++) {
                var paramItem = paramsStr[i];
                var paramArray = paramItem.split("&");

                for (var j = 0; j < paramArray.length; j++) {
                    if(paramArray[j].indexOf("=")>0){
                        var paramTarget = paramArray[j].split("=");
                        result[paramTarget[0]] = paramTarget[1];
                    }
                }
            }
        }

        return result;
    },

    /**
     * Get JSON parameters from url
     */
    getJsonParamFromUrl: function(field){
        var result = {};
        try{
            var params = this.getParamsFromUrl();
            field = field || "param";
            params[field] = params[field].replace(/%3A/g,":");
            params[field] = params[field].replace(/%2C/g,",");
            return JSON.parse(params[field]);
        }catch(e){
            console.log("Error: getJsonParamFromUrl", {color: "red"});
        }

        return result;
    },
}
