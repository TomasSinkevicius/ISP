import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import Comment from "../../Components/Comments/comment/index.js";
import AddComment from "../../Components/Comments/addComment/index.js";
import ReplyContent from "../../Components/Comments/replyContent.js";
import Reply from "../../Components/Comments/reply.js";
import Header from "../../Components/Header/header.js";

import { useFirebase } from "../../Context/firebase/FirebaseContext";

const DetailsScreen = (props) => {
  const { match, location } = props;
  const history = useHistory();
  const {
    getMovie,
    getRecommendedMovies,
    user,
    removeUserPoints,
    addToFavorites,
    removeFromFavorites,
    getAllComments,
    getAllCommentReplies,
  } = useFirebase();

  const [asset, setAsset] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [replyData, setReplyData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const comments = await getAllComments();
      setCommentData(comments);
      const replies = await getAllCommentReplies();
      setReplyData(replies);
      const res = await getMovie(match?.params?.id);
      const recommendedRes = await getRecommendedMovies(res);
      setAsset(res);
      setRecommended(recommendedRes);
      if (user?.favorites.find((item) => item === res.id)) {
        setIsFavorite(true);
      } else setIsFavorite(false);
      setLoading(false);
    };
    if (user) fetchData();
  }, [commentData, location.pathname, user, isFavorite]);

  return loading ? null : (
    <div
      className="background-blur-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),url(${asset.backdrop})`,
      }}
    >
      <Header />
      <div className="movie-details-container">
        <div className="movie-details-content-container">
          <h1 className="movie-details-title">{asset.title}</h1>
          <p className="movie-details-description">{asset.overview}</p>
          <div className="movie-details-button-section">
            <Button
              size="large"
              color="primary"
              onClick={() => {
                if (
                  user?.points >= asset?.movieCost ||
                  user?.membership === "VIP"
                ) {
                  history.push(`/movie/playback/${asset.id}`);
                  if (user?.membership !== "VIP")
                    removeUserPoints(asset.movieCost);
                } else alert("You dont have enough points to watch this movie");
              }}
            >
              Play
            </Button>
            {isFavorite ? (
              <Button
                onClick={() => {
                  removeFromFavorites(asset);
                }}
                size="large"
                color="primary"
              >
                Remove from favorites
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addToFavorites(asset);
                }}
                size="large"
                color="primary"
              >
                Add to favorites
              </Button>
            )}
          </div>
        </div>
        <div className="comments">
          {commentData.map((item, index) =>
            item.movie_id == asset.id ? (
              <div>
                {
                  <Comment
                    user_email={item.user_email}
                    body={item.body}
                    id={item.id}
                    rating={item.rating}
                    movie_id={asset.id}
                    comment_id={item.id}
                    author_id={user?.uid}
                    user_points={user?.points}
                  />
                }
                {replyData.map((item1, index) =>
                  item.id == item1.comment_id ? (
                    <ReplyContent
                      reply_user_email={item1.user_email}
                      reply_body={item1.body}
                    />
                  ) : null
                )}
                {user.email != item.user_email ? (
                  <Reply
                    movie_id={item.movie_id}
                    user_email={item.user_email}
                    comment_id={item.id}
                  />
                ) : null}
              </div>
            ) : null
          )}
        </div>
        <div>
          <AddComment
            movie_id={asset.id}
            user_email={user?.email}
            author_id={user?.uid}
          />
        </div>

        <div className="movie-details-related-section">
          <h2 className="movie-details-title-secondary">Recommended movies</h2>
          <Grid container direction="row">
            {recommended.map(
              (item) =>
                item && (
                  <Grid item key={`${item.id}-recommended`}>
                    <Card className="movie-details-related-section-card">
                      <CardMedia
                        className="movie-details-related-section-cardmedia"
                        image={item.poster}
                        title="img"
                      />
                      <CardContent className="movie-details-related-section-cardcontent">
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={() => history.push(`/movie/${item.id}`)}
                          size="small"
                          color="primary"
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
