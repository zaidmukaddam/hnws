import { Container, FlexColumn } from "styles/";
import { NextPage } from "next";
import { styled } from "../../stitches.config";

const Text = styled("p", {
  color: "$primaryText",
  margin: "16px 0",
  textAlign: "center",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
});

const Hyperlink = styled("a", {
  textDecoration: "none",
  textAlign: "center",
  color: "$coloredLink",
  margin: "16px 0",
});

const About: NextPage = () => {
  const github = "https://github.com/zaidmukaddam/hnws";
  const twitter = "https://twitter.com/zaidmukaddam";
  return (
    <FlexColumn
      css={{
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        marginTop: "48px",
      }}
    >
      <Text>Hope you like this version of Hacker News!</Text>
      <Section>
        <Hyperlink href={github} target="_blank" rel="noopener noreferrer">
          Source Code
        </Hyperlink>
        <Text>
          Designed and Developed by{" "}
          <Hyperlink href={twitter} target="_blank" rel="noopener noreferrer">
            Zaid
          </Hyperlink>
        </Text>
      </Section>
    </FlexColumn>
  );
};

export default About;
