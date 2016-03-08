var app = angular.module('cri-animaux', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

app.controller('AppController', function ($scope, $window, $ionicPlatform) {

	$scope.media = null;

	$scope.model = {
		showDelete: false,
		showMove: false,
		sounds: [
			{
				'title': 'Vache',
				'image': 'img/animals/cow-icon.png',
				'desc': 'Meugle',
				'file': '/sounds/cow.mp3'
			},
			{
				'title': 'Dauphin',
				'image': 'img/animals/dolphin-icon.png',
				'desc': 'Siffle',
				'file': '/sounds/dolphin.mp3'
			},
			{
				'title': 'Grenouille',
				'image': 'img/animals/frog-icon.png',
				'desc': 'Croasse',
				'file': '/sounds/frog.mp3'
			},
			{
				'title': 'Oiseau',
				'image': 'img/animals/bird-icon.png',
				'desc': 'Chante',
				'file': '/sounds/bird.mp3'
			},
			{
				'title': 'Cochon',
				'image': 'img/animals/pig-icon.png',
				'desc': 'Grogne',
				'file': '/sounds/pig.mp3'
			},
			{
				'title': 'Chien',
				'image': 'img/animals/puppy-icon.png',
				'desc': 'Aboie',
				'file': '/sounds/dog.mp3'
			},
			{
				'title': 'Chat',
				'image': 'img/animals/black-cat-icon.png',
				'desc': 'Miaule',
				'file': '/sounds/cat.mp3'
			}
		]
	};

	$scope.play = function (sound) {
		//Arrêt du son au clic
		if($scope.media){
			$scope.media.pause();
		}

		if($window.cordova){
			$ionicPlatform.ready(function(){
				var src = sound.file;
				if($ionicPlatform.is('android')){
					src = '/android_asset/www/'+ src;
				}

				$scope.media = new $window.Media(src);
				$scope.play();
			});
		} else {
			$scope.media = new Audio();
			$scope.media.src = sound.file;
			$scope.media.load();
			$scope.media.play();
		}
	};

    $scope.delete = function(index){
        $scope.model.sounds.splice(index, 1);
    };

    $scope.move = function(item, fromIndex, toIndex){
        $scope.model.sounds.splice(fromIndex, 1);
        $scope.model.sounds.splice(toIndex,0,item);
    };
});

