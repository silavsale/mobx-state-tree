import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


import { onPatch } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import Incoice from './models/Invoice'

const invoice = Incoice.create({currency: 'CAD'})

onPatch(invoice, patch => {
  console.log(patch);
})
makeInspectable(invoice)

ReactDOM.render(<App invoice={invoice}/>, document.getElementById('root'));
