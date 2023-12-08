import {useState, useEffect} from "react";

// custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // Refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6- loading
    const [loading, setLoading] = useState(false)

    // 7- tratando erros
    const [error, setError] = useState(false)

    // 8- DELETE
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method)  => {
        if (method === 'POST') {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            setMethod("POST")
        } else if (method === "DELETE") {
              setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
             setMethod("DELETE");
             setItemId(data.id);
        } else if (method === "PUT") {
             setConfig({
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            setMethod(method)
            setItemId(data.id);
        }
    }




    useEffect(() => {

        const fetchData = async () => {

            // loading

            setLoading(true);

            // Tratando os erros
            try {
                 const res = await fetch(url);

                 const json = await res.json();

                 setData(json);

                 setMethod(null)

                 setError(null)

            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false)
        }

        fetchData();
    }, [url, callFetch]);


    // refatorando o POST
    useEffect( () => {

            console.log('method', method)
            const httpRequest = async () => {
                console.log('method', method)
                if (method === 'POST') {
                    let fetchOptions = [url, config];

                    const res = await fetch(...fetchOptions);

                    const json = await res.json();

                    setCallFetch(json);
                } else if (method === "DELETE") {
                    const deleteUrl = `${url}/${itemId}`;
                    console.log('url',deleteUrl)
                    const res = await fetch(deleteUrl, config);

                    const json = await res.json();

                    setCallFetch(json);
                } else if (method === "PUT") {
                    const updateUrl = `${url}/${itemId}`;
                     console.log('url',updateUrl)
                    const res = await fetch(updateUrl, config);

                    const json = await res.json();

                    setCallFetch(json);
                };
            };
             httpRequest();
        }, [config, method, url])

    return {data, httpConfig, loading, error};

};

