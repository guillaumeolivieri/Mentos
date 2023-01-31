import React from "react";
import styled from "styled-components";
import { ValignTextMiddle, HelveticaneueBoldWhite20px } from "../../styledMixins";
import "./IPhone14Pro1.css";

function IPhone14Pro1(props) {
  const {
    overlapGroup,
    toiAussiGenereUnFreshCompliment,
    surQuelSujet,
    dansLeStyleDeQuelArtiste1,
    dansLeStyleDeQuelArtiste2,
    gnrer,
    compliment1,
    compliment2,
    compliment3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-14-pro-1 screen">
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <ToiAussiGenereUnFreshCompliment>{toiAussiGenereUnFreshCompliment}</ToiAussiGenereUnFreshCompliment>
          <SurQuelSujet>{surQuelSujet}</SurQuelSujet>
          <Rectangle1></Rectangle1>
          <DansLeStyleDeQuelArtisteContainer>
            <DansLeStyleDeQuelArtiste>{dansLeStyleDeQuelArtiste1}</DansLeStyleDeQuelArtiste>
            <DansLeStyleDeQuelArtiste>{dansLeStyleDeQuelArtiste2}</DansLeStyleDeQuelArtiste>
          </DansLeStyleDeQuelArtisteContainer>
          <OverlapGroup1>
            <Polygon1 src="/img/polygon-1.svg" alt="Polygon 1" />
          </OverlapGroup1>
          <OverlapGroup3>
            <Gnrer>{gnrer}</Gnrer>
          </OverlapGroup3>
          <Compliment1>{compliment1}</Compliment1>
          <Rectangle2></Rectangle2>
          <Compliment2>{compliment2}</Compliment2>
          <Rectangle3></Rectangle3>
          <Compliment2>{compliment3}</Compliment2>
          <Rectangle3></Rectangle3>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  padding: 72px 0;
  align-items: center;
  min-height: 852px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ToiAussiGenereUnFreshCompliment = styled.h1`
  min-height: 78px;
  margin-top: 3px;
  margin-right: 17px;
  min-width: 314px;
  font-family: var(--font-family-helvetica_neue-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: normal;
`;

const SurQuelSujet = styled.div`
  ${HelveticaneueBoldWhite20px}
  min-height: 24px;
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle1 = styled.div`
  width: 331px;
  height: 47px;
  margin-top: 19px;
  background-color: var(--white);
`;

const DansLeStyleDeQuelArtisteContainer = styled.div`
  ${HelveticaneueBoldWhite20px}
  width: 280px;
  height: 24px;
  position: relative;
  margin-top: 17px;
  margin-right: 51px;
`;

const DansLeStyleDeQuelArtiste = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  height: 47px;
  margin-top: 19px;
  display: flex;
  padding: 14px 9.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 331px;
  background-color: var(--white);
`;

const Polygon1 = styled.img`
  width: 16px;
  height: 14px;
`;

const OverlapGroup3 = styled.div`
  height: 47px;
  margin-top: 30px;
  display: flex;
  padding: 12px 22px;
  align-items: flex-start;
  min-width: 167px;
  background-image: url(/img/rectangle-6.svg);
  background-size: 100% 100%;
`;

const Gnrer = styled.div`
  ${ValignTextMiddle}
  ${HelveticaneueBoldWhite20px}
            width: 122px;
  height: 19px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Compliment1 = styled.div`
  ${HelveticaneueBoldWhite20px}
  min-height: 24px;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle2 = styled.div`
  width: 331px;
  height: 47px;
  margin-top: 14px;
  background-color: var(--white);
`;

const Compliment2 = styled.div`
  ${HelveticaneueBoldWhite20px}
  min-height: 24px;
  align-self: flex-start;
  margin-top: 31px;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle3 = styled.div`
  width: 331px;
  height: 47px;
  margin-top: 7px;
  background-color: var(--white);
`;

export default IPhone14Pro1;
