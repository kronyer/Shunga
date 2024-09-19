import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { FWTextField, VisuallyHiddenInput } from "./style";
import { Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import styled from "styled-components";
import { useAddPostMutation } from "../../../../Api/postApi";

const UploadButton = styled(Button)`
  height: 100%;
  width: 100%;
  position: relative;
  &:hover .preview {
    display: block;
  }
`;

const PreviewContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 200px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

function ModalInputs({ toggleModal }: { toggleModal: () => void }) {
  const [createPost] = useAddPostMutation();

  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");
  const [postDate, setPostDate] = useState<Date | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.length > 10) {
        setFileName(file.name.substring(0, 10) + "...");
      } else {
        setFileName(file.name);
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    console.log(postDate);
    if (!title || !postText || !postDate) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    const postTextArray = postText.split("\n");
    postTextArray.forEach((line) => {
      formData.append("Text", line);
    });
    formData.append(
      "scheduled",
      postDate.toISOString().replace("T", " ").substring(0, 19)
    );
    if (previewSrc) {
      const response = await fetch(previewSrc);
      const blob = await response.blob();
      formData.append("file", blob, fileName || "image.jpg");
    }

    console.log(formData);

    try {
      await createPost(formData).unwrap();
      alert("Post created successfully!");
    } catch (error) {
      console.error("Failed to create post:", error);
      alert("Failed to create post.");
    } finally {
      toggleModal();
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <FWTextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid size={7}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="When it will be posted?"
              value={postDate ? dayjs(postDate) : null}
              onChange={(date) => setPostDate(date?.toDate() || null)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid size={5} container alignItems="center" marginTop={"0.5rem"}>
        <UploadButton
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUpload />}
        >
          {fileName ? `${fileName}` : "Upload Image"}
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileChange}
            multiple
          />
          {previewSrc && (
            <PreviewContainer className="preview">
              <img src={previewSrc} alt="Preview" />
            </PreviewContainer>
          )}
        </UploadButton>
      </Grid>
      <Grid size={12}>
        <hr></hr>
      </Grid>
      <Grid size={12}>
        <FWTextField
          id="outlined-multiline-flexible"
          label="Enter your post text here..."
          multiline
          rows={10}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
      </Grid>
      <Grid size={4}></Grid>
      <Grid size={8}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default ModalInputs;
