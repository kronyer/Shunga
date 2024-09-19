import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PostCreateDto {
  title: string;
  text: string[];
  scheduled: string;
}

interface PostDto {
  id: number;
  title: string;
  imageUrl: string;
  text: string[];
  scheduled?: string; // Assuming DateTime is serialized as a string
  posted?: string;
  isPosted?: boolean;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7028/api" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostDto[], void>({
      query: () => "post",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id } as const)),
              "Posts",
            ]
          : ["Posts"],
    }),
    getPostById: builder.query<PostDto, number>({
      query: (id) => `post/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
    addPost: builder.mutation<PostDto, Partial<PostDto>>({
      query: (body) => ({
        url: "post",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<PostCreateDto, Partial<PostDto>>({
      query: ({ id, ...patch }) => ({
        url: `post/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
