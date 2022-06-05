import React from "react";

export default function Project({ data }) {
    const { title, image, link } = data
    return (
        <div>
            <a href={link}>
                
                {title}
            </a>
        </div>
    )
}