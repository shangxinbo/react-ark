import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/action'
import store from '../../redux/store'
import CSSModules from 'react-css-modules'
import style from '../../css/page.css'

class Page extends Component {
    constructor(props) {
        super(props)
    }
    prev() {
        let now = this.props.current
        now = now > 1 ? now - 1 : 1
        this.jump(now)
    }
    next() {
        let now = this.props.current
        now = now < this.props.total ? now + 1 : this.props.total
        this.jump(now)
    }
    jump(num) {
        this.props.changePage(num)
        this.setState({ current: num })
    }
    render() {

        let total = this.props.total
        let current = this.props.current
        if (total > 1) {
            let prevBtClass = current > 1 ? 'prev' : 'prev disabled'
            let nextBtClass = current < total ? 'next' : 'next disabled'
            let firstA = current == 1 ? <a styleName="active" href="javascript:void(0);" >1</a> : <a onClick={this.jump.bind(this, 1)} href="javascript:void(0);" >1</a>
            let firstSpan = current > 3 ? <span>...</span> : ''
            let lastSpan = total > 7 && current < (total - 2) ? <span>...</span> : ''
            let a1 = current > 3 ? <a onClick={this.jump.bind(this, current - 2)} href="javascript:void(0);">{current - 2}</a> : ''
            let a2 = current > 2 ? <a onClick={this.jump.bind(this, current - 1)} href="javascript:void(0);">{current - 1}</a> : ''
            let a3 = current > 1 ? <a onClick={this.jump.bind(this, current)} styleName="active" href="javascript:void(0);">{current}</a> : ''
            let a4 = current < total - 1 ? <a onClick={this.jump.bind(this, current + 1)} href="javascript:void(0);">{current + 1}</a> : ''
            let a5 = current < total - 2 ? <a onClick={this.jump.bind(this, current + 2)} href="javascript:void(0);">{current + 2}</a> : ''
            let totalA = current < (total - 2) && total > 5 ? <a onClick={this.jump.bind(this, total)} href="javascript:void(0);">{total}</a> : ''
            return (
                <div styleName="page">
                    <a styleName={prevBtClass} onClick={this.prev.bind(this)} href="javascript:void(0);">上一页</a>
                    {firstA}
                    {firstSpan}
                    {a1}
                    {a2}
                    {a3}
                    {a4}
                    {a5}
                    {lastSpan}
                    {totalA}
                    <a styleName={nextBtClass} onClick={this.next.bind(this)} href="javascript:void(0);" >下一页</a>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
export default CSSModules(Page, style, { allowMultiple: true })