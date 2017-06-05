import './dev.scss';

import ReactTabsLayoutTopNavs from './main';

/*===example start===*/

// install: npm install afeiship/react-tabs-layout-top-navs --save
// import : import ReactTabsLayoutTopNavs from 'react-tabs-layout-top-navs'

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs-layout-top-navs">
        <ReactTabsLayoutTopNavs>
          <div title="全部" badge={0} className="bd">bd1</div>
          <div title="已开始" badge={99}  className="bd">bd2</div>
          <div title="已结束" badge={10000} className="bd">bd3</div>
        </ReactTabsLayoutTopNavs>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
