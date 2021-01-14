import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../../utils/api";
import EpisodeItem from "./EpisodeItem";
import Nav from "../navigation/Nav";
import { EpisodeFlex, EpisodeContainer, EpisodeWrapper } from "./EpisodeStyled";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MenuWrapper, Ul, Li } from "../navigation/NavStyled";

const Episode = () => {
  let { season } = useParams();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bodyClass, setBodyClass] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("active", bodyClass);
    callApi()
      .then((response) => setApiData(response))
      .finally(() => setLoading(false));
  }, []);
  const setClasses = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active", !bodyClass);
    setBodyClass(!bodyClass);
  };
  const seasonEpisodes = apiData.filter(
    (item) => item.season === season && item.series === "Breaking Bad"
  );

  return (
    <>
      <MenuWrapper>
        <Ul>
          <Li onClick={() => setClasses()}>
            <i className="fas fa-bars"></i>
          </Li>
        </Ul>
      </MenuWrapper>
      <Nav setClasses={setClasses} />
      <EpisodeFlex>
        <EpisodeContainer>
          <EpisodeWrapper>
            {loading ? (
              <SkeletonTheme color="#202020" highlightColor="#444">
                {" "}
                <p>
                  <Skeleton circle={true} count={1} duration={3} />
                </p>
              </SkeletonTheme>
            ) : seasonEpisodes.length ? (
              seasonEpisodes.map((episode) => (
                <EpisodeItem title={episode.title} />
              ))
            ) : (
              "No results found"
            )}
          </EpisodeWrapper>
        </EpisodeContainer>
      </EpisodeFlex>
    </>
  );
};

export default Episode;
