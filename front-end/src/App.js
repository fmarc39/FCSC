import './App.css';
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Home from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/Home.js';
import SignIn from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/Signin.js';
import ClientPage from '/Users/fmarc/Documents/Code/FCSC/front-end/src/containers/ClientPage.js';
import Invoice from '/Users/fmarc/Documents/Code/FCSC/front-end/src/components/InvoicePage/index';

function App({ invoiceData, invoiceItems }) {
  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/client/:id">
            <ClientPage />
          </Route>
          <Route exact path="/invoice">
            <Fragment>
              <PDFViewer width="100%" height="600" className="app">
                {console.log(invoiceData)}
                <Invoice invoice={invoiceData} items={invoiceItems} />
              </PDFViewer>
            </Fragment>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
