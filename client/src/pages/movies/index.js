import { Button, Flex, Grid, withDefaultSize } from "@chakra-ui/react";
import Card from "../../components/card";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchMoviesList } from "../../api/Api";
import React from "react";
import Article from "../../components/navbar/Article";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchMoviesList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 24;

      if (!morePagesExist) {
        return;
      }

      return allGroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div className="movies">
      {/*<div style={{ margin: "20px 5px 20px" }}>
        <Article />
  </div>*/}
      <div>
        <Grid
          margin="20px"
          ml={"150px"}
          templateColumns="repeat(4, 1fr)"
          gap={3}
        >
          {data.pages.map((movies, i) => (
            <React.Fragment key={i}>
              {movies.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </React.Fragment>
          ))}
        </Grid>

        <Flex mt="10" justifyContent="center">
          <Button
            className="hover"
            variant="outline"
            bgColor={"black"}
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default Products;
