import React from "react";
// import Card from "./card.jsx";

const Articles = ({ heading, cardDat }) => {
	return (
		<div className="article_div">
			<div className="article_body">
			<h4 style={{ color: 'black' }}>{heading}</h4>
			{cardDat.map((item, index) => {
				if (item !== null) {
					return (
						<div className="article_card" key={index} style={{ fontFamily: "Poppins" }}>
							{item.image && <img src={item.image} alt={item.title} />}
							<div className="article_content">
							<a className="heading-title">{item.title}</a>
							<p className="heading-article">{item.content}</p>
							</div>
							{/* <Card title={item.title} /> */}
						</div>
					);
				}
				return null;
			})}
			</div>
		</div>
	);
};

export default Articles;
