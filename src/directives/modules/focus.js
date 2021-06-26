/**
 * @description：该指令的描述信息
 * 如何配置
 * 如何使用
 * 注意项
 */
export default {
    inserted(el, binding,vnode,oldVnode){
      el.focus()
    },
    bind(el, binding,vnode,oldVnode){
      //...
    },
    update(el, binding,vnode,oldVnode){
      //...
    },
    unbind(el, binding,vnode,oldVnode){
      //...
    },
    componentUpdated(el, binding,vnode,oldVnode){
      //...
    }
}