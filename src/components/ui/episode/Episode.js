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
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OverflowScrolling
                style={{ height: 400, overflowY: "scroll", margin: "0px 10px" }}
                className="overflow-scrolling"
              >
                {seasonEpisodes.map((episode) => (
                  <EpisodeItem
                    key={episode.episode}
                    loading={loading}
                    episodeData={episode}
                  />
                ))}
              </OverflowScrolling>
            </div>
            <BodyImage>
              <Image src="https://www.wearetostadora.com/wp-content/uploads/2015/09/bre10.jpg" />
            </BodyImage>
          </EpisodeWrapper>
        </EpisodeContainer>
      </EpisodeFlex>
    </>
  );
};

export default Episode;

                {/* <SkeletonTheme color="#999" highlightColor="#fff">
                  <Skeleton circle={true} count={1} duration={3} />
                </SkeletonTheme> */}
