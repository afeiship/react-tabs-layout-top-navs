import './dev.scss';

import ReactTabsLayoutTopNavs from './main';

/*===example start===*/

// install: npm install afeiship/react-tabs-layout-top-navs --save
// import : import ReactTabsLayoutTopNavs from 'react-tabs-layout-top-navs'

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs-layout-top-navs">

        <h2>overflow:auto</h2>
        <ReactTabsLayoutTopNavs className="demo1" menuOverflow='hidden'>
          <div title="全部" badge={0} className="bd">bd1</div>
          <div title="已开始" badge={99}  className="bd">bd2</div>
          <div title="已结束" badge={10000} className="bd">bd4</div>
        </ReactTabsLayoutTopNavs>

        <h2>overflow:scroll</h2>
        <ReactTabsLayoutTopNavs className="demo2" menuOverflow='hidden'>
          <div title="全部" badge={0} className="bd">bd1</div>
          <div title="已开始" badge={99}  className="bd">bd2</div>
          <div title="进行中" badge={0}  className="bd">bd3</div>
          <div title="已结束" badge={10000} className="bd">bd4</div>
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
