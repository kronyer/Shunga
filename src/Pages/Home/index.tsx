import PostMiniDashboard from "../../Components/Post/PostMiniDashboard";
import PostTable from "../../Components/Post/PostTable";
import { PagePadding } from "../../Styles/global_styles";
import PostModalUpsert from "../../Components/Post/PostModalUpsert";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // Duration of the slide-out animation
    } else {
      setIsOpen(true);
    }
  };
  return (
    <PagePadding>
      <PostMiniDashboard toggleModal={toggleModal}></PostMiniDashboard>
      <PostTable toggleModal={toggleModal}></PostTable>
      <PostModalUpsert
        isOpen={isOpen}
        isClosing={isClosing}
        toggleModal={toggleModal}
      ></PostModalUpsert>
    </PagePadding>
  );
}

export default Home;
