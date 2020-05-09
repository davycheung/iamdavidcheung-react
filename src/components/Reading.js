import React, { useEffect, useState } from "react";
const axios = require("axios");
const moment = require("moment");

function Reading() {
    const page = 1;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get("/api/articles")
            .then((response) => {
                const { data } = response;
                const results = [];
                for (let [key, a] of Object.entries(data.articles)) {
                    results.push({
                        id: key,
                        title: a.resolved_title,
                        url: a.resolved_url,
                        excerpt: a.excerpt,
                        image: a.top_image_url,
                        added: moment.unix(+a.time_added).format("Y-d-m"),
                    });
                }
                console.log(results);
                setArticles(results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [page]);

    return (
        <div className="mt-5 text-left">
            <h2 className="cover-heading">What I am Reading?</h2>
            <p>
                <small>
                    Articles I've liked, aggregated in{" "}
                    <a href="https://getpocket.com">pocket</a>.
                </small>
            </p>
            <div className="container mt-3 mb-5">
                <ul className="list-group">
                    {articles.map((item) => (
                        <li key={item.id}>
                            <a href={item.url}>{item.title}</a>
                            <p>
                                <small>{item.excerpt}</small>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Reading;
