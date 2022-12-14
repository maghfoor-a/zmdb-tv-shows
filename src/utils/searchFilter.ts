import { IEpisode } from "../episodesInterface";

export default function episodeSearchFilter(
  episodes: IEpisode[],
  searchBarText: string
): IEpisode[] | [] {
  return episodes.filter(
    (episode) =>
      episode.name
        .toLocaleLowerCase()
        .includes(searchBarText.toLocaleLowerCase()) ||
      (episode.summary !== null &&
        episode.summary
          .toLocaleLowerCase()
          .includes(searchBarText.toLocaleLowerCase()))
  );
}
