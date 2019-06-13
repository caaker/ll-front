import React       from 'react';
import ReactDOM    from 'react-dom';
import Input       from './input/Input.jsx';
import Paragraph   from './paragraph/Paragraph.jsx';
import Image       from './image/Image.jsx';
import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='app_hold'>
        <Paragraph/>
        <Input/>
        <Image/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
export default App;