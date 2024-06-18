import React from "react";

export function Hobby() {
	return (
		<div className="bg-black pt-20">
			<p className="arapey-regular-italic text-4xl text-center">
				This is something i made long time ago and very proud of
			</p>
			<div
				className="sketchfab-embed-wrapper"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh", // Adjust height as needed for your layout
				}}>
				<iframe
					title="Viking market - DAEVillages"
					allowFullScreen
					allow="autoplay; fullscreen; xr-spatial-tracking"
					execution-while-out-of-viewport
					execution-while-not-rendered
					web-share
					width="640"
					height="480"
					src="https://sketchfab.com/models/d2c00cb9fa584dd6871a4a7cd8fd9b53/embed"
					style={{ marginBottom: "10px" }} // Optional margin for spacing
				></iframe>
				<p
					style={{
						fontSize: "13px",
						fontWeight: "normal",
						margin: "5px",
						color: "#4A4A4A",
						textAlign: "center",
					}}>
					{" "}
					<a
						href="https://sketchfab.com/3d-models/viking-market-daevillages-d2c00cb9fa584dd6871a4a7cd8fd9b53?utm_medium=embed&utm_campaign=share-popup&utm_content=d2c00cb9fa584dd6871a4a7cd8fd9b53"
						target="_blank"
						rel="noopener noreferrer"
						style={{ fontWeight: "bold", color: "#1CAAD9" }}>
						Viking market - DAEVillages
					</a>{" "}
					by{" "}
					<a
						href="https://sketchfab.com/Dorjustine?utm_medium=embed&utm_campaign=share-popup&utm_content=d2c00cb9fa584dd6871a4a7cd8fd9b53"
						target="_blank"
						rel="noopener noreferrer"
						style={{ fontWeight: "bold", color: "#1CAAD9" }}>
						Justine Dor
					</a>{" "}
					on{" "}
					<a
						href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d2c00cb9fa584dd6871a4a7cd8fd9b53"
						target="_blank"
						rel="noopener noreferrer"
						style={{ fontWeight: "bold", color: "#1CAAD9" }}>
						Sketchfab
					</a>
				</p>
			</div>
		</div>
	);
}
