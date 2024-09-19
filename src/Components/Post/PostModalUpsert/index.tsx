import ModalInputs from "./ModalInputs";
import { ModalOverlay, ModalContent, CloseButton, ModalInside } from "./style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface PostModalUpsertProps {
  isOpen: boolean;
  isClosing: boolean;
  toggleModal: () => void;
}

function PostModalUpsert({
  isOpen,
  isClosing,
  toggleModal,
}: PostModalUpsertProps) {
  return (
    <div>
      {isOpen && (
        <ModalOverlay>
          <ModalContent
            isClosing={isClosing}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={toggleModal}>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </CloseButton>
            <ModalInside>
              <ModalInputs toggleModal={toggleModal}></ModalInputs>
            </ModalInside>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default PostModalUpsert;
