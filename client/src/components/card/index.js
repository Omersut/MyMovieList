import { Image, Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { Link, useNavigate as UseNavigate } from "react-router-dom";
import { useList } from "../../context/ListContext";
import { loggedIn, useAuth } from "../../context/AuthContext";
function Card({ item }) {
  const { addToList, items, removeFromList } = useList();
  const { loggedIn } = useAuth();
  let navigate = UseNavigate();
  const findListItem = items.find((list_item) => list_item._id === item._id);

  const Add = async () => {
    findListItem && loggedIn
      ? removeFromList(item._id)
      : addToList(item, findListItem);

    if (!loggedIn) {
      setTimeout(() => {
        navigate("/singup");
      }, 700);
    }
  };
  return (
    <Box
      width={"250px"}
      height="425px"
      textAlign="center"
      position="relative"
      alignItems={"center"}
      overflow="hidden"
      border={"solid 1px gray"}
      borderRadius="10px"
      p="10px"
      bg={"black"}
      color="grey"
      mb={"20px"}
    >
      <Box>
        <Image minHeight={"350px"} src={item.image} title={item.title} />
      </Box>

      <Box>
        <Box
          position="absolute"
          bottom="10px"
          mt={"15px"}
          className="btn-group"
          width="227px"
          display={"flex"}
          justifyContent="center"
        >
          <Button
            variant="outline"
            ml={"5px"}
            mr="9px"
            fontSize={"30px"}
            colorScheme="#ffff40"
          >
            {item.imdb_rate}
          </Button>
          <Button
            className={findListItem && loggedIn ? "mylist remove" : "mylist"}
            variant={findListItem && loggedIn ? "solid" : "outline"}
            fontSize={"15px"}
            onClick={Add}
          >
            {findListItem && loggedIn ? "- MY LIST" : "+ MY LIST"}
          </Button>

          <Link to={`/movie/${item._id}`}>
            {/*<Button
              className="details"
              variant="outline"
              spacing="6"
              fontSize={"15px"}
              colorScheme={"orange"}
            >
              DETAILS
            </Button>*/}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
