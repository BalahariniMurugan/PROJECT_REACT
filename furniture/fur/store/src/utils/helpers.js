export const formatPrice = (number) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(number);
  };
  
  export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    //console.log(unique)
    //unique will be an array containing the category or comapany or color
    //using Set function to get unique values
    if(type === 'colors'){
      /*right now we are getting array of array for type color,but after 
      using flat we will get array of colors  */
      /**The flat() method creates a new array with all sub-array elements 
       concatenated into it recursively up to the specified depth. */
      unique = unique.flat();
    }
    return ["all", ...new Set(unique)];
  };