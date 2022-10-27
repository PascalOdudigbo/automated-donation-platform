import React, { useState, useEffect } from "react";

function CharitiesManageStories() {
    const [story, setStory] = useState({});
    const [isLoadingSave, setIsLoadingSave] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);

    useEffect(() => {
        fetch("/meStory")
          .then((response) => response.json())
          .then((data) => {
            setStory(data);
            fetch(`/a_beneficiarys_stories/${data?.id}`)
              .then((response) => response.json())
              .then((data) => {
                console.log("STORIES:", data);
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }, []);
}

export default CharitiesManageStories; 