import React, { useEffect, useState } from "react";
import NewsAPI from "../services/news";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { CalendarToday, ChevronRight } from "@material-ui/icons";
import { ListItemIcon, Divider } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const LINES_TO_SHOW = 2;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
}));

export default function Home() {
  let navigate = useNavigate();
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNewsData() {
      try {
        const { data } = await NewsAPI.getNews();

        if (data) {
          setNews(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getNewsData();
  }, []);

  const viewNewsDetails = (news) => {
    navigate(`/details/${news.id}`, {
      state:news
    });
  };

  return (
    <>
      <List className={classes.root}>
        {news.map((item) => (
          <React.Fragment
          key={item.id}>
            <ListItem
              alignItems="center"
              button
              onClick={() => viewNewsDetails(item)}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    item.media.length > 0
                      ? item.media[0]["media-metadata"][0].url
                      : "/static/images/avatar/1.jpg"
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.multiLineEllipsis}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                      <Typography
                        variant="overline"
                        className={classes.multiLineEllipsis}
                        style={{ lineHeight: 1.7, marginTop: "5px" }}
                      >
                        {item.byline}
                      </Typography>
                      <CalendarToday
                        style={{ height: "16px", width: "16px", marginRight:"4px"}}
                      />
                      {item.published_date}
                  </React.Fragment>
                }
              />
              <ListItemIcon style={{justifyContent:"end"}}>
                <ChevronRight />
              </ListItemIcon>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
