import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./reels.css";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";

const reelsData = [
	// An array of objects representing Reels data
	{
		id: 1,
		user: "user1",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	},
	{
		id: 2,
		user: "user2",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
	},
  {
		id: 1,
		user: "user1",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	},
	{
		id: 2,
		user: "user2",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
	},
	// Add more reel objects as needed
];

function ReelsList() {
	return (
		<div className="reels-list">
			{reelsData.map((reel) => (
				<ReelCard key={reel.id} data={reel} />
			))}
		</div>
	);
}

function ReelCard({ data }) {
	const [playing, setPlaying] = useState(true);
	return (
		<div className="reel-card">
			<ReactPlayer 
				
				className="react-player"
				playing={playing}
				url={data.videoUrl}
			/>
			{playing ? (
				<button className="control" onClick={() => setPlaying(false)}>
					<img height={30} width={30} src={pause}></img>
				</button>
			) : (
				<button className="control" onClick={() => setPlaying(true)}>
					<img height={30} width={30} src={play}></img>
				</button>
			)}
		</div>
	);
}

export default ReelsList;
