export default function AnimeCard({ anime }) {
	return (
		<div>
			<img src={anime.coverImage.large} alt={anime.title.romaji} />
			<p>{anime.title.romaji}</p>
			<p>⭐ {anime.averageScore ?? "-"}</p>
		</div>
	);
}
