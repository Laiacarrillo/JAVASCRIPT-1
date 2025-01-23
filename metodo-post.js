const data = {
    "title": "viernes de rumba",
    "autor": "v10",
    "id": 4
};

fetch("http://localhost:3000/posts/",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
).then((response) =>response.json())
.then((data) =>console.log("Sucess:",data))
.catch((error) =>console.error("Error:",error));