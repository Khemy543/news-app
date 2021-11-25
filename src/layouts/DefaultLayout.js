import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export default function DefaulLayout() {
  return (
    <div>
      <Header />
      <Container style={{paddingTop:"70px"}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<NewsDetails />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
