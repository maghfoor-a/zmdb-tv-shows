import episodeCode from "../utils/episodeCode";
import { IEpisode } from "../episodesInterface";
import { removePTags } from "../utils/removePTags";

interface EpisodeProps {
  episode: IEpisode;
}

export default function SingleEpisodeView(props: EpisodeProps): JSX.Element {
  const episode = props.episode;
  const episodeCodeName = episodeCode(episode);
  const cleanSummary =
    episode.summary === null
      ? "SUMMARY NOT FOUND"
      : removePTags(episode.summary);

  return (
    <div className="singleEpisode">
      <h3 className="EpTitle">
        {episodeCodeName}:{" "}
        <a href={episode.url} target="_blank" rel="noopener noreferrer">
          {episode.name}
        </a>
      </h3>

      {episode.image !== null && (
        <img className="EpImg" src={episode.image.medium} alt={episode.name} />
      )}

      <h5 className="EpRating">Rating: {episode.rating.average}</h5>
      <p className="EpSummary">Summary: {cleanSummary}</p>
    </div>
  );
}
