import './dev.scss';

import ReactTabsLayoutVertical from './main';

/*===example start===*/

// install: npm install afeiship/react-tabs-layout-vertical --save
// import : import ReactTabsLayoutVertical from 'react-tabs-layout-vertical'

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs-layout-vertical">

        <h2>overflow:auto</h2>
        <ReactTabsLayoutVertical className="demo1" menuOverflow='hidden'>
          <div title="全部" badge={0} className="bd">bd1</div>
          <div title="已开始" badge={99}  className="bd">bd2</div>
          <div title="已结束" badge={10000} className="bd">bd4</div>
        </ReactTabsLayoutVertical>

        <h2>overflow:scroll</h2>
        <ReactTabsLayoutVertical className="demo2" menuOverflow='scroll'>
          <div title="全部" badge={0} className="bd">bd1</div>
          <div title="已开始" badge={99}  className="bd">bd2</div>
          <div title="进行中" badge={0}  className="bd">bd3</div>
          <div title="已结束" badge={10000} className="bd">bd4</div>
        </ReactTabsLayoutVertical>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
