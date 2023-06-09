import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import MyPostWidget from "widgets/MyPostWidget";
import PostsWidget from "widgets/PostsWidget";
import UserWidget from "widgets/UserWidget";
import AdvertWidget from "widgets/AdvertWidget";
import FriendListWidget from "widgets/FriendListWidget ";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);


  return (
    <Box
      width={'100%'}
      display={isNonMobileScreens ? 'flex' : 'block'}
      padding={'2rem 6%'}
      gap="0.5rem"
      justifyContent="space-between"
    >
      <Box flexBasis={isNonMobileScreens ? "26%" : undefined} className={isNonMobileScreens ? 'scrollable' : ''} >
        <UserWidget userId={_id} picturePath={picturePath} />
      </Box>
      <Box
        flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
      >
        <MyPostWidget picturePath={picturePath} />
        <PostsWidget userId={_id} />
      </Box>
      {isNonMobileScreens && (
        <Box flexBasis="26%" className="scrollable" >
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendListWidget userId={_id} />
        </Box>
      )}


    </Box>
  )
}

export default Home