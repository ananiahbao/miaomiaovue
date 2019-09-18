import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){

    var defaults = {   
        title : '',
        content : '',
        cancel : '',
        ok : '',
        handleCanel : null,
        handleOk : null
    };
    

    return function ( opts ){ 
        // js跟vue结合
        var  MyComponent = Vue.extend(MessageBox); 

        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCanel(){
                    // 此处用call bind 无法触发
                    defaults.handleCanel && defaults.handleCanel.call(this);
                    document.body.removeChild( vm.$el );
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });
        document.body.appendChild( vm.$el );
    }

})();
