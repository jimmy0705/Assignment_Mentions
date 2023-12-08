import React, { useState } from "react";

const Mention = ({ onChange, value }) => {
  const [mentionText, setMentionText] = useState("");
  //   const [selectedText, setSelectedText] = useState("");
  const [mentionOptions, setMentionOptions] = useState([]);
  const rawData = require("../data/data.json");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setMentionText(inputValue);

    if (inputValue.includes("@")) {
      const mentionQuery = inputValue.split("@")[1];
      const filteredOptions = getFilteredOptions(mentionQuery);
      setMentionOptions(filteredOptions);
    } else {
      setMentionOptions([]);
    }
    // console.log(inputValue);
    onChange(inputValue, null);
  };

  const handleOptionSelect = (selectedOption) => {
    console.log(value);
    console.log(mentionText);
    // console.log(selectedOption.first_name);

    const updatedText = value.replace(
      /@([^ ]+)?/g,
      `@${selectedOption.first_name}`
    );

    setMentionOptions([]);
    onChange(updatedText, selectedOption);
  };

  const getFilteredOptions = (mentionQuery) => {
    const filteredOptions = rawData.filter((option) =>
      option.first_name.toLowerCase().includes(mentionQuery.toLowerCase())
    );
    return filteredOptions;
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Mention"
      />
      <ul style={{ maxHeight: "250px", overflow: "scroll" }}>
        {mentionOptions.map((option) => (
          <li
            key={option.id}
            onClick={() => handleOptionSelect(option)}
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            {option.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mention;
