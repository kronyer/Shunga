import {
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  TableButton,
  ImageTablePreview,
} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";

import React from "react";
import { useDeletePostMutation, useGetPostsQuery } from "../../../Api/postApi";

interface PostTableProps {
  toggleModal: () => void;
}

function PostTable({ toggleModal }: PostTableProps) {
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetPostsQuery();
  console.log(dataPosts);
  const [deletePost] = useDeletePostMutation();

  if (isLoadingPosts) {
    return <div>Loading...</div>;
  }
  return (
    <Table>
      <Thead>
        <tr>
          <Th></Th>
          <Th>Titulo</Th>
          <Th>Schedule Date</Th>
          <Th>Posted Date</Th>
          <Th>Posted</Th>
          <Th></Th>
        </tr>
      </Thead>
      <Tbody>
        {dataPosts?.map((post) => (
          <Tr key={post.id} onClick={(e) => toggleModal(e)}>
            <Td>
              <ImageTablePreview src={post.imageUrl}></ImageTablePreview>
            </Td>
            <Td>{post.title}</Td>
            <Td>{new Date(post.scheduled!).toLocaleDateString("pt-BR")}</Td>
            <Td>
              {post.posted
                ? new Date(post.posted).toLocaleDateString("pt-BR")
                : "not posted"}
            </Td>
            <Td>{post.isPosted ? "True" : "False"}</Td>
            <Td>
              <Tooltip title="Delete" arrow>
                <TableButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePost(post!.id);
                  }}
                >
                  <DeleteIcon />
                </TableButton>
              </Tooltip>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default PostTable;
