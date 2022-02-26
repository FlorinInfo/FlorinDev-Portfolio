import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ResourceLink, ResourceLinks } from './ResourcesStyles';
import { AiOutlineHtml5, AiOutlineFontSize, AiOutlineReload } from 'react-icons/ai';
import { DiCss3Full, DiJavascript1, DiNodejsSmall, DiMootoolsBadge } from "react-icons/di";
import { BiBulb, BiFileFind } from "react-icons/bi";
import { GiConcentrationOrb, GiPhotoCamera } from "react-icons/gi"; 
import { IoIosSend } from "react-icons/io";
import { SiIconfinder } from "react-icons/si";
import { RiToolsFill } from "react-icons/ri";

const data = [
  { icon:RiToolsFill, title:"TOOLS", link:"#tools" },
  { icon:AiOutlineHtml5, title:"HTML", link:"#html" },
  { icon:DiCss3Full, title:"CSS", link:"#css" },
  { icon:DiJavascript1, title:"JS", link:"#javascript" },
  { icon:AiOutlineFontSize, title:"FONTS", link:"#fonts" },
  { icon:GiPhotoCamera, title:"IMAGES", link:"#images" },
  { icon:IoIosSend, title:"ICONS", link:"#icons" },
  { icon:BiBulb, title:"DESIGN", link:"#design" },
  { icon:AiOutlineReload, title:"SPEED", link:"#speed" },
  { icon:DiNodejsSmall, title:"NODE.JS", link:"#node" },
  { icon:BiFileFind, title:"OTHERS", link:"#others" }, 
];

const Acomplishments = () => (
  <Section id="resources">
    <SectionTitle>Useful resources</SectionTitle>
    <ResourceLinks>
      {
        data.map((link, index)=>(
          <ResourceLink key={index} href={link.link}>
            <link.icon style={{transform:"translate(0, 2px);"}}/>
            {/* <AiOutlineHtml5 style={{transform: `translate(0, 2.2px)`}}></AiOutlineHtml5> */}
            &nbsp;{link.title}
          </ResourceLink> 
        ))
      } 
    </ResourceLinks>
    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
  </Section>
);

export default Acomplishments;
