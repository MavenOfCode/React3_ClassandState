import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'sun',
  },
  winter: {
    text: 'Burr it is cold',
    icon: 'snowflake',
  },
}

const getSeason = (lat, month) => {
 if(month >2 && month < 9){
  return lat >0 ? 'summer' : 'winter';
 } else {
  return lat >0 ? 'winter' : 'summer';
 }
}

const SeasonDisplay = props =>{
  const season = getSeason(props.lat,new Date().getMonth());
 const {text, iconName} = seasonConfig[season];
  return(
    <div>
      <i className={`${iconName} icon`} size={30}/>
     <h1>{text}</h1>
     <i className={`${iconName} icon`} style={{alignContent:'center'}}size={30}/>
    </div>
  );
}
export default SeasonDisplay;