import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from 'react-router-dom';

function NewsCard({ news }) {

  const navigate = useNavigate();

  function formatDate(publishedAt) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = new Date(publishedAt).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  return (
    <Card sx={{ maxWidth: 345 }} style={{cursor:'pointer'}} color="text.secondary" onClick={() => navigate(`/news/${news.title}`, { state: news })}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://cdn.onlinewebfonts.com/svg/img_298667.png"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={news.author}
        subheader={formatDate(news.publishedAt)}
      />
      <CardMedia
        component="img"
        height="194"
        image={news.urlToImage}
        alt="Photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
  {news.description}
</Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
