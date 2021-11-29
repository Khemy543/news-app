import { Grid, Typography, Divider } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";

export default function NewsDetails() {
  const { state } = useLocation();

  console.log(state);

  return (
    <React.Fragment>
      <Grid container style={{marginTop:"20px"}} spacing={5}>
        <Grid item md={6}>
          {state.media.length > 0 ? (
            <img
              src={state.media[0]["media-metadata"][2].url}
              alt={state.title}
              style={{ width: "100%" }}
            />
          ) : (
            <div>no image</div>
          )}
        </Grid>
        <Grid item md={6}>
            <Typography component="h2" variant="h5" gutterBottom>
              {state.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {state.published_date}
            </Typography>
            <Typography variant="subtitle1" color="primary">
                {state.byline}
            </Typography>

            <Divider light />

            <Typography style={{marginTop:"10px"}} variant="subtitle1" paragraph>
                {state.abstract}
            </Typography>

            <Typography variant="subtitle1" color="primary" onClic>
                Continue reading...
            </Typography>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
