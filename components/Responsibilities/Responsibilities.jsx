import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image'
import Tilt from "react-parallax-tilt";
import DoneIcon from "@mui/icons-material/Done";
import CardImage from '../../assets/vr1.jpg'

const Responsibilities = () => (
  <div className="container mx-auto  grid sm:grid-flow-col grid-flow-row gap-10 p-10">
    <Tilt>
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              Your day your way
            </Text>
            <Text h3 color="white">
              The future of collabration is metaverse
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Image
            src={CardImage}
            objectFit="cover"
            width="100%"
            
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col span={3}>
                  <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                  />
                </Col>
                <Col>
                  <Text color="#d1d1d1" size={12}>
                    Breathing App
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    {`Get a good night's sleep.`}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Get App
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Tilt>

    <div className="flex flex-col justify-center">
      <div className="max-w-xl mb-6">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
          Responsibilities
        </h2>
      </div>

      <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
        <ul className="space-y-3">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Acting as a link between IIT (BHU) Varanasi and your own campus
            throughout the year.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Coordinating with Strategic Relations’ team of Entrepreneurship
            Cell, IIT BHU to conduct various events throughout the year in your
            college.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Networking with Local Startups and Startup Co-Founders.
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Inviting Alumni Entrepreneurs of your college to participate in
            Shark Tank IIT BHU.
          </li>
          <li className="flex">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Publicising entrepreneurship oriented events and competitions in
            your college as well as over Social Media.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default Responsibilities;
