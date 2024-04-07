import React, { useState, useEffect } from 'react';
import api from "../../../api";


const subjectsData = {
  "body": "{\"Items\":[{\"subject_type\":\"Graduate\",\"subject_description\":\"Tech innovation\",\"subject_id\":3,\"start_date\":\"2024-04-01\",\"subject_name\":\"Tech innovation\"},{\"subject_type\":\"Graduate\",\"subject_description\":\"Learn cloud computing\",\"subject_id\":2,\"start_date\":\"2024-02-02\",\"subject_name\":\"Cloud Architecture\"},{\"subject_type\":\"Graduate\",\"subject_description\":\"Learn cloud computing\",\"subject_id\":4,\"start_date\":\"2024-02-02\",\"subject_name\":\"Cloud\"},{\"subject_type\":\"Graduate\",\"subject_description\":\"Learn cloud computing\",\"subject_id\":1,\"start_date\":\"2024-02-01\",\"subject_name\":\"Cloud computing\"}],\"Count\":4,\"ScannedCount\":4}"
};

function GetSubject() {
    const [subjects, setSubjects] = useState();

    async function fetchData() {
        const response = await api.subject.getSubjects();
        console.log(response);
        if(response){
            setSubjects(response?.subjects);
        }
        
      }
      useEffect(() => {
        console.log("hello");
        fetchData();
      }, []);


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {subjects?.map(subject => (
        <div key={subject?.subject_id} style={{ border: '1px solid #392c44', borderRadius: '8px', margin: '10px', padding: '10px', width: '250px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <h3>{subject?.subject_name}</h3>
          <p>Type: {subject?.subject_type}</p>
          <p>Description: {subject?.subject_description}</p>
          <p>Start Date: {subject?.start_date}</p>
        </div>
      ))}
    </div>
  );
}

export default GetSubject;
