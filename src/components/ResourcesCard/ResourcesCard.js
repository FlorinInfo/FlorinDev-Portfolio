import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  TopCard,
  TitleCard,
  CardTools,
  CardTool,
  Img,
  ResourceTitle,
  ResourceDescription,
  List
} from "./ResourcesCardStyles";
import {
  AiOutlineHtml5,
  AiOutlineFontSize,
  AiOutlineReload,
} from "react-icons/ai";
import {
  DiCss3Full,
  DiJavascript1,
  DiNodejsSmall,
  DiMootoolsBadge,
} from "react-icons/di";
import { BiBulb, BiFileFind } from "react-icons/bi";
import { GiConcentrationOrb, GiPhotoCamera } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { SiIconfinder } from "react-icons/si";
import { RiToolsFill } from "react-icons/ri";
import { Resources } from "../../constants/constants";

const img = "/images/1.png";
const icons = [RiToolsFill]

const ResourcesCard = (props) => (
  <Section nopadding id={props.element.id}>
    <TopCard>
      <props.element.sectionIcon style={{ margin: "0 auto", fontSize: "50px" }}></props.element.sectionIcon >
      <TitleCard>{props.element.sectionTitle}</TitleCard>
    </TopCard>
    <CardTools>
      <List>
      {props.element.elements.map((p, i) => {
        return (
          <CardTool>
            <Img src={p.image} key={i} />
            <ResourceTitle href={p.link} target="_blank">{p.title}</ResourceTitle> 
            <ResourceDescription>
                {p.description}
            </ResourceDescription>
          </CardTool> 
        );
      })}
      </List>
    </CardTools>
  </Section>
);

function createcIcon(iconString) {
  cardIcon = RiToolsFill;
  if(iconString == "RiToolsFill") return RiToolsFill;
  return "";
}

export default ResourcesCard;
