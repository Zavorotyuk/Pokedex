'use strict';

/* Controllers */


var pokemonsApp=angular.module('pokemonsApp',[]);

pokemonsApp.controller('PokemonsList',function($scope){
    $scope.title='Pokemons';
    $scope.showInform = false;
    $scope.showM=false;
    $scope.hideB=true;
	$scope.currentPokemon = '';
	
	$scope.showPokemon = function(pokemon) {
		return pokemon.name === $scope.currentPokemon;
	};

    $scope.clickMe = function(obj){

	if ($scope.currentPokemon === obj.name){
		$scope.currentPokemon = '';
		return;
	}
	
	$scope.currentPokemon = obj.name;

    };


    $scope.showMore = function(obj){
        if($scope.showM){
            $scope.showM = false;
        }
        else{
            $scope.showM = true;
            $scope.hideB=false;
        }
    };



        $scope.pokemons =[

        {"name":"Bulbasaur",
            "type":"Grass",
            "Attack":49,
            "Defence":49,
            "SP_Attack":65,
            "SP_Defence":65,
            "Speed":45,
            "Weight":"15.2 lbs (6.9 kg)",
            "Total_moves":318,
            "imgURL":"img/1bulbasaur.png"

        },
     {
        "name":"Charmander",
        "type":"Fire",
        "Attack":52,
        "Defence":43,
        "SP_Attack":60,
        "SP_Defence":50,
        "Speed":65,
        "Weight":"18.7 lbs (8.5 kg)",
        "Total_moves":309,
        "imgURL":"img/2charmander.png"

    },
    {
        "name":"Squirtle",
        "type":"Water",
        "Attack":48,
        "Defence":65,
        "SP_Attack":50,
        "SP_Defence":64,
        "Speed":43,
        "Weight":"	19.8 lbs (9.0 kg)",
        "Total_moves":314,
        "imgURL":"img/3squirtle.png"

    },
    {
        "name":"Caterpie",
        "type":"Bug",
        "Attack":30,
        "Defence":35,
        "SP_Attack":20,
        "SP_Defence":20,
        "Speed":45,
        "Weight":"6.4 lbs (2.9 kg)",
        "Total_moves":195,
        "imgURL":"img/4caterpie.png"

    },
    {
        "name":"Weedle",
        "type":"Bug",
        "Attack":35,
        "Defence":30,
        "SP_Attack":20,
        "SP_Defence":20,
        "Speed":50,
        "Weight":"7.1 lbs (3.2 kg)",
        "Total_moves":195,
        "imgURL":"img/5weedle.png"


    },
    {
        "name": "Pidgey",
        "type": "Normal",
        "Attack": 45,
        "Defence": 40,
        "SP_Attack": 35,
        "SP_Defence": 35,
        "Speed": 56,
        "Weight": "4 lbs (1.8 kg)",
        "Total_moves": 251,
        "imgURL":"img/6pidgey.png"

    },
      {
          "name":"Rattata",
          "type":"Normal",
          "Attack":56,
          "Defence":35,
          "SP_Attack":25,
          "SP_Defence":35,
          "Speed":72,
          "Weight":"7.7 lbs (3.5 kg)",
          "Total_moves":253,
          "imgURL":"img/7rattata.png"

        },
      {
          "name":"Nidoran♂",
          "type":"Poison",
          "Attack":57,
          "Defence":40,
          "SP_Attack":40,
          "SP_Defence":40,
          "Speed":50,
          "Weight":"19.8 lbs (9.0 kg)",
          "Total_moves":273,
          "imgURL":"img/8nidoran.png"

       },
       {
           "name": "Meowth",
           "type": "Normal",
           "Attack": 45,
           "Defence": 35,
           "SP_Attack": 40,
           "SP_Defence": 40,
           "Speed": 90,
           "Weight": "9.3 lbs (4.2 kg)",
           "Total_moves": 290,
           "imgURL":"img/9meowth.png"

       },
        {   "name":"Growlithe",

            "type":"Fire",
            "Attack":70,
            "Defence":45,
            "SP_Attack":70,
            "SP_Defence":50,
            "Speed":60,
            "Weight":"41.9 lbs (19.0 kg)",
            "Total_moves":350,
            "imgURL":"img/1growlithe.png"

            },

         {
             "name":"Poliwag",
             "type":"Water",
             "Attack":50,
             "Defence":40,
             "SP_Attack":40,
             "SP_Defence":40,
             "Speed":90,
             "Weight":"27.3 lbs (12.4 kg)",
             "Total_moves":300,
             "imgURL":"img/2poliwag.png"

            },
         {
             "name":"Ponyta",
             "type":"Fire",
             "Attack":85,
             "Defence":55,
             "SP_Attack":65,
             "SP_Defence":65,
             "Speed":90,
             "Weight":"66.1 lbs (30.0 kg)",
             "Total_moves":410,
             "imgURL":"img/3ponyta.png"

            }

        ];



    $scope.pokemons2 =[


        {
            "name": "Seel",
            "type": "Water",
            "Attack":45,
            "Defence":55,
            "SP_Attack":45,
            "SP_Defence":70,
            "Speed":45,
            "Weight": "	198.4 lbs (90.0 kg)",
            "Total_moves":325,
            "imgURL": "img/4seel.png"
        },
        {
            "name": "Dratini",
            "type": "Dragon",
            "Attack":64,
            "Defence":45,
            "SP_Attack":50,
            "SP_Defence":50,
            "Speed":50,
            "Weight": "7.3 lbs (3.3 kg)",
            "Total_moves":300,
            "imgURL": "img/4dratini.png"
        },
        {
            "name": "Voltorb",
            "type": "Electric",
            "Attack":30,
            "Defence":50,
            "SP_Attack":55,
            "SP_Defence":55,
            "Speed":100,
            "Weight": "22.9 lbs (10.4 kg)",
            "Total_moves":330,
            "imgURL": "img/6voltorb.png"
        },
        {"name":"Wooper",
            "type":"Electric",
            "Attack":45,
            "Defence":45,
            "SP_Attack":25,
            "SP_Defence":25,
            "Speed":15,
            "Weight":"18.7 lbs (8.5 kg)",
            "Total_moves":210,
            "imgURL":"img/7wooper.png"

        }, {"name":"Poochyena",
            "type":"Dark",
            "Attack":55,
            "Defence":35,
            "SP_Attack":30,
            "SP_Defence":30,
            "Speed":35,
            "Weight":"30 lbs (13.6 kg)",
            "Total_moves":220,
            "imgURL":"img/8pooochyena.png"

        }, {"name":"Seviper",
            "type":"Poison",
            "Attack":100,
            "Defence":60,
            "SP_Attack":100,
            "SP_Defence":60,
            "Speed":65,
            "Weight":"115.7 lbs (52.5 kg)",
            "Total moves":458,
            "imgURL":"img/9seviper.png"

        }, {"name":"Tepig",
            "type":"Fire",
            "Attack":63,
            "Defence":45,
            "SP_Attack":45,
            "SP_Defence":45,
            "Speed":45,
            "Weight":"	21.8 lbs (9.9 kg)",
            "Total_moves":308,
            "imgURL":"img/1tepig.png"

        },
        {"name":"Zorua",
            "type":"Dark",
            "Attack":65,
            "Defence":40,
            "SP_Attack":80,
            "SP_Defence":40,
            "Speed":65,
            "Weight":"	27.6 lbs (12.5 kg)",
            "Total_moves":330,
            "imgURL":"img/2zorua.png"

        }


    ];

});
