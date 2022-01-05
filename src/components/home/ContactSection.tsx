import styled from "styled-components";
import { FC } from "react";

import AnimateInView from "../utils/AnimateInView";
import Button from "../common/Button";
import Container from "../common/Container";
import config from "../../config";
import { transitionNames } from "../../theme/transitions";

const ContactSectionHeader = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
`;

const ContactRoot = styled.div`
  display: flex;
  justify-content: center;

  .contact-root-inner {
    max-width: 600px;
    text-align: center;
  }
`;

const EmailButton = styled(Button)`
  margin-top: 50px;
  padding: 1.25rem 1.75rem;
`;

const ContactSection: FC = () => {
  return (
    <section id="contact" className="home-section">
      <Container>
        <ContactRoot>
          <AnimateInView
            transitionProps={{
              classNames: transitionNames.fadeUp,
            }}
          >
            <div className="contact-root-inner">
              <ContactSectionHeader>Get In Touch</ContactSectionHeader>
              <p>
                Want to get in contact? I am currently open to new
                opportunities!
              </p>
              <EmailButton
                color="primary"
                as="a"
                href={`mailto:${config.personal.email}`}
              >
                Say Hello
              </EmailButton>
            </div>
          </AnimateInView>
        </ContactRoot>
      </Container>
    </section>
  );
};

export default ContactSection;
