import React, { useState, useEffect } from "react";

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    // Fetch surveyform data from the server
    fetch("https://survey-oy92.onrender.com/surveyform")
      .then((response) => response.json())
      .then((data) => setSurveyData(data))
      .catch((error) =>
        console.error("Error fetching surveyform data:", error)
      );
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Survey List Detail</h2>
      <ul>
        {surveyData.map((survey) => (
          <div key={survey._id} className="border-2 border-black p-4 mb-4">
            <li>
              <p className="mb-2">
                <span className="font-semibold">Name:</span> {survey.Name}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Gender:</span> {survey.Gender}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Nationality:</span>{" "}
                {survey.Nationality}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span> {survey.Email}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone Number:</span>{" "}
                {survey.Phone}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Address:</span> {survey.Address}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Message:</span> {survey.Message}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
