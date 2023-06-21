import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-title">VIT CHENNAI</div>
							<div className="work-subtitle">
								B.Tech CSE
							</div>
							<div className="work-duration">2020-2024</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
