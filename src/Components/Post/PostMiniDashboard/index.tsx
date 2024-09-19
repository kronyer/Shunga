import React from "react";
import { BoxGrid, Box, AddPostButton } from "./styles";
import { Add } from "@mui/icons-material";

function PostMiniDashboard({ toggleModal }: { toggleModal: () => void }) {
  return (
    <BoxGrid>
      <Box></Box>
      <Box></Box>
      <Box>
        <AddPostButton onClick={toggleModal}>
          <Add />
          Agendar Post
        </AddPostButton>
      </Box>
    </BoxGrid>
  );
}

export default PostMiniDashboard;
