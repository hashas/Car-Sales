import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature, buyItem } from './actions/actions';


const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    // import action from /actions/actions.js above
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // import action from /actions/actions.js above
    props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures 
          car={props.car}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures} 
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps,{buyItem, removeFeature})(App);
