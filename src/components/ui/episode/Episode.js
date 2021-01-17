import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../../utils/api";
import EpisodeItem from "./EpisodeItem";
import Nav from "../navigation/Nav";
import {
  EpisodeFlex,
  EpisodeContainer,
  EpisodeWrapper,
  BodyImage,
  Image,
} from "./EpisodeStyled";
import { MenuWrapper, Ul, Li } from "../navigation/NavStyled";
import OverflowScrolling from "react-overflow-scrolling";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import season_img from "../../../images/season_episodes.png";

const Episode = () => {
  let { season } = useParams();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bodyClass, setBodyClass] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("active", bodyClass);
  }, [bodyClass]);

  useEffect(() => {
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
            <BodyImage main={true}>
              <Image src={season_img} main={true}/>
            </BodyImage>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading ? (
                <SkeletonTheme
                  color="#999"
                  highlightColor="#fff"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <div style={{ width: "100%" }}>
                    <p style={{ display: "flex", flexDirection: "row" }}>
                      <Skeleton
                        height={50}
                        width={50}
                        circle={true}
                        count={1}
                        duration={3}
                        style={{ margin: 7 }}
                      />
                      <Skeleton count={3} width={500} />
                    </p>
                  </div>
                </SkeletonTheme>
              ) : (
                <div>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontSize: "35px",
                      color: "chartreuse",
                      cursor: "default",
                    }}
                  >
                    Season {seasonEpisodes[0].season} episodes
                  </div>
                  <OverflowScrolling
                    style={{
                      height: 400,
                      overflowY: "scroll",
                      margin: "0px 10px",
                    }}
                    className="overflow-scrolling"
                  >
                    {seasonEpisodes.map((episode) => (
                      <EpisodeItem
                        key={episode.episode}
                        episodeData={episode}
                      />
                    ))}
                  </OverflowScrolling>
                </div>
              )}
            </div>
          </EpisodeWrapper>
        </EpisodeContainer>
      </EpisodeFlex>
    </>
  );
};

export default Episode;
