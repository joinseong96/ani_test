import { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function HomePage() {
	const [popularAnimes, setPopularAnimes] = useState([]);
	const [popularLoading, setPopularLoading] = useState(true);

	useEffect(() => {
		const fetchPopularAnimes = async () => {
			const gqlQuery = `
      			query {
			  Page(page: 1, perPage: 15) {
			    media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
			      id
			      title {
			        romaji
			        native
			      }
			      coverImage {
			        large
			      }
			      averageScore
			      episodes
			      status
			    }
			  }
			}
      `;
			try {
				const response = await fetch("https://graphql.anilist.co", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ query: gqlQuery }),
				});

				const data = await response.json();

				if (!response.ok) {
					throw new Error("API 응답 실패");
				}

				setPopularAnimes(data.data.Page.media ?? []);
			} catch {
				setPopularAnimes([]);
			} finally {
				setPopularLoading(false);
			}
		};

		fetchPopularAnimes();
	}, []);

	return (
		<div className="max-w-5xl mx-auto px-6 py-10">
			<h2 className="text-xl font-bold text-white mb-4">인기 애니메이션</h2>
			{popularLoading && <LoadingSpinner />}
			{!popularLoading && (
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{popularAnimes.map((item) => (
						<AnimeCard key={item.id} anime={item} />
					))}
				</div>
			)}
		</div>
	);
}
