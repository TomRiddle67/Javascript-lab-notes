const variable = "property";

const object = {
property: "Value",
otherProperty: 77,
"obnoxiousProperty": function ()
{
//do something
},
};

//getting a property
console.log (object["obnoxiousProperty"]);
console.log (object.property);
console.log (object[variable]);
