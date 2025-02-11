import React, { useState, useEffect, useRef } from "react";
import "./Booking.css";

const GOOGLE_MAPS_API_KEY = "AIzaSyAHcQKv655QyzOGTvrVAGTxWbPP-g5YbPE";

const RideBooking = () => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [priceDetails, setPriceDetails] = useState(null);
  const [showLocationPrompt, setShowLocationPrompt] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  const autocompleteService = useRef(null);
  const placesService = useRef(null);
  const sessionToken = useRef(null);
  const searchTimeout = useRef(null);

  useEffect(() => {
    loadGoogleMapsScript();
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, []);

  const loadGoogleMapsScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initializeServices;
    document.body.appendChild(script);
  };


   const initializeMap = () => {
     const mapInstance = new window.google.maps.Map(
       document.getElementById("map"),
       {
         center: { lat: 20.5937, lng: 78.9629 }, // Center of India
         zoom: 5,
         styles: [
           {
             featureType: "administrative",
             elementType: "geometry",
             stylers: [{ visibility: "simplified" }],
           },
           {
             featureType: "water",
             elementType: "geometry",
             stylers: [{ color: "#b3d1ff" }],
           },
           {
             featureType: "landscape",
             elementType: "geometry",
             stylers: [{ color: "#f5f5f5" }],
           },
         ],
       }
     );

     setMap(mapInstance);
     setAutocompleteService(
       new window.google.maps.places.AutocompleteService()
     );
     setPlacesService(new window.google.maps.places.PlacesService(mapInstance));
     setDirectionsService(new window.google.maps.DirectionsService());
     setDirectionsRenderer(
       new window.google.maps.DirectionsRenderer({ map: mapInstance })
     );

     getCurrentLocation(mapInstance);
   };

  const initializeServices = () => {
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    setMap(mapInstance);

    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
    placesService.current = new window.google.maps.places.PlacesService(
      mapInstance
    );
    sessionToken.current =
      new window.google.maps.places.AutocompleteSessionToken();

    getCurrentLocation(mapInstance);
  };

  const getCurrentLocation = (mapInstance) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.setCenter(pos);
          mapInstance.setZoom(15);
          setShowLocationPrompt(false);
          reverseGeocode(pos);
        },
        () => setShowLocationPrompt(true)
      );
    }
  };

  const reverseGeocode = (position) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: position }, (results, status) => {
      if (status === "OK") {
        setCurrentLocation(results[0].formatted_address);
      }
    });
  };

  const handleInputChange = (value, type) => {
    if (type === "current") {
      setCurrentLocation(value);
      fetchSuggestions(value, setCurrentSuggestions);
    } else {
      setDropLocation(value);
      fetchSuggestions(value, setDropSuggestions);
    }
  };

  const fetchSuggestions = (input, setSuggestions) => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    searchTimeout.current = setTimeout(() => {
      const request = {
        input: input,
        sessionToken: sessionToken.current,
        componentRestrictions: { country: "IN" },
        types: ["geocode", "establishment"],
      };

      autocompleteService.current.getPlacePredictions(
        request,
        (predictions, status) => {
          setIsLoading(false);
          if (status === "OK" && predictions) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    }, 300);
  };

  const handleSuggestionSelect = (suggestion, type) => {
    placesService.current.getDetails(
      {
        placeId: suggestion.place_id,
        fields: ["formatted_address", "geometry"],
      },
      (place, status) => {
        if (status === "OK") {
          if (type === "current") {
            setCurrentLocation(place.formatted_address);
            setCurrentSuggestions([]);
          } else {
            setDropLocation(place.formatted_address);
            setDropSuggestions([]);
          }

          map.panTo(place.geometry.location);
          map.setZoom(15);
        }
      }
    );
  };

  

  const renderSuggestions = (suggestions, type) => {
    if (!suggestions.length) return null;

    return (
      <div className="location-suggestions">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.place_id}
            className="suggestion-item"
            onClick={() => handleSuggestionSelect(suggestion, type)}
          >
            <div className="suggestion-text">
              <div className="suggestion-main-text">
                {suggestion.structured_formatting.main_text}
              </div>
              <div className="suggestion-secondary-text">
                {suggestion.structured_formatting.secondary_text}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  


  const calculateRoute = () => {
    if (!currentLocation || !dropLocation) return;

    const request = {
      origin: currentLocation,
      destination: dropLocation,
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
        const distance = result.routes[0].legs[0].distance.value / 1000; // Convert to km
        calculatePrice(distance);
      }
    });
  };
  const calculatePrice = (distance) => {
    const basePrice = 2;
    const pricePerKm = 25;
    const platformFee = 5;
    const distanceCost = distance * pricePerKm;
    const total = basePrice + distanceCost + platformFee;

    setPriceDetails({
      distance,
      baseFare: basePrice,
      distanceFare: distanceCost,
      platformFee,
      total,
    });
  };

  return (
    <div className="app-container">
      {/* Status bar remains the same */}
      <div className="status-bar">
        <div className="status-bar-left">9:46 PM | 1.1KB/s</div>
        <div className="status-bar-right">
          <span>4G+</span>
          <span>84%</span>
        </div>
      </div>

      <div id="map" className="map-container" />

      <div className="location-panel">
        {showLocationPrompt && (
          <div className="location-alert">
            Please allow location access to use this service
          </div>
        )}

        <div className="location-input-container">
          <input
            type="text"
            className="location-input current-location-input"
            placeholder="Current Location"
            value={currentLocation}
            onChange={(e) => handleInputChange(e.target.value, "current")}
          />
          {isLoading && <div className="loading-indicator" />}
          {renderSuggestions(currentSuggestions, "current")}
        </div>

        <div className="location-input-container">
          <input
            type="text"
            className="location-input drop-location-input"
            placeholder="Drop Location"
            value={dropLocation}
            onChange={(e) => handleInputChange(e.target.value, "drop")}
          />
          {isLoading && <div className="loading-indicator" />}
          {renderSuggestions(dropSuggestions, "drop")}
        </div>

        {/* Rest of the component remains the same */}
        {/* ... Price calculation and display code ... */}
        <button className="confirm-button" onClick={calculateRoute}>
          Confirm Locations
        </button>
        {priceDetails && (
          <div className="price-details">
            <div className="price-row">
              <span>Distance</span>
              <span>{priceDetails.distance.toFixed(1)} km</span>
            </div>
            <div className="price-row">
              <span>Base Fare</span>
              <span>${priceDetails.baseFare}</span>
            </div>
            <div className="price-row">
              <span>Distance Fare</span>
              <span>${priceDetails.distanceFare.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Platform Fee</span>
              <span>${priceDetails.platformFee}</span>
            </div>
            <div className="price-total">
              <span>Total</span>
              <span>${priceDetails.total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideBooking;
