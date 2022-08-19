import { useState, useCallback } from "react";

export const useHttpClient = (type: any) => {
  const [data, setData] = useState(type);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipe = useCallback(
    async (httpLink: string, localStorageKey: string | null) => {
      setIsLoading(true);
    // since this api's free program offers  only 150 requests a day, i decided to cache some of the requests (the static ones) in the local storage
// here i check if 
      let check;
      if (localStorageKey) {
        check = localStorage.getItem(localStorageKey);
      }

      //checking if the data is already stored in localstorage. If yes, i set data state to that. If not, i make the api call
      if (check) {
        setData(JSON.parse(check));
        setIsLoading(false);
      } else {
        try {
          const response = await fetch(httpLink);

          if (response.ok) {
            const responseData = await response.json();
            if (localStorageKey) {
              localStorage.setItem(
                localStorageKey,
                JSON.stringify(
                  responseData.recipes || responseData.results || responseData
                )
              );
              setData(
                responseData.recipes || responseData.results || responseData
              );
            } else
              setData(
                responseData.recipes || responseData.results || responseData
              );
          } else {
            throw new Error("Something went wrong");
          }
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      }
    },
    []
  );

  return { getRecipe, data, isLoading };
};
