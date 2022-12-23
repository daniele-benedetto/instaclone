import React from 'react';
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

const Position = ({form, setForm}) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({debounce: 300});

  const searchAddress = (e) => {
    setValue(e.target.value);
  };
    
  const handleSelect = ({ description }) => () => {
  
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description }).then((results) => {
      setForm({...form, position: results[0].formatted_address})
    });
  }

  const renderSuggestions = () => data.map((suggestion) => {
    const { place_id, structured_formatting: { main_text, secondary_text },} = suggestion;
    
    return (
      <li key={place_id} onClick={handleSelect(suggestion)}>
        <strong>{main_text}</strong> <small>{secondary_text}</small>
      </li>
    );  
  });

  return (
    <div className="mb-20 mw-350 text-left">
      <div className="input-container">
        <input
          className="w-full border rounded-md h-10 p-2 mb-3"
          value={value}
          onChange={searchAddress}
          disabled={!ready}
          placeholder="Inserisci il tuo indirizzo completo"
        />
        { status === "OK" && <ul>{renderSuggestions()}</ul> }
        </div>     
      </div>
  );
}

export default Position;

