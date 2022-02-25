import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovie, fetchMoviesList } from "../../api/Api";
import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import Card from "../../components/card";

function MovieDetail() {
  const { movie_id } = useParams();

  const { isLoading, error, data } = useQuery("movies", fetchMoviesList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <Box justifyContent="space-between" display="flex">
      <Box>
        {data.map(
          (item, i) =>
            item._id == movie_id && (
              <Grid templateColumns="repeat(1, 1fr)" gap={1}>
                <Box width="350px" key={i} display="inline">
                  <Card item={item} />
                </Box>
              </Grid>
            )
        )}
      </Box>
      <Box width="580px" display="inline">
        Trailer
        TrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTraiTrailer
        TrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrairailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrairailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrailerTrail
      </Box>
      <Box>
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
          <Box width="360px" display="inline">
            deneme
            denemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedenemedeneme
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default MovieDetail;
