import { Alert, Box, Grid } from "@chakra-ui/react";
import Card from "../../components/card";
import { useList } from "../../context/ListContext";
function MyList() {
  const { items } = useList();

  return (
    <>
      {items.length < 1 && (
        <Alert borderRadius={"5px"} bgColor={"red"} status="warning">
          You have not any items in your List.
        </Alert>
      )}
      <div>
        <Box>
          <ul className="movies">
            <Grid
              margin="20px"
              ml={"115px"}
              templateColumns="repeat(4, 1fr)"
              gap={3}
            >
              {items.map((item, i) => (
                <li style={{ margin: "5px" }} key={i}>
                  <Card item={item} />
                </li>
              ))}
            </Grid>
          </ul>
        </Box>
      </div>
    </>
  );
}

export default MyList;
