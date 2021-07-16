import React from 'react';
import Tree from 'react-tree-graph';
import data from './data'
import 'react-tree-graph/dist/style.css'

const App: React.FC = (props: any) => {
  
  return (
    <Tree
  data={data}
  height={400}
  width={400}/>
  );
}

export default App;