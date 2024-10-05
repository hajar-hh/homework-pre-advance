import React from "react";

const customer = {
  first_name: "Bob",
  last_name: "Dylan"
};


const CustomerInformation = ({ first_name, last_name }) => {
  return (
    <div>
      <h1 style={{color : 'rgb(10, 165, 49)'}}>my name is = {first_name}</h1>
      <h2 style={{color:'rgb(10, 165, 155)'}}>my last name is = {last_name}</h2>
    </div>
  );
};

function Apppp() {
  return (
    <div>
      <CustomerInformation first_name={customer.first_name} last_name={customer.last_name} />
    </div>
  );
}

export default Apppp;
