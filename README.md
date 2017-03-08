react 使用jsx 其实是将xml转换成javascript代码react.createElement
开始jsx 使用jstransform,0.14 后来转成babel
https://babeljs.io/docs/plugins/transform-react-jsx/

html 标签 要用data-属性
react 标签大写开头
https://segmentfault.com/a/1190000002646155

延伸属性
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator

React 组件非常简单。你可以认为它们就是简单的函数，接受 props 和 state (后面会讨论) 作为参数，然后渲染出 HTML
一个限制: React 组件只能渲染单个根节点。如果你想要返回多个节点，它们必须被包含在同一个节点里。

https://www.w3.org/TR/DOM-Level-3-Events/
http://www.ituring.com.cn/article/428
https://davidwalsh.name/event-delegate

https://facebook.github.io/react/docs/installation.html

While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.

If you don't use something in render(), it shouldn't be in the state.

https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/

https://facebook.github.io/react/docs/handling-events.html