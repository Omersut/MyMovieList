import { Box, Button } from "@chakra-ui/react";

function Article() {
  return (
    <div className="btn-group">
      <img
        style={{ borderRadius: "5px", marginTop: "10px" }}
        src="https://c.tenor.com/xTRIwCd1bKAAAAAC/cinema-minion.gif"
      ></img>

      {/*<Box
        height="100vh"
        width={"220px"}
        textAlign="center"
        overflow="hidden"
        border={"2px solid black"}
        borderRadius="4px"
      >
        <Box p="2">
          <Button
            className="vertical-button"
            variant="outline"
            spacing="6"
            colorScheme="red"
            width={"95%"}
            mt="10px"
          >
            Category
          </Button>

          <Button
            className="vertical-button"
            variant="outline"
            spacing="6"
            colorScheme="red"
            width={"95%"}
            mt="10px"
          >
            Category
          </Button>
          <Button
            className="vertical-button"
            variant="outline"
            spacing="6"
            colorScheme="red"
            width={"95%"}
            mt="10px"
          >
            Category
          </Button>
        </Box>
      </Box>*/}
    </div>
  );
}

export default Article;
