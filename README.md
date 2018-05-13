# Google Maps Loader ES6

ES6 Module for easy loading google maps into your project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing


Install package from NPM
```
npm install gm-loader
```

Then import the module in your project. For example:

```
import GoogleMapsLoader from 'gm-loader';

new GoogleMapsLoader({
	'apiKey' => 'AIzaSyDf3LP2wI5aIIvObOZbfFi60bqsoy-4Wno',
	'zoom' => 18, // default to 12
	'scrollwheel' => false, // default
	'disableDefaultUI' => false, // default
	'zoomControl' => false, //default,
	'markerIcon' => 'vendor/marker.png'
});
```

To add location, add latitude and longitude dataset to map container
```
<div class="map-container" data-lat="125.25251" data-lng="235.235235" data-title="Map Title"></div>
```



## Built With
* Javascript

## Authors

* **Karl Mark Balagtey** - *Initial work* - [4ksoftware](https://4ksoftware.io)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

