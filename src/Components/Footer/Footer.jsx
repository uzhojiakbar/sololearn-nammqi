import React from "react";
import {
  Container,
  ContainerItem,
  Select,
  Subtext,
  Title,
  BottomBox,
  A,
  Card,
  Img,
  Bottomtitle,
  FooterBotBox,
  FootBoxItem,
  Text,
  IconConatoner,
  IconItem,
  P1,
  P2,
} from "./style";
import { footerData, footerNav } from "../../Utils/footerData";
import { linkedinData } from "../../Utils/footerData";
function Footer() {
  return (
    <Container>
      <ContainerItem>
        {footerData?.map((item) => (
          <div key={item.id}>
            <Title>{item.title}</Title>
            <Subtext>{item?.link}</Subtext>
            <Subtext>{item?.link1}</Subtext>
            <Subtext>{item?.link2}</Subtext>
            <Subtext>{item?.link3}</Subtext>
            <Subtext>{item?.link4}</Subtext>
            <Subtext>{item?.link5}</Subtext>
            <Subtext>{item?.link6}</Subtext>
            <Subtext>{item?.link7}</Subtext>
            <Subtext>{item?.link9}</Subtext>
            <Subtext>{item?.link10}</Subtext>
            <Subtext>{item?.link11}</Subtext>
            <Subtext>{item?.link12}</Subtext>
            <Subtext>{item?.link13}</Subtext>
            <Subtext>{item?.link14}</Subtext>
            <Subtext>{item?.link15}</Subtext>
            <Subtext>{item?.link16}</Subtext>
            <Subtext>{item?.link17}</Subtext>
            <Subtext>{item?.link18}</Subtext>
            <Subtext>{item?.link19}</Subtext>
            <Subtext>{item?.link20}</Subtext>
            <Subtext>{item?.link21}</Subtext>
            <Subtext>{item?.link22}</Subtext>
          </div>
        ))}
        <Title>
          <Select name="" id="">
            <option value="1">English</option>
            <option value="1">rus</option>
            <option value="1">arabic</option>
            <option value="1">france</option>
          </Select>
        </Title>
      </ContainerItem>
      <BottomBox>
        {linkedinData?.map((item) => (
          <Card key={item.id}>
            <Img src={item.icon} alt="" />
            <A>{item.title}</A>
          </Card>
        ))}

        <IconConatoner>
          <IconItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 80 80"
            >
              <path
                fill="#e1ebf2"
                d="M71.793,57.336c-1.731,3.747-2.56,5.421-4.782,8.726c-3.105,4.622-7.493,10.39-12.916,10.431 c-4.82,0.037-6.066-3.044-12.61-2.993c-6.542,0.033-7.905,3.05-12.734,2.997c-5.419-0.045-9.572-5.243-12.679-9.853 c-5.312-7.908-7.721-16.645-7.566-24.087c0.099-4.739,1.237-8.954,3.327-12.094c3.8-5.723,9.814-8.963,15.46-8.963 c5.751,0,9.367,3,14.12,3c4.618,0,7.428-3,14.08-3c5.031,0,10.351,2.554,14.151,7.172c-5.665,3.034-8.11,8.289-8.145,13.55 C61.459,48.51,64.954,54.806,71.793,57.336z"
              ></path>
              <path
                fill="#788b9c"
                d="M28.876,76.998l-0.13,0c-5.581-0.046-9.748-5.119-13.088-10.074 c-5.029-7.486-7.818-16.371-7.651-24.377c0.103-4.887,1.282-9.161,3.411-12.36C15.18,24.52,21.263,21,27.294,21 c3.095,0,5.543,0.831,7.911,1.633C37.277,23.336,39.233,24,41.415,24c2.012,0,3.646-0.587,5.538-1.267 C49.214,21.921,51.779,21,55.494,21c5.313,0,10.748,2.75,14.537,7.354l0.387,0.471l-0.538,0.288 C64.91,31.776,62.038,36.555,62,42.226c-0.044,6.638,3.868,12.385,9.966,14.641l0.507,0.188l-0.227,0.491 c-1.778,3.847-2.599,5.488-4.821,8.795c-3.523,5.245-7.862,10.611-13.327,10.652c-0.001,0-0.001,0-0.002,0 c-2.372,0-3.877-0.666-5.47-1.371C46.826,74.824,44.962,74,41.647,74l-0.157,0c-3.389,0.017-5.309,0.842-7.166,1.64 C32.699,76.338,31.164,76.998,28.876,76.998z M27.294,22c-5.7,0-11.464,3.349-15.043,8.739c-2.024,3.042-3.146,7.131-3.244,11.828 c-0.163,7.805,2.564,16.479,7.481,23.798c3.194,4.739,7.15,9.59,12.268,9.632l0.121,0c2.082,0,3.459-0.592,5.053-1.277 c1.858-0.798,3.964-1.703,7.554-1.721l0.164,0c3.527,0,5.577,0.907,7.385,1.708c1.559,0.69,2.905,1.286,4.978,1.286 c5.081-0.038,9.208-5.183,12.586-10.21c2.086-3.105,2.917-4.72,4.52-8.174c-6.208-2.528-10.161-8.51-10.116-15.39 c0.039-5.841,2.898-10.796,7.871-13.687C65.293,24.432,60.334,22,55.494,22c-3.542,0-5.912,0.852-8.204,1.675 C45.393,24.356,43.601,25,41.415,25c-2.346,0-4.379-0.689-6.531-1.419C32.593,22.804,30.224,22,27.294,22z"
              ></path>
              <g>
                <path
                  fill="#e1ebf2"
                  d="M51.591,14.645c2.538-3.154,4.464-7.608,3.764-12.145c-4.138,0.276-8.983,2.836-11.811,6.15 c-2.564,3.02-4.69,7.504-3.862,11.844C44.2,20.633,48.876,18.029,51.591,14.645z"
                ></path>
                <path
                  fill="#788b9c"
                  d="M40.027,21c-0.142,0.032-0.241-0.002-0.361-0.005l-0.401-0.013l-0.075-0.394 c-0.74-3.877,0.745-8.46,3.972-12.262c2.938-3.443,7.938-6.044,12.159-6.326l0.458-0.03l0.07,0.453 c0.636,4.12-0.774,8.688-3.869,12.534C49.037,18.628,44.345,21,40.027,21z M54.923,3.04c-3.871,0.416-8.331,2.808-10.999,5.936 c-2.92,3.439-4.329,7.527-3.819,11.024c3.945-0.029,8.394-2.3,11.095-5.668C52.543,12.664,55.527,8.292,54.923,3.04z"
                ></path>
              </g>
            </svg>
            <div>
              <P1>Donwload on the</P1>
              <P2>App Store</P2>
            </div>
          </IconItem>
          <IconItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1"
                x1="1688.489"
                x2="1685.469"
                y1="-883.003"
                y2="-881.443"
                gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#047ed6"></stop>
                <stop offset="1" stopColor="#50e6ff"></stop>
              </linearGradient>
              <path
                fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)"
                fillRule="evenodd"
                d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2"
                x1="1645.286"
                x2="1642.929"
                y1="-897.055"
                y2="-897.055"
                gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffda1c"></stop>
                <stop offset="1" stopColor="#feb705"></stop>
              </linearGradient>
              <path
                fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)"
                fillRule="evenodd"
                d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3"
                x1="1722.978"
                x2="1720.622"
                y1="-889.412"
                y2="-886.355"
                gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#d9414f"></stop>
                <stop offset="1" stopColor="#8c193f"></stop>
              </linearGradient>
              <path
                fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)"
                fillRule="evenodd"
                d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4"
                x1="1721.163"
                x2="1722.215"
                y1="-891.39"
                y2="-890.024"
                gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#33c481"></stop>
                <stop offset="1" stopColor="#61e3a7"></stop>
              </linearGradient>
              <path
                fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)"
                fillRule="evenodd"
                d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <P1>GET IT ON</P1>
              <P2>Google lay</P2>
            </div>
          </IconItem>
        </IconConatoner>
      </BottomBox>
      <FooterBotBox>
        <FootBoxItem>
          {footerNav?.map((item) => (
            <Bottomtitle key={item.id}>{item?.name}</Bottomtitle>
          ))}
        </FootBoxItem>
        <Text>
          Made with ❤ by <span style={{ color: "white" }}>Sololearn</span> |{" "}
          <sup>©</sup> 2024
        </Text>
      </FooterBotBox>
    </Container>
  );
}

export default Footer;
