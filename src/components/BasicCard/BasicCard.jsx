import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import React from "react";
import "./BasicCard.css";

const BasicCard = ({ pokemon, isLoading, refresh }) => {
  const fullContent = () => {
    return (
      <>
        <div className="media-container">
          <CardMedia
            component="img"
            height="380"
            image={pokemon.sprites.front_default}
            alt={`front default sprite of ${pokemon.name}`}
          />
        </div>
        <CardContent>
          <div className="title-container">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Random Pokemon!
            </Typography>
          </div>
          <div className="content-container">
            <Typography variant="h5" component="div">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {pokemon.types[0].type.name} type
            </Typography>
            <Typography variant="body2">
              Height: {pokemon.height * 10}cm
              <br />
              Weight: {pokemon.weight / 10}kg
            </Typography>
          </div>
        </CardContent>
      </>
    );
  };

  return (
    <Card sx={{ minWidth: "35%" }} style={{ padding: "10px 0px 20px 0px" }}>
      <div className="full-container">
        {isLoading ? <CircularProgress/> : fullContent()}
      </div>
      <CardActions>
        <div className="button-container">
          <Button variant="contained" onClick={refresh}>
            Refresh
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
