import './style.scss';

import React,{Children, PureComponent, cloneElement, createElement} from 'react';
import { ReactTabs, ReactTabsBody, ReactTabsMenu } from 'react-tabs'

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    menuOverflow: PropTypes.oneOf(['scroll','hidden','auto'])
  };

  static defaultProps = {
    menuOverflow:'hidden'
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:props.activeIndex
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const {activeIndex} = nextPros;
    if(activeIndex!==this.state.activeIndex){
      this.setState({activeIndex});
    }
  }

  getInitialChlidren(inMenu){
    const {children} = this.props;
    return Children.map(children,(child)=>{
      const {title,badge,...childProps} = child.props;
      inMenu.push({title,badge});
      return cloneElement( createElement(child.type) ,childProps);
    });
  }

  template(inMenu){
    return inMenu.map((item,index)=>{
      return (
        <span key={index}>
          <em>{item.title}</em>
          <b className="badge">{item.badge}</b>
        </span>
      )
    });
  }

  _onClick = inEvent => {
    const activeIndex = inEvent.target.value;
    this.setState({activeIndex});
  };


  render(){
    let menu = [];
    const {className,menuOverflow,...props} = this.props;
    const children = this.getInitialChlidren(menu);
    return (
      <ReactTabs {...props} className={classNames('react-tabs-layout-vertical',className)}>
        <ReactTabsMenu overflow={menuOverflow} onItemClick={this._onClick} activeIndex={this.state.activeIndex} children={this.template(menu)} />
        <ReactTabsBody activeIndex={this.state.activeIndex} children={children} />
      </ReactTabs>
    );
  }
}
