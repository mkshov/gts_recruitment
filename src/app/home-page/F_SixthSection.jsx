import ContainedButton from "@/components/Buttons/ContainedButton";
import { Container } from "@mui/material";
import {
  SixthDescription,
  SixthSec,
  SixthSecInner,
  SixthTextgroup,
  SixthTitle,
} from "./style";

export default function F_SixthSection() {
  return (
    <SixthSec>
      <Container maxWidth="lg">
        <SixthSecInner>
          <SixthTextgroup>
            <SixthTitle>Find your next great opportunity!</SixthTitle>
            <SixthDescription>
              We are taking action to help our customers, our clients, and the
              people of the world— and so can you.
            </SixthDescription>
          </SixthTextgroup>
          <ContainedButton bgColor="white" color="#3598DB">
            Contact Us
          </ContainedButton>
        </SixthSecInner>
      </Container>
    </SixthSec>
  );
}
