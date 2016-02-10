var  groceryList = [

					{ Product: "Eggs",
					  Price:   2.00 
					},

					{ Product: "Steak",
					  Price:   5.00
					},

					{ Product: "Chicken",
					  Price:   3.50
					},						
					{ Product: "Cereal",
					  Price:   2.00
                    },
					 
					{ Product: "Butter",
					   Price:  3.50
					},
	
				  ]


				  var total = 0;

				  groceryList.forEach( function(item){ 
				  	console.log(item.Product + "-" + item.Price);	
				  	total+=item.Price; 
				  });

				  console.log(total);

 				/*var total = 0;

			  for(var i = 0; i< groceryList.length; i++ ) {
				   	 console.log(groceryList[i].Product + "-" + (groceryList[i].Price));
				  	 total+=groceryList[i].Price; 
				  	 }

				  	 console.log(total); */





				  

